import React, { useState } from "react";
import { motion } from "framer-motion";

import { PlayCircle, Video, Film, Mic } from "lucide-react";

const videoTypes = [
  {
    key: "short",
    icon: PlayCircle,
    title: "Short Form Videos",
    description: "Engaging short-form content optimized for social media platforms",
    videos: [
      "https://youtube.com/embed/GGC4b-2qUOk",
      "https://youtube.com/embed/8XKKQihdAr4",
      "https://www.youtube.com/embed/RWjS1fXjlBA",
      "https://www.youtube.com/embed/lCL_bTMuLgo",
      "https://www.youtube.com/embed/sLLXLn7GY-I",
      "https://www.youtube.com/embed/VgseEJ430A8",
    ],
  },
  {
    key: "long",
    icon: Video,
    title: "Talking-Head Videos",
    description: "Professional talking-head content with dynamic editing",
    videos: [
      "https://www.youtube.com/embed/tVZOS5Z019U",
      "https://www.youtube.com/embed/acEJRhZBSVk",
      "https://www.youtube.com/embed/aG-bVL7oFQo",
      "https://www.youtube.com/embed/gTkfDjUBXMY",
      "https://www.youtube.com/embed/6BsDM6ODD3g",
      "https://www.youtube.com/embed/nKr-1qhM16k",
    ],
  },
  {
    key: "faceless",
    icon: Film,
    title: "Faceless Videos",
    description: "High-quality faceless content for various niches",
    videos: [
      "https://www.youtube.com/embed/w7xTY47TgcY",
      "https://www.youtube.com/embed/v5Bv_A8F7AE?si=IqT_qdd67O2CecV-",
      "https://www.youtube.com/embed/tNgMsXdLNSk",
      "https://www.youtube.com/embed/0iN_4sBWcbc?si=SOe9YQeBvoeV_RUu",
      "https://www.youtube.com/embed/x1hpfKSktro",
      "https://www.youtube.com/embed/Oc-uB5C5r54",
    ],
  },
  {
    key: "podcast",
    icon: Mic,
    title: "Podcast Videos",
    description: "Complete podcast editing with visual enhancements",
    videos: [
      "https://www.youtube.com/embed/I6wCuvvaRPI?si=Xpbho-hBY0uls-YD",
      "https://www.youtube.com/embed/oX7OduG1YmI?si=btb7pmxEAASunq2a",
      "https://www.youtube.com/embed/7ARBJQn6QkM?si=HTXAIho16UpPehXA",
    ],
  },
];

const placeholderVideos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/ysz5S6PUM-U",
  "https://www.youtube.com/embed/ScMzIvxBSi4",
  "https://www.youtube.com/embed/aqz-KE-bpKQ",
];

export const VideosSection = () => {
  const [active, setActive] = useState("long");

  return (
    <section className="w-full flex flex-col items-center py-8 overflow-x-hidden mt-10 mb-20">
      {/* Category Cards Grid (2x2, matches Types of Videos We Edit) */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-3 lg:gap-3 mb-12">
        {videoTypes.map((type, index) => {
          const Icon = type.icon;
          const isActive = active === type.key;
          return (
            <motion.button
              key={type.key}
              type="button"
              onClick={() => setActive(isActive ? null : type.key)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group cursor-pointer relative overflow-hidden bg-[#2A2A2A] backdrop-blur-sm border border-zinc-800 rounded-xl p-2 md:p-6 lg:p-6 hover:border-[#00c2c9] transition-all duration-300 focus:outline-none ${
                isActive ? "ring-3 ring-[#00e09e] border-[#00e09e]" : ""
              } w-[80%] h-[80%] md:w-[94%] md:h-[94%] lg:w-[94%] lg:h-[94%] mx-auto min-h-[180px] flex flex-col items-center`}
              aria-pressed={isActive}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br from-[#00c2c9] to-[#00c2c9] opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
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
                      // ensure only the gradient layer rotates around the center
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
                <div className="mb-1 md:mb-4 lg:mb-4 inline-block p-3 bg-zinc-800/50 rounded-lg group-hover:bg-linear-to-br from-[#00c2c9] to-[#00c2c9]/20 transition-all duration-300">
                  <Icon className="w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 text-gray-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1 md:mb-3 lg:mb-3 text-center">{type.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed text-center">{type.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Video Grid (conditional) */}
      {active && (
        <div className="w-full max-w-6xl mt-10 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
            {(() => {
              const videos = (videoTypes.find((c) => c.key === active)?.videos || placeholderVideos).slice(0, 9);
              const cols = 3;
              const lastRowCount = videos.length % cols === 0 ? cols : videos.length % cols;
              return videos.map((url, idx) => {
                const isShort = active === "short";
                let extraGridClass = "";
                if (idx === videos.length - 1 && lastRowCount === 1 && videos.length > 1) {
                  extraGridClass = "md:col-start-2";
                }
                const isInstagram = url.includes("instagram.com/reel");
                if (isInstagram) {
                  return (
                    <div
                      key={`${active}-insta-${idx}`}
                      className={`w-full max-w-full h-auto rounded-xl overflow-hidden shadow-lg bg-black flex flex-col items-center justify-center aspect-9/16 min-h-60 sm:min-h-[400px] max-h-[80vh] ${extraGridClass}`}
                    >
                      <div className="flex flex-col items-center justify-center h-full w-full p-4">
                        <div className="flex items-center justify-center mb-4">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 448 512"
                            fill="#E1306C"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 1.7 353.3 0C317.3-1.7 130.7-1.7 94.7 0 59.4 1.7 28 9.9 2.7 36.2S1.7 123.4 0 158.7C-1.7 194.7-1.7 381.3 0 417.3c1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2c36 1.7 222.6 1.7 258.6 0 35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-36 1.7-222.6 0-258.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.9 24.6 191.7 27.2 224.8 27.2s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z" />
                          </svg>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center">
                          <span className="text-white text-lg font-semibold mb-2">Instagram Reel</span>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-[#E1306C] text-white rounded-lg font-bold hover:bg-[#c72d5d] transition-colors duration-200"
                          >
                            Watch on Instagram
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
                // YouTube fallback
                return (
                  <div
                    key={`${active}-${idx}`}
                    className={`w-full max-w-full h-auto rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center ${
                      isShort
                        ? "aspect-9/16 min-h-60 sm:min-h-[400px] max-h-[80vh]"
                        : "aspect-video min-h-60 sm:min-h-[240px] max-h-[60vh]"
                    } ${extraGridClass}`}
                  >
                    <iframe
                      src={url}
                      title={`YouTube video player ${idx}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                      style={isShort ? { aspectRatio: "9/16" } : { aspectRatio: "16/9" }}
                    ></iframe>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      )}
    </section>
  );
};
