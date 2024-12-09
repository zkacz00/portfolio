import { getImageMeta } from '../utils/meta';
import { type OpenGraph, type Twitter } from '../types/meta';

export interface MetaTag {
  [key: string]: {
    title: string;
    description: string;
    canonical?: string;
    robots?: string;
    og?: OpenGraph;
    twitter?: Twitter;
  };
}

export const metaTags: MetaTag = {
  home: {
    title: 'Robiki | Automate Your Business',
    description:
      'Robiki, a business assistant to optimize your business automations and operations. Simplify your business with Robiki AI.',
    canonical: 'https://robiki.ai/',
    og: {
      images: [
        getImageMeta(
          'https://images.ctfassets.net/dftkr9apurxl/4kppIy2pJb8HHKfAKwLYgx/3b6af7a807c9428606cade979e800de7/main-text-logo-small-white-4x.png',
          'Robiki'
        ),
      ],
    },
  },
  company: {
    title: 'Robiki | Our Team and Mission',
    description:
      'At Robiki, we are dedicated to transforming the way businesses automate their processes by providing an advanced AI assistant and automation tools.',
    canonical: 'https://robiki.ai/company/',
    og: {
      images: [
        getImageMeta(
          'https://images.ctfassets.net/dftkr9apurxl/2HHBDIW0TkMkzwZcoleXHX/07a4ceed80e511d7d4e04976c0043dad/Robiki-office.png',
          'Robiki Office'
        ),
      ],
    },
  },
  blog: {
    title: 'Robiki | Blog',
    description:
      'Explore in-depth articles, insights, and tips on how to boost your business with Robiki AI. Stay ahead in business automation and optimization with our regular updates.',
    canonical: 'https://robiki.ai/blog/',
    og: {
      images: [
        getImageMeta(
          'https://images.ctfassets.net/dftkr9apurxl/4kppIy2pJb8HHKfAKwLYgx/3b6af7a807c9428606cade979e800de7/main-text-logo-small-white-4x.png',
          'Robiki'
        ),
      ],
    },
  },
  contact: {
    title: 'Robiki | Contact',
    description: 'If you have any questions, please write to us at marketing@robiki.ai',
    canonical: 'https://robiki.ai/contact/',
  },
  error: {
    title: 'Robiki | 404 Error - Page Not Found',
    description: 'The requested page could not be found. Please check the URL or go back to the homepage.',
    robots: 'noindex, follow',
    og: {
      images: [
        getImageMeta(
          'https://images.ctfassets.net/dftkr9apurxl/4kppIy2pJb8HHKfAKwLYgx/3b6af7a807c9428606cade979e800de7/main-text-logo-small-white-4x.png',
          'Robiki'
        ),
      ],
    },
  },
  login: {
    title: 'Robiki | Log in',
    description: 'Log in or sign up to access your Robiki account and enjoy personalized AI services and solutions.',
    canonical: 'https://robiki.ai/login/',
    robots: 'nofollow',
    og: {
      images: [
        getImageMeta(
          'https://images.ctfassets.net/dftkr9apurxl/4kppIy2pJb8HHKfAKwLYgx/3b6af7a807c9428606cade979e800de7/main-text-logo-small-white-4x.png',
          'Robiki'
        ),
      ],
    },
  },
  pricing: {
    title: 'Robiki | Pricing',
    description:
      'Discover affordable plans to elevate your AI experience. Explore our pricing options tailored to your needs at Robiki.',
    canonical: 'https://robiki.ai/pricing/',
    og: {
      images: [
        getImageMeta(
          'https://images.ctfassets.net/dftkr9apurxl/4kppIy2pJb8HHKfAKwLYgx/3b6af7a807c9428606cade979e800de7/main-text-logo-small-white-4x.png',
          'Robiki'
        ),
      ],
    },
  },
};
