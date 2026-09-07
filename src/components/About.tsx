import { GraduationCap, Languages, MapPin } from "lucide-react";
import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-mono text-sm text-accent">01. About</h2>
      <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-5 rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
            <p className="text-sm text-muted">{profile.location}</p>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" />
            <div className="text-sm text-muted">
              <p className="text-foreground">{profile.education.degree}</p>
              <p>{profile.education.school}</p>
              <p>{profile.education.period}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Languages size={18} className="mt-0.5 shrink-0 text-accent" />
            <div className="text-sm text-muted">
              {profile.languages.map((lang) => (
                <p key={lang.name}>
                  {lang.name} — {lang.level}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
