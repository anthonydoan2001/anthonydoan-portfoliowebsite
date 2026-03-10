import { skills } from "@/lib/data";
import { Wrench } from "lucide-react";

const categoryConfig = {
  frontend: { label: "Frontend" },
  backend: { label: "Backend" },
  cloud: { label: "Cloud & DevOps" },
  sysadmin: { label: "Sysadmin" },
};

const Skills = () => {
  return (
    <section>
      <div className="text-center mb-10 sm:mb-14 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-sm font-medium uppercase tracking-wider">
          <Wrench className="w-4 h-4" />
          <span>Skills</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((key) => {
          const { label } = categoryConfig[key];
          const items = skills[key];

          return (
            <div
              key={key}
              className="p-5 bg-card border border-border rounded-xl"
            >
              <h3 className="font-mono text-emerald text-xs font-bold uppercase mb-4 tracking-widest">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-secondary rounded border border-border text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
