"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box p-1 border border-[#7042f88b] opacity-[0.9]"
        >
          <Image 
            src="/profilepic.jpeg" 
            alt="Welcome Image" 
            width={300} 
            height={300} 
            className="rounded-full w-[70px] h-[70px] lg:w-[300px] lg:h-[300px] md:w-[150px] md:h-[150px]"
          />
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            My Name Is 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Maison Chetty{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and Software development. 
          I&apos;m also currently studying and a huge animal lover! I enjoy spending time with family or gaming. 
          While I&apos;m not a club person, I love braais, restaurants with friends, or friendly basketball games. 
          When a creative spark hits, I grab my drawing tools and experiment with all kinds of art, both 2D and 3D. 
          I&apos;m a black belt in karate—one of my proudest achievements! I also have a deep wanderlust, and traveling 
          the world fuels my dream to explore more.
        </motion.p>
      </div>


      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
