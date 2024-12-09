export enum OpenGraphType {
  WEBSITE = 'website',
  ARTICLE = 'article',
  BOOK = 'book',
  PROFILE = 'profile',
  VIDEO = 'video',
  MUSIC = 'music',
  MOVIE = 'movie',
  RESTAURANT = 'restaurant',
  PRODUCT = 'product',
  PLACE = 'place',
}

export interface OpenGraph {
  url?: string;
  type?: OpenGraphType;
  title?: string;
  description?: string;
  images?: ReadonlyArray<OpenGraphImage>;
  videos?: ReadonlyArray<OpenGraphVideos>;
  audio?: ReadonlyArray<OpenGraphAudio>;
  locale?: string;
  siteName?: string;
  article?: OpenGraphArticle;
  video?: OpenGraphVideo;
}

export interface OpenGraphImage {
  url: string;
  secureUrl?: string;
  type?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface OpenGraphVideos {
  url: string;
  secureUrl?: string;
  type?: string;
  width?: number;
  height?: number;
}

export interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  authors?: ReadonlyArray<string>;
  section?: string;
  tags?: ReadonlyArray<string>;
}

export interface OpenGraphAudio {
  url: string;
  secureUrl?: string;
  type?: string;
}

export interface OpenGraphVideo {
  actors?: ReadonlyArray<OpenGraphVideoActors>;
  directors?: ReadonlyArray<string>;
  writers?: ReadonlyArray<string>;
  duration?: number;
  releaseDate?: string;
  tags?: ReadonlyArray<string>;
  series?: string;
}

export interface OpenGraphVideoActors {
  profile: string;
  role?: string;
}

export enum TwitterCardType {
  SUMMARY = 'summary',
  SUMMARY_LARGE_IMAGE = 'summary_large_image',
  APP = 'app',
  PLAYER = 'player',
}

export interface Twitter {
  cardType?: TwitterCardType;
  site?: string;
  handle?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}
