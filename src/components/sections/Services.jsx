"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Video, Mic, PlayCircle, Film, Camera, Users, Award, Clapperboard } from "lucide-react";
// Production client logos (static imports for Next.js optimization)
import diyarResortsImg from "../../assets/videoEditingClients/diyarresorts.png";
import kpLogoImg from "../../assets/videoEditingClients/kp_logo.png";
import ministryNarcoticsImg from "../../assets/videoEditingClients/min_narcotics.jpeg";
import chashniImg from "../../assets/videoEditingClients/chashni.png";
import zaarRetailImg from "../../assets/videoEditingClients/zaar.png";
import sulmeenAnsariImg from "../../assets/videoEditingClients/SulmeenAnsari.jpg";
import meljouliImg from "../../assets/videoEditingClients/meljoul.jpg";
import { VideosSection } from "../ui/Videos.section";
import { Productionvideos } from "../ui/Production.videos";
import Link from "next/link";

import RamisAnsariImg from "../../assets/youtube client images/Ramis Ansari.jpg";
import RavenSchwamCurtisImg from "../../assets/youtube client images/Raven Schwam‑Curtis.jpg";
import WholesaleTedImg from "../../assets/youtube client images/Wholesale Ted.jpg";
import KristinasTravelsImg from "../../assets/youtube client images/Kristina's Travels.jpg";
import MikeKravchenkoImg from "../../assets/youtube client images/Mike Kravchenko.jpg";
import DailyFuelUpImg from "../../assets/youtube client images/DailyFuelUp.jpg";
import AKAELITEImg from "../../assets/youtube client images/AKA ELITE.jpg";
import IconicMindsImg from "../../assets/youtube client images/Iconic Minds.jpg";
import WealthFilesImg from "../../assets/youtube client images/Wealth Files.jpg";
import UntoldArchivesImg from "../../assets/youtube client images/Untold Archives.jpg";
import TrueTragedyImg from "../../assets/youtube client images/True Tragedy.jpg";
import TILTImg from "../../assets/youtube client images/TILT.jpg";
import WaleedMalikImg from "../../assets/youtube client images/Waleed Malik.jpg";
import CoreyDashaunImg from "../../assets/youtube client images/Corey Dashaun.jpg";
import NaturalCuresImg from "../../assets/youtube client images/Natural Cures.jpg";
import { ProfileMarquee, GenericMarquee } from "@/components/ui/Marquees";
import { FaYoutube } from "react-icons/fa";
import PureLivingImg from "../../assets/youtube client images/Pure Living.jpg";
import PremierPuttingImg from "../../assets/youtube client images/Premier Putting.jpg";
import DisasterDetailsImg from "../../assets/youtube client images/Disaster Details.jpg";
import EliteAimImg from "../../assets/youtube client images/Elite Aim.jpg";
import SanaShiraziImg from "../../assets/youtube client images/Sana Shirazi.jpg";
import EraOrganicsImg from "../../assets/youtube client images/Era Organics.jpg";
import DLKGamesImg from "../../assets/youtube client images/DLK Games.jpg";
import DomesticCrimeImg from "../../assets/youtube client images/Domestic Crime.jpg";

