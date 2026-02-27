import AllProjects from "@/components/sections/AllProjects";
import Skills from "@/components/sections/Skills";

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Skills />
      <hr className="border-border/30 mx-4 sm:mx-6 lg:mx-8 mb-8" />
      <AllProjects />
    </div>
  );
}
