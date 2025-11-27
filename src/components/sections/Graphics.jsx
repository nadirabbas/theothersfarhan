"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Image as ImageIcon, Palette, Zap, Award, Camera } from "lucide-react";
import { TestimonialsVertical } from "../ui";

// Static imports for all images in graphics section
import mrbeast1 from "@/assets/graphics section/mrbeaststyle/Picture1.jpg";
import mrbeast2 from "@/assets/graphics section/mrbeaststyle/Picture2.jpg";
import mrbeast3 from "@/assets/graphics section/mrbeaststyle/Picture3.jpg";
import mrbeast4 from "@/assets/graphics section/mrbeaststyle/Picture4.jpg";
import mrbeast5 from "@/assets/graphics section/mrbeaststyle/Picture5.jpg";
import mrbeast6 from "@/assets/graphics section/mrbeaststyle/Picture6.jpg";
import faceless9 from "@/assets/graphics section/faceless/Picture9.jpg";
import faceless10 from "@/assets/graphics section/faceless/Picture10.jpg";
import faceless11 from "@/assets/graphics section/faceless/Picture11.jpg";
import podcast5 from "@/assets/graphics section/podcast/Picture5.jpg";
import podcast6 from "@/assets/graphics section/podcast/Picture6.jpg";
import podcast7 from "@/assets/graphics section/podcast/Picture7.jpg";

const testimonialData = [
  // 1. Santiago S. (Provided)
  {
    id: 1,
    user: "Santiago S.",
    img: "https://i.pravatar.cc/40?u=female-1",
    text: "I hired and am working Farhan on my YouTube videos, thumbnails, and overall content strategy on YouTube. He has done a phenomenal job with communicating and working as a partner in our work together thus far. The first draft(s) of videos are usually near exact to our vision, which creates very little concern or reworking the projects. The work on thumbnails is fantastic - something we work hard on. I appreciate his flexibility and availability tremendously. We are continuing to work to grow my channel and I look forward to growing together.",
  },
  // 2. Cornel E (Provided)
  {
    id: 2,
    user: "Cornel E",
    img: "https://i.pravatar.cc/40?u=female-2",
    text: "I wanted to share some feedback about Farhan, whom I've been working with for quite some time now. I can confidently say he is one of the best editors I've ever collaborated with. Whether it's a travel reel, a business reel, or a bike reel, Farhan demonstrates exceptional skill and creativity in crafting all types of reels. His attention to detail and ability to capture the essence of each project is truly remarkable. I 100% recommend Farhan to anyone in need of a top-notch video editor. If you work with him once, I guarantee you'll want to continue working with him for all your future projects. His professionalism, dedication, and talent make him an invaluable asset to any team. I rate Farhan 5 stars without hesitation. Thank you, Farhan, for making my life easier and consistently delive",
  },
  // 3. Athanasios Marneris (Provided)
  {
    id: 3,
    user: "Athanasios Marneris",
    img: "https://i.pravatar.cc/40?u=female-4",
    text: "Farhan provides a phenomenal product, in prompt time, and keeps you up to date throughout. I'm looking forward to continuing to work with him.",
  },
  // 4. Karolis Aukstakis (Provided)
  {
    id: 4,
    user: "Karolis Aukstakis",
    img: "https://i.pravatar.cc/40?u=male-3",
    text: "I wanted to share some feedback about Farhan, whom I've been working with for quite some time now. I can confidently say he is one of the best editors I've ever collaborated with. Whether it's a travel reel, a business reel, or a bike reel, Farhan demonstrates exceptional skill and creativity in crafting all types of reels. His attention to detail and ability to capture the essence of each project is truly remarkable. I 100% recommend Farhan to anyone in need of a top-notch video editor. If you work with him once, I guarantee you'll want to continue working with him for all your future projects. His professionalism, dedication, and talent make him an invaluable asset to any team. I rate Farhan 5 stars without hesitation. Thank you, Farhan, for making my life easier and consistently delive.",
  },
  // 5. Arvish Khaqkh (Provided)
  {
    id: 5,
    user: "ARVISH KHAQKH",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "I worked with Farhan for 3 months, and he is the best editor. He made my life easy as he handles every task effortlessly. I highly recommend him and his services. Thank you!",
  },
  // 6. Lady in Pink Hat (Extracted from Image 6)
  {
    id: 6,
    user: "Priyanka Singla",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Muhammad possesses outstanding communication skills and a commendable work ethic. He offered valuable suggestions and insightful ideas for improving my video content. I highly recommend him.",
  },
  // 7. Upwork Review - Educational Content (Extracted from Image 8)
  {
    id: 7,
    user: "David Chen",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Truly enjoyed working with Muhammad. He does quality work for good prices.",
  },
  // 8. Upwork Review - 24 Hour Turnaround (Extracted from Image 9)
  {
    id: 8,
    user: "Robert Fox",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "Farhan was absolutely exceptional. This project required a 24-hour turnaround time and Farhan delivered within a few hours of working hours.",
  },
  // 9. Upwork Review - Bulk Shorts (Extracted from Image 8)
  {
    id: 9,
    user: "Amanda Pritz",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Great editor! Quick worker and fast learner, grasped my needs and gave an output accordingly, highly recommended, would hire again!",
  },
  // 10. Upwork Review - Business Education (Extracted from Image 9)
  {
    id: 10,
    user: "Sherif Eldeeb",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Muhammad is a great editor and communicator. It is obvious he has been at this for a while. He also understands how certain strategies impact brand. I will work with him again.",
  },
  // 11. Upwork Review - 17 Minutes Video (Extracted from Image 8)
  {
    id: 11,
    user: "Aymen Salhi",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "Great work done by Mohammad, would like to work with him in any similar work in the future. I recommend him.",
  },
  // 12. Mike K. (Extracted from Image 1 - Green Avatar)
  {
    id: 12,
    user: "MIKE k.",
    img: "https://ui-avatars.com/api/?name=Mike+K&background=4CAF50&color=fff",
    text: "I wanted to share some feedback about Farhan, whom I've been working with for quite some time now. I can confidently say he is one of the best editors I've ever collaborated with. Whether it's a travel reel, a business reel, or a bike reel, Farhan demonstrates exceptional skill and creativity in crafting all types of reels. His attention to detail and ability to capture the essence of each project is truly remarkable. I 100% recommend Farhan to anyone in need of a top-notch video editor. If you work with him once, I guarantee you'll want to continue working with him for all your future projects. His professionalism, dedication, and talent make him an invaluable asset to any team. I rate Farhan 5 stars without hesitation. Thank you, Farhan, for making my life easier and consistently delive.",
  },
  // 13. Man in Image 5 (Duplicate text, different person)
  {
    id: 13,
    user: "Jaskaran Singh",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Farhan demonstrates exceptional skill and creativity in crafting all types of reels. His professionalism, dedication, and talent make him an invaluable asset to any team. I rate Farhan 5 stars without hesitation.",
  },
];

