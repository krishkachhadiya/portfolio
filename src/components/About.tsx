import { ShieldCheck, Zap, Layers, Boxes } from "lucide-react";

/**
 * About — two-column layout: narrative on the left with an animated
 * accent bar, and a 2×2 grid of highlight cards on the right.
 * Cards feature icon pulse on hover and staggered reveal.
 */
const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "Hardened APIs, role-based access, and defensive validation at every layer.",
    ring: "ring-emerald-400/20",
    text: "text-emerald-400",
    bg: "from-emerald-400/20 to-emerald-500/5",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Static generation, smart caching, and lean bundles for sub-second loads.",
    ring: "ring-amber-400/20",
    text: "text-amber-400",
    bg: "from-amber-400/20 to-amber-500/5",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Modular services and clean domain boundaries that grow with the product.",
    ring: "ring-violet-400/20",
    text: "text-violet-400",
    bg: "from-violet-400/20 to-violet-500/5",
  },
  {
    icon: Boxes,
    title: "Headless Mindset",
    desc: "Decoupled content models that ship to web, mobile, and any future channel.",
    ring: "ring-cyan-400/20",
    text: "text-cyan-400",
    bg: "from-cyan-400/20 to-cyan-500/5",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* soft divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── left narrative ── */}
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              About Me
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              I build the{" "}
              <span className="gradient-text">invisible architecture</span>{" "}
              behind delightful products.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              <p>
                I&rsquo;m a full-stack engineer obsessed with the craft of
                shipping software that feels as good as it performs. My work
                spans secure backend systems written in{" "}
                <span className="text-slate-200">Laravel, Django, and ASP.NET</span>
                , robust API architectures in{" "}
                <span className="text-slate-200">Node.js and PHP</span>, and
                modern frontends powered by{" "}
                <span className="text-slate-200">React and Next.js</span>.
              </p>
              <p>
                Lately I&rsquo;ve been deeply focused on{" "}
                <span className="font-semibold text-cyan-300">
                  Kontent.ai &amp; the headless CMS movement
                </span>
                — designing structured content models and omni-channel
                delivery pipelines that power lightning-fast, content-rich
                web experiences.
              </p>
            </div>

            {/* accent bar */}
            <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

            {/* tag pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Clean code",
                "API design",
                "DX matters",
                "Pixel-perfect UI",
                "Responsive design",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── right highlight cards ── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="reveal neon-border group rounded-2xl bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/50"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${h.bg} ${h.text} ring-1 ring-inset ${h.ring} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
