import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const res = await ai.models.generateContent({
  model: "gemini-3.8-flash",
  contents: "Explain the Vedic Age in 3 bullet points for exam revision.",
});

console.log(res.text);