import IntroPage from "./Intro";
import ProjectPage from "./Project";
import SkillsPage from "./Skills";
import Footer from "./Footer";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <IntroPage />
      <ProjectPage />
      <SkillsPage />
      <Footer />
    </div>
  );
}
