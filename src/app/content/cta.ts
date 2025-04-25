import type { Language } from "../stores/language";

type CtaText = {
    title: string;
    subtitle: string;
  };
  
  export const ctaText: Record<Language, CtaText> = {
    English: {
      title: "I Am Currently Looking For a Job!",
      subtitle: "Feel free to contact me 😃",
    },
    Polish: {
        title: "Aktualnie poszukuję pracy!",
        subtitle: "Skontaktuj się ze mną 😃",
    },
  };
  