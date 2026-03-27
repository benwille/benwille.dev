import React from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bg?: string;
  compact?: boolean;
};

export default function Section({
  id, title, subtitle, children, bg, compact = false,
}: SectionProps) {
  return (
    <section id={id} className={`${bg ?? "bg-white"} relative scroll-mt-24 py-14 sm:py-20`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className={`${compact ? "mb-4" : "mb-10"} flex items-end justify-between`}>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{title}</h2>
            {subtitle && (
              <p className={`${compact ? "mt-1" : "mt-2"} max-w-2xl text-sm text-zinc-600`}>{subtitle}</p>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
