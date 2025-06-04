"use client";
import DrawOutlineButton from "@/components/ui/draw-outline-button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Doto } from "next/font/google";

const doto = Doto({
  weight: "400",
  variable: "--font-doto",
  subsets: ["latin"],
  display: "swap",
});

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
      <div className="absolute inset-0 -z-10 "></div>
      <h1 className={`text-3xl md:text-4xl font-bold mb-8 ${doto.className}`}>Anything?</h1>
      <div className="h-full">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            ref={ref}
            className="h-full flex justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInFromBottom}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid min-h-[200px] place-content-center flex justify-center space-y-14">
              <motion.a
                href="https://www.instagram.com/darwishathibi/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInFromBottom}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <DrawOutlineButton>instagram.</DrawOutlineButton>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/darwis-shathibi-965609204/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInFromBottom}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <DrawOutlineButton>linkedin.</DrawOutlineButton>
              </motion.a>
              <motion.a
                href="https://github.com/darwishathibi"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInFromBottom}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <DrawOutlineButton>github.</DrawOutlineButton>
              </motion.a>
              <motion.a
                href="mailto:danishdarwis82@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInFromBottom}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <DrawOutlineButton>email.</DrawOutlineButton>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
