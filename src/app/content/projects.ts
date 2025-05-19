import type { Language } from "../stores/language";
import { LogoName } from "../types/logoNames";

export interface ProjectImage {
  assetId: string;
  uniqueId: string;
  file: string;
  alt?: string;
}

export interface Project {
  [key: string]: {
    title: { [key in Language]: string };
    subtitle: { [key in Language]: string };
    technologies: Array<{ key: LogoName; title: string }>;
    description: { [key in Language]: Array<{ icon: string; title: string; content: string }> };
    liveUrl?: { name: string; active: boolean };
    githubUrl?: { name: string; active: boolean };
    designUrl?: { name: string; active: boolean };
    image: ProjectImage;
  };
}

export const projectsText: Record<
Language,
{ title: string; subtitle: string; designButton: string; githubButton: string; liveButton: string; }
> = {
  English: {
    title: "My Projects",
    subtitle: "Here you can explore some of the personal and client projects I’ve created, each featuring its own case study.",
    designButton: "See the Design",
    githubButton: "See on GitHub",
    liveButton: "See Live"
  },
  Polish: {
    title: "Moje Projekty",
    subtitle: "Znajdziesz tutaj wybrane projekty osobiste i dla klientów, z każdą realizacją opisaną w formie studium przypadku.",
    designButton: "Zobacz projekt",
    githubButton: "Zobacz na GitHub",
    liveButton: "Zobacz na żywo"
  },
}

