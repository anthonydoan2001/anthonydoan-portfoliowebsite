import { Wrench, Code, Users, Award } from "lucide-react";

const experiences = [
  {
    icon: Wrench,
    title: "Computer Technician",
    company: "Secure ITAD Services",
    period: "June 2025 - Present",
    description: "Diagnose hardware issues, manage IT assets, and perform secure data sanitization",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Code,
    title: "IT Intern",
    company: "Daikin Comfort",
    period: "June 2022 - September 2022",
    description: "Supported 50+ users, created automation systems, reduced workload by 40 hours weekly",
    color: "from-emerald/20 to-emerald/5"
  },
  {
    icon: Users,
    title: "Shift Leader",
    company: "Tiff's Treats",
    period: "December 2020 - June 2022",
    description: "Led team operations, provided customer service, trained staff members",
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Award,
    title: "Education",
    company: "University of Houston",
    period: "Graduated May 2024",
    description: "BS in Computer Science, Minor in Mathematics",
    color: "from-orange-500/20 to-orange-500/5"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-emerald">Experience</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:border-emerald transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-emerald" />
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-emerald font-mono">{exp.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
