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

export function SkillBadge({ skill }: { skill: Skill }) {
  const [failed, setFailed] = useState(false);
  const Fallback = fallbackIcons[skill.fallback ?? ""] ?? Code;
  const showLogo = skill.icon && !failed;

  return (
    <div className="flex items-center gap-2.5 rounded-lg border bg-secondary/60 px-3 py-2 text-sm transition-colors hover:border-primary/40 hover:bg-secondary">
      {showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${CDN}/${skill.icon}.svg`}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn("h-5 w-5 shrink-0", skill.mono && "dark:invert")}
        />
      ) : (
        <Fallback className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
      )}
      <span>{skill.name}</span>
    </div>
  );
}
