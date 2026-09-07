import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col justify-center gap-6 px-6 pb-20 pt-20 sm:pt-28"
    >
      <p className="font-mono text-sm text-accent">Hi, I&apos;m {profile.name.split(" ")[0]} 👋</p>

      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {profile.title} building{" "}
        <span className="text-accent">full-stack products with Laravel &amp; React</span>
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
        >
          View my projects
          <ArrowRight size={16} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Mail size={16} />
          Get in touch
        </a>
      </div>
    </section>
  );
}
