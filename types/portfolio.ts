export type TechnologyCategory = {
  title: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  implementedHighlights?: string[];
  nextSteps?: string[];
  techs: string[];
  plannedTechs?: string[];
  github?: string | null;
  readme?: string | null;
  apiDocs?: string | null;
  demo?: string | null;
  category: string;
  featured: boolean;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type HighlightItem = {
  label: string;
  value: string;
};

export type WorkflowItem = {
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  role: string;
  heroStack: string;
  availability: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
  about: string;
  focusAreas: string[];
  highlights: HighlightItem[];
  workflow: WorkflowItem[];
  technologies: TechnologyCategory[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
};
