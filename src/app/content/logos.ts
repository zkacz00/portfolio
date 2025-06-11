import { LogoName } from "../types/logoNames";
import { myGithubUrl, myLinkedinUrl } from "./urls";

interface Image {
  assetId: string;
  uniqueId: string;
  file: string;
}

interface Logo {
  key: LogoName;
  name: string;
  url: string;
  alt: string;
  default: Image;
  white?: Image;
  black?: Image;
}

interface Logos {
  [key: string]: Logo;
}

const logos: Logos = {
  github: {
    key: LogoName.GITHUB,
    name: "GitHub",
    url: myGithubUrl,
    alt: "GitHub",
    default: {
      assetId: "6uIrVux3qpc31Ov4ftPCmO",
      uniqueId: "0bae660b8e6231f5788f272df50f2902",
      file: "github-logo--black.png",
    },
    white: {
      assetId: "3dt2PbY6LxBh7OBqbolzvP",
      uniqueId: "0470c3a54973d34ad37bf03de751c30f",
      file: "github-logo--white.png",
    },
    black: {
      assetId: "6uIrVux3qpc31Ov4ftPCmO",
      uniqueId: "0bae660b8e6231f5788f272df50f2902",
      file: "github-logo--black.png",
    },
  },
  linkedin: {
    key: LogoName.LINKEDIN,
    name: "Linkedin",
    url: myLinkedinUrl,
    alt: "Linkedin",
    default: {
      assetId: "7AG9jGM2LtZwUi5Sdixcsm",
      uniqueId: "436e47afd0b8149ed2f0bc4a454a65e0",
      file: "linkedin-logo--default.png",
    },
    white: {
      assetId: "3qQaS81y5hLRvli0CjqogG",
      uniqueId: "e425f83c285c7954cf727bb913a3b49f",
      file: "linkedin-logo--white.png",
    },
    black: {
      assetId: "7vZJiiF5cmI93sA5tNYcXA",
      uniqueId: "29ffe3d3283988d1d9e5564a36502812",
      file: "linkedin-logo--black.png",
    },
  },
    svelte: {
      key: LogoName.SVELTE,
      name: "Svelte",
      url: "https://svelte.dev/",
      alt: "Svelte",
      default: {
        assetId: "kMgfKM8otnR0TFxWErWbd",
        uniqueId: "d0dfdeabab4baca3f8a4571c0673e179",
        file: "svelte-logo--default.png",
      },
    },
    figma: {
      key: LogoName.FIGMA,
      name: "Figma",
      url: "https://www.figma.com/",
      alt: "Figma",
      default: {
        assetId: "6IiXItlLgWHBwc5IZ3r3rA",
        uniqueId: "5a1cf31b25ba4a347ba5796ab929f439",
        file: "figma-logo--default.png",
      },
    },
    nodejs: {
      key: LogoName.NODEJS,
      name: "NodeJS",
      url: "https://nodejs.org/en",
      alt: "NodeJS",
      default: {
        assetId: "4wdUUArmKkR78q5Kamv7sQ",
        uniqueId: "d3e4a7c93383d1dadd94bd3cdca1f447",
        file: "nodejs-logo--default.png",
      },
    },
    ts: {
      key: LogoName.TS,
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      alt: "TypeScript",
      default: {
        assetId: "64bOscOJgGD9A9AJWTjiSL",
        uniqueId: "5112d383f9fbcd5befe80cd841cd3efd",
        file: "ts-logo--default.png",
      },
    },
    docker: {
      key: LogoName.DOCKER,
      name: "Docker",
      url: "https://www.docker.com/",
      alt: "Docker",
      default: {
        assetId: "5wSpkNEA2uv8ooZPQX8uJ7",
        uniqueId: "a5aaacc87f9bb86986072cd32e84b030",
        file: "docker-logo--default.png",
      },
    },
    midjourney: {
      key: LogoName.MIDJOURNEY,
      name: "Midjourney",
      url: "https://www.midjourney.com/",
      alt: "Midjourney",
      default: {
        assetId: "6xWoau5A4gUJDgTFd0MWlQ",
        uniqueId: "b5495e787ca773541fecb26b38e4cc73",
        file: "midjourney-logo--default.png",
      },
    },
    histoire: {
      key: LogoName.HISTOIRE,
      name: "Histoire",
      url: "https://www.histoire.com/",
      alt: "Histoire",
      default: {
        assetId: "5SvpP5WA3i3slStEk0j8P8",
        uniqueId: "e5a430638589f23d3a48e133666daada",
        file: "histoire-logo--default.png",
      },
    },
    postgresql: {
      key: LogoName.POSTGRESQL,
      name: "PostgreSQL",
      url: "https://www.postgresql.org/",
      alt: "PostgreSQL",
      default: {
        assetId: "4W8wztHWcjIyoPMqrnOCRO",
        uniqueId: "c3567a2e2f804fd4deecdf98765bb949",
        file: "postgresql-logo--default.png",
      },
    },
    postman: {
      key: LogoName.POSTMAN,
      name: "Postman",
      url: "https://www.postman.com/",
      alt: "Postman",
      default: {
        assetId: "KuI6HrB9Q3kFLJ4h5i4Sh",
        uniqueId: "d1467738d56d7baae792e2fb7aa2c48f",
        file: "postman-logo--default.png",
      },
    },
    git: {
      key: LogoName.GIT,
      name: "Git",
      url: "https://git-scm.com/",
      alt: "Git",
      default: {
        assetId: "6hCN69Bwrbt43QtXrB7jxl",
        uniqueId: "b8a1e508751563bb65edd9d557d60de8",
        file: "git-logo--default.png",
      },
    },
    contentful: {
      key: LogoName.CONTENTFUL,
      name: "Contentful",
      url: "https://www.contentful.com/",
      alt: "Contentful",
      default: {
        assetId: "6Z9L6U1khXBc1zpEUUudg",
        uniqueId: "803365b48d85086e331c078bda812523",
        file: "contentful-logo--default.png",
      },
    },
    react: {
      key: LogoName.REACT,
      name: "React",
      url: "https://reactjs.org/",
      alt: "React",
      default: {
        assetId: "5S7NaxVlZ5pRFvwp89ppEg",
        uniqueId: "b0755376cbaed2d7f68d7902cac8a228",
        file: "react-logo--default.png",
      },
    },
    gatsby: {
      key: LogoName.GATSBY,
      name: "Gatsby",
      url: "https://www.gatsbyjs.com/",
      alt: "Gatsby",
      default: {
        assetId: "77ETnUygfoXzZE9AH4QYyR",
        uniqueId: "0920021d071b6d77630b7753d0dcd8b6",
        file: "gatsby-logo--default.png",
      },
    },
    sass: {
      key: LogoName.SASS,
      name: "Sass",
      url: "https://sass-lang.com/",
      alt: "Sass",
      default: {
        assetId: "3uZRNzjnalz4w0xyxoWfNw",
        uniqueId: "e8c9970ea82faf75025f4610ae89ae6e",
        file: "sass-logo--default.png",
      },
    },
    sourcetree: {
      key: LogoName.SOURCETREE,
      name: "Sourcetree",
      url: "https://www.sourcetreeapp.com/",
      alt: "Sourcetree",
      default: {
        assetId: "5RNVX9yH7FuIqEMtuFlzkR",
        uniqueId: "e964a97a931e58917d16dd66ce00e4bf",
        file: "sourcetree-logo--default.png",
      },
    },
    bitbucket: {
      key: LogoName.BITBUCKET,
      name: "Bitbucket",
      url: "https://bitbucket.org/",
      alt: "Bitbucket",
      default: {
        assetId: "6xbMViKKdZ4obHgBRwssWC",
        uniqueId: "f4cc20785ca654e23670880b25363eb6",
        file: "bitbucket-logo--default.png",
      },
    },
    storybook: {
      key: LogoName.STORYBOOK,
      name: "Storybook",
      url: "https://storybook.js.org/",
      alt: "Storybook",
      default: {
        assetId: "3ejw4q0EkWfT4HO5CVE5tq",
        uniqueId: "ef50ebe5082df77f5c952ce12fb95cb7",
        file: "storybook-logo--default.png",
      },
    },
  };
  
  export default logos;
  