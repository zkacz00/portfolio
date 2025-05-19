import type { Language } from "../stores/language";

export interface ExperienceEl {
  title: string;
  date: string;
  location: string;
  description: string;
  technologies: Array<string>;
}

export type ExperienceEls = Array<ExperienceEl>;

export const experienceText: Record<
  Language,
  { title: string; subtitle: string; what: string; when: string; where: string }
> = {
  English: {
    title: "Experience",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    what: "What?",
    when: "When?",
    where: "Where?",
  },
  Polish: {
    title: "Doświadczenie",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    what: "Co?",
    when: "Kiedy?",
    where: "Gdzie?",
  },
};

export const experienceEls: Record<Language, Array<ExperienceEl>> = {
  English: [
    {
      date: "04.2023 - 10.2024",
      title: "Full Stack Developer, Designer & Manager",
      location: "Robiki.ai | AI Assistant Company",
      description:
        "I worked in a fully remote, multicultural environment where English was the primary language used by the team—I was the only member from Poland. Using Figma, I independently designed the entire UI/UX project, including key elements such as the homepage, blog, and dashboard. I handled both front-end and back-end implementation, which included API integrations with services like Discord, OpenAI, Stripe, and ElevenLabs, as well as database management. Additionally, I led a team of developers and managed the project’s finances. This experience allowed me to enhance my independence, time management skills, and ability to quickly adapt to new technologies. I learned to create cohesive, user-friendly designs, write efficient code, and develop custom features without relying on external libraries.",
      technologies: [
        "Svelte",
        "TypeScript",
        "Node.js",
        "CSS",
        "HTML5",
        "Figma",
        "Docker",
      ],
    },
    {
      date: "2020 - 2022",
      title: "Front-End Course",
      location: "EasyCode | Front-End Course",
      description:
        "Learned the basics of JavaScript programming, developed websites in React, and created complex styles using Sass.",
      technologies: [
        "React",
        "TypeScript",
        "Sass",
        "CSS",
        "JavaScript",
        "HTML5",
      ],
    },
    {
      date: "2016 - 2020",
      title: "IT Technician",
      location: "Information Technology Technical College in Biedrzychowice",
      description:
        "Graduated among the top students. Passed professional exams in computer hardware, networks, databases, and web development, earning the title of IT Technician.",
      technologies: ["C++", "HTML", "Networks", "Databases"],
    },
  ],
  Polish: [
    {
      date: "04.2023 - 10.2024",
      title: "Full Stack Developer, Projektant & Manager",
      location: "Robiki.ai | Firma AI Assistant",
      description:
        "Pracowałam w w pełni zdalnym, wielokulturowym środowisku, gdzie językiem głównym była angielszczyzna – byłam jedyną członkinią zespołu z Polski. Używając Figma, samodzielnie zaprojektowałam cały projekt UI/UX, w tym kluczowe elementy, takie jak strona główna, blog i dashboard. Zajmowałam się zarówno implementacją front-endu, jak i back-endu, w tym integracjami API z usługami takimi jak Discord, OpenAI, Stripe i ElevenLabs, a także zarządzaniem bazą danych. Ponadto prowadziłam zespół deweloperów i zarządzałam finansami projektu. To doświadczenie pozwoliło mi rozwinąć moją niezależność, umiejętności zarządzania czasem i zdolność szybkiego dostosowywania się do nowych technologii. Nauczyłam się tworzyć spójne, przyjazne dla użytkownika projekty, pisać efektywny kod i rozwijać funkcje niestandardowe bez polegania na zewnętrznych bibliotekach.",
      technologies: [
        "Svelte",
        "TypeScript",
        "Node.js",
        "CSS",
        "HTML5",
        "Figma",
        "Docker",
      ],
    },
    {
      date: "2020 - 2022",
      title: "Kurs Front-End",
      location: "EasyCode | Kurs Front-End",
      description:
        "Nauczyłam się podstaw programowania w JavaScript, tworzyłam strony internetowe w React oraz tworzyłam zaawansowane style przy użyciu Sass.",
      technologies: [
        "React",
        "TypeScript",
        "Sass",
        "CSS",
        "JavaScript",
        "HTML5",
      ],
    },
    {
      date: "2016 - 2020",
      title: "Technik Informatyk",
      location: "Technikum Informatyczne w Biedrzychowicach",
      description:
        "Ukończyłam szkołę wśród najlepszych uczniów. Zdałam egzaminy zawodowe z zakresu sprzętu komputerowego, sieci, baz danych i tworzenia stron internetowych, zdobywając tytuł Technik Informatyki.",
      technologies: ["C++", "HTML", "Sieci", "Bazy danych"],
    },
  ],
};
