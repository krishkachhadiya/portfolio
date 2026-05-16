import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

/**
 * Navbar — sticky frosted-glass header. Tracks the active section
 * via IntersectionObserver-style scroll reading and shows a
 * gradient underline indicator. Mobile drawer with backdrop.
 */
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = link.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* brand */}
        <button
          onClick={() => handleNav("home")}
          className="group flex items-center gap-2"
          aria-label="Go to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-violet-500/30 transition-transform group-hover:scale-110">
            <Code2 className="h-5 w-5 text-slate-950" strokeWidth={2.5} />
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-100">
            dev<span className="gradient-text">.stack</span>
          </span>
        </button>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-cyan-300" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* desktop CTA */}
        <button
          onClick={() => handleNav("contact")}
          className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/20 transition-all hover:scale-[1.03] hover:shadow-violet-500/40 md:inline-flex"
        >
          Let&rsquo;s Talk
        </button>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-700/60 bg-slate-900/60 text-slate-200 transition-colors hover:border-cyan-400/40 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-72 max-w-[85%] glass border-l border-slate-800 p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700/60 text-slate-300 transition-colors hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-8 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-slate-800/60 text-cyan-300"
                        : "text-slate-200 hover:bg-slate-800/40"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => handleNav("contact")}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
          >
            Let&rsquo;s Talk
          </button>
        </aside>
      </div>
    </header>
  );
}
