import skillsJson from "./skills.json";

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  infrastructure: string[];
}

export const skills: Skills = skillsJson;
