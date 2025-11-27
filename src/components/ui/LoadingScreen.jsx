"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#111]"
            style={{ pointerEvents: "none" }}
          >
            <span
              className="text-6xl md:text-7xl font-bold tracking-widest relative inline-block"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #fff",
                textStroke: "2px #fff", // for Firefox
                position: "relative",
                display: "inline-block",
              }}
            >
              TOF
              <motion.span
                initial={{ backgroundSize: "100% 0%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: "linear-gradient(to top, white 100%, transparent 0%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  display: "inline-block",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
                className="absolute inset-0 select-none"
                aria-hidden="true"
              >
                TOF
              </motion.span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 0 : 1 }}
        transition={{ delay: show ? 0 : 0.2, duration: 0.6 }}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </>
  );
};
