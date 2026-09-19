import type { PropsWithChildren } from 'react';
import { motion } from 'motion/react';

type RevealProps = PropsWithChildren<{
  className?: string;
}>;

export default function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Trigger on the top edge, not an area fraction: an 18% fraction of the
      // stacked mobile works grid is taller than a phone screen and never fires.
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
