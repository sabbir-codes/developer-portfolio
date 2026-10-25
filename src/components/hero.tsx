import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Typewriter } from "@/components/typewriter";
import { site } from "@/lib/data";

// Edit these to change the animated tagline.
const roles = [
  "Full-Stack Developer",
  "Next.js & TypeScript Developer",
  "MERN Stack Developer",
];

const chips = [
  { label: "Next.js", className: "-left-2 top-10 sm:-left-8" },
  {
    label: "React",
    className: "-right-2 top-24 sm:-right-8 [animation-delay:1.5s]",
  },
  {
    label: "TypeScript",
    className: "bottom-12 -left-2 sm:-left-10 [animation-delay:3s]",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    color: "bg-[#0a66c2]",
    icon: <LinkedinIcon className="h-5 w-5 text-white dark:text-white" />,
    external: true,
  },
  {
    label: "GitHub",
    href: site.github,
    color: "bg-[#24292f] dark:bg-[#3d444d]",
    icon: <GithubIcon className="h-5 w-5 text-white dark:text-white" />,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    color: "bg-[#ea4335]",
    icon: <Mail className="h-5 w-5 text-white" />,
    external: false,
  },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="bg-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
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
          <p className="mt-4 min-h-[2rem] font-mono text-xl font-semibold text-foreground/90 sm:min-h-[2.25rem] sm:text-2xl">
            <Typewriter words={roles} />
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${s.color}`}
              >
                {s.icon}
              </a>
            ))}

            <Button
              asChild
              size="lg"
              className="ml-1 rounded-full px-8 font-semibold uppercase tracking-wide shadow-[0_0_28px_-4px_hsl(var(--primary)/0.65)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_-2px_hsl(var(--primary)/0.8)]"
            >
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                <Download /> Resume
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
