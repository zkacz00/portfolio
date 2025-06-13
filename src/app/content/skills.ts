import type { Language } from "../stores/language";

export interface Skill {
  title: string;
  icon: string;
  skills:
    | Array<string>
    | { [key: string]: { title: string; level: string; procent: number } };
}

export interface Skills {
  [key: string]: { [key in Language]: Skill };
}

export interface Image {
  name: string;
  alt: string;
  assetId: string;
  uniqueId: string;
  file: string;
}

export const skillsImage: Image = {
  name: "MySkills",
  alt: "My skills",
  assetId: "4isGsNrl7qcseKnWccbKnk",
  uniqueId: "b1b4657c82837bb085b17ccb5ca5b960",
  file: "skills-image.webp",
};

export const skillsText: Record<Language, any> = {
  English: {
    title: "Skills",
    subtitle: "Here’s what I bring to the table — reliable tools and core values that guide my work.",
  },
  Polish: {
    title: "Umiejętności",
    subtitle:
      "Co mam w swoim arsenale? Sprawdzone narzędzia i wartości, które napędzają mnie do działania.",
  },
};

export const skills: Skills = {
  frontEnd: {
    English: {
      title: "Front-End",
      icon: "preview",
      skills: [
        "Svelte",
        "React",
        "TypeScript",
        "Sass",
        "CSS",
        "HTML5",
        "Contentful",
        "Histoire",
        "Storybook",
        "Atomic Design",
      ],
    },
    Polish: {
      title: "Front-End",
      icon: "preview",
      skills: [
        "Svelte",
        "React",
        "TypeScript",
        "Sass",
        "CSS",
        "HTML5",
        "Contentful",
        "Histoire",
        "Storybook",
        "Atomic Design",
      ],
    },
  },
  backEnd: {
    English: {
      title: "Back-End",
      icon: "link",
      skills: [
        "JavaScript",
        "Docker",
        "Postman",
        "Node.js",
        "PostgreSQL",
        "MySQL",
        "GitHub",
        "API Integrations",
        "Gatsby"
      ],
    },
    Polish: {
      title: "Back-End",
      icon: "link",
      skills: [
        "JavaScript",
        "Docker",
        "Postman",
        "Node.js",
        "PostgreSQL",
        "MySQL",
        "GitHub",
        "Integracje API",
        "Gatsby"
      ],
    },
  },
  design: {
    English: {
      title: "Design",
      icon: "brush",
      skills: [
        "Figma",
        "Procreate",
        "UI/UX",
        "Pixel Perfect"
      ],
    },
    Polish: {
      title: "Design",
      icon: "brush",
      skills: ["Figma", "Procreate", "UI/UX", "pixel-perfect"],
    },
  },
  interpersonal: {
    English: {
      title: "Soft Skills",
      icon: "user-group",
      skills: [
        "teamwork",
        "commitment",
        "integrity",
        "time management",
        "attention to detail",
        "self-reliance",
      ],
    },
    Polish: {
      title: "Cechy osobiste",
      icon: "user-group",
      skills: [
        "zaangażowanie",
        "odpowiedzialność",
        "inicjatywa",
        "samodzielność",
        "otwartość na feedback",
        "ciągły rozwój",
      ],
    },
  },
  languages: {
    English: {
      title: "Languages",
      icon: "rocket",
      skills: {
        polish: { title: "Polish", level: "Native", procent: 100 },
        english: { title: "English", level: "C1", procent: 75 },
      },
    },
    Polish: {
      title: "Języki",
      icon: "rocket",
      skills: {
        polish: { title: "Polski", level: "Ojczysty", procent: 100 },
        english: { title: "Angielski", level: "C1", procent: 75 },
      },
    },
  },
  lacking: {
    English: {
      title: "What I can't do... (shhh, keep it secret! 🤫)",
      icon: "loading",
      skills: [
        "whistle",
        "survive without coffee",
        "keep plants alive",
        "resist petting cats",
      ],
    },
    Polish: {
      title: "A czego nie potrafię..? (ciiicho, nie mów nikomu! 🤫)",
      icon: "loading",
      skills: [
        "gwizdać 🙈",
        "przetrwać bez kawy",
        "utrzymać roślinek przy życiu",
        "nie głaskać kitków",
      ],
    },
  },
};