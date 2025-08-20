"use client";

import Commands from "@/components/ui/commands";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { COMMANDS_LIST } from "@/constants/commands-list";
import { useActiveCommand } from "@/hooks/active-command";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
  };

  useActiveCommand(
    (event: KeyboardEvent) => event.ctrlKey && event.key.toLowerCase() === "k",
    () => handleOpenChange(!open)
  );

  useActiveCommand(
    (event: KeyboardEvent) => event.key.toLowerCase() === "escape" && open,
    () => handleOpenChange(false)
  );

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger className="flex items-center">
        <Commands letter="K" /> comandos
      </PopoverTrigger>
      <PopoverContent side="top" className="p-0">
        <div>
          <div className="border-b p-3 flex items-center justify-between ">
            <span>Comandos</span>
            <span className="text-xs text-zinc-500">
              aperte Esc para fechar
            </span>
          </div>

          <div className="space-y-2 py-3">
            {COMMANDS_LIST.map((command, index) => (
              <div
                key={index}
                className="flex justify-between hover:bg-zinc-900 py-2 px-3 transition-colors"
              >
                <div>
                  <h3 className="text-sm">{command.title}</h3>
                  <p className="text-xs text-zinc-500">{command.description}</p>
                </div>
                <Commands letter={command.letter} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
