import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { timeline } from '../data/timeline';

export default function Timeline() {
  return (
    <section id="journey" className="section-padding section-shell">
      <SectionHeader
        eyebrow="Journey"
        title="My Developer Journey"
        description="A realistic path from basic structure to complete full-stack products and animated interfaces."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent sm:left-1/2 sm:block" />

        <div className="space-y-5">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                className={`relative grid gap-4 sm:grid-cols-2 ${isLeft ? '' : 'sm:[&>*:first-child]:col-start-2'}`}
              >
                <div className={`glass-card rounded-[1.6rem] p-5 ${isLeft ? 'sm:mr-8' : 'sm:ml-8'}`}>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/42">0{index + 1}</span>
                  </div>
                  <p className="text-sm leading-7 text-white/55">{item.description}</p>
                </div>
                <span className="absolute left-1/2 top-7 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-white bg-black shadow-[0_0_22px_rgba(255,255,255,0.55)] sm:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
