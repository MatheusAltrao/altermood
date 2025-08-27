"use client";
import { Button } from "@/components/ui/button";
import Window from "@/components/window";
import { ChevronLeft } from "lucide-react";

interface HelpProps {
  setRoute: (route: "chat" | "help") => void;
}

export default function Help({ setRoute }: HelpProps) {
  return (
    <Window>
      <Window.Header>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setRoute("chat")}
            className="text-sm"
            variant={"secondary"}
            size={"icon"}
          >
            <ChevronLeft />
          </Button>
          <span className="text-sm">Ajuda</span>
        </div>
      </Window.Header>
      <Window.Body>
        <div className="space-y-8 text-sm text-zinc-100">
          {/* Sobre */}
          <section>
            <h2 className="text-zinc-50 font-medium mb-4">Sobre o AlterMood</h2>
            <p className="text-zinc-400 leading-relaxed">
              Transforme qualquer texto de acordo com o temperamento desejado.
              Insira seu texto e selecione um mood para ver como seria expressa
              a mensagem.
            </p>
          </section>

          {/* Como usar */}
          <section>
            <h2 className="text-zinc-50 font-medium mb-4">Como usar</h2>
            <div className="space-y-2">
              <div className="border-l-2 border-zinc-700 pl-4">
                <p className="text-zinc-300 text-sm">
                  <span className="text-zinc-200 font-medium">
                    Frases curtas:
                  </span>{" "}
                  Use o input para mensagens rápidas
                </p>
              </div>
              <div className="border-l-2 border-zinc-700 pl-4">
                <p className="text-zinc-300 text-sm">
                  <span className="text-zinc-200 font-medium">
                    Textos longos:
                  </span>{" "}
                  Use a textarea para emails e parágrafos
                </p>
              </div>
            </div>
          </section>

          {/* Exemplo */}
          <section>
            <h2 className="text-zinc-50 font-medium mb-4">Exemplo</h2>
            <div className="space-y-3">
              <div>
                <p className="text-zinc-300 text-xs mb-2">Original</p>
                <div className="bg-zinc-800 border border-zinc-700 p-3 rounded text-zinc-100">
                  &quot;Olá, tudo bem?&quot;
                </div>
              </div>
              <div>
                <p className="text-zinc-300 text-xs mb-2">Casual 😎</p>
                <div className="bg-zinc-800 border border-zinc-700 p-3 rounded text-zinc-100">
                  &quot;Iai meu mano, tudo beleza?&quot;
                </div>
              </div>
            </div>
          </section>

          {/* Moods */}
          <section>
            <h2 className="text-zinc-50 font-medium mb-4">Moods disponíveis</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>🤩</span>
                <span className="text-zinc-200 text-xs">Excitado</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>😄</span>
                <span className="text-zinc-200 text-xs">Feliz</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>😢</span>
                <span className="text-zinc-200 text-xs">Triste</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>😠</span>
                <span className="text-zinc-200 text-xs">Bravo</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>😐</span>
                <span className="text-zinc-200 text-xs">Neutro</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>😎</span>
                <span className="text-zinc-200 text-xs">Casual</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>🧐</span>
                <span className="text-zinc-200 text-xs">Formal</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>😏</span>
                <span className="text-zinc-200 text-xs">Sarcástico</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>😂</span>
                <span className="text-zinc-200 text-xs">Engraçado</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>😍</span>
                <span className="text-zinc-200 text-xs">Romântico</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>📧</span>
                <span className="text-zinc-200 text-xs">Email</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded">
                <span>👔</span>
                <span className="text-zinc-200 text-xs">Chefe</span>
              </div>
            </div>
          </section>

          {/* Dicas */}
          <section>
            <h2 className="text-zinc-50 font-medium mb-4">Dicas</h2>
            <ul className="space-y-2 text-zinc-400 text-xs">
              <li>• Experimente diferentes moods com o mesmo texto</li>
              <li>• Use Email para comunicações profissionais</li>
              <li>• Use Chefe para contextos formais de trabalho</li>
              <li>• Combine moods para diferentes situações</li>
            </ul>
          </section>
        </div>
      </Window.Body>
      <Window.Footer />
    </Window>
  );
}
