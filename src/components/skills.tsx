"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { SkillBadge } from "@/components/skill-badge";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/data";

export function SkillsSection() {
  const [active, setActive] = useState(skills[0].category);
  const current =
    skills.find((group) => group.category === active) ?? skills[0];

  return (
    <section id="skills" className="container py-20">
      <SectionHeading eyebrow="My Arsenal" title="Technical Skills" />

      <div
        role="group"
        aria-label="Skill categories"
        className="mb-10 flex flex-wrap gap-3"
      >
        {skills.map((group) => {
          const isActive = group.category === current.category;
          return (
            <button
              key={group.category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(group.category)}
              className={cn(
                "inline-flex items-center rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_-6px_hsl(var(--primary)/0.7)]"
                  : "bg-secondary/60 text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {group.category}
              <span
                className={cn(
                  "ml-2 text-xs",
                  isActive ? "opacity-80" : "opacity-60",
                )}
              >
                {group.items.length}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={current.category}
        className="grid grid-cols-2 gap-4 duration-300 animate-in fade-in-0 slide-in-from-bottom-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {current.items.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
