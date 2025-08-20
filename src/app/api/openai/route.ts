import { MOODS } from "@/constants/moods";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
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

  if (!language) {
    return NextResponse.json({ error: "Missing language" });
  }

  const findMood = MOODS.find((m) => m.value === mood);

  if (!findMood) {
    return NextResponse.json({ error: "Invalid mood" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: ` Chat você apenas vai pegar o texto recebido e mudar para o tom ${findMood.description}, e no idioma ${language},sem uso de emojis e travessuras, e sem repetir o texto original. `,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const content = response.choices[0].message.content;
    return NextResponse.json(content ? content.trim() : "");
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate response" + error });
  }
}
