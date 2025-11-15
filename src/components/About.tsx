import nextjsLogo from "@/assets/nextjs-logo.svg";

const About = () => {
  const techStack = ["Next.js", "React", "TypeScript", "Python", "Express", ".NET", "Node.js", "SQL"];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold font-mono text-center mb-16">
          A Little Bit <span className="text-emerald">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Code Block */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald"></div>
              </div>
              <pre className="text-foreground/80">
                <code>{`const anthonyDoan = {
  role: "IT Technician",
  education: "BS Computer Science '24",
  certPursuing: "CompTIA Network+",
  
  expertise: {
    itSupport: [
      "Hardware Diagnostics & Repair",
      "Microsoft 365 Administration & Active Directory"
    ],
    development: [
      "JavaScript/TypeScript",
      "Python & PowerShell",
      "SQL"
    ],
    infrastructure: [
      "Virtualization (Proxmox)",
      "Network Configuration",
      "System Automation"
    ]
  },
  
  highlights: [
    "Developed full-stack web applications",
    "Built Chrome extensions for workflow automation",
  ],

  passions: [
    "Full-Stack Development",
    "Automation",
    "Problem Solving"
  ],
  
  seeking: "System Administrator & IT Helpdesk roles",
  availability: "Immediate"
};`}</code>
              </pre>
            </div>
          </div>

          {/* Right Side - Grid Info */}
          <div className="grid grid-cols-2 gap-4">
            {/* Professional Summary */}
            <div className="col-span-2 bg-card border border-border rounded-lg p-8">
              <p className="text-foreground text-3xl leading-relaxed">
                IT professional who builds automation tools, full-stack web apps, and troubleshoots IT systems.
              </p>
            </div>

            {/* Primary Tech Stack */}
            <div className="col-span-2 bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground text-sm mb-2">My primary tech stack</p>
              <h3 className="text-5xl font-bold text-emerald">NEXT.JS</h3>
            </div>

            {/* Tech Stack Badges */}
            {techStack.map((tech) => (
              <div
                key={tech}
                className="bg-secondary border border-border rounded-lg p-4 flex items-center justify-center font-semibold text-sm hover:bg-secondary/80 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
