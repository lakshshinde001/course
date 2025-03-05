"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Button } from "./ui/moving-border";
import { useRouter } from "next/navigation";

export default function HeroHighlightDemo() {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center ">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Learn to build the stunning Modern apps in our <br />{" "}
          <Highlight className="text-black dark:text-white mb-7">
            Full Stack Web and App Cohort!
          </Highlight>
        </motion.h1>
        <div className="flex justify-center mt-[100px]">
        <Button
            className="bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
            onClick={() => router.push("/offer")} // ✅ Navigate to /offer
          >
            What we Offer
          </Button>
        </div>
      </HeroHighlight>
    </div>
  );
}
