import { ExternalLink, GraduationCap, Boxes, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

/**
 * Projects — three featured project cards with gradient covers,
 * floating icons, tech-stack chips, and animated gradient borders.
 */
interface Project {
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  cover: string;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    title: "Online Examination System",
    description:
      "A robust, secure, and structured web application designed for managing real-time online examinations, student grading, and automated question-shuffling logic.",
    stack: ["PHP", "Laravel", "SQL", "Tailwind"],
    icon: GraduationCap,
    cover: "from-rose-500 via-red-500 to-orange-500",
    accent: "shadow-rose-500/30",
  },
  {
    title: "Full-Stack REST API & Dashboard",
    description:
      "A scalable RESTful API built with Django and Node.js, paired with a React admin dashboard for real-time data management, role-based access control, and rich analytics visualisation.",
    stack: ["Django", "Node.js", "React", "PostgreSQL"],
    icon: Boxes,
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
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* ambient glow */}
      <div className="blob left-1/2 -bottom-20 h-80 w-80 -translate-x-1/2 bg-pink-500/15" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* heading */}
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
            secure exam platforms to scalable APIs and headless CMS
            integrations.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className={`reveal hover-rotate neon-border group relative flex flex-col overflow-hidden rounded-3xl bg-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${p.accent}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* cover gradient */}
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.cover}`}
                >
                  {/* dot pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  {/* radial spotlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

                  {/* floating icon */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="hover-target grid h-20 w-20 place-items-center rounded-2xl bg-slate-950/30 backdrop-blur-md ring-1 ring-white/20">
                      <Icon className="h-10 w-10 text-white" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* number badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-slate-950/60 px-3 py-1 text-xs font-mono font-semibold text-white backdrop-blur">
                    0{i + 1}
                  </div>

                  {/* stack preview on cover */}
                  <div className="absolute right-4 top-4 flex gap-1.5">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>

                  {/* stack chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* action row */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                    <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200">
                      View case study
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <button
                      aria-label="Source code"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700/80 text-slate-400 transition-all hover:border-cyan-400/50 hover:text-white hover:bg-slate-800/60"
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
