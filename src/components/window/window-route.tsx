"use client";
import Chat from "@/components/window/chat";
import { useState } from "react";

type RouteProps = "chat" | "settings" | "help" | "commands";

export default function WindowRoute() {
  const [route, setRoute] = useState<RouteProps>("chat");

  return <Chat />;
}
