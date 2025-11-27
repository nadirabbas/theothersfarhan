"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lightweight scroll spy: highlights the section/subsection nearest the header
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only track the ids we actually care about (some are divs, some are sections)
    const TRACK_IDS = ["services", "videoediting", "production", "graphics", "about"];

    const getHeaderOffset = () => {
      const h = document.querySelector("header");
      // Clamp to a reasonable range to handle responsive header sizes
      const height = h?.getBoundingClientRect().height || 64;
      return Math.min(140, Math.max(56, Math.round(height)));
    };

    let ticking = false;

    const computeActive = () => {
      const offset = getHeaderOffset();
      const viewportH = window.innerHeight || 800;

      // Collect candidates that exist in the DOM
      const candidates = TRACK_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        // Distance of the element's top to the header offset line
        const distToOffset = Math.abs(rect.top - offset);
        // Whether the offset line passes through the element
        const crossesOffset = rect.top <= offset && rect.bottom >= offset;
        // Also capture distance of element's center to viewport center (tie-breaker)
        const center = rect.top + rect.height / 2;
        const centerDist = Math.abs(center - viewportH / 2);
        return { id, el, rect, distToOffset, crossesOffset, centerDist };
      }).filter(Boolean);

      if (candidates.length === 0) return;

      // Prefer the element crossing the header offset line; choose the one closest to the line
      const crossing = candidates.filter((c) => c.crossesOffset);
      let chosen;
      if (crossing.length > 0) {
        // If multiple overlap (nested elements), pick the one whose top is closest to the offset,
        // and in case of ties, the one with smaller center distance (more centered content)
        crossing.sort((a, b) => a.distToOffset - b.distToOffset || a.centerDist - b.centerDist);
        chosen = crossing[0];
      } else {
        // Otherwise, pick the element whose top is nearest to the offset line
        candidates.sort((a, b) => a.distToOffset - b.distToOffset);
        chosen = candidates[0];
      }

      if (chosen && `#${chosen.id}` !== activeSection) {
        setActiveSection(`#${chosen.id}`);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          computeActive();
          ticking = false;
        });
      }
    };

    // Initial compute after mount to set default highlight
    const timer = setTimeout(() => {
      computeActive();
    }, 150);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#videoediting", label: "Video Editing" },
    { href: "#production", label: "Production" },
    { href: "#graphics", label: "Graphics" },
    { href: "#about", label: "About" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none w-full"
    >
      <motion.div
        animate={
          isScrolled
            ? { width: "92%", marginTop: "1rem", borderRadius: "1rem" }
            : { width: "100%", marginTop: "0rem", borderRadius: "0rem" }
        }
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`pointer-events-auto transition-all duration-500 w-full max-w-full overflow-hidden ${
          isScrolled
            ? "bg-black/40 border border-[#00c2c9] backdrop-blur-md shadow-lg"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div className="flex items-center h-16 gap-4 relative sm:justify-center justify-between max-[608px]:gap-2">
            {/* Logo */}
            <a href="#" className="text-lg md:text-lg lg:text-3xl font-bold text-[#00c2c9]">
              TOF
            </a>

            {/* Desktop/Tablet Navigation (sm and up) */}
            <nav className="hidden sm:flex items-center justify-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`group relative inline-flex items-center transition-colors duration-300 font-medium text-xs md:text-base lg:text-lg ${
                      isActive ? "text-[#00cad1]" : "text-gray-100 hover:text-[#00cad1]"
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
                className="px-4 py-1 bg-[#00b2b8] hover:bg-[#03959b] text-white rounded-lg font-semibold transition-all duration-300 text-xs md:xs lg:text-lg"
              >
                Hire Me
              </a>
              <a
                href="https://www.upwork.com/freelancers/~016c4248681a743809?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-[#00b2b8] hover:bg-[#03959b] text-white rounded-lg font-semibold transition-all duration-300 text-xs md:xs lg:text-lg"
              >
                Book Demo Call
              </a>
            </nav>

            {/* Mobile Menu Button (below sm) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation (below sm) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="sm:hidden flex flex-col items-center pb-6 space-y-3"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const id = link.href.slice(1);
                        setIsMobileMenuOpen(false);
                        // Wait for nav collapse animation before scrolling
                        setTimeout(() => {
                          const target = document.getElementById(id);
                          if (target) {
                            target.scrollIntoView({ behavior: "smooth", block: "start" });
                            if (history.replaceState) {
                              history.replaceState(null, "", link.href);
                            } else {
                              window.location.hash = link.href;
                            }
                          } else {
                            window.location.href = link.href;
                          }
                        }, 280); // matches exit animation duration
                      }}
                      className={`group relative inline-block transition-colors duration-300 font-medium ${
                        isActive ? "text-[#00cad1]" : "text-gray-200 hover:text-[#00cad1]"
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
                  className="block mt-4 px-6 py-2 bg-linear-to-br from-[#002312] to-[#00c2c9] hover:bg-[#005830] text-white rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Hire Me
                </a>
                <a
                  href="https://www.upwork.com/services/consultation/video-audio-muhammad-186503123854389705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 px-6 py-2 bg-linear-to-br from-[#002312] to-[#00c2c9] hover:bg-[#005830] text-white rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Book Demo Call
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.header>
  );
};
