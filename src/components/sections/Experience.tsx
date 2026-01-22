import { experiences } from "@/lib/data";
import { Briefcase, Calendar, Code, MapPin, Users, Wrench } from "lucide-react";
import { memo, useCallback, useState } from "react";

const iconMap: Record<string, typeof Wrench> = {
  Wrench,
  Code,
  Users
};

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExperience = experiences[selectedIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Briefcase className="w-3 h-3" />
            <span>Career</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">Experience</span>
          </h2>
        </div>

        {/* Mobile: Horizontal Scrollable Tabs */}
        <div className="lg:hidden mb-6 sm:mb-8">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.icon] || Wrench;
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 touch-manipulation ${
                    isSelected
                      ? "bg-emerald/10 border-2 border-emerald/50 text-emerald"
                      : "bg-secondary/30 border-2 border-transparent hover:bg-secondary/50 hover:border-border/50 text-muted-foreground active:bg-secondary/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-emerald" : ""}`} />
                  <div className="text-left min-w-0">
                    <div className={`text-xs sm:text-sm font-bold transition-colors duration-300 leading-tight whitespace-nowrap ${isSelected ? "text-emerald" : "text-foreground"}`}>
                      {exp.company}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two Column Layout - Desktop */}
        <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Experience List (Desktop Only) */}
          <div className="hidden lg:block space-y-2 sm:space-y-3">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.icon] || Wrench;
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 group relative overflow-hidden touch-manipulation ${
                    isSelected
                      ? "bg-emerald/10 border-emerald/30"
                      : "border-transparent hover:bg-secondary/20 active:bg-secondary/30"
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
                    <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 flex-shrink-0 ${
                      isSelected ? "bg-emerald text-background" : "bg-secondary/30 text-muted-foreground group-hover:text-foreground"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-base md:text-lg font-bold transition-colors duration-300 leading-tight ${isSelected ? "text-emerald" : "text-foreground group-hover:text-emerald/80"}`}>
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
          <div className="min-h-[250px] sm:min-h-[300px] lg:min-h-[500px]">
            {selectedExperience && (
              <div key={selectedIndex} className="space-y-6 sm:space-y-8">
                {/* Title Header */}
                <div className="space-y-3 sm:space-y-4 border-b border-border/50 pb-4 sm:pb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground tracking-tight font-mono mb-1.5 sm:mb-2 leading-tight">
                      {selectedExperience.title}
                    </h3>
                    <div className="text-sm sm:text-base md:text-lg text-emerald font-semibold">
                      @ {selectedExperience.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-secondary/50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-md border border-border/50">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald/70 flex-shrink-0" />
                      <span className="whitespace-nowrap">{selectedExperience.period}</span>
                    </div>

                    {selectedExperience.location && (
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-secondary/50 px-3 sm:px-4 py-1 sm:py-1.5 rounded-md border border-border/50">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald/70 flex-shrink-0" />
                        <span className="break-words">{selectedExperience.location}</span>
                      </div>
                    )}

                    {selectedExperience.type && (
                      <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-emerald/20 bg-emerald/5 text-emerald">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald animate-pulse flex-shrink-0" />
                        <span className="font-medium uppercase text-[10px] sm:text-xs tracking-wider whitespace-nowrap">{selectedExperience.type}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  {selectedExperience.responsibilities && selectedExperience.responsibilities.length > 0 ? (
                    <>
                      <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Responsibilities</h4>
                      <div className="space-y-2.5 sm:space-y-3">
                        {selectedExperience.responsibilities.map((responsibility, idx) => (
                          <div
                            key={idx}
                            className="flex gap-3 sm:gap-4 group"
                          >
                            <span className="text-emerald mt-1 sm:mt-1.5 flex-shrink-0 text-xs sm:text-sm">▹</span>
                            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
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
