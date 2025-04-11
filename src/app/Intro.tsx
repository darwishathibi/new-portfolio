import { MorphingText } from "@/components/magicui/morphing-text";

import { Doto } from "next/font/google";

const doto = Doto({
  weight: "400",
  variable: "--font-doto",
  subsets: ["latin"],
  display: "swap",
});

export default function IntroPage() {
  const texts = ["Coding", "Sleep", "Coffee", "Repeat"];

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white p-4 sm:p-8">
      <div className="w-full h-full isolate aspect-video w-96 rounded-4xl bg-white/20 shadow-lg ring-1 ring-black/5 flex flex-col items-center justify-center backdrop-blur-sm">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-4xl">
          <div className="flex flex-col w-full justify-items-start pt-6 lg:pt-10 px-4 lg:pl-14">
            <div
              className={`${doto.className} text-3xl lg:text-5xl tracking-tighter`}
            >
              Darwis Shathibi
            </div>
            <p className="text-xs">
              Comp Sci Student, Web Developer, Certified Yapper
            </p>
          </div>
        </div>

        <MorphingText
          texts={texts}
          className="flex items-center justify-center"
        />

        <div className="absolute inset-0 -z-10 overflow-hidden rounded-4xl mt-10 lg:mt-0">
          <div className="flex flex-col w-full items-end justify-end h-full pb-4 lg:pb-8">
            <div className="flex flex-col gap-2 w-full max-w-sm px-4">
              <p
                className={`${doto.className} text-lg lg:text-3xl tracking-tighter text-left`}
              >
                About Me
              </p>
              <p className="text-xs lg:text-lg">
                a network security student from IIUM, Malaysia. Passionate about
                tech and photography. I enjoy developing software, solving
                complex problems, and continually expanding my skills and
                knowledge in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
