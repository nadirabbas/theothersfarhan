"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Heart, Film, Camera } from "lucide-react";

export const Portfolio = () => {
  const rawLinks = {
    reels: ["https://www.youtube.com/shorts/6cGBSAkzmjo", "https://www.youtube.com/shorts/WdYVd1a_da8"],
    highlights: [
      "https://youtu.be/Z6jKgWaQDcE",
      "https://youtu.be/GOy-90fMZvM",
      "https://youtu.be/n4f3JIDrHys",
      "https://youtu.be/eThNAtNJU6Y",
    ],
  };

  const toEmbed = (url) => {
    try {
      if (!url) return url;
      if (url.includes("/shorts/")) {
        // https://www.youtube.com/shorts/ID -> /embed/ID
        const id = url.split("/shorts/")[1].split(/[?&#]/)[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1].split(/[?&#]/)[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (url.includes("watch?v=")) {
        const id = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${id}`;
      }
      return url;
    } catch {
      return url;
    }
  };

  // Active category state must be declared before any hooks/effects that reference it
  const [active, setActive] = useState("reels");

  // Track players and playing state
  const playersRef = useRef({});
  const playingSetRef = useRef(new Set());
  const apiReadyRef = useRef(false);

  // Load YouTube IFrame API once
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.YT && window.YT.Player) {
      apiReadyRef.current = true;
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.head.appendChild(script);
    window.onYouTubeIframeAPIReady = () => {
      apiReadyRef.current = true;
      // Once API ready, attempt to bind existing iframes
      initAllIframes();
    };
  }, []);

  // Initialize players for current active category's iframes
  useEffect(() => {
    if (!apiReadyRef.current) return; // wait until API ready
    // Delay a tick for React render
    const t = setTimeout(() => initAllIframes(), 120);
    return () => clearTimeout(t);
  }, [active]);

  const dispatchBgAudio = (action) => {
    const evt = new CustomEvent("bg-audio-control", { detail: { action } });
    window.dispatchEvent(evt);
  };

  const handlePlayerState = (player, state) => {
    // YT.PlayerState.PLAYING === 1, PAUSED === 2, ENDED === 0
    if (state === window.YT.PlayerState.PLAYING) {
      playingSetRef.current.add(player.getIframe().id);
      dispatchBgAudio("pause");
    } else if (state === window.YT.PlayerState.PAUSED || state === window.YT.PlayerState.ENDED) {
      playingSetRef.current.delete(player.getIframe().id);
      if (playingSetRef.current.size === 0) {
        dispatchBgAudio("resume");
      }
    }
  };

  const initAllIframes = () => {
    const container = document.getElementById("portfolio");
    if (!container || !window.YT || !window.YT.Player) return;
    const iframes = container.querySelectorAll("iframe[data-yt-embed]");
    iframes.forEach((iframe) => {
      const id = iframe.id;
      if (!id) return;
      if (playersRef.current[id]) return; // already initialized
      try {
        const player = new window.YT.Player(id, {
          events: {
            onStateChange: (e) => handlePlayerState(player, e.data),
          },
        });
        playersRef.current[id] = player;
      } catch (err) {
        // swallow errors quietly
      }
    });
  };

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      Object.values(playersRef.current).forEach((p) => {
        try {
          p.destroy();
        } catch {}
      });
      playersRef.current = {};
      playingSetRef.current.clear();
    };
  }, []);

  const portfolioCategories = [
    {
      key: "reels",
      icon: Heart,
      title: "Weddings Reels",
      description: "Beautiful short-form wedding moments",
      videos: rawLinks.reels.map(toEmbed),
    },
    {
      key: "highlights",
      icon: Film,
      title: "Highlights",
      description: "Cinematic wedding highlight films",
      videos: rawLinks.highlights.slice(0, 4).map(toEmbed),
    },
  ];

  // (moved above effects to avoid temporal dead zone ReferenceError)

  // Replicate the exact animated card design and grid structure from the provided reference
  const cardStyles = [
    {
      key: "reels",
      icon: Heart,
      title: "Weddings Reels",
      description: "Beautiful short-form wedding moments",
      gradient: "from-[#D4AF37] to-[#F5DEB3]",
    },
    {
      key: "highlights",
      icon: Film,
      title: "Highlights",
      description: "Cinematic wedding highlight films",
      gradient: "from-[#F5DEB3] to-[#D4AF37]",
    },
  ];

  return (
    <section id="portfolio" className="w-full py-20 px-4 md:px-6 lg:px-8">
      <div className="w-full">
        {/* Section Title */}
        <SectionTitle titleColor="text-[#D4AF37] font-great-vibes">Portfolio</SectionTitle>

        {/* Test paragraph to validate font */}
        <p className="text-center text-3xl font-great-vibes text-[#D4AF37] mb-4">Capturing Your Beautiful Moments</p>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F5DC] backdrop-blur-sm border border-[#D4AF37] rounded-2xl p-8 md:p-12 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-16 h-16 text-[#D4AF37]" />
            </div>
            <p className="text-lg text-gray-800 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              We shoot everything from scratch with professional planning and execution. We have a fully equipped studio
              and a team of <span className="text-[#D4AF37] font-semibold">10+ experienced videographers</span> using
              industry-standard cameras, gimbals, and drones. You have an idea? We'll write the script, shoot, and edit
              the complete project for you!
            </p>
          </motion.div>
        </div>

        {/* Category Cards Grid - Replicated Design */}
        <div className="flex justify-center items-center w-full mb-12 mt-12">
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {cardStyles.map((style, index) => {
              const Icon = style.icon;
              const isActive = active === style.key;
              return (
                <motion.button
                  key={style.title}
                  type="button"
                  onClick={() => setActive(isActive ? null : style.key)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`w-full sm:w-80 md:w-72 lg:w-70 group cursor-pointer relative overflow-hidden bg-[#F5F5DC] border-2 border-[#D4AF37]/40 rounded-xl p-6 hover:border-[#D4AF37] transition-all duration-300 focus:outline-none ${
                    isActive ? "ring-3 ring-[#d8ba59] border-[#dcbb4e] shadow-2xl" : ""
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
                          background: "conic-gradient(from 0deg at 0% 0%, #A67C00, #FFD700, #FFE4B5, #A67C00)",
                          opacity: 0.95,
                          filter: "blur(6px)",
                          transformOrigin: "50% 50%",
                          willChange: "transform",
                          animationDuration: "6s",
                          animationTimingFunction: "linear",
                          animationIterationCount: "infinite",
                        }}
                      />
                      {/* Inner cover to mask out the centre and show only the border ring. Keeps the original background intact. */}
                      <span className="absolute inset-[3px] rounded-[10px] bg-[#F5F5DC]" />
                    </span>
                  )}

                  <div className="relative z-10">
                    <div className="mb-4 inline-block p-3 bg-[#F5DEB3]/60 rounded-lg group-hover:bg-[#D4AF37]/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#8B7355]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#5C4033] mb-3">{style.title}</h4>
                    <p className="text-[#8B7355] text-sm leading-relaxed">{style.description}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Video Grid (conditional) */}
        {/* Video Grid (conditional) */}
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full mt-10"
          >
            {(() => {
              const videos = portfolioCategories.find((c) => c.key === active)?.videos || [];
              const isShortForm = active === "reels";

              if (isShortForm) {
                // Fixed-size, centered 2x2 grid to keep reels size intact regardless of container
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-2xl mx-auto">
                    {videos.slice(0, 4).map((url, idx) => (
                      <div key={`${active}-${idx}`} className="w-60 sm:w-[260px] md:w-75">
                        <div className="w-full rounded-xl overflow-hidden shadow-lg bg-[#8B7355]/10 border-2 border-[#D4AF37]/20 aspect-9/16">
                          <iframe
                            id={`yt-${active}-${idx}`}
                            data-yt-embed
                            src={`${url}?enablejsapi=1&playsinline=1`}
                            title={`${active} video ${idx}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                            style={{ aspectRatio: "9/16" }}
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Highlights: keep existing responsive grid and sizing
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr">
                  {videos.map((url, idx) => (
                    <div
                      key={`${active}-${idx}`}
                      className={
                        "w-full max-w-full h-auto rounded-xl overflow-hidden shadow-lg bg-[#8B7355]/10 border-2 border-[#D4AF37]/20 flex items-center justify-center aspect-video min-h-60 sm:min-h-60 max-h-[60vh]"
                      }
                    >
                      <iframe
                        id={`yt-${active}-${idx}`}
                        data-yt-embed
                        src={`${url}?enablejsapi=1&playsinline=1`}
                        title={`${active} video ${idx}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                        style={{ aspectRatio: "16/9" }}
                      ></iframe>
                    </div>
                  ))}
                </div>
              );
            })()}
          </motion.div>
        )}
      </div>
    </section>
  );
};
