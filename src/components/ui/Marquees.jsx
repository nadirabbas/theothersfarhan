"use client";
import Marquee from "react-fast-marquee";
// Removed FaYoutube import as it is no longer needed

// Generic marquee container to render arbitrary children with gradient overlays
export const GenericMarquee = ({
  children,
  speed = 60,
  direction = "left",
  pauseOnHover = true,
  leftOverlayClass = "absolute right-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#111]/70 to-[#111] z-20 pointer-events-none",
  rightOverlayClass = "absolute left-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-r from-[#111] via-[#111]/70 to-transparent z-20 pointer-events-none",
  innerClass = "mx-auto w-full z-20",
  wrapperClass = "relative flex items-center justify-center py-8",
}) => {
  return (
    <div className={wrapperClass}>
      <div className={leftOverlayClass} />
      <div className={rightOverlayClass} />
      <div className={innerClass}>
        <Marquee
          speed={speed}
          gradient={false}
          direction={direction}
          pauseOnHover={pauseOnHover}
          className="flex items-center"
        >
          {children}
        </Marquee>
      </div>
    </div>
  );
};

// Profile marquee specialized for user/avatar lists

export const ProfileMarquee = ({
  users,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  autoFill = true,
  leftOverlayClass = "absolute right-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#111]/80 to-[#111] z-20 pointer-events-none",
  rightOverlayClass = "absolute left-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent z-20 pointer-events-none",
  innerClass = "relative mx-auto w-full max-w-6xl z-10 overflow-hidden",
  wrapperClass = "relative flex items-center justify-center py-8 bg-[#111]",
  followerIcon = null,
  showFollowers = true,
}) => {
  return (
    <div className={wrapperClass}>
      {/* Gradient overlays above content */}
      <div className={leftOverlayClass} />
      <div className={rightOverlayClass} />

      {/* Marquee content */}
      <div className={innerClass}>
        <Marquee speed={speed} gradient={false} direction={direction} pauseOnHover={pauseOnHover} autoFill={autoFill}>
          <div className="flex items-start gap-4">
            {users.map((user, idx) => {
              const src = typeof user.image === "string" ? user.image : user.image?.src || "";
              return (
                <a
                  key={user.id || `${user.name}-${idx}`}
                  href={user.link || "#"}
                  target={user.link ? "_blank" : undefined}
                  rel={user.link ? "noopener noreferrer" : undefined}
                  className="group inline-block w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] align-top"
                >
                  {/* Avatar row - fixed height, immune to text changes */}
                  <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[88px] sm:h-[104px] md:h-[120px] lg:h-[136px] flex items-center justify-center mb-0">
                    <img
                      src={src}
                      alt={user.name}
                      className="cursor-pointer rounded-full object-cover border-4 border-[#222] group-hover:border-[#00c2c9] transition-colors duration-300 shadow-lg block w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  {/* Text section - separate block, starts at same position for all */}
                  <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] text-center pt-2">
                    <p className="text-white font-semibold text-base leading-tight m-0 break-words hyphens-auto">
                      {user.name.toLowerCase()}
                    </p>
                    {showFollowers && user.number && (
                      <div className="flex items-center justify-center gap-2 mt-1">
                        {followerIcon && <span className="shrink-0">{followerIcon}</span>}
                        <small className="text-gray-400 text-sm font-medium break-words">{user.number}</small>
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
