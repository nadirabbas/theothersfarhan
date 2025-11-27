"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Instagram, Linkedin, Facebook, Briefcase, FileText } from "lucide-react";
import Image from "next/image";
import styles from "./SocialLinks.module.css";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/theothersfarhan?igsh=MTVyZXE3aW1hZzZsMQ%3D%3D&utm_source=qr",
      color: "from-purple-500 to-pink-500",
      description: "Follow for behind-the-scenes content",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/muhammad-farhan-abbas-934699243/",
      color: "from-blue-600 to-blue-400",
      description: "Connect professionally",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/MohammadFarhaanOfficial",
      color: "from-blue-500 to-blue-700",
      description: "Like and follow for updates",
    },
    {
      name: "Upwork",
      icon: Briefcase,
      url: "https://www.upwork.com/freelancers/~016c4248681a743809?mp_source=share",
      color: "from-green-600 to-green-400",
      description: "Hire me on Upwork",
    },
    {
      name: "Freelancer",
      icon: FileText,
      url: "https://www.freelancer.com/u/theothersfarhan",
      color: "from-blue-400 to-cyan-400",
      description: "View my Freelancer profile",
    },
  ];

  return (
    <section id="contact" className="py-10 relative w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Let's connect and create something amazing together">Get In Touch</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch gap-8 md:gap-14 w-full">
          {/* Left: Social Links Grid (full width on mobile, 6 cols on md+) */}
          <div className="col-span-1 md:col-span-6 w-full mb-8 md:mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
              {(() => {
                const cols = 2;
                const lastRowCount = socialLinks.length % cols === 0 ? cols : socialLinks.length % cols;
                return socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  let extraGridClass = "h-full";
                  if (idx === socialLinks.length - 1 && lastRowCount === 1 && socialLinks.length > 1) {
                    extraGridClass = "md:col-span-2 md:justify-self-center h-full";
                  }
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden bg-[#2A2A2A] backdrop-blur-sm border border-zinc-800 rounded-xl p-8 ${extraGridClass} ring-3 ring-[#00e09e] border-[#00e09e] ${styles.cardWithPulse}`}
                    >
                      {/* Border Glow: fade in/out on hover, no motion */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                      >
                        <span
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: `conic-gradient(from 0deg at 50% 0%, #00e09e, #00c2c9, #00e09e, #00c2c9)`,
                            opacity: 0.18,
                          }}
                        />
                      </span>

                      {/* Card background gradient on hover */}
                      {/* Card background: #2A2A2A, hover to #00c2c9 */}
                      <div className="absolute inset-0 bg-[#2A2A2A] group-hover:bg-[#00c2c9]/10 transition-colors duration-300" />

                      <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Icon background gradient on hover */}
                        <div className="mb-4 p-4 bg-zinc-800/50 rounded-full group-hover:bg-[#00c2c99e] transition-colors duration-300">
                          <Icon className="w-8 h-8 text-gray-200" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{link.name}</h3>
                        <p className="text-gray-300 text-sm">{link.description}</p>

                        {/* Hover Arrow */}
                        <div className="mt-4 text-gray-200 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Visit →
                        </div>
                      </div>
                    </a>
                  );
                });
              })()}
            </div>
          </div>
          {/* Right: Demo Call Section (full width on mobile, 6 cols on md+) */}
          <div className="col-span-1 md:col-span-6 w-full rounded-2xl flex flex-col items-start">
            {/* Avatar Image Top Left */}
            <div className="w-42 h-42 rounded-full bg-gradient-to-br from-[#6a5acd] to-[#00c6fb] overflow-hidden border-4 border-[#222] shadow-lg mb-6">
              <Image
                src={require("../../assets/user-images/image005avatar.jpg")}
                alt="Profile"
                width={112}
                height={112}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h4 className="text-[#00c2c9] text-lg font-semibold mb-2 tracking-wide">SCHEDULE YOUR CALL WITH FARHAN</h4>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 text-center">Free 15-Minute Demo Call</h2>
            <p className="text-gray-200 text-base mb-4">
              By the end of this call, you'll have a clear understanding of the next steps to elevate your brand and
              achieve consistent results through video content—both short-form and long-form.
              <br />
              <br />
              Find a time on Farhan’s calendar to schedule your call today, and we look forward to speaking with you
              soon!
            </p>
            <h5 className="text-[#00c2c9] text-base font-bold mb-3 mt-2 tracking-wide">
              THIS CONSULTATION CALL IS PERFECT FOR:
            </h5>
            <ul className="text-gray-100 text-sm md:text-base space-y-2 mb-4 text-left">
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Businesses looking to enhance their brand with
                professional, engaging video content.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Individuals or companies aiming to build or grow
                their online presence.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Entrepreneurs who want to develop a strong
                personal brand.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Companies seeking to streamline their content
                creation process with a reliable and dedicated video editing partner.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Long-term clients looking for a trusted studio to
                consistently deliver high-quality video projects.
              </li>
            </ul>
            <h5 className="text-[#00c2c9] text-base font-bold mb-3 mt-2 tracking-wide">
              ALSO IDEAL FOR COMPANIES NEEDING FULL PRODUCTION SERVICES:
            </h5>
            <ul className="text-gray-100 text-sm md:text-base space-y-2 mb-4 text-left">
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Brands that require complete video production —
                from concept development to final editing.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Businesses in need of on-location shoots,
                AI-generated visuals, or cinematic storytelling.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Companies looking to produce advertisements,
                social media campaigns, or promotional videos efficiently and professionally.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00c2c9] mt-1 shrink-0">✓</span>Teams that want an experienced production partner
                to handle everything from scriptwriting and shooting to post-production.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
