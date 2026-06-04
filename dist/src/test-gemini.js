"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const genai_1 = require("@google/genai");
console.log("API KEY LOADED:", process.env.GEMINI_API_KEY);
const ai = new genai_1.GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Summarize: We will launch next Friday.",
    });
    console.log(response.text);
}
main();
//# sourceMappingURL=test-gemini.js.map