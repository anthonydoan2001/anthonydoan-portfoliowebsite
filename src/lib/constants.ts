export const PERSONAL_INFO = {
  name: "Anthony Doan",
  title: "IT Professional",
  subtitle: "Computer Technician & Full-Stack Developer",
  location: "Houston, TX",
  currentCompany: "Secure ITAD Services",
  email: "anthonydoanwork@gmail.com",
  phone: "(832) 279-0182",
  github: "https://github.com/anthonydoan2001",
  linkedin: "https://linkedin.com/in/anthonyduydoan",
  cvPath: "/Anthony_Doan_Resume.pdf"
} as const;

export const NAVIGATION_BRAND = "anthonydoan.dev" as const;

export const EDUCATION_INFO = {
  university: "University of Houston",
  degree: "B.S. Computer Science",
  minor: "Minor in Mathematics",
  period: "2019 - 2024"
} as const;

export const NAVIGATION_LINKS = [
  { href: "/", label: "Professional" },
  { href: "/projects", label: "Projects" },
  { href: "/personal", label: "Personal" },
  { href: "/contact", label: "Contact" }
] as const;

