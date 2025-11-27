"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923491520391";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed z-50 flex flex-col items-end gap-4 bottom-6 right-6">
      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white text-2xl animate-pulse-scale hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <FaWhatsapp size={28} />
      </a>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 rounded-full bg-gray-800 shadow-lg flex items-center justify-center text-white text-2xl hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <ArrowUp size={28} />
        </button>
      )}
    </div>
  );
};

export default FloatingActions;
