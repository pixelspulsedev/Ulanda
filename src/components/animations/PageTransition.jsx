import React from 'react';
import { motion } from 'framer-motion';
import { luxuryTransition } from './constants';

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(5px)' }}
            transition={luxuryTransition}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    )
}
