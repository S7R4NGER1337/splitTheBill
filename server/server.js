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

    console.log(receipt);

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

mongoose
  .connect("mongodb://localhost:27017/SplitTheBill")
  .then(() => console.log("Db connected"))
  .catch((error) => console.log(error));

app.listen(3030, () => console.log("Server running on http://localhost:3030"));
