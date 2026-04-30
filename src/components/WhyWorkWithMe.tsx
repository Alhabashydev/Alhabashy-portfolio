import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { whyWorkWithMe } from '../data/whyWorkWithMe';

export default function WhyWorkWithMe() {
  return (
    <section className="section-padding section-shell">
      <SectionHeader
        eyebrow="Value"
        title="Why Work With Me"
        description="A clear mix of speed, UI quality, animation taste, backend thinking, and direct communication."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {whyWorkWithMe.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card group rounded-[1.7rem] p-6 transition-all duration-300 hover:border-white/28 hover:bg-white/[0.055]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/12 bg-white/[0.055] transition group-hover:bg-white group-hover:text-black">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
