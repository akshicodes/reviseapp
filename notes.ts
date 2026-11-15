import { GoogleGenAI } from "@google/genai";
import { readFile, writeFile } from "node:fs/promises";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// 1. Read the transcript file
const text = await readFile("transcript.txt", "utf-8");

// 2. Build the prompt
const prompt = `You are a study-notes writer.
Turn the transcript below into structured revision notes.
Use headings, bullet points, and bold key terms.
Only use information from the transcript. Do not add outside facts.

Transcript:
${text}`;

// 3. Call Gemini
const res = await ai.models.generateContent({
  model: "gemini-3.8-flash",
  contents: prompt,
});

// 4. Save the notes
await writeFile("notes.md", res.text ?? "");

console.log("Notes saved to notes.md");