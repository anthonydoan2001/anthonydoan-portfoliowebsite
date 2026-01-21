import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    icon: "Wrench",
    title: "Computer Technician",
    company: "Secure ITAD Services",
    period: "June 2025 — Present",
    description: "Diagnose hardware issues, manage IT assets, and perform secure data sanitization",
    color: "from-blue-500/20 to-blue-500/5",
    location: "Houston, TX",
    type: "Full-time",
    responsibilities: [
      "Engineered Chrome extension automation tool using JavaScript to auto-fill 50+ fields in Razor ERP system, reducingdata entry time by 70% and increasing daily computer processing volume with improved accuracy.",
      "Process 60+ computers daily through complete diagnostics, repair, and quality assurance workflows using ZipErase and Razor ERP tracking systems",
      "Execute secure data sanitization and hardware refurbishment following NIST 800-88 and company security protocols",
      "Manage comprehensive IT asset inventory including specification documentation, equipment lifecycle tracking, and disposition reporting"
    ]
  },
  {
    icon: "Code",
    title: "Information Technology Intern",
    company: "Daikin Comfort",
    period: "June 2022 — September 2022",
    description: "Created automation systems and reduced workload by 40 hours weekly",
    color: "from-emerald/20 to-emerald/5",
    location: "Waller, TX",
    type: "Internship",
    responsibilities: [
      "Contributed to dealer rebate automation system that reduced processing time from 5 days to 24 hours (80% improvement) by building JavaScript data extraction scripts and SQL queries for rebate processing.",
      "Designed database schemas by analyzing Excel data structures, then performed ETL processes including data cleaning, transformation, and migration from Excel spreadsheets into SQL databases for operational reporting.",
      "Created SQL queries for data validation and extraction supporting finance team reporting."
    ]
  },
  {
    icon: "Users",
    title: "Shift Leader",
    company: "Tiff's Treats",
    period: "December 2020 — June 2022",
    description: "Led team operations, provided customer service, trained staff members",
    color: "from-purple-500/20 to-purple-500/5",
    location: "Houston, TX",
    type: "Part-time",
    responsibilities: [
      "Supervised team of 5-8 employees during high-volume shifts, coordinating operations to serve 100+ customers daily with consistent quality",
      "Trained and mentored 10+ new team members on POS systems, operational procedures, and customer service standards",
      "Managed end-to-end store operations including opening/closing procedures, inventory management, cash reconciliation, and quality control"
    ]
  },
];
