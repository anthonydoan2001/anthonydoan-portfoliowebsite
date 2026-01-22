import { PERSONAL_INFO } from "@/lib/constants";
import { Download } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
                <SocialLink href={`mailto:${PERSONAL_INFO.email}`} ariaLabel="Email">
                  <EmailIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </SocialLink>

                <SocialLink href={PERSONAL_INFO.github} ariaLabel="GitHub">
                  <GitHubIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </SocialLink>

                <SocialLink href={PERSONAL_INFO.linkedin} ariaLabel="LinkedIn">
                  <LinkedInIcon className="w-6 h-6 sm:w-7 sm:h-7" />
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

        {/* Stats Section - Full Width Below */}
        <div className={`grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-6 sm:pt-8 md:pt-12 transition-all duration-1000 delay-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SlotCounter target={PERSONAL_INFO.age} label="Age" delay={0} />
          <SlotCounter target={PERSONAL_INFO.yearsExperience} label="Years Experience" delay={200} />
          <SlotCounter target={PERSONAL_INFO.projectsCount} label="Projects" delay={400} />
        </div>
      </div>
    </section>
  );
};

const SocialLink = memo(({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-emerald/30 text-emerald/80 hover:text-emerald hover:bg-emerald/10 hover:border-emerald hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 touch-manipulation"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
});

// Helper to generate sequence of numbers ending at target
// Creates a longer reel for more dramatic slot effect
const getSlotNumbers = (target: number) => {
  const count = 12; // More numbers for longer spin effect
  const numbers = [];
  for (let i = count - 1; i >= 0; i--) {
    numbers.push(Math.max(0, target - i));
  }
  return numbers;
};

const SlotCounter = memo(({ target, label, delay = 0 }: { target: number | string; label: string; delay?: number }) => {
  const numTarget = typeof target === 'number' ? target : parseInt(String(target));
  const numbers = getSlotNumbers(numTarget);

  return (
    <div className="flex flex-col items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 text-center w-full px-1">
      {/* Number container with fixed width for consistent alignment */}
      <div className="h-[2.25rem] xs:h-[2.5rem] sm:h-[3rem] md:h-[3.75rem] w-[2.5rem] xs:w-[3rem] sm:w-[4rem] md:w-[5rem] lg:w-[6rem] overflow-hidden relative mx-auto">
        <div
          className="flex flex-col animate-slot-spin"
          style={{ animationDelay: `${delay}ms` }}
        >
          {numbers.map((num, i) => (
            <div
              key={i}
              className="h-[2.25rem] xs:h-[2.5rem] sm:h-[3rem] md:h-[3.75rem] flex items-center justify-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono tabular-nums"
            >
              {num}
            </div>
          ))}
        </div>
      </div>
      {/* Label with consistent min-height for alignment */}
      <div className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground font-medium tracking-wider uppercase min-h-[2.25rem] xs:min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center px-0.5 sm:px-1 leading-tight text-center">{label}</div>
    </div>
  );
});

export default Hero;
