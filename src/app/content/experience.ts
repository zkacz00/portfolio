import type { Language } from "../stores/language";

export interface ExperienceEl {
  title: string;
  date: string;
  location: string;
  description: string;
  description2?: string;
  description3?: string;
  technologies: Array<string>;
}

export type ExperienceEls = Array<ExperienceEl>;

export const experienceText: Record<
  Language,
  { title: string; subtitle: string; what: string; when: string; where: string }
> = {
  English: {
    title: "Experience",
    subtitle: "The steps that shaped my approach to work and growth.",
    what: "What?",
    when: "When?",
    where: "Where?",
  },
  Polish: {
    title: "Doświadczenie",
    subtitle: "Kroki, które ukształtowały moje podejście do pracy i rozwoju.",
    what: "Co?",
    when: "Kiedy?",
    where: "Gdzie?",
  },
};

export const experienceEls: Record<Language, Array<ExperienceEl>> = {
  English: [
    {
      date: "04.2023 - 10.2024, currently part-time",
      title: "Full Stack Developer, Designer & Manager",
      location: "Robiki.ai | AI startup",
      description:
        "I joined a small but ambitious startup (as the only team member from Poland), working fully remotely in an international team. I handled everything — from designing the full UI/UX in Figma (homepage, blog, dashboard...) to front-end and back-end development, and integrating services like Discord, OpenAI, Stripe, and ElevenLabs. I also managed the database and took care of company documentation.",
      description2:
        "It was a great learning experience in terms of independence, time management, and picking up new technologies fast. I learned to build intuitive, consistent, and user-friendly designs, write solid code, and develop custom solutions without relying on third-party libraries.",
      description3:
        "Although the main client eventually pulled out and the project slowed down, I continue to support the team part-time as a shareholder and board member, and I’m excited about its future.",
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
      date: "2021 - 04.2023",
      title: "Front-End Course",
      location: "EasyCode | Front-End Course",
      description:
        "This is where my journey into coding began. I learned the basics of JavaScript and TypeScript, built React projects, and styled websites using Sass and CSS.",
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
      date: "09.2019 – 09.2021",
      title: "English Translator",
      location: "Khan Academy | Educational Non-Profit",
      description:
        "I translated educational materials on world history and art — including articles, exercises, and YouTube videos. The topics were quite diverse, so I often had to do deep research and dig for context. This really helped me develop patience and attention to detail.",
      technologies: [
        "Attention to detail",
        "English language",
      ],
    },
    {
      date: "2016 - 2020",
      title: "IT Technician",
      location: "Information Technology Technical College in Biedrzychowice",
      description:
        "This is where my journey with code truly started. I graduated with great results and earned the title of IT Technician. I passed national exams in system administration, databases, websites, and application development (INF.02, INF.03, INF.04 certifications).",
      technologies: ["C++", "HTML", "Networks", "Databases"],
    },
  ],
  Polish: [
    {
      date: "04.2023 - 10.2024, obecnie po godzinach",
      title: "Full Stack Developerka, Projektantka & Managerka",
      location: "Robiki.ai | firma z branży AI",
      description:
        "Dołączyłam (jako jedyna osoba z Polski) do niewielkiego, ale ambitnego startupu — pracowaliśmy zdalnie, w międzynarodowym składzie. Robiłam naprawdę wszystko — od samodzielnego projektowania całego UI/UX w Figma (strona główna, blog, dashboard...), przez kodowanie front-endu i back-endu, aż po integracje z usługami takimi jak Discord, OpenAI, Stripe czy ElevenLabs. Zarządzałam też bazą danych i zajmowałam się dokumentacją firmy. ",
      description2:
        "To była świetna szkoła samodzielności, zarządzania czasem i błyskawicznego przyswajania nowych technologii. Nauczyłam się tworzyć intuicyjne, spójne i przyjazne dla użytkownika projekty, pisać solidny kod i rozwijać własne rozwiązania — bez sięgania po gotowe biblioteki.",
        description3:
        "Choć główny klient się wycofał i projekt zwolnił tempo, nadal wspieram zespół w wolnym czasie z nimi kodując oraz jako udziałowiec i członek zarządu — i trzymam kciuki za dalszy rozwój!",
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
      date: "2021 - 04.2023",
      title: "Kurs Front-End",
      location: "EasyCode | Kurs Front-End",
      description:
        "Podczas tego kursu przyswoiłam podstawy JavaScript i TypeScript, tworzyłam projekty w React i nauczyłam się stylować strony przy pomocy Sass i CSS.",
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
      date: "09.2019 – 09.2021",
      title: "Tłumacz języka angielskiego",
      location: "Khan Academy | Edukacyjna organizacja non-profit",
      description:
        "Tłumaczyłam materiały edukacyjne z historii świata i sztuki — artykuły, ćwiczenia i filmy na YouTube. Tematy bywały przeróżne, co czasem wymagało solidnego googlowania i szukania kontekstu. Dzięki temu rozwinęłam cierpliwość i dokładność.",
      technologies: [
        "Dbałość o szczegóły",
        "Język angielski",
      ],
    },
    {
      date: "2016 - 2020",
      title: "Technik Informatyk",
      location: "Technikum Informatyczne w Biedrzychowicach",
      description:
        "To tutaj zaczęła się moja przygoda z kodowaniem. Ukończyłam technikum z bardzo dobrymi wynikami i zdobyłam tytuł technika informatyka. Zdałam egzaminy z kwalifikacji INF.02, INF.03 i INF.04 — czyli z administracji systemami, baz danych, stron internetowych i aplikacji.",
      technologies: ["C++", "HTML", "Sieci", "Bazy danych"],
    },
  ],
};
