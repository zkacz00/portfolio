import type { Language } from "../stores/language";

export const skillsText: Record<Language, { title: string; subtitle: string }> = {
  English: {
    title: "What I've learned through my work:",
    subtitle: "With time, patience, and determination, you can learn just about anything 😉",
  },
  Polish: {
    title: "Czego nauczyła mnie praca:",
    subtitle: "Każdą umiejętność można opanować — wystarczy trochę czasu, cierpliwości i dużo determinacji 😉",
  },
};