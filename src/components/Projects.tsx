import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "User Provisioning System",
    description: "Automated user account creation and permission management using PowerShell, Active Directory, and Azure AD",
    tags: ["PowerShell", "Azure AD", "Active Directory"],
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Rebate Processing Automation",
    description: "JavaScript and SQL-based system that reduced manual workload by 40 hours weekly",
    tags: ["JavaScript", "SQL", "Automation"],
    image: "bg-gradient-to-br from-emerald/20 to-blue-500/20"
  },
  {
    title: "IT Asset Management",
    description: "Comprehensive tracking system for hardware inventory and equipment lifecycle management",
    tags: ["Documentation", "Process Improvement"],
    image: "bg-gradient-to-br from-orange-500/20 to-pink-500/20"
  },
  {
    title: "Network Configuration",
    description: "TCP/IP setup, VPN configuration, and remote desktop support for enterprise environments",
    tags: ["Networking", "Security", "VPN"],
    image: "bg-gradient-to-br from-purple-500/20 to-emerald/20"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            A small selection of <span className="text-emerald">recent projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-emerald transition-all duration-300"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="text-6xl opacity-50">💻</div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-emerald/10 border border-emerald/20 rounded-full text-xs text-emerald font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
