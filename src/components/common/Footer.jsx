"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Briefcase, FileText, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/theothersfarhan?igsh=MTVyZXE3aW1hZzZsMQ%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    { icon: Linkedin, url: "https://www.linkedin.com/in/muhammad-farhan-abbas-934699243/", label: "LinkedIn" },
    { icon: Facebook, url: "https://www.facebook.com/MohammadFarhaanOfficial", label: "Facebook" },
    { icon: Briefcase, url: "https://www.upwork.com/freelancers/~016c4248681a743809?mp_source=share", label: "Upwork" },
    { icon: FileText, url: "https://www.freelancer.com/u/theothersfarhan", label: "Freelancer" },
  ];

  return (
    <footer className="border-t w-full overflow-x-hidden">
      {/* Replace the linear gradient with a top-centered radial gradient */}
      <div className="p-8 bg-[#111] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-xl md:text-3xl font-bold mb-4 bg-[#00c2c9] bg-clip-text text-transparent">
                  TOF
                </span>
              </h3>
              <p className="text-gray-300">
                Professional Video Editor & Content Creator
                <br />
                Based in Islamabad, Pakistan
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {[
                  { href: "#about", label: "About" },
                  { href: "#services", label: "Services" },
                  { href: "#graphics", label: "Graphics" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative text-gray-300 hover:text-gray-200 transition-colors duration-300 w-fit"
                  >
                    <span className="relative">
                      {link.label}
                      <span
                        className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#00c2c9] transition-all duration-300 group-hover:w-full"
                        style={{ display: "block" }}
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 bg-gray-800 hover:bg-[#00c2c9]  text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-800 text-center">
            <p className="text-gray-300 flex items-center justify-center gap-2">
              © {new Date().getFullYear()} TOF. Made with <Heart className="w-4 h-4 text-[#004526] fill-[#004526]" />{" "}
              for creating amazing content
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
