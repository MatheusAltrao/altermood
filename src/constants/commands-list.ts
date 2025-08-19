export interface CommandItem {
  title: string;
  description: string;
  letter: string;
}

export const COMMANDS_LIST: CommandItem[] = [
  {
    title: "Trocar Mood",
    description: "aperte para trocar o mood",
    letter: "M",
  },
  {
    title: "Trocar janela",
    description: "aperte para trocar a janela ativa",
    letter: "T",
  },
  {
    title: "Limpar chat",
    description: "aperte para limpar o chat",
    letter: "L",
  },
];
