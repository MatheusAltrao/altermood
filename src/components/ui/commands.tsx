interface CommandsProps {
  letter: string;
}

export default function Commands({ letter }: CommandsProps) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 mx-2 rounded-md bg-zinc-800 text-xs text-zinc-300 border border-zinc-700 select-none">
      <kbd className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-100 font-mono text-xs">
        Ctrl
      </kbd>
      <span className="text-zinc-400">+</span>
      <kbd className="bg-zinc-700 px-1.5 py-0.5 rounded text-zinc-100 font-mono text-xs">
        {letter}
      </kbd>
    </span>
  );
}
