import React from "react";
import HeroContent from "../sub/HeroContent";
import { portfolioData } from "@/data/portfolio";

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section
      className="relative isolate z-10 flex min-h-[calc(100svh_-_var(--nav-height))] w-full items-center overflow-hidden"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 z-0 h-full w-full object-cover rotate-180 scale-[1.6] opacity-70 md:scale-[1.35] lg:scale-[1.2]"
      >
        <source src={hero.backgroundVideo} type="video/webm" />
      </video>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030014]/20 via-[#030014]/60 to-[#030014]" />
      <HeroContent />
    </section>
  );
};

export default Hero;
