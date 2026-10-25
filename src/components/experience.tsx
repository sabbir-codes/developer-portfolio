import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-20">
      <SectionHeading eyebrow="My Career Path" title="Professional Experience" />

      <div className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal key={job.title} delay={i * 100} className="relative">
            <span
              className="absolute -left-[2.2rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary sm:-left-[3.2rem]"
              aria-hidden="true"
            >
              <Briefcase className="h-4 w-4" />
            </span>
            <Card className="transition-colors hover:border-primary/40">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <Badge>{job.period}</Badge>
                </div>
                <p className="text-sm font-medium text-primary">{job.company}</p>
                <p className="text-sm text-muted-foreground">{job.meta}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 text-primary" aria-hidden="true">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
