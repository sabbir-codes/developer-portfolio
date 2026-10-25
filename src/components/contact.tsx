"use client";

import { useState } from "react";
import { Download, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/data";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend yet: the form opens the visitor's email app with the message filled in.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="container py-20">
      <SectionHeading eyebrow="Reach Out" title="Let's Connect" />

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Get in Touch</h3>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m always open to discussing new opportunities, creative ideas, or ways to
              be part of your vision. Use the form or reach out directly.
            </p>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#ea4335]" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{site.location}</span>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" size="icon" aria-label="GitHub">
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
              </a>
            </Button>
            <Button asChild>
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                <Download /> Download Resume
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
