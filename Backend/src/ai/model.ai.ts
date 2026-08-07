import { ChatCohere } from "@langchain/cohere";
import { ChatGoogle } from "@langchain/google"; 
import { ChatMistralAI } from "@langchain/mistralai";

import app_config from "../config/config.js";

export const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: app_config.GEMINI_API_KEY
})
console.log("Gemini key loaded:", !!app_config.GEMINI_API_KEY);

export const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: app_config.MISTRAL_API_KEY
});

export const cohoreModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: app_config.COHORE_API_KEY,
});


