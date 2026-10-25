import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ExperienceSection } from "@/components/experience";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { EducationSection } from "@/components/education";
import { CertificationsSection } from "@/components/certifications";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
