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
    title: "Trocar Janela",
    description: "aperte para trocar a janela ativa",
    letter: "X",
  },
  {
    title: "Limpar Chat",
    description: "aperte para limpar o chat",
    letter: "L",
  },

  {
    title: "Esconder Janela",
    description: "aperte para esconder a janela ativa",
    letter: "E",
  },
];
