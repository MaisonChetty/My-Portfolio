import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const { contact } = portfolioData;

  return (
    <footer
      className="w-full relative z-[50] bg-transparent text-gray-200 shadow-lg p-[15px] select-text pointer-events-auto"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href={contact.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-gray-400"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href={contact.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-gray-400"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[10px]">
              <span className="text-[15px] ml-[6px] select-text">
                {contact.email}
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px]">
              <span className="text-[15px] ml-[6px]">{contact.location.country}</span>
            </p>
            <p className="flex flex-row items-center my-[5px]">
              <span className="text-[15px] ml-[6px]">{contact.location.region}</span>
            </p>
            <p className="flex flex-row items-center my-[5px]">
              <span className="text-[15px] ml-[6px]">{contact.location.city}</span>
            </p>
            <p className="flex flex-row items-center my-[10px]">
              <span className="text-[15px] ml-[6px] select-text">
                {contact.phone}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
