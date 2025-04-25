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
    subtitle: "Got a question or proposal, or just want to say hello? Go ahead 😁",
    emailLabel: "Chat with me",
    phoneLabel: "Call me",
    phoneNr: "+48 793 367 966",
    linkedinLabel: "Reach me on Linkedin",
    downloadCV: "Download my CV",
    emailMe: "Email me",
  },
  Polish: {
    title: "Porozmawiajmy!",
    subtitle: "Masz pytanie, propozycję, a może po prostu chcesz się przywitać? Śmiało 😁",
    emailLabel: "Napisz do mnie",
    phoneLabel: "Zadzwoń do mnie",
    phoneNr: "+48 793 367 966",
    linkedinLabel: "Znajdź mnie na LinkedInie",
    downloadCV: "Pobierz moje CV",
    emailMe: "Napisz e-mail",
  },
};
