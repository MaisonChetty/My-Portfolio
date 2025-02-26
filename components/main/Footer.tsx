import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
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
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
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
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">maisonchetty4@gmail.com</span>    
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
