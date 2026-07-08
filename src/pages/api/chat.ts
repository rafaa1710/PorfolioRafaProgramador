import type { APIRoute } from "astro";
import { GoogleGenAI } from "@google/genai";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { systemPrompt } from "../../ai/systemPrompt";
export const prerender = false;

const ai = new GoogleGenAI({
  apiKey: import.meta.env.GEMINI_API_KEY,
});

function readDataFile(path: string) {
  return readFileSync(join(process.cwd(), path), "utf-8");
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();

    const about = readDataFile("src/data/about.md");
    const skills = readDataFile("src/data/skills.md");
    const trasterush = readDataFile("src/data/projects/trasterush.md");
    const bdiCompany = readDataFile("src/data/projects/bdi-company.md");

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