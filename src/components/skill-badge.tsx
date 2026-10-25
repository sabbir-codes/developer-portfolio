"use client";

import { useState } from "react";
import {
  Braces,
  Code,
  Database,
  Globe,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Webhook,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Skill } from "@/lib/data";

const fallbackIcons: Record<string, LucideIcon> = {
  Braces,
  Code,
  Database,
  Globe,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Webhook,
  Zap,
};

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// A square tile: big logo on top, skill name below.
export function SkillBadge({ skill }: { skill: Skill }) {
  const [failed, setFailed] = useState(false);
  const Fallback = fallbackIcons[skill.fallback ?? ""] ?? Code;
  const showLogo = skill.icon && !failed;

  return (
    <div className="group flex h-32 flex-col items-center justify-center gap-3 rounded-xl border bg-card p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
      {showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${CDN}/${skill.icon}.svg`}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn(
            "h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-110",
            skill.mono && "dark:invert",
          )}
        />
      ) : (
        <Fallback
          className="h-10 w-10 text-primary transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        />
      )}
      <span className="text-sm font-medium leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
        {skill.name}
      </span>
    </div>
  );
}
