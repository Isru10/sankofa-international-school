// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

// Initialize the official Google Gen AI Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export async function POST(req: Request) {
  try {
    const { messages, previousInteractionId } = await req.json();

    // Strict System Prompt mapping the AI to Sankofa's academic identity
    const systemPrompt = `You are the official AI Assistant for Sankofa International School in Hawassa, Sidama Region, Ethiopia. 
    You represent an elite, world-class institution that bridges Ethiopian cultural heritage with cutting-edge STEM and global readiness. 
    The current year is 2026. Keep your tone highly professional, warm, and helpful. 
    If asked about admissions, guide them through the 4-step process (Online Inquiry, Tour, Assessments, Interview). 
    If asked about tuition, mention the 5,000 ETB application fee, and note that they should contact admissions for specific tier schedules.
    If you do not know a specific detail, politely direct them to contact admissions at admissions@sankofahawassa.edu.`;

    // Extract the latest message sent by the user
    const latestUserMessage = messages[messages.length - 1]?.content || "";

    // Call the stable, free-tier Interactions API using the required snake_case properties
    const interaction = await ai.interactions.create({
      model: "gemini-3.5-flash",
      input: latestUserMessage,
      previous_interaction_id: previousInteractionId || undefined, // Correct property
      system_instruction: systemPrompt,                         // Correct property
      generation_config: {                                      // Correct property
        temperature: 0.4,
        max_output_tokens: 1024                                 // Correct property
      }
    });

    // Return the response and the interaction ID for tracking state
    return NextResponse.json({ 
      reply: interaction.output_text,
      interactionId: interaction.id 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}