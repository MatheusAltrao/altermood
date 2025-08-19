"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOODS } from "@/constants/moods";
import { CircleQuestionMark, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Commands from "../ui/commands";

export default function Window() {
  const [mood, setMood] = useState(0);
  const moodSelected = MOODS[mood];

  const changeMood = () => {
    setMood((prevMood) => (prevMood + 1) % MOODS.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "m") {
        event.preventDefault();
        changeMood();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-zinc-900 w-full max-w-[900px] mx-auto rounded-md border ">
      <div className="border-b px-4 flex items-center h-12">
        <div className="flex items-center gap-2 w-full ">
          <Select value="pt-br">
            <SelectTrigger className="w-[52px] px-1 bg-transparent border-0 outline-none ring-0">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt-br">🇧🇷</SelectItem>
              <SelectItem value="en">🇺🇸</SelectItem>
              <SelectItem value="es">🇪🇸</SelectItem>
            </SelectContent>
          </Select>
          <input
            type="text"
            placeholder="escreva o seu texto aqui ..."
            className="w-full h-10 bg-transparent ring-0 outline-none text-sm placeholder:text-zinc-500"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Button variant="ghost" size="icon">
            <Settings />
          </Button>
          <Button variant="ghost" size="icon">
            <CircleQuestionMark />
          </Button>
        </div>
      </div>
      <div className="px-4 py-8 space-y-2">
        <div>
          <span className="text-sm text-zinc-500">
            {moodSelected?.emoji} {moodSelected?.label} selecionado. pressione
            <Commands letter="M" />
            para alterar o Mood
          </span>
        </div>
        <textarea
          name="content"
          id="content"
          className="w-full h-[300px] bg-transparent ring-0 outline-none text-sm resize-none"
        ></textarea>
      </div>
      <div className="border-t px-4 flex items-center justify-end h-12">
        <Commands letter="K" /> comandos
      </div>
    </div>
  );
}
