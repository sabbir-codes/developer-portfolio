import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SkillBadge } from "@/components/skill-badge";
import { skills } from "@/lib/data";

export function SkillsSection() {
  const total = skills.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section id="skills" className="container py-20">
      <SectionHeading eyebrow="My Arsenal" title="Technical Skills" />

      <p className="-mt-6 mb-8 font-mono text-sm text-muted-foreground">
        {skills.length} Categories · {total} Technologies
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 100} className="h-full">
            <Card className="h-full transition-colors hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {group.category}
                  <span className="font-mono text-xs font-normal text-muted-foreground">
                    {group.items.length}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
