import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div>
          <p className="text-lg font-bold">
            {site.logo}
            <span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground">{site.role}</p>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
