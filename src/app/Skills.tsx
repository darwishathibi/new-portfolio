import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Doto } from "next/font/google";

const doto = Doto({
  weight: "400",
  variable: "--font-doto",
  subsets: ["latin"],
  display: "swap",
});

export default function SkillsPage() {

  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-white mt-48">
      <div className="absolute inset-0 -z-10 "></div>
      <h1 className={`text-3xl md:text-4xl font-bold mb-8 ${doto.className}`}>
        I have this!
      </h1>
      <div className="h-full">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={tech} />
        </div>
      </div>
    </div>
  );
}

export const tech = [
  {
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
  },
  {
    title: "React Native",
    link: "https://reactnative.dev",
  },
  {
    title: "TailwindCSS",
    link: "https://tailwindcss.com",
  },
  {
    title: "GitHub",
    link: "https://github.com",
  },
  {
    title: "Firebase",
    link: "https://firebase.google.com",
  },
  {
    title: "Expo",
    link: "https://expo.dev",
  },
  {
    title: "Lightroom",
    link: "https://www.adobe.com/products/photoshop-lightroom.html",
  },
  {
    title: "Framer Motion",
    link: "https://www.framer.com/motion/",
  },
  {
    title: "Boostrap",
    link: "https://getbootstrap.com",
  },
  {
    title: "Sanity.io",
    link: "https://www.sanity.io/",
  },
];
