"use client";

import { motion } from "framer-motion";

export const Card = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-[#2A2A2A] backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-[#004526] transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
