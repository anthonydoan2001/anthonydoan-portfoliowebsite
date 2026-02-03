import { PERSONAL_INFO } from "@/lib/constants";
import { smoothScrollToElement } from "@/lib/scrollUtils";
import { ChevronDown, Download, MapPin } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToElement("about", 80, 600);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Grid background with fade on edges */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%), radial-gradient(ellipse 90% 70% at 50% 45%, black 40%, transparent 85%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%), radial-gradient(ellipse 90% 70% at 50% 45%, black 40%, transparent 85%)',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in'
      }}></div>

      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className={`flex-1 space-y-6 sm:space-y-8 transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-block px-3 py-1 rounded-full border border-emerald/30 bg-emerald/5 backdrop-blur-sm mb-2">
                <p className="text-emerald text-xs uppercase tracking-wider font-semibold">{PERSONAL_INFO.title}</p>
              </div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono leading-tight tracking-tight">
                Hello, I'm<br />
                <span className="text-emerald">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground flex items-center gap-2">
                <span>{PERSONAL_INFO.subtitle}</span>
                <span className="w-0.5 h-[1.2em] bg-emerald animate-blink"></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2 sm:pt-4">
              <a
                href={PERSONAL_INFO.cvPath}
                download
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-emerald text-emerald hover:bg-emerald hover:text-background flex items-center gap-2 transition-all duration-300 font-bold uppercase text-sm sm:text-base tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                Resume
              </a>

              <div className="flex items-center gap-2 sm:gap-3 pl-0 sm:pl-4">
                <SocialLink href={`mailto:${PERSONAL_INFO.email}`} ariaLabel="Email" label="Email">
                  <EmailIcon className="w-5 h-5" />
                </SocialLink>

                <SocialLink href={PERSONAL_INFO.github} ariaLabel="GitHub" label="GitHub">
                  <GitHubIcon className="w-5 h-5" />
                </SocialLink>

                <SocialLink href={PERSONAL_INFO.linkedin} ariaLabel="LinkedIn" label="LinkedIn">
                  <LinkedInIcon className="w-5 h-5" />
                </SocialLink>
              </div>
            </div>
          </div>

          <div className={`flex-shrink-0 transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative mx-auto md:mx-0">
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 rounded-full bg-emerald/20 blur-2xl scale-110"></div>

                <div className="absolute inset-0 conic-ring ring-rotate"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-emerald/30 z-10">
                  <img
                    src="/images/profilepic.jpg"
                    alt="Anthony Doan - IT Professional"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    width={416}
                    height={416}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Badges */}
        <div className={`flex flex-wrap gap-3 mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-6 sm:pt-8 md:pt-12 transition-all duration-1000 delay-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <StatusBadge>
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse flex-shrink-0" />
            <span>Currently at <span className="text-foreground font-medium">{PERSONAL_INFO.currentCompany}</span></span>
          </StatusBadge>
          <StatusBadge>
            <MapPin className="w-3.5 h-3.5 text-emerald flex-shrink-0" />
            <span>{PERSONAL_INFO.location}</span>
          </StatusBadge>
          <StatusBadge>
            <span className="w-2 h-2 rounded-full bg-emerald flex-shrink-0" />
            <span>Available for opportunities</span>
          </StatusBadge>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={handleScrollDown}
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce transition-opacity duration-1000 delay-[2000ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

const StatusBadge = memo(({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/20 text-sm text-muted-foreground">
    {children}
  </div>
));

const SocialLink = memo(({ href, ariaLabel, label, children }: { href: string; ariaLabel: string; label: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="px-4 py-2.5 rounded-full border border-emerald/30 text-emerald/80 hover:text-emerald hover:bg-emerald/10 hover:border-emerald active:scale-95 flex items-center gap-2 transition-all duration-300 touch-manipulation"
      aria-label={ariaLabel}
    >
      {children}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
});

export default Hero;
