import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Props {
  image: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ image, title, description, url }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full focus:outline-none"
      aria-label={`Open project: ${title}`}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-transform duration-300 will-change-transform group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-cyan-400/70">
        <div className="relative h-[var(--project-image-h)] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 85vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-[clamp(1.25rem,1.8vw,1.75rem)]">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[var(--project-title-size)] font-semibold leading-tight text-white">
              {title}
            </h3>
            <span className="mt-1 inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-gray-200 opacity-70 transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>

          <p className="line-clamp-4 text-[var(--project-desc-size)] leading-relaxed text-gray-200/80">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
