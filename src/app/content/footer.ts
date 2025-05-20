import type { Language } from "../stores/language";

type FooterContent = {
  signature: string;
  coreLabel: string;
  homeLabel: string;
  aboutLabel: string;
  experienceLabel: string;
  skillsLabel: string;
  exploreLabel: string;
  portfolioLabel: string;
  cvLabel: string;
  contactLabel: string;
};

export const footerText: Record<Language, FooterContent> = {
  English: {
    signature: "©2025 zkacz. All rights reserved.",
    coreLabel: "Core",
    homeLabel: "Home",
    aboutLabel: "About",
    experienceLabel: "Experience",
    skillsLabel: "Skills",
    exploreLabel: "Explore",
    portfolioLabel: "Portfolio",
    cvLabel: "CV",
    contactLabel: "Contact",
  },
  Polish: {
    signature: "©2025 zkacz. Wszelkie prawa zastrzeżone.",
    coreLabel: "Główne",
    homeLabel: "Start",
    aboutLabel: "O mnie",
    experienceLabel: "Doświadczenie",
    skillsLabel: "Umiejętności",
    exploreLabel: "Poznaj",
    portfolioLabel: "Portfolio",
    cvLabel: "CV",
    contactLabel: "Kontakt",
  },
};