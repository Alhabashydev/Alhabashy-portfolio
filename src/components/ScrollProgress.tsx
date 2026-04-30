import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-white shadow-[0_0_22px_rgba(255,255,255,0.55)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
