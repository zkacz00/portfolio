import { LogoName } from "../types/logoNames";

export interface ProjectImage {
  assetId: string;
  uniqueId: string;
  file: string;
  alt?: string;
}

export interface Project {
  [key: string]: {
    title?: string;
    subtitle?: string;
    technologies?: Array<{key: LogoName, title: string}>;
    description?: Array<{ icon: string; title: string; content: string }>;
    liveUrl?: string;
    githubUrl?: string;
    image: ProjectImage;
  };
}

const projects: Project = {
  robiki: {
    title: "Robiki.ai",
    subtitle: "AI Business Assistant",
    technologies: [
      {key: LogoName.SVELTE, title: "Svelte"},
      {key: LogoName.FIGMA, title: "Figma"},
      {key: LogoName.NODEJS, title: "NodeJs"},
      {key: LogoName.DOCKER, title: "Docker"},
      {key: LogoName.TS, title: "TypeScript"},
      {key: LogoName.HISTOIRE, title: "Histoire"},
      {key: LogoName.POSTGRESQL, title: "PostgreSQL"},
      {key: LogoName.POSTMAN, title: "Postman"},
      {key: LogoName.GIT, title: "Git"},
      {key: LogoName.CONTENTFUL, title: "Contentful"},
    ],
    description: [
      {
        icon: "photo-group",
        title: "Questionnaries with User Experience Gamification",
        content:
          " Using Figma, I independently designed the entire UI/UX project, including key elements such as the homepage, blog, and dashboard.",
      },
      {
        icon: "network-3",
        title: "Data Collection & Visualisation",
        content: "I handled both front-end and back-end implementation. ",
      },
      {
        icon: "browser-upload",
        title: "Reward System Integration",
        content:
          "Which included API integrations with services like Discord, OpenAI, Stripe, and ElevenLabs, as well as database management.",
      },
    ],
    liveUrl: "",
    githubUrl: "",
    image: {
      assetId: "O0esqmV1EzHDZFFokFuwh",
      uniqueId: "fc9ac43107b17d01b8c2fb730bf73747",
      file: "portfolio--robiki.png",
      alt: "Robiki.ai",
    },
  },
  blog: {
    title: "Catchy Beatz",
    subtitle: "Music Blog",
    technologies: [
      { key: LogoName.REACT, title: "React"},
      { key: LogoName.GATSBY, title: "Gatsby"},
      { key: LogoName.SASS, title: "Sass"},
      { key: LogoName.CONTENTFUL, title: "Contentful"},
      { key: LogoName.TS, title: "TypeScript"},
      { key: LogoName.SOURCETREE, title: "SourceTree"},
      { key: LogoName.BITBUCKET, title: "BitBucket"},
    ],
    description: [
      {
        icon: "headset",
        title: "Questionnaries with User Experience Gamification",
        content:
          " Using Figma, I independently designed the entire UI/UX project, including key elements such as the homepage, blog, and dashboard.",
      },
      {
        icon: "network-2",
        title: "Data Collection & Visualisation",
        content: "I handled both front-end and back-end implementation. ",
      },
      {
        icon: "preview",
        title: "Reward System Integration",
        content:
          "Which included API integrations with services like Discord, OpenAI, Stripe, and ElevenLabs, as well as database management.",
      },
    ],
    liveUrl: "https://zkacz00.github.io/catchyBeatz_musicBlog/",
    githubUrl: "https://github.com/zkacz00/catchyBeatz_musicBlog",
    image: {
      assetId: "5uH0Vx0FbqMMSMagnd4Oqs",
      uniqueId: "582e72c8d38ae723327133afafd301cb",
      file: "portfolio--catchy-beatz.png",
      alt: "Catchy Beatz.",
    },
  },
  quiz: {
    title: "Ultimate Quiz",
    subtitle: "Quiz App with Drag&Drop Elements",
    technologies: [
      { key: LogoName.REACT, title: "React"},
      { key: LogoName.GATSBY, title: "Gatsby"},
      { key: LogoName.SASS, title: "Sass"},
      { key: LogoName.CONTENTFUL, title: "Contentful"},
      { key: LogoName.TS, title: "TypeScript"},
      { key: LogoName.SOURCETREE, title: "SourceTree"},
      { key: LogoName.BITBUCKET, title: "BitBucket"},
    ],
    description: [
      {
        icon: "web",
        title: "Questionnaries with User Experience Gamification",
        content: "A quiz app in two language versions - polish and english.",
      },
      {
        icon: "question",
        title: "Data Collection & Visualisation",
        content: "With 5 categories",
      },
      {
        icon: "vibrate",
        title: "Reward System Integration",
        content:
          "Drag-and-drop elements, and smooth animations.",
      },
    ],
    liveUrl: "https://zkacz00.github.io/ultimatequiz/",
    githubUrl: "https://github.com/zkacz00/ultimatequiz",
    image: {
      assetId: "2uPxxjehcioJnJllAztWsL",
      uniqueId: "9e3cc924ede2400a08b55ec95edd3a35",
      file: "portfolio--ultimate-quiz.png",
      alt: "Ultimate Quiz",
    },
  },
  // portfolio: {
  //   title: 'ZK PORTFOLIO.',
  //   subtitle: 'Developer Portfolio',
  //   technologies: ['Svelte', 'Figma', 'NodeJs', 'Docker', 'TypeScript', 'Midjourney', 'Histoire', 'PostgreSQL', 'Postman', 'Git', 'Github', 'Contentful' ],
  //   description: [
  //     { icon: '', title: 'Questionnaries with User Experience Gamification', content: ' Using Figma, I independently designed the entire UI/UX project, including key elements such as the homepage, blog, and dashboard.'},
  //     { icon: '', title: 'Data Collection & Visualisation', content: 'I handled both front-end and back-end implementation. '},
  //     { icon: '', title: 'Reward System Integration', content: 'Which included API integrations with services like Discord, OpenAI, Stripe, and ElevenLabs, as well as database management.'},
  //   ],
  //   liveUrl: '',
  //   githubUrl: '',
  //   image: {
  //     assetId: '4oVysSQyP7RpnJTgmcTb0b',
  //     uniqueId: '2219b6f3903301e73529d1241ce3fb69',
  //     file: 'happy-office-boss.png',
  //     alt: 'Embrace the Future of Business Automation',
  //   },
  // },
};

export default projects;
