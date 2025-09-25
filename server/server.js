import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import fs from "fs";
import OpenAI from "openai";

dotenv.config();

const app = express();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
              text: "Прати ми продуктите от тази касова бележка като масив от обекти: {име, количество, цена}."
            },
            {
              type: "image_url",
              image_url: { url: dataUrl }
            }
          ],
        },
      ],
    });

    let content = response.choices[0].message.content;
    content = content.replace(/```javascript|```/g, "").trim();
    const products = JSON.parse(content.replace(/(\w+):/g, '"$1":'));

    res.json(products);

    fs.unlinkSync(req.file.path);
  } catch (err) {
    console.error("OpenAI error:", err.response?.data || err.message || err);
    res.status(500).json({ error: "Грешка при пращане." });
  }
});

mongoose.connect('mongodb://localhost:27017/SplitTheBill')
    .then(() => console.log('Db connected'))
    .catch(error => console.log(error))
    
app.listen(3030, () => console.log("Server running on http://localhost:3030"));
