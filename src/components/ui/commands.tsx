interface CommandsProps {
  letter: string;
  size?: "sm" | "md" | "lg";
}

export default function Commands({ letter, size = "md" }: CommandsProps) {
  return (
    <span
      className={` gap-1  mx-2 rounded-md text-xs text-zinc-300 space-x-1 select-none ${
        size === "sm" ? "text-xs" : size === "lg" ? "text-lg" : "text-sm"
      }`}
    >
      <kbd className="bg-zinc-700 px-1.5 py-1 leading-none rounded text-zinc-100 font-mono text-xs">
        Ctrl
      </kbd>
      <span className="text-zinc-400">+</span>
      <kbd className="bg-zinc-700 px-1.5 py-1 leading-none  rounded text-zinc-100 font-mono text-xs">
        {letter}
      </kbd>
    </span>
  );
}
