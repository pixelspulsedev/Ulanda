import React from 'react';
import { motion } from 'framer-motion';
import { luxuryTransition } from './constants';

export default function FadeInWhenVisible({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...luxuryTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
