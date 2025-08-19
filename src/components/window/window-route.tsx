"use client";
import Chat from "@/components/window/chat";
import { useState } from "react";

type RouteProps = "chat" | "settings" | "help" | "commands";

export default function WindowRoute() {
  const [route, setRoute] = useState<RouteProps>("chat");

  return (
    <div className="flex min-h-screen flex-col pt-[10vh]">
      <Chat />
    </div>
  );
}
