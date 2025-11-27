"use client";

import { motion } from "framer-motion";

export const SectionTitle = ({ children, subtitle, className = "", titleColor, subtitleColor }) => {
  return (
    <div className={`text-center mb-6 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={
          titleColor
            ? `text-4xl mt-0 md:text-5xl font-bold mb-4 py-2 ${titleColor}`
            : "text-4xl mt-0 md:text-5xl font-bold mb-4 py-2 bg-linear-to-r from-[#111] via-[#00c2c9] to-[#111] bg-clip-text text-transparent"
        }
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={
            subtitleColor ? `text-lg max-w-2xl mx-auto ${subtitleColor}` : "text-gray-300 text-lg max-w-2xl mx-auto"
          }
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
