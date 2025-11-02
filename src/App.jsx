import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Alex • Student Portfolio</p>
          <a href="#home" className="hover:text-neutral-800 dark:hover:text-neutral-200 transition">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
