"use client";
import { IconGrid } from "@/components/UI/icons/IconGrid";
import { IconStack } from "@/components/UI/icons/IconStack";
import { useState } from "react";

export const SwitchView = () => {
  const [view, setView] = useState<"grid" | "stack">("grid");
  const handleView = (view: "grid" | "stack") => {
    setView(view);
  };
  return (
    <div className="flex gap-3 border-r border-[#F1F1EE] pr-2.5">
      <div onClick={() => handleView("grid")} className="cursor-pointer">
        <IconGrid color={view === "grid" ? "#323232" : "#A3A3A0"} />
      </div>
      <div onClick={() => handleView("stack")} className="cursor-pointer">
        <IconStack color={view === "stack" ? "#323232" : "#A3A3A0"} />
      </div>
    </div>
  );
};
