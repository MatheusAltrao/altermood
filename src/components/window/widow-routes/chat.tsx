"use client";
import { Button } from "@/components/ui/button";
import Commands from "@/components/ui/commands";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Window from "@/components/window";
import { MOODS } from "@/constants/moods";
import { useActiveCommand } from "@/hooks/active-command";
import { CircleQuestionMark, Settings } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  const [mood, setMood] = useState(0);
  const moodSelected = MOODS[mood];

  const changeMood = () => {
    setMood((prevMood) => (prevMood + 1) % MOODS.length);
  };

  useActiveCommand(
    (event: KeyboardEvent) => event.key.toLowerCase() === "m",
    changeMood
  );

  return (
    <Window>
      <Window.Header>
        <div className="flex items-center gap-2 w-full">
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
      </Window.Header>
      <Window.Body>
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
          className="w-full h-[330px] bg-transparent ring-0 outline-none text-sm resize-none"
        ></textarea>
      </Window.Body>
      <Window.Footer />
    </Window>
  );
}
