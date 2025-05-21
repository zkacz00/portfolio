import type { Language } from "../stores/language";

type HeroContent = {
  greeting: string;
  title1: string;
  title2: string;
  subtitle: string;
  downloadCV: string;
};

export const heroText: Record<Language, HeroContent> = {
  English: {
    greeting: "Hi, I'm Zofia,",
    title1: "WEB DEVELOPER",
    title2: "& UI/UX DESIGNER",
    subtitle: "Nice to meet you 😊",
    downloadCV: "Download my CV",
  },
  Polish: {
    greeting: "Cześć, jestem Zofia,",
    title1: "WEB DEVELOPER",
    title2: "& UI/UX DESIGNER",
    subtitle: "Miło cię poznać 😊",
    downloadCV: "Pobierz moje CV",
  },
};