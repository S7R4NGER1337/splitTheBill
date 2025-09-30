import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import OpenAI from "openai";
import cors from "cors";
import Receipt from "./Models/Receipt.js";

dotenv.config();

const app = express();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const mime = req.file.mimetype;
    const base64 = req.file.buffer.toString("base64");
    const dataUrl = `data:${mime};base64,${base64}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Извлечи продуктите от тази касова бележка като JSON масив:
[
  { "име": "...", "количество": ..., "цена": ... }
]`,
            },
            {
              type: "image_url",
              image_url: { url: dataUrl },
            },
          ],
        },
      ],
    });

    let content = response.choices[0].message.content;
    content = content.replace(/```/g, "").trim();
    content = content.replace(/^json\s*/, ""); // премахва евентуален "json" prefix

    const parsed = JSON.parse(content);
    const itemsArray = Array.isArray(parsed) ? parsed : parsed.продукти;

    const orderItems = itemsArray.map((item) => ({
      name: item.име || item.name,
      qty: item.количество || item.qty,
      price: item.цена || item.price,
      orderedBy: [],
    }));

    const receipt = new Receipt({
      clients: [],
      orderItems,
    });

    await receipt.save();
    res.json(receipt);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Грешка при пращане." });
  }
});

app.get("/receipt/:id", async (req, res) => {
  try {
    const receiptId = req.params.id;
    const receipt = await Receipt.findById(receiptId);
    if (!receipt) {
      return res.status(404).json({ error: "Receipt not found" });
    }

    res.json(receipt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/receipt/setUser", async (req, res) => {
  try {
    const receiptId = req.body.id;
    const receiptClient = req.body.name;
    const receipt = await Receipt.findById(receiptId);
    if (!receipt) return res.status(404).json({ error: "Receipt not found" });

    const count = receipt.clients.filter((c) =>
      c.startsWith(receiptClient)
    ).length;
    const newName =
      count > 0 ? `${receiptClient} (${count + 1})` : receiptClient;

    receipt.clients.push(newName);
    await receipt.save();

    res.json(receipt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/receipt/edit/orderedBy", async (req, res) => {
  try {
    const clients = req.body.clients;
    const itemId = req.body.itemId;
    const receiptId = req.body.receiptId;

    const editedReceipt = await Receipt.findByIdAndUpdate(
      receiptId,
      {
        $set: { "orderItems.$[elem].orderedBy": clients },
      },
      {
        new: true,
        arrayFilters: [{ "elem._id": itemId }],
      }
    );

    res.json(editedReceipt);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/receiptItem/delete", async (req, res) => {
  try {
    const { itemId, receiptId } = req.body;

    const updatedReceipt = await Receipt.findByIdAndUpdate(
      receiptId,
      { $pull: { orderItems: { _id: itemId } } },
      { new: true }
    );

    if (!updatedReceipt) {
      return res.status(404).json({ message: "Receipt not found" });
    }

    res.json({ message: "Item deleted successfully", receipt: updatedReceipt });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/receiptItem/edit", async (req, res) => {
  try {
    const { itemId, itemData, receiptId } = req.body;
    const editedReceipt = await Receipt.findByIdAndUpdate(
      receiptId,
      {
        $set: { "orderItems.$[elem]": itemData },
      },
      {
        new: true,
        arrayFilters: [{ "elem._id": itemId }],
      }
    );

    if (!editedReceipt) {
      return res.status(404).json({ error: "Receipt not found" });
    }

    res.json(editedReceipt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Db connected"))
  .catch((error) => console.log(error));

app.listen(3030, () => console.log("Server running"));
