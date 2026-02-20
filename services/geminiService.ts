import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY || ''; 
    // In a real app, we might handle missing keys more gracefully in UI
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const chatWithResume = async (
  userMessage: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // We recreate the chat session for simplicity or manage it in the component. 
    // Here we will use a fresh generation with history context manually or use the chat API.
    // For a simple 'Ask me anything' style, single turn with context often works well, 
    // but the Chat API is better for follow-ups.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: RESUME_CONTEXT,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
        message: userMessage
    });

    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently offline or experiencing high traffic. Please try again later or email me directly!";
  }
};
