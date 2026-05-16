import { useState } from "react";
import { Send, Mail, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

/**
 * Contact — sleek floating-label form with focus states. Submission is
 * mocked client-side and shows a success confirmation; replace the
 * handler with your real endpoint or service (Formspree, Resend, etc.).
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulated submit — wire this up to your real backend.
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="blob right-0 top-20 h-72 w-72 bg-cyan-500/20" />
      <div className="blob left-0 bottom-0 h-80 w-80 bg-violet-600/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — invitation */}
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a project in mind? <br />
              <span className="gradient-text">Let&rsquo;s build it.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
              Whether you need a full product engineered from scratch, a
              headless CMS rollout, or a senior pair of hands on an existing
              codebase — drop me a line. I respond within 24 hours.
            </p>

            {/* Direct links */}
            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300 ring-1 ring-inset ring-cyan-400/30">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-white">
                    krishkachhadiya20@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/krishkachhadiya"
                  aria-label="GitHub"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-white"
                >
                  <GithubIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">GitHub</span>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-white"
                >
                  <LinkedinIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="reveal neon-border rounded-3xl bg-slate-900/50 p-6 sm:p-8"
          >
            <div className="space-y-5">
              {/* Name */}
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder=" "
                  value={form.name}
                  onChange={handleChange}
                  className="float-input peer"
                />
                <label htmlFor="name" className="float-label">
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder=" "
                  value={form.email}
                  onChange={handleChange}
                  className="float-input peer"
                />
                <label htmlFor="email" className="float-label">
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder=" "
                  value={form.message}
                  onChange={handleChange}
                  className="float-input peer resize-none"
                />
                <label htmlFor="message" className="float-label">
                  Tell me about your project
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending || submitted}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/30 transition-all hover:scale-[1.01] hover:shadow-violet-500/50 disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Message sent — talk soon!
                  </>
                ) : sending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                By sending you agree to a friendly, no-spam reply.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
