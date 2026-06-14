'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale';
  duration?: number;
  delay?: number;
  className?: string;
  amount?: 'some' | 'all' | number;
}

export default function ScrollReveal({
  children,
  animation = 'slide-up',
  duration = 0.7,
  delay = 0,
  className = '',
  amount = 0.2
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (animation) {
      case 'fade':
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      case 'slide-up':
        return { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };
      case 'slide-down':
        return { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } };
      case 'slide-left':
        return { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };
      case 'slide-right':
        return { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
      case 'scale':
        return { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };
      default:
        return { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }} // Custom smooth easing
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
