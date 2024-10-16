"use client";

import { motion } from 'framer-motion';

export const SpeechBubble = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-30 bg-white p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>{text}</p>
    </motion.div>
  );
};
