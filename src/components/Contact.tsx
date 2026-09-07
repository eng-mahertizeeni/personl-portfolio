import { Mail, Phone } from "lucide-react";
import { profile } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-mono text-sm text-accent">04. Contact</h2>
      <h3 className="mt-4 max-w-xl text-2xl font-semibold text-foreground sm:text-3xl">
        Have a backend to build, or a Laravel API that needs fixing? Let&apos;s talk.
      </h3>
      <p className="mt-3 max-w-xl text-muted">
        Open to full-time roles and freelance projects. Reach out on whichever
        channel is easiest for you.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
        >
          <Mail size={16} />
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Phone size={16} />
          {profile.phone}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </a>
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}
