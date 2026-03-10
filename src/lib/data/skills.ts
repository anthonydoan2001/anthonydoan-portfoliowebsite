import skillsJson from "./skills.json";

export interface Skills {
  frontend: string[];
  backend: string[];
  cloud: string[];
  sysadmin: string[];
}

export const skills: Skills = skillsJson;
