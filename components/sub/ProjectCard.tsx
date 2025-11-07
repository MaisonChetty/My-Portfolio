import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <Link href={link} passHref>
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transition-transform transform hover:scale-105 w-full">
        {/* Fixed height container to prevent carousel jump */}
        <div className="w-full h-[400px] relative">
          <Image
            src={src}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>

        {/* Card content */}
        <div className="relative p-4 bg-[#1a0b3d]/70">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
