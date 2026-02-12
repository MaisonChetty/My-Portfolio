"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

const HeroContent = () => {
  const { hero } = portfolioData;

  return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-[20] mx-auto flex w-full max-w-[var(--container-max-w)] flex-col items-center justify-center gap-[var(--hero-gap)] px-[var(--container-pad-x)] py-[var(--hero-pad-y)] lg:flex-row lg:justify-between"
      >
      <div className="flex w-full flex-col items-center justify-center gap-[clamp(1.25rem,2vw,1.5rem)] text-center lg:basis-[45%] lg:items-start lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] opacity-[0.9]"
        >
          <div className="relative h-[var(--hero-avatar-size)] w-[var(--hero-avatar-size)]">
            <Image
              src={hero.profileImage}
              alt={`${hero.name} profile photo`}
              fill
              priority
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 144px, 224px"
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-[clamp(0.75rem,2vw,1.5rem)] flex max-w-4xl flex-col gap-[clamp(1rem,2vw,1.5rem)] text-[var(--hero-title-size)] font-bold leading-[1.06] text-white"
        >
          <h1>
            {hero.intro}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {hero.name}
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-[clamp(0.75rem,1.8vw,1.25rem)] max-w-4xl whitespace-pre-line text-[var(--hero-desc-size)] leading-relaxed text-gray-300/85"
        >
          {hero.description}
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex w-full justify-center lg:basis-[55%] lg:justify-end"
      >
        <div className="relative h-[var(--hero-visual-h)] w-full max-w-[var(--hero-visual-max-w)]">
          <Image
            src={hero.heroImage}
            alt="Technology icons"
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 55vw"
            className="object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
