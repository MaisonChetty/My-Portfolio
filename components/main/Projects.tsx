"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "../sub/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { portfolioData } from "@/data/portfolio";

const Projects = () => {
  const { projectsSection, projects } = portfolioData;

  const autoplay = React.useRef(
    Autoplay({
      delay: 6500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setSnapCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      id="projects"
      className="relative z-20 w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-14">
        <h2 className="pb-8 text-center text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 sm:pb-10 sm:text-4xl lg:text-5xl 2xl:text-6xl">
          {projectsSection.title}
        </h2>

        <div className="relative">
          <Carousel
            className="w-full"
            setApi={setApi}
            plugins={[autoplay.current]}
            opts={{ align: "center", loop: true }}
          >
            <CarouselContent className="py-4 sm:py-6">
              {projects.map((project) => (
                <CarouselItem key={project.title} className="flex justify-center">
                  <div className="w-full max-w-4xl lg:max-w-5xl 2xl:max-w-6xl">
                    <ProjectCard
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      url={project.url}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border border-purple-400/40 bg-gradient-to-r from-purple-700/90 to-cyan-600/90 text-white shadow-[0_0_18px_rgba(139,92,246,0.55)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(34,211,238,0.8)] md:-left-16" />
            <CarouselNext className="right-2 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-600/90 to-purple-700/90 text-white shadow-[0_0_18px_rgba(34,211,238,0.55)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(139,92,246,0.8)] md:-right-16" />
          </Carousel>

          {snapCount > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: snapCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.85)]"
                      : "bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
