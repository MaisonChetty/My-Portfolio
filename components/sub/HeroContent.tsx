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
      className="relative z-[20] mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center gap-10 px-5 py-14 sm:px-6 sm:py-16 md:px-10 lg:flex-row lg:justify-between lg:gap-14 lg:px-14 lg:py-20"
    >
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center lg:basis-[45%] lg:items-start lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] opacity-[0.9]"
        >
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-36 md:w-36 lg:h-56 lg:w-56">
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
          className="mt-6 flex max-w-3xl flex-col gap-6 text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-6xl 2xl:text-7xl"
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
          className="my-5 max-w-3xl whitespace-pre-line text-base leading-relaxed text-gray-300/85 sm:text-lg lg:text-xl"
        >
          {hero.description}
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex w-full justify-center lg:basis-[55%] lg:justify-end"
      >
        <Image
          src={hero.heroImage}
          alt="Technology icons"
          height={650}
          width={650}
          priority
          sizes="(max-width: 1024px) 92vw, 55vw"
          className="h-auto w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[720px] 2xl:max-w-[820px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
