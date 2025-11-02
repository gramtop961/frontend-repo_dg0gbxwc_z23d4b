import { ExternalLink, Star, Code } from 'lucide-react';

const projects = [
  {
    title: 'Study Planner App',
    description:
      'A simple planner to organize homework, tests, and extracurriculars with reminders and color-coded subjects.',
    tags: ['React', 'LocalStorage', 'Tailwind'],
    link: '#',
    stars: 12,
  },
  {
    title: '3D Solar System',
    description:
      'An interactive 3D visualization of planets with facts and orbits. Built after my astronomy class project.',
    tags: ['Spline', 'Three.js', 'UX'],
    link: '#',
    stars: 20,
  },
  {
    title: 'School Club Website',
    description:
      'Landing page for our coding club with events, member highlights, and a gallery. Focused on accessibility.',
    tags: ['Vite', 'Accessibility', 'Design'],
    link: '#',
    stars: 9,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-500/5 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
              A selection of things I’ve built recently. I care about clean code, fun interactions, and inclusive design.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <Code className="size-4" />
            <span>Built with love and lots of coffee</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-5 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400">
                  <Star className="size-4 fill-yellow-400/30" /> {p.stars}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-xs text-neutral-600 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  View project <ExternalLink className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
