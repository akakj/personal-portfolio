"use client";

import { useRef, useState } from "react";

import MobileNavbar from "../navbar/MobileNavBar";
import DesktopNavbar from "../navbar/DesktopNavBar";

export default function Navbar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsMusicPlaying(true);
    } catch {
      setIsMusicPlaying(false);
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <audio ref={audioRef} src="/background_music.mp3" loop preload="none" />

      <MobileNavbar
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={toggleMusic}
      />

      <DesktopNavbar
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={toggleMusic}
      />
    </header>
  );
}
