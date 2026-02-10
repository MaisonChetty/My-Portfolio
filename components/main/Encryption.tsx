"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import ContactForm from "./ContactForm";
import { portfolioData } from "@/data/portfolio";

const Encryption = () => {
  const { contactSection } = portfolioData;

  return (
    <section
      id="contact-me"
      className="relative isolate z-10 flex min-h-[calc(100svh_-_var(--nav-height))] w-full items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="h-full w-full object-cover"
          src={contactSection.backgroundVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/50 via-[#030014]/80 to-[#030014]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl font-medium text-gray-200 sm:text-4xl lg:text-5xl 2xl:text-6xl"
        >
          {contactSection.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {contactSection.highlight}
          </span>
        </motion.div>

        <ContactForm />

        <div className="cursive mt-10 text-center text-base font-medium text-gray-300 sm:text-lg lg:text-xl">
          {contactSection.tagline}
        </div>
      </div>
    </section>
  );
};

export default Encryption;
