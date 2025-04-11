import IntroPage from "./Intro";
import ProjectPage from "./Project";
import SkillsPage from "./Skills";
import Footer from "./Footer";
import ContactPage from "./Contact";
import React from "react";

export default function Home() {
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
