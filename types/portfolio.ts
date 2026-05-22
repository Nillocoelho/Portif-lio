export type TechnologyCategory = {
  title: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  github: string;
  demo?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Profile = {
  name: string;
  role: string;
  heroStack: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
  about: string;
  technologies: TechnologyCategory[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
};
