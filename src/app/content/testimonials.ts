export interface Image {
  name: string;
  alt: string;
  assetId: string;
  uniqueId: string;
  file: string;
}

export type Testimonial = {
  title: string;
  opinion: string;
  name: string;
  job: string;
  linkedin: string;
  image: Image;
};

export type Testimonials = Array<Testimonial>;

export const testimonialsUtils: { [key: string]: string } = {
  title: "Testimonials",
  subtitle: "People I’ve worked with have said some nice things...",
  quotesImage: "src/app/assets/images/quotes-picture.png"
};

export const testimonials: Testimonials = [
  {
    title: "I highly recommend",
    opinion:
      "Zofia is a real pleasure to work with and we are looking forward to working with her again. She is definetily the kind of designer and developer you can trust with a project from start to finish.",
    name: "Gregory Guidero",
    job: " | CoFunder at Robiki.ai",
    linkedin: "https://www.linkedin.com/in/gguidero/",
    image: {
      name: "Gregory Guidero",
      alt: "Gregory Guidero",
      assetId: "3EhzGAUkhZkBVUtrfJnqyT",
      uniqueId: "a8cccbd87e3701df286a61756d7438d1",
      file: "src/app/assets/images/greg-picture.png",
    },
  },
  {
    title: "I highly recommend too",
    opinion:
      "Zofia is a real pleasure to work with and we are looking forward to working with her again. She is definetily the kind of designer and developer you can trust with a project from start to finish.",
    name: "Reward Edoyugbo",
    job: " | CoFunder at Robiki.ai",
    linkedin: "https://www.linkedin.com/in/rewardraj/",
    image: {
      name: "Reward Edoyugbo",
      alt: "Reward Edoyugbo",
      assetId: "5k3gQoeHtOUtkHMvEunWVQ",
      uniqueId: "32e27bf88b22419f3ce71eb4f8fbbc20",
      file: "src/app/assets/images/reward-picture.png",
    },
  },
];
