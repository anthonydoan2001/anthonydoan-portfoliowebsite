import { skills } from "@/lib/data";
import { Code2, Database, Terminal, Wrench } from "lucide-react";

const categoryConfig = {
  languages: { label: "Languages", icon: Code2 },
  frameworks: { label: "Frameworks & Libraries", icon: Terminal },
  tools: { label: "Developer Tools", icon: Wrench },
  infrastructure: { label: "Infrastructure", icon: Database },
};

const Skills = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10 sm:mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-sm font-medium uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>Skills</span>
          </div>
        </div>

        {/* Sleek List Layout */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((key) => {
            const { label, icon: Icon } = categoryConfig[key];
            const items = skills[key];

            return (
              <div
                key={key}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-xl border border-border/20 bg-card/20 hover:bg-card/40 hover:border-emerald/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle side accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-3 sm:w-56 flex-shrink-0">
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-emerald transition-colors duration-300" />
                  <h3 className="text-sm sm:text-base font-semibold text-foreground/90 font-mono tracking-tight">{label}</h3>
                </div>

                <div className="flex flex-wrap gap-2 flex-1">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-secondary/30 border border-border/40 text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 hover:!bg-emerald/10 hover:!text-emerald hover:!border-emerald/30 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
