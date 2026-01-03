import { EDUCATION_INFO } from "@/lib/constants";
import { educationCourses } from "@/lib/data";
import { BookOpen, Calendar, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="px-4 pt-12 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-28 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <GraduationCap className="w-3 h-3" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            My <span className="text-emerald">Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          {/* Left Column - Logo */}
          <div className="relative w-full max-w-xs mx-auto md:mx-0">
            {/* Logo Container */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-square relative p-6 md:p-8 flex items-center justify-center">
                <img
                  src="/images/logos/UH.svg"
                  alt="University of Houston"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-3xl border border-emerald/20 bg-emerald/5 translate-x-4 translate-y-4"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* University and Degree Info */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight font-mono">
                    {EDUCATION_INFO.university}
                  </h3>
                  <div className="inline-flex items-center justify-center gap-2 bg-secondary/50 px-4 py-1.5 rounded-md border border-border/50 text-sm font-mono text-muted-foreground whitespace-nowrap w-fit">
                    <Calendar className="w-3.5 h-3.5 text-emerald/70" />
                    <span>{EDUCATION_INFO.period}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xl md:text-2xl font-bold text-emerald">
                    {EDUCATION_INFO.degree}
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground font-medium">
                    {EDUCATION_INFO.minor}
                  </p>
                </div>
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
