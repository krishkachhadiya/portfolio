import { ShieldCheck, Zap, Layers, Boxes } from "lucide-react";

/**
 * About — short bio paired with four highlight cards summarising
 * the engineer's strengths. Uses a two-column layout that collapses
 * to a single column on mobile.
 */
const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "Hardened APIs, role-based access, and defensive validation at every layer.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Static generation, smart caching, and lean bundles for sub-second loads.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Modular services and clean domain boundaries that grow with the product.",
  },
  {
    icon: Boxes,
    title: "Headless Mindset",
    desc: "Decoupled content models that ship to web, mobile, and any future channel.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — narrative */}
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
                , real-time mobile experiences in{" "}
                <span className="text-slate-200">native Java/Android</span>, and
                modern frontends powered by{" "}
                <span className="text-slate-200">React and Next.js</span>.
              </p>
              <p>
                Lately I&rsquo;ve been deeply focused on{" "}
                <span className="font-semibold text-cyan-300">
                  Kontent.ai &amp; the headless CMS movement
                </span>
                — designing structured content models that deliver to web,
                mobile, and any channel that comes next.
              </p>
            </div>

            {/* Tag row */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Clean code",
                "API design",
                "DX matters",
                "Pixel-perfect UI",
                "Mobile-first",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.title}
                className="reveal neon-border group rounded-2xl bg-slate-900/40 p-6 transition-transform hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                  <h.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
