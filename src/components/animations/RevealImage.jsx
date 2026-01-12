import React from 'react';
import { motion } from 'framer-motion';
import { luxuryTransition } from './constants';

export default function RevealImage({ children, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={luxuryTransition}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
