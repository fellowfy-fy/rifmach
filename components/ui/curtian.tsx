"use client";

import { motion } from 'framer-motion';

export const Curtain = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-10"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <img src="/path/to/curtain-image.png" alt="Curtain" />
    </motion.div>
  );
};
