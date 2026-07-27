import type { APIRoute } from "astro";
import { GoogleGenAI } from "@google/genai";
import { systemPrompt } from "../../ai/systemPrompt";
import about from "../../data/about.md?raw";
import skills from "../../data/skills.md?raw";
import trasterush from "../../data/projects/trasterush.md?raw";
import bdiCompany from "../../data/projects/bdi-company.md?raw";
export const prerender = false;

const ai = new GoogleGenAI({
  apiKey: import.meta.env.GEMINI_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
  try {

    
    const { message } = await request.json();

    const context = `
${systemPrompt}

Information about Rafael:

${about}

${skills}

${trasterush}

${bdiCompany}

User question:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: context,
    });

    return new Response(
      JSON.stringify({
        answer: response.text,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        answer: "Sorry, there was an error processing your request.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
