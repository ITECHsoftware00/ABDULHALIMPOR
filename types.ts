
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  fullDescription?: string;
  techStack?: string[];
  features?: string[];
  clientLink?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  description: string;
  period: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
