"use client";

import { useRef } from "react";

export const TestimonialsVertical = ({
  testimonials = [],
  height = "64", // Tailwind h-64 default
  animationDuration = 10, // seconds
  direction = "up", // 'up' | 'down'
}) => {
  const containerRef = useRef(null);

  // Duplicate testimonials for seamless infinite scroll
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-lg mx-auto" style={{ height: `${height}rem` }}>
      <div
        ref={containerRef}
        className={`flex flex-col py-4 space-y-4 ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}
        style={{
          willChange: "transform",
        }}
      >
        {displayTestimonials.map(({ id, user, img, text }, index) => (
          <div
            key={id + "-" + index}
            className="flex flex-col shrink-0 space-y-3 rounded-md p-4 bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 px-4"
          >
            <div className="flex items-center space-x-3 min-w-0">
              <img
                src={img}
                alt={`${user} profile`}
                className="w-12 h-12 rounded-full border-2 border-[#00A967] flex-shrink-0"
              />
              <span
                className="font-bold text-white text-md md:text-lg lg:text-xl break-words w-full"
                style={{ minWidth: 0 }}
              >
                {user}
              </span>
            </div>
            <p className="text-gray-300 text-xs md:text-xs lg:text-base leading-relaxed break-words whitespace-pre-line w-full overflow-hidden">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
