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
    signature: "©zkacz00 2025",
    coreLabel: "Get to Know Me",
    homeLabel: "Home",
    aboutLabel: "About",
    experienceLabel: "Experience",
    skillsLabel: "Skills",
    exploreLabel: "Let’s Work Together",
    portfolioLabel: "Portfolio",
    cvLabel: "CV",
    contactLabel: "Contact",
  },
  Polish: {
    signature: "©zkacz00 2025",
    coreLabel: "Poznaj mnie",
    homeLabel: "Wstęp",
    aboutLabel: "O mnie",
    experienceLabel: "Doświadczenie",
    skillsLabel: "Umiejętności",
    exploreLabel: "Współpracujmy",
    portfolioLabel: "Portfolio",
    cvLabel: "CV",
    contactLabel: "Kontakt",
  },
};