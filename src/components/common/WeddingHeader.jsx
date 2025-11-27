"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home } from "lucide-react";
import Link from "next/link";

export const WeddingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section with Intersection Observer
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter((entry) => entry.isIntersecting);

          if (visibleEntries.length > 0) {
            const mostVisible = visibleEntries.reduce((prev, current) => {
              return current.intersectionRatio > prev.intersectionRatio ? current : prev;
            });

            setActiveSection(`#${mostVisible.target.id}`);
          }
        },
        {
          rootMargin: "-10% 0px -70% 0px",
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        }
      );

      const sections = document.querySelectorAll("section[id]");

      if (sections.length > 0) {
        sections.forEach((section) => observer.observe(section));
      }

      return () => {
        if (sections.length > 0) {
          sections.forEach((section) => observer.unobserve(section));
        }
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#prices", label: "Prices" },
    // { href: "#testimonials", label: "Testimonials" },
    // { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.div
        animate={
          isScrolled
            ? { width: "92%", marginTop: "1rem", borderRadius: "1rem" }
            : { width: "100%", marginTop: "0rem", borderRadius: "0rem" }
        }
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`pointer-events-auto transition-all duration-500 ${
          isScrolled
            ? "bg-[#F5F5DC]/90 border border-[#D4AF37] backdrop-blur-md shadow-lg"
            : "bg-[#F5F5DC]/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4 relative min-[541px]:justify-between justify-between max-[608px]:gap-2">
            {/* Logo & Home Link */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-[#D4AF37] hover:text-[#C19A2E] transition-colors">
                <span className="text-xl font-bold max-[608px]:text-lg">TOF</span>
              </Link>
              <span className="text-[#8B7355] text-sm max-[608px]:hidden">/ Weddings</span>
            </div>

            {/* Desktop/Tablet Navigation */}
            <nav className="hidden min-[541px]:flex items-center justify-center gap-8 min-[541px]:gap-6 max-[608px]:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`group relative inline-flex items-center transition-colors duration-300 font-medium min-[541px]:text-base max-[608px]:text-xs min-[541px]:px-2 max-[608px]:px-1 min-[541px]:py-0.5 max-[608px]:py-0 ${
                      isActive ? "text-[#D4AF37]" : "text-[#5C4033] hover:text-[#D4AF37]"
                    }`}
                  >
                    <span className="relative inline-block">
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 w-full bg-current transform origin-left transition-transform duration-300 ease-out ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </span>
                  </a>
                );
              })}
              <a
                href="https://www.upwork.com/freelancers/~016c4248681a743809?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#D4AF37] hover:bg-[#C19A2E] text-white rounded-lg font-semibold transition-all duration-300 min-[541px]:px-3 max-[608px]:px-2 min-[541px]:text-base max-[608px]:text-xs min-[541px]:py-1 max-[608px]:py-0"
              >
                Hire Me
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-[541px]:hidden text-[#5C4033] p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="min-[541px]:hidden flex flex-col items-center pb-6 space-y-3"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group relative inline-block transition-colors duration-300 font-medium ${
                        isActive ? "text-[#D4AF37]" : "text-[#5C4033] hover:text-[#D4AF37]"
                      }`}
                    >
                      <span className="relative inline-block">
                        {link.label}
                        <span
                          className={`absolute left-0 -bottom-1 h-0.5 w-full bg-current transform origin-left transition-transform duration-300 ease-out ${
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </span>
                    </a>
                  );
                })}
                <a
                  href="https://www.upwork.com/freelancers/~016c4248681a743809?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 px-6 py-2 bg-[#D4AF37] hover:bg-[#C19A2E] text-white rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Book Now
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.header>
  );
};
