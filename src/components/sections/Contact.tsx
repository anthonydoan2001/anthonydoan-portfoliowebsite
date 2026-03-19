import { EmailIcon, GitHubIcon, LinkedInIcon, MapPinIcon, PhoneIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/lib/constants";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";
import { memo } from "react";

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-5xl mx-auto w-full ${isInView ? "revealed" : ""}`}>
        {/* Section Header — matches other sections */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 md:space-y-6 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Mail className="w-3 h-3" />
            <span>Contact</span>
          </div>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-mono leading-tight">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">
              Together
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            I'm currently available for immediate start and flexible with onsite work.
          </p>
        </div>

        {/* Contact Items Grid */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-6 reveal-up stagger-1">
          <ContactItem
            icon={<EmailIcon className="w-4 h-4" />}
            label="Email"
            value={PERSONAL_INFO.email}
            href={`mailto:${PERSONAL_INFO.email}`}
          />
          <ContactItem
            icon={<PhoneIcon className="w-4 h-4" />}
            label="Phone"
            value={PERSONAL_INFO.phone}
            href={`tel:${PERSONAL_INFO.phone.replace(/\D/g, "")}`}
          />
          <ContactItem
            icon={<LinkedInIcon className="w-4 h-4" />}
            label="LinkedIn"
            value="anthonyduydoan"
            href={PERSONAL_INFO.linkedin}
            external
          />
          <ContactItem
            icon={<GitHubIcon className="w-4 h-4" />}
            label="GitHub"
            value="anthonydoandev"
            href={PERSONAL_INFO.github}
            external
          />
        </div>

        {/* Location Bar */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10 sm:mb-12 reveal-up stagger-2">
          <MapPinIcon className="w-3.5 h-3.5 text-emerald" />
          <span>{PERSONAL_INFO.location}</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up stagger-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald text-background font-semibold rounded-full hover:bg-emerald/90 active:scale-95 transition-all duration-300 shadow-lg shadow-emerald/20 text-sm touch-manipulation"
          >
            <span>Send me a message</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={PERSONAL_INFO.cvPath}
            download
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-emerald transition-colors underline underline-offset-4"
          >
            <Download className="w-3.5 h-3.5" />
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const ContactItem = memo(({ icon, label, value, href, external }: ContactItemProps) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="group flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-card/40 hover:border-emerald/30 hover:bg-emerald/5 transition-all duration-300 touch-manipulation"
  >
    <div className="p-2 rounded-lg bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-background transition-colors duration-300 flex-shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold text-foreground group-hover:text-emerald transition-colors duration-300 truncate">
        {value}
      </div>
    </div>
    {external && (
      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-emerald transition-colors duration-300 flex-shrink-0 ml-auto" />
    )}
  </a>
));
ContactItem.displayName = "ContactItem";

export default Contact;
