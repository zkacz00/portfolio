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
  file: "skills-image.png",
};

export const skillsText: Record<Language, any> = {
  English: {
    title: "Skills",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  Polish: {
    title: "Umiejętności",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      ],
    },
  },
  backEnd: {
    English: {
      title: "Back-End",
      icon: "link",
      skills: ["JavaScript", "Docker", "Node.js", "PostgreSQL", "MySQL"],
    },
    Polish: {
      title: "Back-End",
      icon: "link",
      skills: ["JavaScript", "Docker", "Node.js", "PostgreSQL", "MySQL"],
    },
  },
  design: {
    English: {
      title: "Design",
      icon: "brush",
      skills: ["Figma", "Responsive Design", "UI/UX", "Procreate"],
    },
    Polish: {
      title: "Design",
      icon: "brush",
      skills: ["Figma", "responsywność", "UI/UX", "Procreate"],
    },
  },
  interpersonal: {
    English: {
      title: "Interpersonal",
      icon: "user-group",
      skills: [
        "team work",
        "commitment",
        "integrity",
        "time management",
        "attention to details",
        "self reliance",
      ],
    },
    Polish: {
      title: "Komunikacja Międzyludzka",
      icon: "user-group",
      skills: [
        "praca zespołowa",
        "zaangażowanie",
        "integralność",
        "zarządzanie czasem",
        "dokładność",
        "samodzielność",
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
      title: "Lacking... (shhhh, don't tell anyone! 🤫)",
      icon: "loading",
      skills: [
        "whistling",
        "surviving without coffee",
        "keeping plants alive",
        "resisting the urge to pet cats",
      ],
    },
    Polish: {
      title: "Nie umiem... (ciiicho, nie mów nikomu! 🤫)",
      icon: "loading",
      skills: [
        "gwizdać",
        "przetrwać bez kawy",
        "utrzymać roślinek przy życiu",
        "oprzeć się pokusie głaskania kotów",
      ],
    },
  },
};
