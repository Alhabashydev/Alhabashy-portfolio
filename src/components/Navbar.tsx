import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Tech', href: '#tech' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => {
      const sections = links
        .map((link) => ({ ...link, element: document.querySelector(link.href) as HTMLElement | null }))
        .filter((link) => link.element);

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const sectionTop = sections[index].element?.offsetTop ?? 0;
        if (sectionTop <= window.scrollY + 140) {
          setActive(sections[index].label);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav className="mx-auto max-w-7xl rounded-full border border-white/12 bg-black/60 px-3 py-2 shadow-glow backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="group flex items-center gap-2 rounded-full pr-3 text-sm font-semibold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/18 bg-white p-1.5 shadow-[0_0_28px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-105">
              <img src="/assets/logo/alhabashy-logo.svg" alt="Moustafa Alhabashy logo" className="h-full w-full object-contain" />
            </span>
            <span className="hidden text-white/88 sm:inline">Moustafa</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
                  active === link.label
                    ? 'bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.16)]'
                    : 'text-white/62 hover:bg-white/[0.075] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="pill-btn pill-btn-primary hidden px-3.5 py-2 text-xs lg:inline-flex">
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.045] text-white transition hover:bg-white hover:text-black lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 grid gap-2 border-t border-white/10 pt-3 lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </nav>
    </motion.header>
  );
}
