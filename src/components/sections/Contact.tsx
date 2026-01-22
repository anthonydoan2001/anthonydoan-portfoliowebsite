import { EmailIcon, GitHubIcon, LinkedInIcon, MapPinIcon, PhoneIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[calc(100vh-6rem)] flex items-center" id="contact">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">
              Together
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            I'm currently available for immediate start and flexible with onsite work.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10">
          {/* Email - Large Card */}
          <GradientCard
            href={`mailto:${PERSONAL_INFO.email}`}
            className="sm:col-span-2 lg:col-span-2"
            icon={<EmailIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            label="Email"
            value={PERSONAL_INFO.email}
            description="Preferred for detailed inquiries"
          />

          {/* Phone */}
          <GradientCard
            href={`tel:${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
            icon={<PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            label="Phone"
            value={PERSONAL_INFO.phone}
            description="Available 9am-5pm CT"
          />

          {/* LinkedIn */}
          <GradientCard
            href={PERSONAL_INFO.linkedin}
            icon={<LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            label="LinkedIn"
            value="anthonyduydoan"
            description="Connect professionally"
            external
          />

          {/* GitHub */}
          <GradientCard
            href={PERSONAL_INFO.github}
            icon={<GitHubIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            label="GitHub"
            value="anthonydoan2001"
            description="Check out my projects"
            external
          />

          {/* Location - Non-clickable */}
          <div className="relative">
            <div className="relative h-full backdrop-blur-sm bg-gradient-to-br from-secondary/40 via-secondary/20 to-background/40 border border-border/50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Location
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-foreground break-words">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Open to onsite & hybrid work
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-6 sm:pt-8">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald text-background font-semibold rounded-full hover:bg-emerald/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-emerald/20 text-sm sm:text-base touch-manipulation"
          >
            <span>Send me an email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface GradientCardProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  external?: boolean;
  className?: string;
}

const GradientCard = ({
  href,
  icon,
  label,
  value,
  description,
  external,
  className = ""
}: GradientCardProps) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className={`relative group ${className} touch-manipulation`}
  >
    {/* Subtle Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-emerald/30 via-emerald/10 to-emerald/30 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700 ease-out" />

    {/* Card Content */}
    <div className="relative h-full backdrop-blur-sm bg-gradient-to-br from-secondary/40 via-secondary/20 to-background/40 border border-border/50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 hover:border-emerald/40 active:border-emerald/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald/10 active:scale-[0.98]">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 sm:p-2.5 rounded-xl bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-background transition-all duration-300 flex items-center justify-center">
          {icon}
        </div>
        {external && (
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-emerald transition-colors duration-300 flex-shrink-0" />
        )}
      </div>

      <div className="space-y-1.5">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-emerald/70 transition-colors duration-300">
          {label}
        </div>
        <div className="text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-emerald transition-colors duration-300 break-words">
          {value}
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground">
          {description}
        </div>
      </div>
    </div>
  </a>
);

export default Contact;
