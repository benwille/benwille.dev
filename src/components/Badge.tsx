// src/components/Badge.tsx
import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
};

export default function Badge({ children, onClick, active = false }: BadgeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition
        focus:outline-none focus:ring-2 focus:ring-emerald-500
        ${
          active
            ? "border-emerald-600 bg-emerald-50 text-emerald-700"
            : "border-zinc-200 bg-white text-zinc-700 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50"
        }`}
    >
      {children}
    </button>
  );
}
