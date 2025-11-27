"use client";

import { useEffect, useRef, useState } from "react";

// Background audio that attempts autoplay; if blocked by the browser,
// it will start playback on the first user interaction (click/touch/scroll/keydown).
export function BackgroundAudio({ src = "/weddings%20page%20audio/bgmusic.mp3", volume = 0.25, playbackRate = 1.0 }) {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const targetVolumeRef = useRef(volume);
  const fadeIntervalRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = Math.max(0, Math.min(1, volume));
    try {
      audio.playbackRate = Math.max(0.5, Math.min(2, playbackRate));
    } catch {}

    const tryPlay = () =>
      audio
        .play()
        .then(() => {
          setStarted(true);
          removeInteractionListeners();
        })
        .catch(() => {
          // Autoplay blocked; wait for user interaction
          addInteractionListeners();
        });

    const onInteract = () => {
      audio
        .play()
        .then(() => {
          setStarted(true);
          removeInteractionListeners();
        })
        .catch(() => {
          // keep listeners; user may need one more interaction
        });
    };

    const addInteractionListeners = () => {
      window.addEventListener("pointerdown", onInteract, { once: false });
      window.addEventListener("keydown", onInteract, { once: false });
      window.addEventListener("scroll", onInteract, { once: false, passive: true });
      window.addEventListener("touchstart", onInteract, { once: false, passive: true });
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };

    tryPlay();

    const onControl = (e) => {
      const action = e?.detail?.action;
      if (!audio) return;
      if (action === "pause") {
        fadeTo(0);
      } else if (action === "resume") {
        // Only resume if user previously allowed playback
        if (started) {
          fadeTo(targetVolumeRef.current || volume);
        }
      }
    };

    window.addEventListener("bg-audio-control", onControl);

    return () => {
      removeInteractionListeners();
      // Pause on unmount to free resources
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch {}
      window.removeEventListener("bg-audio-control", onControl);
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, [volume, playbackRate, started]);

  // Smooth fade helper
  const fadeTo = (target, ms = 400) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    const start = audio.volume;
    const diff = target - start;
    if (Math.abs(diff) < 0.01) {
      audio.volume = target;
      if (target > 0 && audio.paused) {
        audio.play().catch(() => {});
      } else if (target === 0) {
        // slight delay then pause to avoid abrupt cut
        setTimeout(() => {
          try {
            audio.pause();
          } catch {}
        }, 420);
      }
      return;
    }
    const steps = Math.max(8, Math.round(ms / 40));
    let i = 0;
    if (target > 0 && audio.paused) {
      audio.play().catch(() => {});
    }
    fadeIntervalRef.current = setInterval(() => {
      i++;
      const v = start + (diff * i) / steps;
      audio.volume = Math.min(1, Math.max(0, v));
      if (i >= steps) {
        clearInterval(fadeIntervalRef.current);
        audio.volume = Math.min(1, Math.max(0, target));
        if (audio.volume === 0) {
          try {
            audio.pause();
          } catch {}
        }
      }
    }, ms / steps);
  };

  return (
    <audio
      ref={audioRef}
      src={src}
      loop
      preload="auto"
      playsInline
      autoPlay
      // Keep it non-visual
      style={{ display: "none" }}
    />
  );
}
