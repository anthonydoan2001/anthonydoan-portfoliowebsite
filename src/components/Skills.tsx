const skillCategories = [
  {
    title: "Systems & Platforms",
    skills: ["Windows 10/11", "Windows Server", "Active Directory", "Azure AD", "Microsoft 365"]
  },
  {
    title: "Development & Scripting",
    skills: ["PowerShell", "Python", "SQL", "JavaScript", "Git"]
  },
  {
    title: "Hardware & Networking",
    skills: ["PC Diagnostics", "TCP/IP", "VPN", "Remote Desktop", "Printer Setup"]
  },
  {
    title: "Tools & Applications",
    skills: ["Outlook", "SharePoint", "Teams", "Excel", "Asset Management"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-emerald">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive skill set spanning systems administration, development, and support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-emerald transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-emerald">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-secondary border border-border rounded-md text-sm font-mono hover:border-emerald/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-card border border-emerald/30 rounded-lg px-6 py-3">
            <span className="text-emerald font-mono">🎯 Currently pursuing: </span>
            <span className="text-foreground font-semibold">CompTIA Network+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
