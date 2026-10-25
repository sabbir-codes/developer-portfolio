import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="container py-20">
      <SectionHeading eyebrow="Academic Journey" title="My Education" />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="h-full">
            <Card className="h-full transition-colors hover:border-primary/40">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <p className="text-sm font-medium text-primary">{item.place}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="outline">{item.period}</Badge>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
