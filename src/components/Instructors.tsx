"use client";
import { BackgroundLines } from "./ui/background-lines";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { instructors } from "@/data/Instructors";

const Instructors = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-[600px]">
      <BackgroundLines className="relative h-[40rem] overflow-hidden flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex items-center justify-center">
          <AnimatedTooltip items={instructors} />
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Instructors;
