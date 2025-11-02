import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Student Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              Get in touch
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 bg-black text-white dark:bg-white dark:text-black"
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
