export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About me</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              I’m a curious high school student who loves turning ideas into interactive experiences. I enjoy front‑end development,
              motion design, and exploring 3D on the web. When I’m not coding, you’ll find me sketching UI concepts, playing
              basketball, or contributing to school clubs.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              My current focus is building accessible, fast, and delightful projects using React, Tailwind, and Spline.
              I learn best by making and sharing.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Spline', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
            <h3 className="text-lg font-semibold">Highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex gap-3"><span className="text-indigo-600">•</span> Built an interactive 3D solar system for science fair.</li>
              <li className="flex gap-3"><span className="text-indigo-600">•</span> Co-led the coding club website redesign.</li>
              <li className="flex gap-3"><span className="text-indigo-600">•</span> Completed several freeCodeCamp certifications.</li>
              <li className="flex gap-3"><span className="text-indigo-600">•</span> Volunteered tutoring HTML/CSS to middle schoolers.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
