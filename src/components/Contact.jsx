import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 via-purple-500/5 to-indigo-500/5 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s connect</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            I’m always open to feedback, collaborations, or just saying hi. Reach out and I’ll get back to you soon!
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
              <textarea
                rows={5}
                required
                className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell me about your idea or question..."
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-neutral-500">This demo form works offline for now.</p>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                Send message
              </button>
            </div>
          </form>

          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">Prefer socials?</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                You can also find me on these platforms. DMs are open!
              </p>
              <div className="mt-4 space-y-3">
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Mail className="size-5" /> hello@example.com
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Github className="size-5" /> github.com/yourhandle
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Linkedin className="size-5" /> linkedin.com/in/yourhandle
                </a>
              </div>
            </div>
            <p className="mt-6 text-xs text-neutral-500">Designed and built with React, Tailwind, and a playful 3D scene.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
