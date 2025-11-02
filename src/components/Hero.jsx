import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            High School Student • Tech & Creativity
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Hi, I’m Alex.</span>
            <br />
            I build playful, modern projects.
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            Welcome to my portfolio! I love blending code, design, and 3D to make interactive experiences. Explore my favorite projects and feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              See my projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-white/90 dark:hover:bg-neutral-900/90 transition"
            >
              Contact me
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 px-2.5 py-1">
              <span className="size-1.5 rounded-full bg-indigo-500" /> JavaScript
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 px-2.5 py-1">
              <span className="size-1.5 rounded-full bg-purple-500" /> React
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 px-2.5 py-1">
              <span className="size-1.5 rounded-full bg-pink-500" /> 3D & Spline
            </span>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
