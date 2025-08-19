import { useEffect } from "react";

export function useActiveCommand(
  keyCombo: (event: KeyboardEvent) => boolean,
  callback: () => void
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (keyCombo(event)) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyCombo, callback]);
}
