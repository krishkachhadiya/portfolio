import { useMemo, useState } from "react";
import {
  Globe,
  Server,
  Database,
  Boxes,
  Sparkles,
  Code2,
  FileCode,
  Braces,
  Atom,
  Triangle,
  Cpu,
  Coffee,
  Hash,
  Cloud,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Skills — Bento-box grid showing categorised technologies with a
 * dynamic filter bar. The featured Kontent.ai tile occupies a wider
 * cell and is visually accented as the current specialised focus.
 */
type Category = "All" | "Frontend" | "Backend" | "Database" | "CMS";

interface Skill {
  name: string;
  category: Exclude<Category, "All">;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  featured?: boolean;
  blurb?: string;
}

const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", icon: FileCode, accent: "from-orange-400 to-red-500" },
  { name: "CSS3", category: "Frontend", icon: Braces, accent: "from-sky-400 to-blue-600" },
  { name: "JavaScript", category: "Frontend", icon: Code2, accent: "from-yellow-300 to-amber-500" },
  { name: "React.js", category: "Frontend", icon: Atom, accent: "from-cyan-300 to-sky-500" },
  { name: "Next.js", category: "Frontend", icon: Triangle, accent: "from-slate-200 to-slate-500" },

  // Backend
  { name: "Node.js", category: "Backend", icon: Server, accent: "from-emerald-400 to-green-600" },
  { name: "PHP · Laravel", category: "Backend", icon: Cpu, accent: "from-red-400 to-rose-600" },
  { name: "Java", category: "Backend", icon: Coffee, accent: "from-amber-500 to-orange-700" },
  { name: "ASP.NET (C#)", category: "Backend", icon: Hash, accent: "from-violet-400 to-purple-700" },
  { name: "Python · Django", category: "Backend", icon: Layers, accent: "from-emerald-300 to-teal-600" },

  // Database
  { name: "SQL", category: "Database", icon: Database, accent: "from-blue-400 to-indigo-600" },

  // CMS — featured
  {
    name: "Kontent.ai",
    category: "CMS",
    icon: Cloud,
    accent: "from-cyan-400 via-violet-500 to-pink-500",
    featured: true,
    blurb: "Headless CMS · current focus",
  },
];

const FILTERS: { key: Category; label: string; icon: LucideIcon }[] = [
  { key: "All", label: "All", icon: Sparkles },
  { key: "Frontend", label: "Frontend", icon: Globe },
  { key: "Backend", label: "Backend", icon: Server },
  { key: "Database", label: "Database", icon: Database },
  { key: "CMS", label: "CMS", icon: Boxes },
];

export default function Skills() {
  const [active, setActive] = useState<Category>("All");

  const visible = useMemo(
    () =>
      active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active),
    [active]
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Section glow */}
      <div className="blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-violet-600/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A{" "}
            <span className="gradient-text">battle-tested toolkit</span>{" "}
            for every layer.
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Click a category to filter. The grid re-flows with smooth
            transitions across every breakpoint.
          </p>
        </div>

        {/* Filter pills */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-lg shadow-violet-500/30"
                    : "border-slate-700/80 bg-slate-900/60 text-slate-300 hover:border-cyan-400/50 hover:text-white"
                }`}
              >
                <f.icon className="h-4 w-4" />
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {visible.map((skill, i) => {
            const Icon = skill.icon;
            const featured = skill.featured;
            return (
              <article
                key={skill.name}
                className={`reveal neon-border group relative overflow-hidden rounded-2xl bg-slate-900/50 p-5 transition-all hover:-translate-y-1 ${
                  featured
                    ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-2"
                    : ""
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {/* Hover shimmer */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="shimmer absolute inset-0" />
                </div>

                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${skill.accent} shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-slate-950" strokeWidth={2.2} />
                </div>

                <h3
                  className={`mt-4 font-semibold text-white ${
                    featured ? "text-xl sm:text-2xl" : "text-base"
                  }`}
                >
                  {skill.name}
                </h3>

                {featured ? (
                  <>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                      {skill.blurb}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                      Designing structured content models, building typed
                      delivery integrations, and wiring up omni-channel
                      pipelines that ship pixel-perfect pages in milliseconds.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-inset ring-cyan-400/30">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                      Current focus area
                    </span>
                  </>
                ) : (
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    {skill.category}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
