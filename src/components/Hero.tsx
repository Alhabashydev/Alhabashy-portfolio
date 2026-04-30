import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

const terminalLines = [
  '> initializing portfolio...',
  '> loading skills...',
  '> developer: Moustafa Alhabashy',
  '> status: ready to build'
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mb-5 flex flex-wrap items-center gap-2">
            <span className="badge">Full-Stack Developer • Egypt</span>
            <span className="badge"><span className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />Available for work</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-balance text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Moustafa Alhabashy
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-xl font-medium leading-8 text-white/82 sm:text-2xl">
            16-year-old full-stack developer building smooth, modern, and powerful digital experiences.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
            I design and build clean websites, dashboards, server tools, Discord systems, FiveM interfaces, and full-stack web apps with a focus on performance, UI/UX, and smooth animations.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="pill-btn pill-btn-primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="pill-btn pill-btn-secondary">
              Contact Me <Mail className="h-4 w-4" />
            </a>
            <a href="/Moustafa-Alhabashy-CV.txt" download className="pill-btn pill-btn-ghost">
              Download CV <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card mt-9 max-w-xl overflow-hidden rounded-3xl p-4 font-mono text-sm text-white/70">
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-xs text-white/35">portfolio.init</span>
            </div>
            <div className="space-y-2">
              {terminalLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.28, duration: 0.35 }}
                  className="leading-6"
                >
                  <span className="text-white/35">{String(index + 1).padStart(2, '0')}</span> {line}
                </motion.p>
              ))}
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.1 }}
                className="inline-block h-4 w-2 translate-y-1 bg-white/75"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-white/[0.07] blur-3xl" />
          <div className="glass-card-strong relative overflow-hidden rounded-[2rem] p-3 sm:p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <ThreeScene />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">3D visual</p>
                <p className="mt-1 text-sm font-semibold text-white/78">Lightweight code cube</p>
              </div>
              <Sparkles className="h-5 w-5 text-white/70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
