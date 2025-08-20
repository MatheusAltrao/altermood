import { MOODS } from "@/constants/moods";
import { NextResponse } from "next/server";
import OpenAI from "openai";

async function POST(request: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
  });

  const { prompt, mood, language } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: "Missing prompt" });
  }

  if (!mood) {
    return NextResponse.json({ error: "Missing mood" });
  }

  const findMood = MOODS.find((m) => m.value === mood);

  try {
    /*  const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "Chat você apenas vai pegar o texto recebido e mudar o tom dele. O tom que você vai mudar é o seguinte: " +
            (findMood?.description || ""),
        },
        { role: "user", content: prompt },
      ],
      temperature: 0,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }); */

    const response = prompt + " - " + (findMood?.description || "");

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate response" });
  }
}
