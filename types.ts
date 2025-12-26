
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export enum Language {
  AR = 'ar',
  EN = 'en'
}
