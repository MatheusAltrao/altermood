"use client";
import { Button } from "@/components/ui/button";
import Commands from "@/components/ui/commands";
import CopyTextButton from "@/components/ui/copy-text-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Window from "@/components/window";
import { LANGUAGES } from "@/constants/languages";
import { MOODS } from "@/constants/moods";
import { useActiveCommand } from "@/hooks/active-command";
import { CircleQuestionMark, Loader } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

interface ChatProps {
  setRoute: (route: "chat" | "help") => void;
}

export default function Chat({ setRoute }: ChatProps) {
  const [language, setLanguage] = useState("pt-br");
  const [prompt, setPrompt] = useState("");
  const [mood, setMood] = useState(0);
  const [isPending, startTransition] = useTransition();

  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const storedAnswers = localStorage.getItem("alterMoodAnswers");
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  const moodSelected = MOODS[mood];

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const changeMood = () => {
    setMood((prevMood) => (prevMood + 1) % MOODS.length);
  };

  const handleSendPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    startTransition(async () => {
      try {
        const response = await fetch("/api/openai", {
          method: "POST",
          body: JSON.stringify({
            prompt,
            language,
            mood: moodSelected?.value,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send prompt");
        }

        const data = await response.json();
        setAnswers((prev) => [data, ...prev]);
        localStorage.setItem(
          "alterMoodAnswers",
          JSON.stringify([data, ...answers])
        );
        setPrompt("");
      } catch (error) {
        console.error(error);
        alert("Erro ao enviar o prompt. Tente novamente.");
      }
    });
  };

  const handleClearAnswers = () => {
    setAnswers([]);
    localStorage.removeItem("alterMoodAnswers");
  };

  useActiveCommand(
    (event: KeyboardEvent) => event.ctrlKey && event.key.toLowerCase() === "m",
    changeMood
  );

  useActiveCommand(
    (event: KeyboardEvent) => event.ctrlKey && event.key.toLowerCase() === "l",
    handleClearAnswers
  );

  return (
    <Window>
      <Window.Header>
        <div className="flex items-center gap-2 w-full">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger
              value={language}
              className="w-[52px] px-1 bg-transparent border-0 outline-none ring-0"
            >
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <form onSubmit={handleSendPrompt} className="w-full">
            <input
              disabled={isPending}
              autoComplete="off"
              required
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              name="prompt"
              id="prompt"
              autoFocus
              type="text"
              placeholder="Escreva o seu texto aqui ..."
              className="w-full h-10 bg-transparent ring-0 outline-none text-sm placeholder:text-zinc-500"
            />
          </form>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Button onClick={() => setRoute("help")} variant="ghost" size="icon">
            <CircleQuestionMark />
          </Button>
        </div>
      </Window.Header>
      <Window.Body>
        <div className="space-y-4">
          <div>
            <span className="text-sm text-zinc-500">
              {moodSelected?.emoji} {moodSelected?.label} selecionado. pressione
              <Commands letter="M" />
              para alterar o Mood
            </span>
          </div>
          {isPending && <Loader size={20} className="animate-spin" />}

          {answers.length > 0 && (
            <div className="space-y-2 ">
              {answers.map((answer, index) => (
                <div className="flex gap-1 items-center" key={index}>
                  <div className="p-3 border border-border flex flex-col gap-1 justify-end rounded-md bg-zinc-950  w-full ">
                    <p className="text-sm ">{answer}</p>
                  </div>
                  <CopyTextButton text={answer} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Window.Body>
      <Window.Footer />
    </Window>
  );
}
