import { PERSONAL_INFO } from "@/lib/constants";
import { techStack } from "@/lib/data";
import { Github, Linkedin, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <User className="w-3 h-3" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            A look into <span className="text-emerald">my background</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-20 items-start">

          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                <p>
                  I am a Computer Technician at Secure ITAD Services, Inc. with a B.S. in Computer Science
                  from the University of Houston (2024). I'm actively pursuing CompTIA Network+ certification
                  and currently building an AI calendar application.
                </p>
                <p>
                  I have interests in homelab infrastructure and virtualization with Proxmox, IT systems
                  administration, and automation development. I'm a huge enthusiast of server hardware and
                  gaming setups. In my free time, I enjoy playing League of Legends and Path of Exile, as
                  well as reading manga and webnovels.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/personal"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-emerald/30 text-emerald hover:bg-emerald/5 transition-colors text-sm font-medium"
                >
                  <span className="mr-2">↗</span> More about me, if you're curious.
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-muted-foreground font-medium">Recently Used Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-sm cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-muted-foreground font-medium">Social Quick Links</h3>
              <div className="flex flex-wrap gap-4">
                <SocialButton href={PERSONAL_INFO.github} icon={Github} label="GitHub" />
                <SocialButton href={PERSONAL_INFO.linkedin} icon={Linkedin} label="LinkedIn" />
                <SocialButton href={`mailto:${PERSONAL_INFO.email}`} icon={Mail} label="Email" />
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative group md:max-w-xs mx-auto w-full pt-8">
             {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="aspect-square relative">
                <img
                  src="/images/about.jpg"
                  alt="Anthony Doan"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-3xl border border-emerald/20 bg-emerald/5 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialButton = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card hover:border-emerald/50 hover:bg-emerald/5 transition-all duration-300 group"
  >
    <Icon className="w-4 h-4 text-emerald group-hover:scale-110 transition-transform" />
    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">{label}</span>
  </a>
);

export default About;
