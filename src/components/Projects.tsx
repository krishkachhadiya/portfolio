import { ExternalLink, GraduationCap, Gamepad2, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

/**
 * Projects — three featured project cards. Each card has a stylised
 * gradient cover (no external imagery required), tech stack chips,
 * and hover micro-interactions for a premium feel.
 */
interface Project {
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  cover: string; // tailwind gradient
  accent: string; // glow accent
}

const PROJECTS: Project[] = [
  {
    title: "Online Examination System",
    description:
      "A robust, secure, and structured web application designed for managing real-time online examinations, student grading, and automated question-shuffling logic.",
    stack: ["PHP", "Laravel", "SQL", "CSS"],
    icon: GraduationCap,
    cover: "from-rose-500 via-red-500 to-orange-500",
    accent: "shadow-rose-500/30",
  },
  {
    title: "Mobile Bingo Game",
    description:
      "A fully interactive native Android application featuring a 5x5 randomized grid with custom backend winning logic calculated across 5 intersecting horizontal, vertical, and diagonal lines.",
    stack: ["Java", "Android Studio", "Android SDK"],
    icon: Gamepad2,
    cover: "from-emerald-400 via-teal-500 to-cyan-500",
    accent: "shadow-emerald-500/30",
  },
  {
    title: "Headless CMS Integration",
    description:
      "A cutting-edge omni-channel web application utilizing Kontent.ai as a Headless CMS for structured content delivery, dynamic routing, and lightning-fast static page generation.",
    stack: ["Next.js", "Kontent.ai", "React", "API Integration"],
    icon: Cloud,
    cover: "from-cyan-400 via-violet-500 to-pink-500",
    accent: "shadow-violet-500/40",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Featured Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Selected{" "}
            <span className="gradient-text">projects</span> &amp; case studies.
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            A small slice of the things I&rsquo;ve shipped recently — from
            secure exam platforms to interactive native mobile games.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className={`reveal neon-border group relative flex flex-col overflow-hidden rounded-3xl bg-slate-900/50 transition-all hover:-translate-y-2 hover:shadow-2xl ${p.accent}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Cover */}
                <div
                  className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.cover}`}
                >
                  {/* subtle dot pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  {/* Floating icon */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="float-slow grid h-20 w-20 place-items-center rounded-2xl bg-slate-950/30 backdrop-blur-md ring-1 ring-white/20">
                      <Icon className="h-10 w-10 text-white" strokeWidth={1.8} />
                    </div>
                  </div>
                  {/* Number badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-slate-950/60 px-3 py-1 text-xs font-mono font-semibold text-white backdrop-blur">
                    0{i + 1}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>

                  {/* Stack chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                    <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200">
                      View case study
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <button
                      aria-label="Source code"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700/80 text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-white"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
