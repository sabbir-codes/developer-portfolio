"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// Icons switch with CSS (the `dark` class on <html>), so there is no hydration mismatch.
export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle light or dark theme">
      <Sun className="hidden dark:block" />
      <Moon className="dark:hidden" />
    </Button>
  );
}
