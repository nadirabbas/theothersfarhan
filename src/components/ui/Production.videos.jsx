import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Users, Film, Mic, Clapperboard } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useRouter } from "next/navigation";

const serviceVideos = {
  webseries: [
    "https://www.youtube.com/embed/tozDvAjTS4g",
    "https://www.youtube.com/embed/b8jn2mtZjE4",
    "https://www.youtube.com/embed/IiB3C6lIDnM",
  ],
  music: ["https://www.youtube.com/embed/QBHsUcqOx_0", "https://www.youtube.com/embed/o9lCd9twKmY"],
  commevent: ["https://www.youtube.com/embed/HxwmHfktacM"],
};

export const Productionvideos = () => {
  const serviceCategories = [
    { icon: Users, key: "weddings", title: "Weddings", description: "Beautiful wedding cinematography" },
    { icon: Film, key: "webseries", title: "Web Series", description: "Creative storytelling and production" },
    { icon: Mic, key: "music", title: "Music Videos", description: "High-quality music video production" },
    { icon: Clapperboard, key: "commevent", title: "Community Events", description: "In-depth documentary filmmaking" },
  ];
  const [active, setActive] = useState("webseries");
  const router = useRouter();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 justify-items-center mx-auto">
        {serviceCategories.map((category, index) => {
          const Icon = category.icon;
          const isActive = active === category.key;
          return (
            <motion.button
              key={category.key}
              type="button"
              onClick={() => {
                if (category.key === "weddings") {
                  router.push("/weddings");
                } else {
                  setActive(isActive ? null : category.key);
                }
              }}
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
                <h4 className="text-xl font-bold text-white mb-3">{category.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Video Grid for selected category (except weddings) */}
      {active !== "weddings" && (
        <div className="w-full max-w-6xl mt-0 mb-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
            {(serviceVideos[active] || []).slice(0, 9).map((url, idx) => (
              <div
                key={`${active}-${idx}`}
                className="w-full max-w-full h-auto rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center aspect-video min-h-60 sm:min-h-[240px] max-h-[60vh]"
              >
                <iframe
                  src={url}
                  title={`YouTube video player ${idx}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ aspectRatio: "16/9" }}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
