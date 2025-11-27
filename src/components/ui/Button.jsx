"use client";

import { motion } from "framer-motion";

export const Button = ({ children, variant = "primary", className = "", onClick, href, ...props }) => {
  const baseStyles =
    "px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-gradient-to-br from-[#002312] to-[#00c2c9] hover:bg-[#005830] text-white shadow-lg hover:shadow-xl",
    secondary: "bg-[#555555] hover:bg-[#666666] text-white shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-[#004526] text-[#004526] hover:bg-gradient-to-br from-[#002312] to-[#00c2c9] hover:text-white",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};
