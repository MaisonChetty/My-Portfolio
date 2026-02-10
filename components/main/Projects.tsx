"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      src: encodeURI("/bluestorm (1).PNG"),
      title: "BlueStorm",
      description:
        "A sleek and amazing Wordpress website using the latest and greatest Wordpress offers and more.",
      link: "https://bluestormgifts.co.za",
    },
        {
      src: encodeURI("/saas.PNG"),
      title: "Pdf AI conversationalist",
      description:
        "Turn any PDF into your personal study companion! 🚀 Upload your PDFs, ask questions 🤔, generate study guides 📝, or create quizzes 🎯 — all powered by AI. Perfect for students, researchers, or anyone who wants to learn faster and smarter.",
      link: "https://saas-eta-three.vercel.app/",
    },
        {
      src: encodeURI("/AI.PNG"),
      title: "AI YouTube Transcriptor",
      description:
        "🎬 AI Video Agent – Your personal AI sidekick for video creation! 🚀 Analyze engagement 📊, get smart transcripts ✍️, generate eye-catching thumbnails 🖼️, craft attention-grabbing titles 📝. Chat with your AI agent 🤖 to brainstorm and level up your content game! 🌟",
      link: "https://ai-agent-gamma-beryl.vercel.app",
    },
    {
      src: encodeURI("/hydro (1).PNG"),
      title: "Hydro Fuel",
      description:
        "A website where water is used to help lower the cost of fuel in cars.",
      link: "https://hydrofuel.vercel.app",
    },
    {
      src: encodeURI("/met (1).PNG"),
      title: "Metaverse Challenge",
      description:
        "This is one of my first websites I had created from watching Sonny Sangha.",
      link: "https://metaverse-challenge-one.vercel.app",
    },
    
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 w-full z-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        My Projects
      </h1>

      {/* Carousel wrapper */}
      <div className="relative w-full max-w-5xl px-8 flex justify-center items-center">
        <Carousel
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="min-h-[520px]">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center md:basis-full"
              >
                <div className="w-full max-w-[600px]">
                  <ProjectCard
                    src={project.src}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          <CarouselPrevious
            className="absolute -left-14 top-1/2 -translate-y-1/2 transform z-10
                       bg-gradient-to-r from-purple-700 to-cyan-600 text-white
                       shadow-[0_0_15px_rgba(139,92,246,0.7)]
                       hover:shadow-[0_0_25px_rgba(34,211,238,0.9)]
                       hover:scale-105 transition-all duration-300 ease-in-out
                       rounded-full p-3 backdrop-blur-md border border-purple-400/50
                       w-12 h-12 flex items-center justify-center"
          />
          <CarouselNext
            className="absolute -right-14 top-1/2 -translate-y-1/2 transform z-10
                       bg-gradient-to-r from-cyan-600 to-purple-700 text-white
                       shadow-[0_0_15px_rgba(34,211,238,0.7)]
                       hover:shadow-[0_0_25px_rgba(139,92,246,0.9)]
                       hover:scale-105 transition-all duration-300 ease-in-out
                       rounded-full p-3 backdrop-blur-md border border-cyan-400/50
                       w-12 h-12 flex items-center justify-center"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
