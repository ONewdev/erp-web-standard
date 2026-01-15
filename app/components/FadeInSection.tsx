'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}