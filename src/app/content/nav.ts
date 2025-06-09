import type { Language } from "../stores/language";

type NavContent = {
  homeLabel: string;
  aboutLabel: string;
  experienceLabel: string;
  skillsLabel: string;
  portfolioLabel: string;
  contactLabel: string;
  cvLabel: string,
  workButton: string;
};

export const navText: Record<Language, NavContent> = {
  English: {
    homeLabel: "Home",
    aboutLabel: "About",
    experienceLabel: "Experience",
    skillsLabel: "Skills",
    portfolioLabel: "Portfolio",
    cvLabel: "My CV",
    contactLabel: "Contact",
    workButton: "Work with me",
  },
  Polish: {
    homeLabel: "Wstęp",
    aboutLabel: "O mnie",
    experienceLabel: "Doświadczenie",
    skillsLabel: "Umiejętności",
    portfolioLabel: "Portfolio",
    cvLabel: "Moje CV",
    contactLabel: "Kontakt",
    workButton: "Zatrudnij mnie",
  },
};