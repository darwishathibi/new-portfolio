import React from "react";
import DisplayProjects from "@/components/display-projects";

export default function ProjectPage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white mt-20 px-4 sm:px-0">
      <div className="absolute inset-0 -z-10 "></div>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-24">I did this!</h1>
      <DisplayProjects />
    </div>
  );
}
