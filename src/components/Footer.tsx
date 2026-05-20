import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

/**
 * Footer — minimalist with social icons, copyright, and a
 * gradient-bordered "back to top" button.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80">
      {/* gradient top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        {/* copyright */}
        <p className="text-center text-sm text-slate-500 md:text-left">
          © {year}{" "}
          <span className="font-semibold text-slate-300">Krish Kachhadiya</span>{" "}
          — Crafted with React, Tailwind &amp;{" "}
          <Heart className="inline h-3.5 w-3.5 fill-pink-500/50 text-pink-500" />.
        </p>

        {/* socials */}
        <div className="flex items-center gap-2">
          {[
            { Icon: GithubIcon, label: "GitHub" },
            { Icon: LinkedinIcon, label: "LinkedIn" },
            { Icon: Mail, label: "Email" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white hover:bg-slate-800/60"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* back to top */}
        <button
          onClick={toTop}
          className="group neon-border inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/60 hover:text-cyan-300"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
