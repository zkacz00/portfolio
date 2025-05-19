import type { Language } from "../stores/language";

type NavContent = {
  aboutLabel: string;
  experienceLabel: string;
  skillsLabel: string;
  portfolioLabel: string;
  contactLabel: string;
  workButton: string;
};

export const navText: Record<Language, NavContent> = {
  English: {
    aboutLabel: "About",
    experienceLabel: "Experience",
    skillsLabel: "Skills",
    portfolioLabel: "Portfolio",
    contactLabel: "Contact",
    workButton: "Work with me",
  },
  Polish: {
    aboutLabel: "O mnie",
    experienceLabel: "Doświadczenie",
    skillsLabel: "Umiejętności",
    portfolioLabel: "Portfolio",
    contactLabel: "Kontakt",
    workButton: "Zatrudnij mnie",
  },
};