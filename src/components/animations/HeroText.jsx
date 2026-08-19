import React from 'react';
import { motion } from 'framer-motion';
import { luxuryTransition } from './constants';

// `as="span"` renders the fallback wrapper as inline elements instead of divs,
// so HeroText can sit inside a heading without producing invalid nesting
// (h1's content model is phrasing content, which excludes div).
export default function HeroText({ children, className = "", delay = 0, as = 'div' }) {
  // If children is a string, we can offer word-by-word animation
  const isString = typeof children === 'string';

  if (isString) {
    const words = children.split(" ");
    
    // Container orchestrates the children
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
        }
      }
    };

    const wordVariants = {
        hidden: { y: "100%", opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: luxuryTransition
        }
    };

    return (
      <motion.span 
        className={`inline-block overflow-hidden align-bottom ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {children.split(" ").map((word, i) => (
             <React.Fragment key={i}>
               <span className="inline-block overflow-hidden align-bottom mr-[0.25em] pb-[0.4em] -mb-[0.2em]">
                  <motion.span variants={wordVariants} className="inline-block">
                      {word}
                  </motion.span>
               </span>{' '}
             </React.Fragment>
        ))}
      </motion.span>
    );
  }

  // Fallback for complex React Nodes (just slide up the whole block)
  const inline = as === 'span';
  const Outer = inline ? 'span' : 'div';
  const Inner = inline ? motion.span : motion.div;

  return (
    <Outer className={`${inline ? 'inline-block ' : ''}overflow-hidden pb-2 -mb-1 ${className}`}>
      <Inner
        className={inline ? 'inline-block' : undefined}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...luxuryTransition, delay }}
      >
        {children}
      </Inner>
    </Outer>
  );
}
