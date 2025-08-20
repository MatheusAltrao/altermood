"use client";
import Chat from "@/components/window/widow-routes/chat";
import { useActiveCommand } from "@/hooks/active-command";
import { useState } from "react";
import Help from "./help";

export type RouteProps = "chat" | "help";

export default function WindowRoute() {
  const [route, setRoute] = useState<RouteProps>("chat");
  const [showWindow, setShowWindow] = useState(true);

  const handleChangeRoute = () => {
    setRoute((prevRoute) => (prevRoute === "chat" ? "help" : "chat"));
  };

  const handleChangeWindowVisibility = () => {
    setShowWindow((prevShow) => !prevShow);
  };

  useActiveCommand(
    (event: KeyboardEvent) => event.ctrlKey && event.key.toLowerCase() === "x",
    handleChangeRoute
  );

  useActiveCommand(
    (event: KeyboardEvent) => event.ctrlKey && event.key.toLowerCase() === "e",
    handleChangeWindowVisibility
  );

  return (
    <div
      className={`${
        showWindow ? "opacity-100 " : "opacity-0 invisible "
      } transition-opacity duration-300`}
    >
      {route === "chat" && <Chat setRoute={setRoute} />}
      {route === "help" && <Help setRoute={setRoute} />}
    </div>
  );
}
