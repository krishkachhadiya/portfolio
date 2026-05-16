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
  Hash,
  Cloud,
  Layers,
  type LucideIcon,
} from "lucide-react";

/**
 * Skills — upgraded bento grid with filter pills.
 *
 * BUG-FIX: Each card uses the CSS `animate-card-in` class.
 * The grid wrapper carries `key={active}` so every filter change
 * unmounts + remounts the cards, which re-triggers the entrance
 * animation from scratch. No more invisible cards after switching
 * back to "All".
 */

type Category = "All" | "Frontend" | "Backend" | "Database" | "CMS";

interface Skill {
  name: string;
  category: Exclude<Category, "All">;
  icon: LucideIcon;
  accent: string;
  featured?: boolean;
  blurb?: string;
}

const SKILLS: Skill[] = [
  /* ── Frontend ── */
  { name: "HTML5",       category: "Frontend", icon: FileCode, accent: "from-orange-400 to-red-500" },
  { name: "CSS3",        category: "Frontend", icon: Braces,   accent: "from-sky-400 to-blue-600" },
  { name: "JavaScript",  category: "Frontend", icon: Code2,    accent: "from-yellow-300 to-amber-500" },
  { name: "React.js",    category: "Frontend", icon: Atom,     accent: "from-cyan-300 to-sky-500" },
  { name: "Next.js",     category: "Frontend", icon: Triangle, accent: "from-slate-200 to-slate-500" },

  /* ── Backend ── */
  { name: "Node.js",       category: "Backend", icon: Server, accent: "from-emerald-400 to-green-600" },
  { name: "PHP · Laravel", category: "Backend", icon: Cpu,    accent: "from-red-400 to-rose-600" },
  { name: "ASP.NET (C#)",  category: "Backend", icon: Hash,   accent: "from-violet-400 to-purple-700" },
  { name: "Python · Django",category: "Backend", icon: Layers, accent: "from-emerald-300 to-teal-600" },

  /* ── Database ── */
  { name: "SQL", category: "Database", icon: Database, accent: "from-blue-400 to-indigo-600" },

  /* ── CMS — featured ── */
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
  { key: "All",       label: "All",       icon: Sparkles },
  { key: "Frontend",  label: "Frontend",  icon: Globe },
  { key: "Backend",   label: "Backend",   icon: Server },
  { key: "Database",  label: "Database",  icon: Database },
  { key: "CMS",       label: "CMS",       icon: Boxes },
];

export default function Skills() {
  const [active, setActive] = useState<Category>("All");

  const visible = useMemo(
    () =>
      active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active),
    [active]
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* ambient glow */}
      <div className="blob left-1/2 -top-20 h-96 w-96 -translate-x-1/2 bg-violet-600/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ── heading ── */}
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
            Click a category to filter — cards re-enter with a staggered
            animation every time.
          </p>
        </div>

        {/* ── filter pills ── */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {FILTERS.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-slate-950 shadow-lg shadow-violet-500/30"
                    : "border border-slate-700/80 bg-slate-900/60 text-slate-300 hover:border-cyan-400/50 hover:text-white"
                }`}
              >
                {/* active pill gradient bg (sits behind text) */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                )}
                <f.icon className={`relative h-4 w-4 ${isActive ? "text-slate-950" : ""}`} />
                <span className="relative">{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── bento grid ──
            key={active} forces a full remount on every filter change,
            which restarts the animate-card-in animation for every card.
            This is the core fix for the "All then Frontend shows nothing" bug. */}
        <div
          key={active}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {visible.map((skill, i) => {
            const Icon = skill.icon;
            const featured = skill.featured;
            return (
              <article
                key={skill.name}
                className={`animate-card-in neon-border group relative overflow-hidden rounded-2xl bg-slate-900/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/60 ${
                  featured
                    ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-2"
                    : ""
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* hover shimmer layer */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="shimmer absolute inset-0" />
                </div>

                {/* icon badge */}
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${skill.accent} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6 text-slate-950" strokeWidth={2.2} />
                </div>

                <h3
                  className={`mt-4 font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 ${
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
