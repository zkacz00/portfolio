import type { Language } from "../stores/language";

type ContactText = {
  title: string;
  subtitle: string;
  emailLabel: string;
  phoneLabel: string;
  phoneNr: string;
  linkedinLabel: string;
  downloadCV: string;
  emailMe: string;
};

export const contactText: Record<Language, ContactText> = {
  English: {
    title: "Let's talk!",
    subtitle: "Got an idea, job offer, or just feel like saying hi? Go ahead 😁",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    phoneNr: "+48 793 367 966",
    linkedinLabel: "LinkedIn:",
    downloadCV: "Check out my CV",
    emailMe: "Email me",
  },
  Polish: {
    title: "Porozmawiajmy!",
    subtitle: "Masz pytanie, propozycję, a może po prostu chcesz się przywitać? Śmiało 😁",
    emailLabel: "Email:",
    phoneLabel: "Telefon:",
    phoneNr: "+48 793 367 966",
    linkedinLabel: "LinkedIn:",
    downloadCV: "Sprawdź moje CV",
    emailMe: "Napisz e-mail",
  },
};