// Video Editing Clients (YouTube)
const videoEditingClients = [
  {
    name: "Ramis Ansari",
    img: RamisAnsariImg,
    link: "https://m.youtube.com/@RamisAnsari",
    platform: "youtube",
    followers: "100k",
  },
  {
    name: "Raven Schwam‑Curtis",
    img: RavenSchwamCurtisImg,
    link: "https://m.youtube.com/@ravenreveals",
    platform: "youtube",
    followers: "12.9k",
  },
  {
    name: "Wholesale Ted",
    img: WholesaleTedImg,
    link: "https://m.youtube.com/@WholesaleTed",
    platform: "youtube",
    followers: "1.4m",
  },
  {
    name: "Kristina's Travels",
    img: KristinasTravelsImg,
    link: "https://m.youtube.com/@KristinasTravels",
    platform: "youtube",
    followers: "182k",
  },
  {
    name: "Mike Kravchenko",
    img: MikeKravchenkoImg,
    link: "https://m.youtube.com/@mkravchenko",
    platform: "youtube",
    followers: "1.26k",
  },
  {
    name: "DailyFuelUp",
    img: DailyFuelUpImg,
    link: "https://m.youtube.com/@DailyFuelUp",
    platform: "youtube",
    followers: "287k",
  },
  {
    name: "AKA ELITE",
    img: AKAELITEImg,
    link: "https://m.youtube.com/@AKAELITE",
    platform: "youtube",
    followers: "3.21k",
  },
  {
    name: "Iconic Minds",
    img: IconicMindsImg,
    link: "https://m.youtube.com/@iconicminds7210",
    platform: "youtube",
    followers: "66",
  },
  {
    name: "Waleed Malik",
    img: WaleedMalikImg,
    link: "https://www.youtube.com/@waleedmalikworld",
    platform: "youtube",
    followers: "41.8k",
  },
  {
    name: "Corey Dashaun",
    img: CoreyDashaunImg,
    link: "https://www.youtube.com/@coreydashaunwooten",
    platform: "youtube",
    followers: "65",
  },
  {
    name: "Natural Cures",
    img: NaturalCuresImg,
    link: "https://www.youtube.com/@NaturalCures",
    platform: "youtube",
    followers: "3.64m",
  },
  {
    name: "Wealth Files",
    img: WealthFilesImg,
    link: "https://m.youtube.com/@TheeWealthFiles",
    platform: "youtube",
    followers: "6",
  },
  {
    name: "Untold Archives",
    img: UntoldArchivesImg,
    link: "https://m.youtube.com/@UntoldArchives.official",
    platform: "youtube",
    followers: "7.68k",
  },
  {
    name: "True Tragedy",
    img: TrueTragedyImg,
    link: "https://m.youtube.com/@TrueTragedy",
    platform: "youtube",
    followers: "19.1k",
  },
  {
    name: "TILT",
    img: TILTImg,
    link: "https://m.youtube.com/@TILT223",
    platform: "youtube",
    followers: "74k",
  },
  {
    name: "Pure Living",
    img: PureLivingImg,
    link: "https://www.youtube.com/@PureLiving-2023",
    platform: "youtube",
    followers: "6",
  },
  {
    name: "Premier Putting",
    img: PremierPuttingImg,
    link: "https://www.youtube.com/@PremierPutting-e8j",
    platform: "youtube",
    followers: "1",
  },
  {
    name: "Disaster Details",
    img: DisasterDetailsImg,
    link: "https://www.youtube.com/@DisasterDetails-yt",
    platform: "youtube",
    followers: "3.42k",
  },
  {
    name: "Elite Aim",
    img: EliteAimImg,
    link: "https://www.youtube.com/@EliiteAim",
    platform: "youtube",
    followers: "5.88k",
  },
  {
    name: "Sana Shirazi",
    img: SanaShiraziImg,
    link: "https://www.youtube.com/@sanashirazi9159",
    platform: "youtube",
    followers: "1",
  },
  {
    name: "Era Organics",
    img: EraOrganicsImg,
    link: "https://www.youtube.com/@Eraorganics",
    platform: "youtube",
    followers: "613",
  },
  {
    name: "DLK Games",
    img: DLKGamesImg,
    link: "https://www.youtube.com/@dlkgames7638",
    platform: "youtube",
    followers: "8",
  },
  {
    name: "Domestic Crime",
    img: DomesticCrimeImg,
    link: "https://www.youtube.com/@domesticcrime",
    platform: "youtube",
    followers: "18.1k",
  },
];

const serviceCategories = [
  { icon: Award, key: "ads", title: "Advertisements", description: "Professional commercial video production" },
  { icon: Users, key: "weddings", title: "Weddings", description: "Beautiful wedding cinematography" },
  { icon: Film, key: "webseries", title: "Web Series", description: "Creative storytelling and production" },
  { icon: Mic, key: "music", title: "Music Videos", description: "High-quality music video production" },
  { icon: Clapperboard, key: "commevent", title: "Community Event", description: "In-depth documentary filmmaking" },
  { icon: PlayCircle, key: "videoediting", title: "Video Editing", description: "All types of video editing services" },
  { icon: Video, key: "graphics", title: "Graphics", description: "Graphics & Thumbnails for your brand" },
];

