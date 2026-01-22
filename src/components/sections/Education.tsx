import { EDUCATION_INFO } from "@/lib/constants";
import { educationCourses } from "@/lib/data";
import { BookOpen, Calendar, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <GraduationCap className="w-3 h-3" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Column - Logo (Desktop Only) */}
          <div className="hidden md:block relative w-full">
            <div className="relative aspect-square p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center">
              <img
                src="/images/logos/UH.svg"
                alt="University of Houston"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* University and Degree Info */}
            <div className="space-y-4 sm:space-y-6">
              {/* Header with Logo */}
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                {/* Logo - Inline on Mobile */}
                <div className="relative flex-shrink-0 md:hidden">
                  <div className="relative w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 p-2 sm:p-2.5">
                    <img
                      src="/images/logos/UH.svg"
                      alt="University of Houston"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Title and Date */}
                <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground tracking-tight font-mono leading-tight">
                    {EDUCATION_INFO.university}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-secondary/50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-border/50 text-xs sm:text-sm font-mono text-muted-foreground whitespace-nowrap w-fit">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald/70 flex-shrink-0" />
                    <span>{EDUCATION_INFO.period}</span>
                  </div>
                </div>
              </div>

              {/* Degree Info */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="text-sm sm:text-base md:text-lg font-bold text-emerald">
                  {EDUCATION_INFO.degree}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                  {EDUCATION_INFO.minor}
                </p>
              </div>
            </div>

            {/* Coursework Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald flex-shrink-0" />
                Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {educationCourses.map((course, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-xs sm:text-sm cursor-default"
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
