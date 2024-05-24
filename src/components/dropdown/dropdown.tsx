import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
export default function Dropdown({ text }: { text: string }) {
  return (
    <div
      style={{
        cursor: "pointer",
        padding: "32px 0",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span
        style={{
          textTransform: "uppercase",
          color: "white",
          fontWeight: 500,
          fontSize: ".7rem",
        }}
      >
        {text}
      </span>{" "}
      <div>
        <ChevronDownIcon color="white" width={14} strokeWidth={2.5} />
      </div>
    </div>
  );
}
