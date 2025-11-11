import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
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
              href="https://github.com/MaisonChetty"
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
              href="https://www.linkedin.com/in/maison-chetty-136b73263/"
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
                maisonchetty4@gmail.com
              </span>
            </p>
            <p className="flex flex-row items-center my-[5px]">
              <span className="text-[15px] ml-[6px]">South Africa</span>
            </p>
            <p className="flex flex-row items-center my-[5px]">
              <span className="text-[15px] ml-[6px]">Gauteng</span>
            </p>
            <p className="flex flex-row items-center my-[5px]">
              <span className="text-[15px] ml-[6px]">Johannesburg</span>
            </p>
            <p className="flex flex-row items-center my-[10px]">
              <span className="text-[15px] ml-[6px] select-text">
                +27 76 235 6734
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
