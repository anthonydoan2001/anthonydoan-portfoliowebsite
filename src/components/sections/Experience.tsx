import { experiences } from "@/lib/data";
import { Briefcase, Calendar, Code, MapPin, Users, Wrench } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const iconMap: Record<string, typeof Wrench> = {
  Wrench,
  Code,
  Users
};

// Highlight quantitative metrics in text — only numbers ending with % or +
const highlightMetrics = (text: string) => {
  const parts = text.split(/(\d+[\d,]*\.?\d*[%+])/g);
  return parts.map((part, i) => {
    if (/^\d+[\d,]*\.?\d*[%+]$/.test(part)) {
      return <span key={i} className="text-emerald font-semibold">{part}</span>;
    }
    return part;
  });
};

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const selectedExperience = experiences[selectedIndex];
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleSelect = useCallback((index: number) => {
    if (index === selectedIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setIsTransitioning(false);
    }, 150);
  }, [selectedIndex]);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-6xl mx-auto ${isInView ? 'revealed' : ''}`}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 md:space-y-6 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Briefcase className="w-3 h-3" />
            <span>Career</span>
          </div>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-mono leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">Experience</span>
          </h2>
        </div>

        {/* Mobile: Horizontal Scrollable Tabs */}
        <div className="lg:hidden mb-6 sm:mb-8 reveal-up stagger-1">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.icon] || Wrench;
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 touch-manipulation ${
                    isSelected
                      ? "bg-emerald/10 border-2 border-emerald/50 text-emerald"
                      : "bg-secondary/30 border-2 border-transparent hover:bg-secondary/50 hover:border-border/50 text-muted-foreground active:bg-secondary/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-emerald" : ""}`} />
                  <div className="text-left min-w-0">
                    <div className={`text-sm font-bold transition-colors duration-300 leading-tight whitespace-nowrap ${isSelected ? "text-emerald" : "text-foreground"}`}>
                      {exp.company}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two Column Layout - Desktop */}
        <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start reveal-up stagger-2">
          {/* Left Column - Experience List with Timeline (Desktop Only) */}
          <div className="hidden lg:block relative">
            {/* Timeline line */}
            <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-border/30" />

            <div className="space-y-2 sm:space-y-3 relative">
              {experiences.map((exp, index) => {
                const Icon = iconMap[exp.icon] || Wrench;
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
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
                      <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 flex-shrink-0 relative z-10 ${
                        isSelected ? "bg-emerald text-background" : "bg-secondary/30 text-muted-foreground group-hover:text-foreground"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm md:text-base font-bold transition-colors duration-300 leading-tight ${isSelected ? "text-emerald" : "text-foreground group-hover:text-emerald/80"}`}>
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
          </div>

          {/* Right Column - Selected Experience Details */}
          <div className="min-h-[250px] sm:min-h-[300px] lg:min-h-[500px]">
            {selectedExperience && (
              <div
                className={`space-y-6 sm:space-y-8 transition-all duration-300 ${
                  isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {/* Title Header */}
                <div className="space-y-3 sm:space-y-4 border-b border-border/50 pb-4 sm:pb-6">
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground tracking-tight font-mono mb-1.5 sm:mb-2 leading-tight">
                      {selectedExperience.title}
                    </h3>
                    <div className="text-sm md:text-base text-emerald font-semibold">
                      @ {selectedExperience.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-sm text-muted-foreground">
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
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Responsibilities</h4>
                      <div className="space-y-2.5 sm:space-y-3">
                        {selectedExperience.responsibilities.map((responsibility, idx) => (
                          <div
                            key={idx}
                            className="flex gap-3 sm:gap-4 group"
                          >
                            <span className="text-emerald mt-1 sm:mt-1.5 flex-shrink-0 text-sm">&#9657;</span>
                            <p className="text-sm text-foreground/90 leading-relaxed">{highlightMetrics(responsibility)}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
