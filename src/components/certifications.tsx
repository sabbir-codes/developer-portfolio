import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

// TODO: replace this placeholder with real Programming Hero certificates
// (title, issuer, date, credential link) once you have them.
export function CertificationsSection() {
  return (
    <section id="certifications" className="container py-20">
      <SectionHeading eyebrow="Credentials" title="My Certifications" />

      <Reveal>
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Programming Hero Certificate</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Certificate coming soon. It will appear here once the AI-Powered Full Stack
              Web Engineering (MERN) program is completed.
            </p>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}
