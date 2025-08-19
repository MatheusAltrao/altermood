"use client";
import Chat from "@/components/window/widow-routes/chat";
import { useEffect, useState } from "react";
import Help from "./widow-routes/help";

type RouteProps = "chat" | "help";

export default function WindowRoute() {
  const [route, setRoute] = useState<RouteProps>("chat");

  const handleChangeRoute = () => {
    setRoute((prevRoute) => (prevRoute === "chat" ? "help" : "chat"));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "x") {
        event.preventDefault();
        handleChangeRoute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      {route === "chat" && <Chat />}
      {route === "help" && <Help />}
    </div>
  );
}
