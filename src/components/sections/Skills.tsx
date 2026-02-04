import { useInView } from "@/hooks/useInView";
import { skills } from "@/lib/data";
import { Code2, Database, Terminal, Wrench } from "lucide-react";

const categoryConfig = {
  languages: { label: "Languages", icon: Code2 },
  frameworks: { label: "Frameworks", icon: Terminal },
  tools: { label: "Tools", icon: Wrench },
  infrastructure: { label: "Infrastructure", icon: Database },
};

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-4xl mx-auto ${isInView ? "revealed" : ""}`}>
        <div className="text-center mb-5 sm:mb-6 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Wrench className="w-3 h-3" />
            <span>Skills</span>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-2 reveal-up stagger-1">
          {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((key) => {
            const { label, icon: Icon } = categoryConfig[key];
            const items = skills[key];

            return (
              <div
                key={key}
                className="flex items-start gap-3 sm:gap-4 py-3 px-4 rounded-lg border border-border/30 bg-card/30"
              >
                <div className="flex items-center gap-2 sm:gap-3 w-28 sm:w-36 flex-shrink-0">
                  <Icon className="w-4 h-4 text-emerald flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </div>
                <div className="flex-1 flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-md border border-border/50 bg-secondary/30 text-xs font-medium text-foreground/70"
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
