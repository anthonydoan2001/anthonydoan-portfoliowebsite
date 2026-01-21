import { experiences } from "@/lib/data";
import { Briefcase, Calendar, Code, MapPin, Users, Wrench } from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, typeof Wrench> = {
  Wrench,
  Code,
  Users
};

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExperience = experiences[selectedIndex];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Briefcase className="w-3 h-3" />
            <span>Career Path</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-mono">
            My <span className="text-emerald">Experience</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Experience List */}
          <div className="space-y-3 overflow-x-auto lg:overflow-visible">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.icon] || Wrench;
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    isSelected
                      ? "bg-emerald/10 border-emerald/30"
                      : "border-transparent hover:bg-secondary/20"
                  } border`}
                >
                  {/* Active Indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald" />
                  )}

                  {/* Hover indicator bar */}
                  {!isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald/0 group-hover:bg-emerald/30 transition-all duration-300" />
                  )}

                  <div className="flex items-start gap-4 relative">
                    <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${
                      isSelected ? "bg-emerald text-background" : "bg-secondary/30 text-muted-foreground group-hover:text-foreground"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-lg font-bold transition-colors duration-300 ${isSelected ? "text-emerald" : "text-foreground group-hover:text-emerald/80"}`}>
                        {exp.company}
                      </div>
                      <div className={`text-sm font-medium mt-1 transition-colors duration-300 break-words ${isSelected ? "text-foreground/80" : "text-muted-foreground"}`}>
                        {exp.title}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column - Selected Experience Details */}
          <div className="min-h-[300px] lg:min-h-[500px]">
            {selectedExperience && (
              <div key={selectedIndex} className="space-y-8">
                {/* Title Header */}
                <div className="space-y-4 border-b border-border/50 pb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight font-mono mb-2">
                      {selectedExperience.title}
                    </h3>
                    <div className="text-xl text-emerald font-semibold">
                      @ {selectedExperience.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 bg-secondary/50 px-4 py-1.5 rounded-md border border-border/50">
                      <Calendar className="w-3.5 h-3.5 text-emerald/70" />
                      <span>{selectedExperience.period}</span>
                    </div>

                    {selectedExperience.location && (
                      <div className="flex items-center gap-2 bg-secondary/50 px-4 py-1.5 rounded-md border border-border/50">
                        <MapPin className="w-3.5 h-3.5 text-emerald/70" />
                        <span>{selectedExperience.location}</span>
                      </div>
                    )}

                    {selectedExperience.type && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-emerald/20 bg-emerald/5 text-emerald">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                        <span className="font-medium uppercase text-xs tracking-wider">{selectedExperience.type}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {selectedExperience.responsibilities && selectedExperience.responsibilities.length > 0 ? (
                    <>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Responsibilities</h4>
                      <div className="space-y-3">
                        {selectedExperience.responsibilities.map((responsibility, idx) => (
                          <div
                            key={idx}
                            className="flex gap-4 group"
                          >
                            <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                            <p className="text-foreground/90 leading-relaxed">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selectedExperience.description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
