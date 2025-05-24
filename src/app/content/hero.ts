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
    subtitle: "Let's get to know each other! 😊",
    downloadCV: "See my CV",
  },
  Polish: {
    greeting: "Cześć, jestem Zofia,",
    title1: "WEB DEVELOPER",
    title2: "& UI/UX DESIGNER",
    subtitle: "Poznajmy się! 😊",
    downloadCV: "Zobacz moje CV",
  },
};