import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

/**
 * Hero — bold headline with animated typing sub-headline cycling
 * through the engineer's key domains. Adds floating particle dots,
 * layered gradient blobs, and a stat counter strip.
 */
const ROLES = ["Web Architect", "API Engineer", "Headless CMS Expert"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* ── typing engine ── */
  useEffect(() => {
    const current = ROLES[roleIndex];
    const delay = deleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  /* ── canvas particle background ── */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    let w = (cvs.width = window.innerWidth);
    let h = (cvs.height = window.innerHeight);
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    cvs.width = w * DPR;
    cvs.height = h * DPR;
    ctx.scale(DPR, DPR);

    interface P { x: number; y: number; r: number; vx: number; vy: number; a: number }
    const dots: P[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.4 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of dots) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cvs.width = w * DPR;
      cvs.height = h * DPR;
      ctx.scale(DPR, DPR);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* layers */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="blob left-[-10%] top-10 h-72 w-72 bg-cyan-500/40" />
      <div className="blob right-[-10%] top-40 h-96 w-96 bg-violet-600/40" />
      <div className="blob bottom-[-10%] left-1/3 h-80 w-80 bg-pink-500/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* badge */}
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Available for new opportunities</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          </div>

          {/* headline */}
          <h1
            className="fade-up mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Versatile{" "}
            <span className="gradient-text">Full-Stack Engineer</span>{" "}
            crafting the modern web.
          </h1>

          {/* typing sub-headline */}
          <p
            className="fade-up mt-6 text-lg text-slate-400 sm:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            I build as a{" "}
            <span className="font-semibold text-cyan-300">{text}</span>
            <span className="cursor-blink ml-0.5 inline-block h-5 w-0.5 -translate-y-0.5 bg-cyan-300 align-middle sm:h-6" />
          </p>

          <p
            className="fade-up mx-auto mt-4 max-w-2xl text-base text-slate-400/90"
            style={{ animationDelay: "0.3s" }}
          >
            Designing secure, scalable backend systems and shipping
            lightning-fast frontends powered by modern frameworks and
            headless content infrastructure.
          </p>

          {/* CTAs */}
          <div
            className="fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/30 transition-all hover:scale-[1.03] hover:shadow-violet-500/50 sm:w-auto"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur transition-all hover:border-cyan-400/50 hover:bg-slate-800/70 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </div>

          {/* stats */}
          <dl
            className="fade-up mt-16 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { v: "10+", l: "Technologies" },
              { v: "3+", l: "Years Building" },
              { v: "∞", l: "Lines of Code" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <dt className="text-2xl font-bold text-white sm:text-3xl">
                  <span className="gradient-text">{s.v}</span>
                </dt>
                <dd className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
