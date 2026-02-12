import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const { contact } = portfolioData;

    return (
    <footer className="pointer-events-auto relative z-[50] w-full border-t border-white/5 bg-transparent text-gray-200">
      <div className="mx-auto w-full max-w-[var(--container-max-w)] px-[var(--container-pad-x)] py-10">
        <div className="grid gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <div className="text-[clamp(1rem,1.1vw,1.125rem)] font-semibold">
              Community
            </div>
            <a
              href={contact.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[clamp(0.95rem,1vw,1.05rem)] text-gray-300 transition-colors hover:text-white"
            >
              <RxGithubLogo className="h-5 w-5" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <div className="text-[clamp(1rem,1.1vw,1.125rem)] font-semibold">
              Social Media
            </div>
            <a
              href={contact.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[clamp(0.95rem,1vw,1.05rem)] text-gray-300 transition-colors hover:text-white"
            >
              <RxLinkedinLogo className="h-5 w-5" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <div className="text-[clamp(1rem,1.1vw,1.125rem)] font-semibold">
              About
            </div>
            <ul className="space-y-2 text-[clamp(0.95rem,1vw,1.05rem)] text-gray-300">
              <li className="break-words select-text">{contact.email}</li>
              <li>
                {contact.location.city}, {contact.location.region},{" "}
                {contact.location.country}
              </li>
              <li className="break-words select-text">{contact.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
