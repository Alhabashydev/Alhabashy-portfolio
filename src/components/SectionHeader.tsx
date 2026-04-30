import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={align === 'center' ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl text-left'}
    >
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-white/62 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
