'use client';

import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
  };
}

export default function FadeInSection({
  children,
  delay = 0,
  className = "",
  viewport = { once: true, margin: "-100px" }
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth Apple-like easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}