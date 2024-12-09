export interface Skill {
  title: string;
  icon: string;
  skills:
    | Array<string>
    | { [key: string]: { title: string; level: string; procent: number } };
}

export interface Skills {
  [key: string]: Skill;
}

export interface Image {
  name: string;
  alt: string;
  assetId: string;
  uniqueId: string;
  file: string;
}

export const skillsImage: Image = {
  name: 'MySkills',
  alt: 'My skills',
  assetId: '4isGsNrl7qcseKnWccbKnk',
  uniqueId: 'b1b4657c82837bb085b17ccb5ca5b960',
  file: 'src/app/assets/images/skills-image.png'
}

export const skills: Skills = {
  frontEnd: {
    title: "Front-End",
    icon: "preview",
    skills: [
      "Sevlte",
      "React",
      "TypeScript",
      "Sass",
      "CSS",
      "HTML5",
      "Contentful",
    ],
  },
  backEnd: {
    title: "Back-End",
    icon: "link",
    skills: ["JavaScript", "Docker", "Node.js", "PostgreSQL", "MySQL"],
  },
  design: {
    title: "Design",
    icon: "brush",
    skills: ["Figma", "Responsive Design", "UI/UX", "Procreate"],
  },
  interpersonal: {
    title: "Interpersonal",
    icon: "user-group",
    skills: [
      "Sevlte",
      "React",
      "TypeScript",
      "Sass",
      "CSS",
      "HTML5",
      "Contentful",
    ],
  },
  languages: {
    title: "Languages",
    icon: "rocket",
    skills: {
      polish: { title: "Polish", level: "Native", procent: 100 },
      english: { title: "English", level: "B2 / C1", procent: 75 },
    },
  },
  lacking: {
    title: "Lacking... (shhhh, don't tell anyone! 🤫)",
    icon: "loading",
    skills: [
      "whisting",
      "surviving without coffee",
      "keeping plants alive",
      "resisting to pet cats",
      "not do 8px system",
      "fly a plane",
    ],
  },
};
