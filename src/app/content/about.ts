import type { Language } from "../stores/language";

export interface Image {
  name: string;
  alt: string;
  assetId: string;
  uniqueId: string;
  file: string;
}

export const aboutImage: Image = {
  name: "Zofia Bronisz",
  alt: "That's a me, Mario!",
  assetId: "20udfAPU7UTeQdV27L00Qk",
  uniqueId: "10dcf3249306f31269325dbdea8e395a",
  file: "zofia-real-picture.png",
};

type Fragment = { text: string; highlight?: boolean; bold?: boolean };

type AboutContent = {
  title: string;
  age: string;
  city: string;
  country: string;
  paragraph1: Fragment[];
  paragraph2: Fragment[];
  paragraph3: Fragment[];
};

export const aboutText: Record<Language, AboutContent> = {
  English: {
    title: "About me",
    age: "yrs",
    city: "Lublin",
    country: "Poland",
    paragraph1: [
      { text: "Hello, World 👋 I'm a front-end focused " },
      { text: "web developer & designer", bold: true },
      { text: " from " },
      { text: "Poland", bold: true },
      { text: ", and I'm very " },
      { text: "passionate", highlight: true, bold: true },
      { text: " and " },
      { text: "dedicated", highlight: true, bold: true },
      { text: " to my work." }
    ],
    paragraph2: [
      { text: "My name is " },
      { text: "Zofia Bronisz", highlight: true, bold: true },
      { text: ". With " },
      { text: "~2 years", highlight: true, bold: true },
      { text: " experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I " },
      { text: "thrive", highlight: true, bold: true },
      { text: " on both " },
      { text: "creative and logical challenges", bold: true },
      { text: ", and I am " },
      { text: "dedicated", highlight: true, bold: true },
      { text: " to bringing projects to life with " },
      { text: "pixel-perfect precision.", bold: true }
    ],
    paragraph3: [
      { text: "My career goal" , highlight: true, bold: true },
      { text: " is to work on " },
      { text: "dynamic projects", bold: true },
      { text: " that will allow me to " },
      { text: "collaborate", highlight: true, bold: true },
      { text: " with " },
      { text: "talented teams", bold: true },
      { text: " and further " },
      { text: "advance", highlight: true, bold: true },
      { text: " my " },
      { text: "professional development.", bold: true }
    ]
  },

  Polish: {
    title: "O mnie",
    age: "lata",
    city: "Lublin",
    country: "Polska",
    paragraph1: [
      { text: "Witaj, świecie 👋 Jestem skoncentrowaną na front-endzie " },
      { text: "web developerką i projektantką", bold: true },
      { text: " z " },
      { text: "Polski", bold: true },
      { text: ", bardzo " },
      { text: "zaangażowaną", highlight: true, bold: true },
      { text: " i " },
      { text: "pełną pasji", highlight: true, bold: true },
      { text: " w swoją pracę." }
    ],
    paragraph2: [
      { text: "Nazywam się " },
      { text: "Zofia Bronisz", highlight: true, bold: true },
      { text: ". Z ponad " },
      { text: "~2-letnim", highlight: true, bold: true },
      { text: " doświadczeniem jako profesjonalna graficzka zdobyłam umiejętności i wiedzę niezbędne do realizacji Twojego projektu. " },
      { text: "Rozwijam się", highlight: true, bold: true },
      { text: " zarówno w " },
      { text: "twórczych jak i logicznych wyzwaniach", bold: true },
      { text: ", i jestem " },
      { text: "zaangażowana", highlight: true, bold: true },
      { text: " w realizację projektów z " },
      { text: "perfekcyjną precyzją.", bold: true }
    ],
    paragraph3: [
      { text: "Moim celem zawodowym", highlight: true, bold: true },
      { text: " jest praca nad " },
      { text: "dynamicznymi projektami", bold: true },
      { text: ", które pozwolą mi " },
      { text: "współpracować", highlight: true, bold: true },
      { text: " z " },
      { text: "utalentowanymi zespołami", bold: true },
      { text: " i dalej " },
      { text: "rozwijać się", highlight: true, bold: true },
      { text: " zawodowo." }
    ]
  }
};