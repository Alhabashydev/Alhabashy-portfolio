import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="section-shell pb-20 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card-strong relative overflow-hidden rounded-[2.2rem] p-7 sm:p-10 lg:p-12"
      >
        <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/38">Ready when you are</p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have an idea? Let’s turn it into a real product.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/62">
              Whether it is a portfolio, FiveM website, admin dashboard, Discord bot, or full-stack app — I can help build it with clean design and smooth performance.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="#contact" className="pill-btn pill-btn-primary">
              Contact Me <Mail className="h-4 w-4" />
            </a>
            <a href="#projects" className="pill-btn pill-btn-ghost">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
