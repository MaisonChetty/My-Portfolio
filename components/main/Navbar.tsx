import Image from "next/image";
import React from "react";
import { portfolioData } from "@/data/portfolio";

const Navbar = () => {
  const { nav, socials, hero } = portfolioData;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-[var(--nav-height)] bg-[#03001417] px-[var(--container-pad-x)] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-[var(--container-max-w)] items-center justify-between">
        <a
          href="#about-me"
          className="max-w-[55vw] truncate text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold tracking-wide text-gray-300 sm:max-w-none"
          aria-label="Go to About section"
        >
          {hero.name}
        </a>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          <div className="flex items-center gap-6 rounded-full border border-[#7042f861] bg-[#0300145e] px-6 py-2 text-sm text-gray-200 xl:gap-8 xl:px-7 xl:py-2.5 xl:text-base">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-4 xl:flex" aria-label="Social links">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <Image src={social.icon} alt={social.name} width={22} height={22} />
              </a>
            ))}
          </div>

          {/* Mobile menu (no JS) */}
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-gray-200 hover:bg-white/10 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>

            <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#030014e6] shadow-xl backdrop-blur-md">
              <div className="flex flex-col p-2 text-sm text-gray-200">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/10 p-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="rounded-lg p-2 opacity-90 transition-opacity hover:bg-white/10 hover:opacity-100"
                  >
                    <Image src={social.icon} alt={social.name} width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
