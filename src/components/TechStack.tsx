import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { technologies } from '../data/technologies';

export default function TechStack() {
  return (
    <section id="tech" className="section-padding section-shell">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Technologies I Use"
        description="Separated clearly by category so the stack feels professional, readable, and easy for clients to understand."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {technologies.map((category, categoryIndex) => (
          <motion.article
            key={category.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.04 }}
            className="glass-card rounded-[1.8rem] p-5 sm:p-6"
          >
            <div className="mb-5 border-b border-white/10 pb-5">
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/52">{category.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.items.map((item) => {
                const Icon = item.icon;
                const hasBrandIcon = Boolean(item.iconPath);
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-hover group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.075]"
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition group-hover:border-white/25 ${
                        hasBrandIcon
                          ? 'border-white/20 bg-white/95 shadow-[0_0_18px_rgba(255,255,255,0.1)]'
                          : 'border-white/10 bg-white/[0.04] text-white/76 group-hover:bg-white/[0.08]'
                      }`}
                    >
                      {item.iconPath ? (
                        <img src={item.iconPath} alt="" className="tech-icon-img h-5 w-5 object-contain opacity-100 transition group-hover:scale-110" />
                      ) : Icon ? (
                        <Icon className="h-5 w-5" />
                      ) : null}
                    </span>
                    <span className="text-sm font-semibold text-white/74 transition group-hover:text-white">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