export const projects: Project = {
  portfolio: {
    title: {
      English: "ZB Portfolio",
      Polish: "Portfolio ZB",
    },
    subtitle: {
      English: "You might have seen it already 😉",
      Polish: "Może już je widziałeś 😉",
    },
    technologies: [
      { key: LogoName.SVELTE, title: "Svelte" },
      { key: LogoName.FIGMA, title: "Figma" },
      { key: LogoName.TS, title: "TypeScript" },
      { key: LogoName.GIT, title: "Git" },
    ],
    description: {
      English: [
        {
          icon: "photo-group",
          title: "Questionnaires with User Experience Gamification",
          content:
            "Using Figma, I independently designed the entire UI/UX project, including key elements such as the homepage, blog, and dashboard.",
        },
        {
          icon: "network-3",
          title: "Data Collection & Visualisation",
          content: "I handled both front-end and back-end implementation.",
        },
        {
          icon: "browser-upload",
          title: "Reward System Integration",
          content:
            "This included API integrations with services like Discord, OpenAI, Stripe, and ElevenLabs, as well as database management.",
        },
      ],
      Polish: [
        {
          icon: "photo-group",
          title: "Ankiety z grywalizacją doświadczenia użytkownika",
          content:
            "Z pomocą Figma zaprojektowałam cały projekt UI/UX, w tym kluczowe elementy takie jak strona główna, blog i panel użytkownika.",
        },
        {
          icon: "network-3",
          title: "Zbieranie i wizualizacja danych",
          content: "Zajmowałam się zarówno implementacją front-endu, jak i back-endu.",
        },
        {
          icon: "browser-upload",
          title: "Integracja systemu nagród",
          content:
            "Zrealizowałam integrację z takimi usługami jak Discord, OpenAI, Stripe i ElevenLabs, a także zarządzałam bazą danych.",
        },
      ],
    },
    designUrl: { name: "do_uzupelnienia", active: false },
    image: {
      assetId: "O0esqmV1EzHDZFFokFuwh",
      uniqueId: "fc9ac43107b17d01b8c2fb730bf73747",
      file: "portfolio--robiki.png",
      alt: "Robiki.ai",
    },
  },
  robiki: {
    title: {
      English: "Robiki",
      Polish: "Robiki",
    },
    subtitle: {
      English: "AI-powered Robotics Platform",
      Polish: "Platforma Robotyki wspierana przez AI",
    },
    technologies: [
      { key: LogoName.SVELTE, title: "Svelte" },
      { key: LogoName.FIGMA, title: "Figma" },
      { key: LogoName.NODEJS, title: "NodeJs" },
      { key: LogoName.DOCKER, title: "Docker" },
      { key: LogoName.TS, title: "TypeScript" },
      { key: LogoName.HISTOIRE, title: "Histoire" },
      { key: LogoName.POSTGRESQL, title: "PostgreSQL" },
      { key: LogoName.POSTMAN, title: "Postman" },
      { key: LogoName.GIT, title: "Git" },
      { key: LogoName.CONTENTFUL, title: "Contentful" },
    ],
    description: {
      English: [
        {
          icon: "help",
          title: "AI-Powered Robotics",
          content: "Robiki is an AI-powered platform that integrates robotics with machine learning.",
        },
        {
          icon: "stack",
          title: "Cloud Integration",
          content: "The platform supports cloud-based deployment and scalability using Docker and Kubernetes.",
        },
        {
          icon: "toggles",
          title: "Custom AI Solutions",
          content: "Built with Python, Node.js, and TensorFlow, Robiki allows for flexible AI model integration.",
        },
      ],
      Polish: [
        {
          icon: "help",
          title: "Robotyka wspierana przez AI",
          content: "Robiki to platforma wspierana przez AI, która integruje robotykę z uczeniem maszynowym.",
        },
        {
          icon: "stack",
          title: "Integracja z chmurą",
          content: "Platforma obsługuje wdrożenia oparte na chmurze i skalowalność z użyciem Dockera i Kubernetesa.",
        },
        {
          icon: "toggles",
          title: "Dostosowane rozwiązania AI",
          content: "Zbudowana z wykorzystaniem Pythona, Node.js i TensorFlow, Robiki umożliwia elastyczną integrację modeli AI.",
        },
      ],
    },
    designUrl: { name: "coming_soon", active: false },
    image: {
      assetId: "4mN1O7ZeqABNaB2z8wUdLg",
      uniqueId: "0f6fe68ac2554a57b74ef52728e6d6bb",
      file: "portfolio--robiki.png",
      alt: "Robiki AI Platform",
    },
  },
  quiz: {
    title: {
      English: "Ultimate Quiz",
      Polish: "Ultimate Quiz",
    },
    subtitle: {
      English: "Quiz App with Drag&Drop Elements",
      Polish: "Aplikacja quizowa z elementami Drag&Drop",
    },
    technologies: [
      { key: LogoName.REACT, title: "React" },
      { key: LogoName.GATSBY, title: "Gatsby" },
      { key: LogoName.SASS, title: "Sass" },
      { key: LogoName.CONTENTFUL, title: "Contentful" },
      { key: LogoName.TS, title: "TypeScript" },
      { key: LogoName.SOURCETREE, title: "SourceTree" },
      { key: LogoName.BITBUCKET, title: "BitBucket" },
    ],
    description: {
      English: [
        {
          icon: "web",
          title: "Questionnaires with User Experience Gamification",
          content: "A quiz app in two language versions – Polish and English.",
        },
        {
          icon: "question",
          title: "Data Collection & Visualisation",
          content: "With 5 categories.",
        },
        {
          icon: "vibrate",
          title: "Reward System Integration",
          content: "Drag-and-drop elements and smooth animations.",
        },
      ],
      Polish: [
        {
          icon: "web",
          title: "Ankiety z grywalizacją doświadczenia użytkownika",
          content: "Aplikacja quizowa dostępna w dwóch wersjach językowych – polskiej i angielskiej.",
        },
        {
          icon: "question",
          title: "Zbieranie i wizualizacja danych",
          content: "Z pięcioma kategoriami.",
        },
        {
          icon: "vibrate",
          title: "Integracja systemu nagród",
          content: "Elementy Drag-and-Drop oraz płynne animacje.",
        },
      ],
    },
    liveUrl: { name: "https://zkacz00.github.io/ultimatequiz/", active: true },
    githubUrl: { name: "https://github.com/zkacz00/ultimatequiz", active: true },
    image: {
      assetId: "2uPxxjehcioJnJllAztWsL",
      uniqueId: "9e3cc924ede2400a08b55ec95edd3a35",
      file: "portfolio--ultimate-quiz.png",
      alt: "Ultimate Quiz",
    },
  },
  blog: {
    title: {
      English: "Catchy Beatz",
      Polish: "Catchy Beatz",
    },
    subtitle: {
      English: "Music Blog",
      Polish: "Blog muzyczny",
    },
    technologies: [
      { key: LogoName.REACT, title: "React" },
      { key: LogoName.GATSBY, title: "Gatsby" },
      { key: LogoName.SASS, title: "Sass" },
      { key: LogoName.CONTENTFUL, title: "Contentful" },
      { key: LogoName.TS, title: "TypeScript" },
      { key: LogoName.SOURCETREE, title: "SourceTree" },
      { key: LogoName.BITBUCKET, title: "BitBucket" },
    ],
    description: {
      English: [
        {
          icon: "headset",
          title: "Questionnaires with User Experience Gamification",
          content:
            "Using Figma, I independently designed the entire UI/UX project, including key elements such as the homepage, blog, and dashboard.",
        },
        {
          icon: "network-2",
          title: "Data Collection & Visualisation",
          content: "I handled both front-end and back-end implementation.",
        },
        {
          icon: "preview",
          title: "Reward System Integration",
          content:
            "This included API integrations with services like Discord, OpenAI, Stripe, and ElevenLabs, as well as database management.",
        },
      ],
      Polish: [
        {
          icon: "headset",
          title: "Ankiety z grywalizacją doświadczenia użytkownika",
          content:
            "Z pomocą Figma zaprojektowałam cały projekt UI/UX, w tym kluczowe elementy takie jak strona główna, blog i panel użytkownika.",
        },
        {
          icon: "network-2",
          title: "Zbieranie i wizualizacja danych",
          content: "Zajmowałam się zarówno implementacją front-endu, jak i back-endu.",
        },
        {
          icon: "preview",
          title: "Integracja systemu nagród",
          content:
            "Zrealizowałam integrację z takimi usługami jak Discord, OpenAI, Stripe i ElevenLabs, a także zarządzałam bazą danych.",
        },
      ],
    },
    liveUrl: { name: "https://zkacz00.github.io/catchyBeatz_musicBlog/", active: true },
    githubUrl: { name: "https://github.com/zkacz00/catchyBeatz_musicBlog", active: true },
    image: {
      assetId: "5uH0Vx0FbqMMSMagnd4Oqs",
      uniqueId: "582e72c8d38ae723327133afafd301cb",
      file: "portfolio--catchy-beatz.png",
      alt: "Catchy Beatz.",
    },
  },
};

export default projects;
