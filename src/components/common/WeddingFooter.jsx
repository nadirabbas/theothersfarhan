"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Briefcase, FileText, Heart, Home } from "lucide-react";
import Link from "next/link";

export const WeddingFooter = () => {
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
    <footer className="border-t border-[#D4AF37]/30 bg-[#F5F5DC]">
      <div className="p-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-xl md:text-3xl font-bold mb-4 bg-linear-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
                  TOF Weddings
                </span>
              </h3>
              <p className="text-[#8B7355] mb-4">
                Cinematic Wedding Videography
                <br />
                Capturing Your Special Moments Forever
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#C19A2E] transition-colors font-medium"
              >
                <Home className="w-4 h-4" />
                Back to Main Site
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#5C4033] font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {[
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#prices", label: "Prices" },
                  { href: "#testimonials", label: "Testimonials" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative text-[#8B7355] hover:text-[#5C4033] transition-colors duration-300 w-fit"
                  >
                    <span className="relative">
                      {link.label}
                      <span
                        className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"
                        style={{ display: "block" }}
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-[#5C4033] font-semibold mb-4">Connect With Us</h4>
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
                      className="p-2 bg-[#F5DEB3] hover:bg-[#D4AF37] text-[#8B7355] hover:text-white rounded-lg transition-all duration-300"
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
          <div className="pt-8 border-t border-[#D4AF37]/20 text-center">
            <p className="text-[#8B7355] flex items-center justify-center gap-2">
              © {new Date().getFullYear()} TOF Weddings. Made with{" "}
              <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" /> for your special day
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
