export interface ExperienceEl {
    title: string;
    date: string;
    location: string;
    description: string;
    technologies: Array<string>;
}

export type ExperienceEls = Array<ExperienceEl>;

export const experienceUtils: {[key: string]: string }= {
  title: 'Experience',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  what: 'What?',
  when: 'When?',
  where: 'Where?'
};

export const experienceEls: ExperienceEls = [
  {
    date: "2023 - PRESENT",
    title: "Full Stack Developer, Designer & Manager ",
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
    technologies: ["React", "TypeScript", "Sass", "CSS", "JavaScript", "HTML5"],
  },
  {
    date: "2020 - 2022",
    title:
      "IT Technician",
    location: "Information Technology Technical College in Biedrzychowice",
    description:
      "Graduated among the top students. Passed professional exams in computer hardware, networks, databases, and web development, earning the title of IT Technician.",
    technologies: ["C++", "HTML", "Networks", "Databases"],
  },
];
