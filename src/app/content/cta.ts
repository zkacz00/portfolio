import type { Language } from "../stores/language";

type CtaText = {
    title: string;
    subtitle: string;
  };
  
  export const ctaText: Record<Language, CtaText> = {
    English: {
      title: "Looking for new opportunities!",
      subtitle: "If you think we’d make a good team — let’s talk 😃",
    },
    Polish: {
        title: "Rozglądam się za nowymi wyzwaniami!",
        subtitle: "Jeśli uważasz, że będzie nam się dobrze współpracować — skontaktuj się ze mną 😃",
    },
  };
  