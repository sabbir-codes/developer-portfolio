import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-20">
      <SectionHeading eyebrow="Project Showcase" title="Featured Projects" />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100} className="h-full">
            <Card className="flex h-full flex-col overflow-hidden transition-colors hover:border-primary/40">
              <div className="relative aspect-[16/10] overflow-hidden border-b bg-secondary">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                {project.live && (
                  <Button asChild size="sm">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink /> Live
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild size="sm" variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon /> GitHub
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
