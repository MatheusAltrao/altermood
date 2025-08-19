"use client";
import Chat from "@/components/window/widow-routes/chat";
import { useActiveCommand } from "@/hooks/active-command";
import { useState } from "react";
import Help from "./help";

type RouteProps = "chat" | "help";

export default function WindowRoute() {
  const [route, setRoute] = useState<RouteProps>("chat");

  const handleChangeRoute = () => {
    setRoute((prevRoute) => (prevRoute === "chat" ? "help" : "chat"));
  };

  useActiveCommand(
    (event: KeyboardEvent) => event.key.toLowerCase() === "x",
    handleChangeRoute
  );

  return (
    <div>
      {route === "chat" && <Chat />}
      {route === "help" && <Help />}
    </div>
  );
}
