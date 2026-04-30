import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-shell">
      <SectionHeader
        eyebrow="Skills"
        title="Practical skills for modern digital products"
        description="Frontend visuals, backend logic, dashboards, APIs, FiveM UIs, and performance-focused development."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              className="card-tilt glass-card group rounded-[1.6rem] p-5 transition-all duration-300 hover:border-white/28 hover:bg-white/[0.055]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/12 bg-white/[0.055] transition group-hover:bg-white group-hover:text-black">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{skill.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{skill.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
