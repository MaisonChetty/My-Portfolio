import raw from "./portfolio.json";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  name: string;
  icon: string;
  url: string;
};

export type Skill = {
  name: string;
  icon: string;
  width: number;
  height: number;
};

export type Project = {
  image: string;
  title: string;
  description: string;
  url: string;
};

export type PortfolioData = {
  nav: NavItem[];
  hero: {
    name: string;
    intro: string;
    description: string;
    profileImage: string;
    heroImage: string;
    backgroundVideo: string;
  };
  socials: SocialLink[];
  skillsSection: {
    title: string;
    subtitle: string;
    tagline: string;
    backgroundVideo: string;
  };
  skills: {
    core: Skill[];
    backend: Skill[];
    fullStack: Skill[];
    other: Skill[];
  };
  projectsSection: {
    title: string;
  };
  projects: Project[];
  contactSection: {
    title: string;
    highlight: string;
    tagline: string;
    backgroundVideo: string;
  };
  contact: {
    email: string;
    phone: string;
    location: {
      country: string;
      region: string;
      city: string;
    };
    links: {
      github: string;
      linkedin: string;
    };
  };
};

export const portfolioData: PortfolioData = raw;