export const Services = () => {
  const [active, setActive] = useState("ads");

  // Re-add production clients used in the Production section marquees
  const productionClients = [
    {
      name: "DIYAR RESORTS",
      img: diyarResortsImg,
      link: "https://diyarresorts.com/",
    },
    {
      name: "GOVERNMENT OF KHYBER PAKHTUNKHWA",
      img: kpLogoImg,
      link: "https://www.kp.gov.pk/",
    },
    {
      name: "MINISTRY OF INTERIOR & NARCOTICS CONTROL",
      img: ministryNarcoticsImg,
      link: "https://www.interior.gov.pk/",
    },
    {
      name: "CHASHNI",
      img: chashniImg,
      link: "https://chashni.pk/",
    },
    {
      name: "ZAAR RETAIL",
      img: zaarRetailImg,
      link: "https://zaarretail.com/",
    },
    {
      name: "SULMEEN ANSARI",
      img: sulmeenAnsariImg,
      link: "https://www.instagram.com/sulmeenansari/",
    },
    {
      name: "MEL JOUL",
      img: meljouliImg,
      link: "https://www.instagram.com/meljoul?igsh=M2s0OG1yd2lvNG1h",
    },
  ];

  // Removed custom marquee duration logic; using ProfileMarquee component instead.
  return (
    <>
      {/* Services (top-level section) */}
      <section className="py-10 relative w-full" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle>Services</SectionTitle>
          {/* Restored scrolling marquee for service categories using GenericMarquee */}
          <GenericMarquee speed={55} direction="left" pauseOnHover wrapperClass="relative mb-20">
            {[...serviceCategories, ...serviceCategories].map((cat, i) => {
              const Icon = cat.icon;
              const isActive = active === cat.key;
              const baseClasses = `flex flex-col ml-2 mr-2 items-center shrink-0 px-4 py-4 rounded-2xl border border-white/20 bg-linear-to-br from-[#002312] to-[#00c2c9] shadow-lg w-[160px] h-[120px] sm:w-[200px] sm:h-[140px] md:w-[240px] md:h-[160px] lg:w-[260px] lg:h-[160px] mt-1 transition-all duration-300 hover:bg-[#005830] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#008A50] ${
                isActive
                  ? "ring-4 ring-[#00e09e] scale-102 mb-2 bg-[#008A50] text-white shadow-2xl border-[#00e09e]"
                  : "opacity-85"
              }`;
              if (cat.key === "weddings") {
                return (
                  <Link
                    href="/weddings"
                    prefetch
                    key={`${cat.key}-${i}`}
                    className={`group cursor-pointer ${baseClasses}`}
                    role="button"
                    onFocus={() => setActive(cat.key)}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                    <span className="font-bold text-base md:text-lg lg:text-xl mb-1 text-center">{cat.title}</span>
                    <span className="text-[0.7rem] md:text-[0.90rem] lg:text-sm text-white/80 text-center whitespace-normal">
                      {cat.description}
                    </span>
                  </Link>
                );
              }
              return (
                <button
                  key={`${cat.key}-${i}`}
                  type="button"
                  onClick={() => {
                    if (["ads", "webseries", "music", "commevent"].includes(cat.key)) {
                      const section = document.getElementById("production");
                      if (section) {
                        const y = section.getBoundingClientRect().top + window.scrollY + 340;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                      setActive(cat.key);
                    } else if (cat.key === "videoediting") {
                      document.getElementById("videoediting")?.scrollIntoView({ behavior: "smooth" });
                      setActive(cat.key);
                    } else if (cat.key === "graphics") {
                      document.getElementById("graphics")?.scrollIntoView({ behavior: "smooth" });
                      setActive(cat.key);
                    } else {
                      setActive(cat.key);
                    }
                  }}
                  className={`group cursor-pointer ${baseClasses}`}
                  aria-pressed={isActive}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                  <span className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl mb-1 text-center">
                    {cat.title}
                  </span>
                  <span className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-sm text-white/80 text-center whitespace-normal">
                    {cat.description}
                  </span>
                </button>
              );
            })}
          </GenericMarquee>
        </div>
      </section>

      {/* Video Editing (top-level section) */}
      <section className="py-10 relative w-full" id="videoediting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle>Video Editing Services</SectionTitle>

          {/* Video Editing Services */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm border bg-[linear-gradient(to_top_right,#111_0%,rgba(17,17,17,1)_28%,#111_60%,rgba(0,194,201,0.6)_93%,#00c2c9_100%)] border-zinc-800 rounded-2xl p-8 md:p-12 mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Camera className="w-16 h-16 text-gray-300" />
              </div>
              <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
                Our working process is extremely simple and transparent. If you already have a raw video, all you need
                to do is share a reference video or an example of the style you like. Based on that, we’ll create a
                video that matches the same tone, pacing, and visual appeal.
              </p>
              <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
                Once we receive your raw footage and any supporting materials, our team immediately starts working on
                the project. The editing process usually takes around 3 to 5 days, depending on the length and
                complexity of the video. During this time, we carefully focus on every detail — from color correction
                and transitions to sound design, pacing, and storytelling — to make sure the final product looks
                professional and visually captivating.
              </p>
              <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
                We specialize in turning your script or raw idea into a highly engaging and impactful video that
                captures attention and keeps the audience watching till the very end. Our goal is to not just edit, but
                to elevate your content and bring your creative vision to life.
              </p>
              <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
                You can also explore samples of our previous work on my website, where you’ll get a better idea of our
                editing quality and the kind of videos we can produce for you.
              </p>
            </motion.div>
          </div>

          {/* Video Types */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Types of Videos We Edit
          </motion.h3>

          {/* Video Section */}
          <VideosSection />

          {/* YouTube Clients */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Our Clients
            </motion.h3>
            <div className="max-w-6xl mx-auto">
              <ProfileMarquee
                users={videoEditingClients.map((c, i) => ({
                  id: `${c.name}-${i}`,
                  image: c.img?.src || (typeof c.img === "string" ? c.img : ""),
                  name: c.name,
                  link: c.link,
                  number: c.followers,
                }))}
                speed={60}
                followerIcon={<FaYoutube className="text-red-600 w-5 h-5" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production (top-level section) */}
      <section className="py-10 relative w-full" id="production">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            <SectionTitle>Production Services</SectionTitle>
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[linear-gradient(to_top_right,#111_0%,rgba(17,17,17,1)_28%,#111_60%,rgba(0,194,201,0.6)_93%,#00c2c9_100%)] backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-12 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-16 h-16 text-gray-300" />
            </div>
            <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              We handle everything from mobile phone shoots to professional Sony A7 IV productions — no matter how big
              or small your project is, we take full responsibility for delivering quality results. Our team is highly
              skilled, well-equipped, and works under the direction of Farhan, ensuring every project meets professional
              standards.
            </p>
            <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              From documentaries to web series, we cover almost every aspect of video production. Whether you need
              on-location shooting or a fully equipped studio, we can provide everything you need to bring your vision
              to life.
            </p>
            <p className="text-xs md:text-lg lg:text-xl text-gray-200 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              For the past five years, we’ve been working with clients both within Islamabad and across other cities,
              building a strong reputation for reliability, creativity, and professional execution.
            </p>
          </motion.div>

          {/* Production Services */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Production Services
          </motion.h3>

          {/* Service Categories */}
          <Productionvideos />

          {/* Production Clients */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center mt-10"
          >
            Production Clients
          </motion.h3>
          <div className="max-w-6xl mx-auto">
            <ProfileMarquee
              users={productionClients.map((c, i) => ({
                id: `${c.name}-${i}`,
                image: c.img?.src || (typeof c.img === "string" ? c.img : ""),
                name: c.name,
                link: c.link,
                number: c.followers,
              }))}
              speed={60}
              showFollowers={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};
