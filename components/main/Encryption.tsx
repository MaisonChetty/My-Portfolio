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
      className="relative isolate z-10 flex min-h-[calc(100svh_-_var(--nav-height))] w-full items-center justify-center overflow-hidden py-[var(--section-pad-y)]"
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

      <div className="relative z-10 mx-auto flex w-full max-w-[var(--container-max-w)] flex-col items-center px-[var(--container-pad-x)]">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-4xl text-center text-[clamp(1.875rem,3.2vw,3.75rem)] font-medium text-gray-200"
        >
          {contactSection.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {contactSection.highlight}
          </span>
        </motion.div>

        <ContactForm />

        <div className="cursive mx-auto mt-10 max-w-3xl text-center text-[clamp(1rem,1.4vw,1.25rem)] font-medium text-gray-300">
          {contactSection.tagline}
        </div>
      </div>
    </section>
  );
};

export default Encryption;
