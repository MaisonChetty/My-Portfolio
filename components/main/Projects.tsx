"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Projects = () => {
  // Array to store project data
  const projects = [
    {
      src: "/bluestorm (1).PNG",
      title: "BlueStorm",
      description: "A sleek and amazing Wordpress website using the latest and greates Wordpress offers and more ",
      link: "https://bluestormgifts.co.za",
    },
    {
      src: "/hydro (1).PNG",
      title: "Hydro Fuel",
      description: "A website where water is used to help lower the cost of fuel in cars",
      link: "https://hydrofuel.vercel.app",
    },
    {
      src: "/met (1).PNG",
      title: "Meteverse Challenge",
      description: "This was one of my first websites i had created from wathing sonny sangha",
      link: "https://metaverse-challenge-one.vercel.app",
    },
    // {
    //   src: "/SpaceWebsite.png",
    //   title: "Space Themed Website",
    //   description: "A futuristic space exploration website with immersive visuals.",
    //   link: "https://www.youtube.com/watch?v=0siQoaXMmzk&t=9s",
    // },
    // You can add new projects here
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 w-full z-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>

      {/* Carousel with working navigation */}
      <Carousel className="w-full max-w-3xl">
        <CarouselContent className="flex">
          {/* Map through the projects array and create a CarouselItem for each project */}
          {projects.map((project, index) => (
            <CarouselItem key={index} className="w-full flex justify-center">
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
