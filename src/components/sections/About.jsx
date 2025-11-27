"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Award, Users, Video, TrendingUp } from "lucide-react";
import aboutimage from "../../assets/user-images/image005.jpg";

export const About = () => {
  const stats = [
    { icon: Video, value: "10M+", label: "Total Views" },
    { icon: Users, value: "100+", label: "Channels Served" },
    { icon: Award, value: "5 Years", label: "Experience" },
    { icon: TrendingUp, value: "Top Rated", label: "Freelancer" },
  ];

  return (
    <section id="about" className="py-10 relative w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle>MEET FARHAN</SectionTitle>

        <div className="max-w-6xl mx-auto w-full">
          {/* Two-column layout for md+ screens, 1 column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-[6fr_2fr] items-center mb-12 gap-x-4">
            {/* Left: Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left rounded-2xl p-4"
            >
              <div className="mb-6">
                <p className="text-xs md:text-xl text-gray-200 leading-relaxed mb-2">
                  Hi, this is Farhan from Islamabad, Pakistan.
                  <br />
                  I’m a film student and entrepreneur with nearly five years of experience in content creation and video
                  production. Over the years, I’ve worked with more than 100 YouTube and social media channels, helping
                  generate over 10 million views across multiple platforms.
                </p>
                <p className="text-xs md:text-xl text-gray-200 leading-relaxed mb-2">
                  I specialize in producing high-quality videos across a wide range of niches — including short-form,
                  long-form, faceless content, and podcast edits. My work combines creative storytelling with strategic
                  editing to enhance audience engagement and brand visibility.
                </p>
                <p className="text-xs md:text-xl text-gray-200 leading-relaxed">
                  As a <span className="text-gray-300 font-semibold">Top-Rated freelancer</span>, I bring strong
                  expertise in content strategy, storytelling, editing, and engagement optimization, ensuring every
                  project delivers measurable growth and lasting impact for my clients.
                </p>
              </div>
            </motion.div>
            {/* Right: Image (smaller than text section on md+) */}
            <div className="flex justify-center md:justify-end">
              <Image
                src={aboutimage}
                alt="TOF profile"
                width={240}
                height={240}
                className="rounded-2xl shadow-lg w-40 h-50 md:w-60 md:h-76 object-cover border-2 border-[#004526] bg-zinc-900"
                style={{ maxWidth: "340px", maxHeight: "340px" }}
                priority
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-[#2A2A2A] backdrop-blur-sm rounded-xl p-6 text-center hover:border-[#004526] transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-[#008A50] mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
