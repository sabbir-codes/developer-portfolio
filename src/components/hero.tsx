import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/data";

const chips = [
  { label: "Next.js", className: "-left-2 top-10 sm:-left-8" },
  { label: "React", className: "-right-2 top-24 sm:-right-8 [animation-delay:1.5s]" },
  { label: "TypeScript", className: "bottom-12 -left-2 sm:-left-10 [animation-delay:3s]" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <p className="mb-4 font-mono text-sm text-primary">Hello, I&apos;m</p>
          <h1 className="text-gradient text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-foreground/90 sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                <Download /> Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">
                View Projects <ArrowDown />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Button asChild variant="outline" size="icon" aria-label="GitHub">
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-primary/5 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2">
            <Image
              src="/sabbir.jpeg"
              alt="Portrait of Sabbir Ahammed"
              width={400}
              height={400}
              priority
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
          </div>
          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`absolute animate-float rounded-full border border-border bg-background/90 px-3 py-1.5 font-mono text-xs text-primary shadow-lg backdrop-blur ${chip.className}`}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
