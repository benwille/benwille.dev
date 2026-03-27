import React from "react";

type Props = { hex: string; name: string };

export default function ColorSwatch({ hex, name }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-md shadow-inner" style={{ background: hex }} />
      <div className="text-sm text-zinc-700">
        {name} <span className="tabular-nums text-zinc-500">{hex}</span>
      </div>
    </div>
  );
}
