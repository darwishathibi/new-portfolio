"use client";

import IntroPage from "./Intro";
import ProjectPage from "./Project";
import SkillsPage from "./Skills";
import Footer from "./Footer";
import ContactPage from "./Contact";
import React, { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="flex flex-col ">
      <IntroPage />
      <ProjectPage />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}