export const Graphics = () => {
  const thumbnailStyles = [
    {
      icon: Zap,
      title: "MrBeast Style",
      description: "High-energy, attention-grabbing thumbnails with bold text and vibrant colors",
      gradient: "from-[#00c2c9] to-[#00c2c9]",
      thumbnails: [mrbeast1, mrbeast2, mrbeast3, mrbeast4, mrbeast5, mrbeast6],
    },
    {
      icon: Palette,
      title: "Faceless",
      description: "Faceless video thumbnails for various niches",
      gradient: "from-[#00c2c9] to-[#00c2c9]",
      thumbnails: [faceless9, faceless10, faceless11],
    },
    {
      icon: Palette,
      title: "Podcast Thumbnails",
      description: "Clean, professional designs perfect for podcast content",
      gradient: "from-[#00c2c9] to-[#00c2c9]",
      thumbnails: [podcast5, podcast6, podcast7],
    },
  ];

  const [activeStyle, setActiveStyle] = React.useState("MrBeast Style");

  return (
    <section id="graphics" className="py-10 relative w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle>Graphics & Thumbnails</SectionTitle>

        {/* Graphics Services */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto bg-[linear-gradient(to_top_right,_#111_0%,_rgba(17,17,17,1)_28%,_#111_60%,_rgba(0,194,201,0.6)_93%,_#00c2c9_100%)] backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-12 mb-8"
          >
            <div className="flex items-center justify-center mb-6 ">
              <Camera className="w-16 h-16 text-gray-300" />
            </div>
            <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              If you need any kind of thumbnail or design, we’ve got you completely covered. Whether it’s YouTube
              thumbnails, social media posts, or custom designs, our team can create everything tailored exactly to your
              needs.
            </p>
            <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              We also design custom cards for your company, wedding invitations, or special events — all made with
              creativity and attention to detail. Want a MrBeast-style thumbnail that stands out and grabs attention? We
              can do that for you too!
            </p>
            <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              From real-life thumbnails to podcast covers and announcement posts for your company or organization, we
              handle it all. Whatever your design needs are, we’ll make sure your visuals look bold, professional, and
              unforgettable.
            </p>
          </motion.div>
        </div>

        {/* Thumbnail Styles */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Thumbnail Styles
        </motion.h3>
        <div className="mb-16 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-stretch w-full mx-auto">
            {thumbnailStyles.map((style, index) => {
              const Icon = style.icon;
              const isActive = activeStyle === style.title;
              return (
                <motion.button
                  key={style.title}
                  type="button"
                  onClick={() => setActiveStyle(isActive ? null : style.title)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`group cursor-pointer relative overflow-hidden bg-[#2A2A2A] backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-[#00c2c9] transition-all duration-300 focus:outline-none ${
                    isActive ? "ring-3 ring-[#00e09e] border-[#00e09e]" : ""
                  }`}
                  aria-pressed={isActive}
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${style.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Active rotating border glow (subtle). Renders only when active. */}
                  {isActive && (
                    <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl">
                      {/* Rotating conic gradient layer (glowing). We rotate the element so the gradient appears to flow clockwise. */}
                      <span
                        className="absolute inset-0 rounded-xl animate-spin"
                        style={{
                          background: "conic-gradient(from 0deg at 0% 0%, #00c2c9, #00e09e, #111, #00c2c9)",
                          opacity: 0.95,
                          filter: "blur(6px)",
                          // ensure only the gradient layer rotates around the top center
                          transformOrigin: "50% 50%",
                          willChange: "transform",
                          // slow rotation for a subtle effect
                          animationDuration: "6s",
                          animationTimingFunction: "linear",
                          animationIterationCount: "infinite",
                        }}
                      />

                      {/* Inner cover to mask out the centre and show only the border ring. Keeps the original background intact. */}
                      <span className="absolute inset-[3px] rounded-[10px] bg-[#2A2A2A]" />
                    </span>
                  )}

                  <div className="relative z-10">
                    <div className="mb-4 inline-block p-3 bg-zinc-800/50 rounded-lg group-hover:bg-linear-to-br from-[#00c2c9] to-[#00c2c9]/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-gray-300" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{style.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{style.description}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
          {/* Thumbnails Grid for active style */}
          {activeStyle && (
            <div className="w-full max-w-5xl mx-auto mt-10 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
                {thumbnailStyles
                  .find((s) => s.title === activeStyle)
                  .thumbnails.map((thumb, idx) => (
                    <div
                      key={idx}
                      className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center"
                    >
                      {typeof thumb === "object" && thumb?.src ? (
                        <Image
                          src={thumb}
                          alt={activeStyle + " thumbnail " + (idx + 1)}
                          className="w-32 h-32 object-cover"
                          fill
                          sizes="(max-width: 768px) 40vw, 33vw"
                        />
                      ) : (
                        <img
                          src={thumb}
                          alt={activeStyle + " thumbnail " + (idx + 1)}
                          className="w-32 h-32 object-cover"
                        />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl bg-[linear-gradient(to_top_right,_#111_0%,_rgba(17,17,17,1)_28%,_#111_60%,_rgba(0,194,201,0.6)_93%,_#00c2c9_100%)]  backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Trusted by Leading Creators</h3>
          <p className="text-gray-300 text-lg mb-6">
            Our graphic design team has created thousands of thumbnails and graphics for top-performing channels
          </p>
          <div className="inline-flex items-center gap-2 text-[#C4A000] font-semibold">
            <Award className="w-5 h-5" />
            <span>Details and client logos available upon request</span>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-8 text-center mt-10"
        >
          Testimonials
        </motion.h3>
        <div className="relative w-full mx-auto">
          {/* Top Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 right-0 h-24 w-full z-10 bg-linear-to-b from-[#111] via-[#111]/80 to-transparent" />
          {/* Bottom Gradient (larger) */}
          <div className="pointer-events-none absolute left-0 bottom-0 right-0 h-40 w-full z-10 bg-linear-to-t from-[#111] via-[#111]/80 to-transparent" />
          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full px-4 mt-6">
                <TestimonialsVertical
                  testimonials={testimonialData}
                  height={35}
                  animationDuration={20}
                  direction="up"
                />
                <TestimonialsVertical
                  testimonials={testimonialData}
                  height={35}
                  animationDuration={20}
                  direction="down"
                />
                <TestimonialsVertical
                  testimonials={testimonialData}
                  height={35}
                  animationDuration={20}
                  direction="up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
