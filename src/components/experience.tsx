"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, ChevronDown, ExternalLink, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { experience, type Experience } from "@/lib/data";

// Full class names are written out so Tailwind can detect them.
const accents: Record<
  Experience["accent"],
  {
    bar: string;
    logo: string;
    tag: string;
    dot: string;
    glow: string;
    date: string;
    chevron: string;
  }
> = {
  emerald: {
    bar: "from-emerald-400 via-teal-400 to-cyan-500",
    logo: "from-emerald-400 to-teal-600 shadow-emerald-500/30",
    tag: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    dot: "bg-gradient-to-br from-emerald-400 to-teal-500",
    glow: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    date: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    chevron: "group-hover:border-emerald-500/50 group-hover:text-emerald-500",
  },
  violet: {
    bar: "from-fuchsia-500 via-violet-500 to-indigo-500",
    logo: "from-fuchsia-500 to-violet-600 shadow-violet-500/30",
    tag: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    dot: "bg-gradient-to-br from-fuchsia-500 to-violet-500",
    glow: "hover:border-violet-500/40 hover:shadow-violet-500/10",
    date: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    chevron: "group-hover:border-violet-500/50 group-hover:text-violet-500",
  },
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function ExperienceCard({
  job,
  defaultOpen,
}: {
  job: Experience;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const a = accents[job.accent];
  const current = job.period.includes("Present");
  const panelId = `exp-${job.company.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl",
        a.glow,
      )}
    >
      <span
        className={cn(
          "absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b",
          a.bar,
        )}
        aria-hidden="true"
      />

      {/*
        The whole header toggles the card on click. The chevron is the real
        <button> (keyboard and screen reader control), and the company link
        stops the click from bubbling so it doesn't toggle the card.
      */}
      <div
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer flex-col gap-4 p-5 pl-7 text-left sm:p-6 sm:pl-8"
      >
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl text-lg font-extrabold shadow-lg",
              job.logo
                ? "border bg-white"
                : cn("bg-gradient-to-br text-white", a.logo),
            )}
            aria-hidden={job.logo ? undefined : true}
          >
            {job.logo ? (
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={56}
                height={56}
                className="h-full w-full object-contain p-1.5"
              />
            ) : (
              initials(job.company)
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold leading-snug tracking-tight sm:text-xl">
              {job.title}
            </h3>
            {job.website ? (
              <a
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-0.5 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
              >
                {job.company}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <p className="mt-0.5 font-semibold text-primary">{job.company}</p>
            )}
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {job.meta}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span
              className={cn(
                "hidden items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs sm:inline-flex",
                a.date,
              )}
            >
              {current ? (
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
                </span>
              ) : (
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {job.period}
            </span>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={
                open
                  ? `Hide details for ${job.title}`
                  : `Show details for ${job.title}`
              }
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                a.chevron,
              )}
            >
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  open && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <span
          className={cn(
            "inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs sm:hidden",
            a.date,
          )}
        >
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {job.period}
        </span>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-md border px-2.5 py-1 font-mono text-xs",
                a.tag,
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3 border-t px-5 py-5 pl-7 sm:px-6 sm:pl-8">
            {job.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  className={cn("mt-2 h-2 w-2 shrink-0 rounded-full", a.dot)}
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-20">
      <SectionHeading
        eyebrow="My Career Path"
        title="Professional Experience"
      />

      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.title} delay={i * 100}>
            <ExperienceCard job={job} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
