"use client";

import { useState, useEffect } from "react";
import { AppleHelloEnglishEffect } from "@/components/splash-screen";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 4.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade out animation (e.g., 0.5s), then hide splash
      setTimeout(() => setShowSplash(false), 500);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div
        className={`flex w-full h-screen flex-col justify-center items-center gap-16 transition-opacity duration-500 bg-transparent ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <AppleHelloEnglishEffect speed={1.1} />
      </div>
    );
  }

  return <>{children}</>;
}
