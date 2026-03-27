import React, { useMemo, useState } from "react";
import Section from "../components/Section";
import Badge from "../components/Badge";
import ProjectCard from "../components/ProjectCard";

const ALL_PROJECTS = [
  { title: "Abandonment personalization system", metric: "+75% conversion", tags: ["Personalization", "Growth", "Email"] },
  { title: "Vendor onboarding workflow", metric: "-10 days to revenue", tags: ["Ops", "Salesforce", "Platform"] },
  { title: "Coupon parity on Shopify", metric: "$1M annual savings", tags: ["Platform", "Cost", "E‑commerce"] },
];

const FILTERS = ["All", "Personalization", "Lifecycle", "Ops efficiency", "Platform", "Customer experience", "Salesforce", "Email", "Cost"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const projects = useMemo(() => {
    if (!activeTag) return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <Section id="projects" title="Projects" subtitle="Click tags to filter; click again to clear." bg="bg-zinc-50">
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <Badge
            key={f}
            active={(activeTag === null && f === "All") || activeTag === f}
            onClick={() => setActiveTag(f === "All" ? null : f)}
          >
            {f}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} metric={p.metric} tags={p.tags} onTagClick={(t) => setActiveTag(t)} />
        ))}
        {projects.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-600">
            No projects match that tag.
          </div>
        )}
      </div>
    </Section>
  );
}
