import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
