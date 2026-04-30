import { Code2, Gauge, Layers, MapPin, Sparkles, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const infoCards = [
  { title: 'Clean Code', icon: Code2 },
  { title: 'Smooth UI', icon: Sparkles },
  { title: 'Full-Stack Logic', icon: Layers },
  { title: 'Fast Performance', icon: Gauge }
];

const details = [
  { label: 'Name', value: 'Moustafa Alhabashy', icon: User },
  { label: 'Age', value: '16', icon: Sparkles },
  { label: 'Location', value: 'Egypt', icon: MapPin },
  { label: 'Role', value: 'Full-Stack Developer', icon: Code2 }
];

export default function About() {
  return (
    <section id="about" className="section-padding section-shell">
      <SectionHeader
        eyebrow="About"
        title="Young developer. Serious build quality."
        description="A focused profile built around clean UI, real logic, smooth motion, and practical products that clients can understand quickly."
      />

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="glass-card rounded-[2rem] p-6 sm:p-8"
        >
          <p className="text-sm uppercase tracking-[0.26em] text-white/35">Personal info</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <Icon className="mb-4 h-5 w-5 text-white/70" />
                  <p className="text-xs uppercase tracking-[0.18em] text-white/35">{item.label}</p>
                  <p className="mt-1 font-semibold text-white/86">{item.value}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="glass-card-strong rounded-[2rem] p-6 sm:p-8"
        >
          <p className="text-lg leading-9 text-white/72">
            Moustafa is a young full-stack developer from Egypt who builds modern websites, dashboards, FiveM server tools, Discord systems, and smooth UI/UX experiences.
          </p>
          <p className="mt-5 text-base leading-8 text-white/55">
            The goal is simple: create products that look premium, feel smooth, and are structured cleanly enough to become real business tools later.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                  className="card-tilt rounded-2xl border border-white/10 bg-black/35 p-4 transition-colors hover:border-white/25 hover:bg-white/[0.055]"
                >
                  <Icon className="h-5 w-5 text-white/75" />
                  <h3 className="mt-4 font-semibold text-white">{card.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
