import { GraduationCap } from "lucide-react";

const Education = () => {
  const courses = [
    "Software Design",
    "Fundamentals of Software Engineering",
    "Database Systems",
    "Data Science 1",
    "Data Science and Machine Learning"
  ];

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-emerald" />
          <h2 className="text-4xl font-bold font-mono">Education</h2>
        </div>

        <div className="space-y-6">
          <div className="relative">
            
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-2xl font-bold text-foreground font-mono">University of Houston</h3>
                <span className="text-muted-foreground font-mono">2019 - 2024</span>
              </div>
              
              <div className="space-y-1">
                <p className="text-lg text-emerald font-semibold">B.S. Computer Science</p>
                <p className="text-base text-muted-foreground">Minor in Mathematics</p>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Relevant Courses</p>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full border border-emerald/30 text-sm text-foreground bg-emerald/5 hover:bg-emerald/10 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
