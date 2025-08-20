"use client";
import { copyTextToClipboard } from "@/helpers/copy-text";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

export default function CopyTextButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = (text: string) => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    copyTextToClipboard(text);
  };

  return (
    <Button
      onClick={() => handleCopyText(text)}
      variant={"secondary"}
      size={"icon"}
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
    </Button>
  );
}
