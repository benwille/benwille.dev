import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import ColorSwatch from "../components/ColorSwatch";
import Badge from "../components/Badge";

export default function DesignSystem() {
  return (
    <Section
      id="design"
      title="Design system preview"
      subtitle="Emerald primary with warm accent. Accessible contrast and airy cards."
      bg="bg-white"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <Card>
          <h4 className="text-sm font-semibold">Colors</h4>
          <div className="mt-4 space-y-3">
            <ColorSwatch name="Primary (Emerald)" hex="#10B981" />
            <ColorSwatch name="Primary‑dark" hex="#047857" />
            <ColorSwatch name="Accent (Amber)" hex="#F59E0B" />
            <ColorSwatch name="Success (Teal)" hex="#14B8A6" />
            <ColorSwatch name="Neutral 900" hex="#0A0A0A" />
            <ColorSwatch name="Neutral 100" hex="#F4F4F5" />
          </div>
        </Card>
        <Card>
          <h4 className="text-sm font-semibold">Typography</h4>
          <p className="mt-4 text-2xl font-semibold tracking-tight">Heading / Inter (600)</p>
          <p className="mt-2 text-[15px] text-zinc-600">
            Body / Inter (400). Metric‑first bullets; verb‑led statements for recruiter scan speed.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div><span className="font-semibold">H1</span> 32–40px</div>
            <div><span className="font-semibold">H2</span> 24–32px</div>
            <div><span className="font-semibold">Body</span> 15–16px · 1.6 lh</div>
            <div><span className="font-semibold">Caption</span> 12–13px</div>
          </div>
        </Card>
        <Card>
          <h4 className="text-sm font-semibold">Components</h4>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              Primary CTA
            </button>
            <button className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50">
              Secondary
            </button>
            <Badge>Tag</Badge>
            <Badge>Growth</Badge>
            <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-600 shadow-sm">
              Card / hover shadow
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
