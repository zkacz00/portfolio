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
    title: "Projects",
    subtitle: "Take a look at what I’ve been working on lately — a mix of personal experiments and commissioned work. Every project has its own story, and I’m happy to share each one.",
    designButton: "View Design",
    githubButton: "View on GitHub",
    liveButton: "View Live",
  },
  Polish: {
    title: "Projekty",
    subtitle: "Zobacz, nad czym ostatnio pracowałam — trochę eksperymentów, trochę na zamówienie. Każdy z nich to inna historia, którą chętnie opowiem.",
    designButton: "Zobacz projekt",
    githubButton: "Zobacz na GitHub",
    liveButton: "Zobacz na żywo"
  },
}

export const projects: Project = {
  portfolio: {
    title: {
      English: "Web | Design Portfolio",
      Polish: "Web | Design Portfolio",
    },
    subtitle: {
      English: "You might recognize it already.",
      Polish: "Może już je skądś kojarzysz?",
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
          title: "Design Work",
          content:
            "In Figma, I created a design that combines my style with simplicity and clarity. I also prepared custom graphics that highlight both my personality and the aesthetic consistency of the project.",
        },
        {
          icon: "network-3",
          title: "Behind the Code",
          content: "I wrote the code following best practices I learned from my former boss, Greg Guidero — it had to be clean, scalable, and efficient. I used my favorite stack: Svelte, Node.js, and TypeScript.",
        },
        {
          icon: "brightness-medium",
          title: "Accessibility & Comfort",
          content:
            "The site works in both Polish and English, and offers light and dark mode — because who doesn’t like options?",
        },
      ],
      Polish: [
        {
          icon: "photo-group",
          title: "Projekt graficzny",
          content:
            "W Figmie stworzyłam design, który łączy mój styl z prostotą i przejrzystością. Przygotowałam też dedykowane grafiki, które podkreślają mój charakter oraz spójność estetyki projektu.",
        },
        {
          icon: "network-3",
          title: "Za kulisami kodu",
          content: "Pisałam kod według najlepszych wskazówek mojego byłego szefa, Grega Guidero - ma być czytelnie, skalowalnie i wydajnie. Wykorzystałam swoje ulubione technologie: Svelte, Node.js oraz Typescript.",
        },
        {
          icon: "brightness-medium",
          title: "Dostępność i wygoda",
          content:
            "Portfolio działa w dwóch językach (PL/EN) i oferuje tryb jasny oraz ciemny — bo każdy lubi wybór.",
        },
      ],
    },
    image: {
      assetId: "O0esqmV1EzHDZFFokFuwh",
      uniqueId: "fc9ac43107b17d01b8c2fb730bf73747",
      file: "portfolio--portfolio.png",
      alt: "Robiki.ai",
    },
  },
  robiki: {
    title: {
      English: "Robiki.ai",
      Polish: "Robiki.ai",
    },
    subtitle: {
      English: "An AI assistant helping with automation and day-to-day tasks in businesses.",
      Polish: "Asystent AI wspierający automatyzację i codzienne działania w firmach.",
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
          icon: "photo",
          title: "UI/UX Design",
          content: "I prepared a complete UI/UX project in Figma — from the smallest components, through homepage and blog, to a full dashboard. The entire UI was built following Atomic Design principles, focusing on consistency, responsiveness, and accessibility.",
        },
        {
          icon: "toggles",
          title: "Front-End",
          content: "I implemented the design in Svelte and TypeScript, writing clean code, building custom hooks, and prioritizing custom solutions over unnecessary dependencies. The team prioritized quality and optimization.",
        },
        {
          icon: "stack",
          title: "Back-End & Integrations",
          content: "I also handled the backend (PostgreSQL) and integrated APIs like Discord, OpenAI, Stripe, and ElevenLabs. We used Docker and Postman for testing and deployment.",
        },
      ],
      Polish: [
        {
          icon: "photo",
          title: "Projekt UI/UX",
          content: "Przygotowałam pełny projekt UI/UX w Figmie — od najdrobniejszych komponentów, przez stronę główną i blog, po dashboard. Wszystko zgodnie z zasadami Atomic Design, z naciskiem na spójność, responsywność i dostępność dla różnych użytkowników i przeglądarek."
        },
        {
          icon: "toggles",
          title: "Front-End",
          content: "Wdrażałam design w Svelte i TypeScript, pisząc przejrzysty kod, tworząc własne hooki i unikając zbędnych bibliotek. Zespół stawiał na jakość i optymalizację."
        },
        {
          icon: "stack",
          title: "Back-End & Integracje",
          content: "Odpowiadałam też za implementację back-endu (PostgreSQL) i integrację z API (Discord, OpenAI, Stripe, ElevenLabs). Do testów i wdrożeń wykorzystywaliśmy Dockera i Postmana.",
        },
      ],
    },
    liveUrl: { name: "https://robiki.ai/", active: true },
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
      English: "An interactive quiz app with drag & drop mechanics.",
      Polish: "Interaktywna aplikacja quizowa z elementami drag & drop.",
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
          icon: "vibrate",
          title: "Drag & Drop + Animations",
          content: "A project completed during a front-end course — based on a provided design, but I added a fully responsive mobile version for phones and tablets. It includes smooth animations and an intuitive drag-and-drop experience.",
        },
        {
          icon: "pencil",
          title: "Custom Content",
          content: "5 categories with 10 questions each — if you're into fun facts, check out the “Culture” section.",
        },
        {
          icon: "web",
          title: "Two Languages",
          content: "Available in both Polish and English.",
        },
      ],
      Polish: [
        {
          icon: "vibrate",
          title: "Drag & Drop + animacje",
          content: "Projekt zrealizowany podczas kursu front-end — oparty na gotowym designie, z dodanym przeze mnie widokiem mobilnym (dostosowanym do telefonów i tabletów). Aplikacja zawiera płynne animacje i mechanikę drag & drop.",
        },
        {
          icon: "pencil",
          title: "Autorski content",
          content: "5 kategorii, po 10 pytań każda — jeśli lubisz ciekawostki, koniecznie zajrzyj do sekcji „Kultura”.",
        },
        {
          icon: "web",
          title: "Dwa języki",
          content: "Quiz dostępny w dwóch wersjach językowych — polskiej i angielskiej.",
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
      English: "My music blog with a creative twist (and cats).",
      Polish: "Mój blog muzyczny z artystycznym pazurem (i kotami).",
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
          icon: "heart",
          title: "From Idea to Code",
          content:
            "My first project from A to Z — from concept and design to full implementation. A blog with 3 categories, inspired by my love of music, beautiful chaos, and… cats.",
        },
        {
          icon: "headset",
          title: "Unique Vibe",
          content: "The interface was designed to reflect the blog’s personality — loose, dynamic, and a little offbeat. I added parallax effects and animations to bring it to life.",
        },
        {
          icon: "preview",
          title: "Front + Back",
          content:
            "Built in React + Gatsby, powered by Contentful CMS. I also handled content integration, images, and layout implementation. Would I do it differently today? Probably. But that’s exactly why I’m still fond of it.",
        },
      ],
      Polish: [
        {
          icon: "heart",
          title: "Od pomysłu po kod",
          content:
            "Mój pierwszy projekt od A do Z – od pomysłu, przez design, aż po wdrożenie. Blog z podziałem na 3 kategorie, pełen lekkiego chaosu inspirowanego moją miłością do muzyki, estetycznego nieładu i... kotów.",
        },
        {
          icon: "headset",
          title: "Wyjątkowy klimat",
          content: "Cały interfejs zaprojektowałam tak, by oddawał charakter bloga – luźny, dynamiczny i trochę „offbeat”. Dodałam też efekty paralaksy i animacje, żeby dodać mu życia.",
        },
        {
          icon: "preview",
          title: "Front + Back",
          content:
            "Wdrożenie w React + Gatsby, z CMS-em Contentful. Zajęłam się też integracją treści, obrazów i wdrożeniem layoutu. Dziś zrobiłabym to nieco inaczej – ale właśnie dlatego mam do tego projektu sentyment.",
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
