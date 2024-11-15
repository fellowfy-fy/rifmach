"use client";

import { motion } from 'framer-motion';

export const Character = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
    >
      <img src="/character.svg" alt="Character" />
    </motion.div>
  );
};
