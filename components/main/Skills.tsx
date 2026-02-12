import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { portfolioData } from "@/data/portfolio";

const Skills = () => {
  const { skillsSection, skills } = portfolioData;
  const allSkills = [
    ...skills.core,
    ...skills.backend,
    ...skills.fullStack,
    ...skills.other,
  ];

    return (
    <section
      id="skills"
      className="relative isolate z-10 flex min-h-[calc(100svh_-_var(--nav-height))] w-full flex-col items-center justify-center gap-6 overflow-hidden py-[var(--section-pad-y)]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
        <video
          className="h-full w-full object-cover"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
          src={skillsSection.backgroundVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/40 via-[#030014]/70 to-[#030014]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max-w)] px-[var(--container-pad-x)]">
        <SkillText
          title={skillsSection.title}
          subtitle={skillsSection.subtitle}
          tagline={skillsSection.tagline}
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-[clamp(1.75rem,2vw,2rem)]">
          {allSkills.map((skill, index) => (
            <SkillDataProvider
              key={skill.name}
              src={skill.icon}
              width={skill.width}
              height={skill.height}
              alt={skill.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
