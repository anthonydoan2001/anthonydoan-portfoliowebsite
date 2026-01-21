import { EDUCATION_INFO } from "@/lib/constants";
import { educationCourses } from "@/lib/data";
import { BookOpen, Calendar, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <GraduationCap className="w-3 h-3" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-mono">
            My <span className="text-emerald">Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Column - Logo (Desktop Only) */}
          <div className="hidden md:block relative w-full">
            <div className="relative aspect-square p-6 md:p-8 lg:p-10 flex items-center justify-center">
              <img
                src="/images/logos/UH.svg"
                alt="University of Houston"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* University and Degree Info */}
            <div className="space-y-6">
              {/* Header with Logo */}
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Logo - Inline on Mobile */}
                <div className="relative flex-shrink-0 md:hidden">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 p-2 sm:p-2.5">
                    <img
                      src="/images/logos/UH.svg"
                      alt="University of Houston"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Title and Date */}
                <div className="flex-1 min-w-0 space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight font-mono">
                    {EDUCATION_INFO.university}
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-md border border-border/50 text-xs sm:text-sm font-mono text-muted-foreground whitespace-nowrap w-fit">
                    <Calendar className="w-3.5 h-3.5 text-emerald/70" />
                    <span>{EDUCATION_INFO.period}</span>
                  </div>
                </div>
              </div>

              {/* Degree Info */}
              <div className="space-y-2">
                <div className="text-base sm:text-lg md:text-xl font-bold text-emerald">
                  {EDUCATION_INFO.degree}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium">
                  {EDUCATION_INFO.minor}
                </p>
              </div>
            </div>

            {/* Coursework Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-emerald" />
                Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-3">
                {educationCourses.map((course, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-sm cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
