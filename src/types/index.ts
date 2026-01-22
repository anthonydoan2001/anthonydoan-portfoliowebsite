export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  bullets?: string[];
}

export interface Experience {
  icon: string;
  title: string;
  company: string;
  period: string;
  description: string;
  color: string;
  location?: string;
  type?: string;
  responsibilities?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface JourneyItem {
  year: string;
  title: string;
  items: string[];
}

export interface PersonalInfo {
  role: string;
  education: string;
  certPursuing: string;
  expertise: {
    itSupport: string[];
    development: string[];
    infrastructure: string[];
  };
  highlights: string[];
  passions: string[];
  seeking: string;
  availability: string;
}

