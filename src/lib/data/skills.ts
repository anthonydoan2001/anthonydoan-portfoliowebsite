import skillsJson from "../../../public/data/skills.json";

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  infrastructure: string[];
}

export const skills: Skills = skillsJson;
