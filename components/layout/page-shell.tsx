'use client';

import type React from 'react';
import { motion } from 'framer-motion';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}
