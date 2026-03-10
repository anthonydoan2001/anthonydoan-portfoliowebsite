import AllProjects from "@/components/sections/AllProjects";
import Skills from "@/components/sections/Skills";

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20 px-6 md:px-12 lg:px-20 pb-20 max-w-[1600px] mx-auto">
      <Skills />
      <div className="mt-20" />
      <AllProjects />
    </div>
  );
}
