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
  file: "zofia-real-picture.webp",
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
      { text: "Hello, world! 👋\nMy name is " },
      { text: "Zofia Bronisz", highlight: true, bold: true },
      { text: " — I’m a web developer and designer from Poland, passionate about front-end and perfecting every detail." }
    ],
    paragraph2: [
      { text: "For the past " },
      { text: "two years", highlight: true, bold: true },
      { text: " I’ve been building websites — from the first sketches to fully working pages. I blend " },
      { text: "creativity with technical precision", highlight: true, bold: true },
      { text: " — fine-tuning pixels, adjusting margins, and ensuring every detail is just right. I love working on both the code and the visual side — and I feel best where these two worlds meet. I am also a"},
      { text: " co-owner and board member at Robiki,", highlight: true, bold: true },
      { text: "  an AI startup that I helped build from the ground up." },
    ],
    paragraph3: [
      { text: "In my free time, I’m passionate about " },
      { text: "mountains, cats, and... polish dumplings", highlight: true, bold: true },
      { text: " 🥟. I’m eager to keep growing and bring not only skills but also positive energy to my work." }
    ]
  },

  Polish: {
    title: "O mnie",
    age: "lata",
    city: "Lublin",
    country: "Polska",
    paragraph1: [
      { text: "Hello, world! 👋\nNazywam się " },
      { text: "Zofia Bronisz", highlight: true, bold: true },
      { text: " — jestem web developerką i projektantką z Polski, zakochaną we " },
      { text: "front-endzie i dopracowanych detalach.", highlight: true, bold: true },
    ],
    paragraph2: [
      { text: "Od dwóch lat" },
      { text: " tworzę zawodowo strony internetowe — od pierwszych szkiców aż po działającą witrynę. Łączę " },
      { text: "kreatywność z techniczną precyzją", highlight: true, bold: true },
      { text: " — dbam o każdy piksel, ustawiam marginesy i zwracam uwagę na każdy szczegół. " },
      { text: "Czerpię radość z pracy zarówno nad kodem, jak i warstwą wizualną — a najlepiej czuję się tam, gdzie te dwa światy się spotykają. Jestem również"},
      { text: " współwłaścicielką i członkinią zarządu w firmie Robiki", highlight: true, bold: true },
      { text: " — startupie z branży AI, który współtworzyłam od podstaw." },
    ],
    paragraph3: [
      { text: "Prywatnie kocham" },
      { text: " góry, koty i... pierogi", highlight: true, bold: true },
      { text: " 🥟. Chcę się rozwijać i wnosić do pracy nie tylko umiejętności, ale i dobrą energię." },
    ]
  }
};
