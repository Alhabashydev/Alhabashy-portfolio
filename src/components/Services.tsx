import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="section-padding section-shell">
      <SectionHeader
        eyebrow="Services"
        title="What I Can Build"
        description="Focused services for developers, communities, FiveM servers, script stores, dashboards, and online brands."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              whileHover={{ y: -7 }}
              className="glass-card group rounded-[1.8rem] p-6 transition-all duration-300 hover:border-white/28 hover:bg-white/[0.055]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/12 bg-white/[0.055] transition group-hover:bg-white group-hover:text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/42">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{service.description}</p>

              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/62">
                    <CheckCircle className="h-4 w-4 text-white/72" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
