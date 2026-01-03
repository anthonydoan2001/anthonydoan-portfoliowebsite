import { PERSONAL_INFO } from "@/lib/constants";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Grid background with fade on edges */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" style={{
        maskImage: 'radial-gradient(ellipse 100% 60% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 60% at 50% 50%, black 40%, transparent 100%)'
      }}></div>


      <div className="relative max-w-6xl w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className={`flex-1 space-y-8 transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full border border-emerald/30 bg-emerald/5 backdrop-blur-sm mb-2">
                <p className="text-emerald text-xs uppercase tracking-wider font-semibold">{PERSONAL_INFO.title}</p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono leading-tight tracking-tight">
                Hello, I'm <span className="text-emerald">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground flex items-center gap-2">
                <span>{PERSONAL_INFO.subtitle}</span>
                <span className="w-0.5 h-[1.2em] bg-emerald animate-blink"></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download
                className="group px-6 py-3 rounded-full border-2 border-emerald text-emerald hover:bg-emerald hover:text-background flex items-center gap-2 transition-all duration-300 font-bold uppercase text-sm tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Resume
              </a>

              <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4">
                <SocialLink href={`mailto:${PERSONAL_INFO.email}`} ariaLabel="Email">
                  <svg className="w-5 h-5" viewBox="0 -2.5 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="currentColor" d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" transform="translate(-340 -922) translate(56 160)"/>
                  </svg>
                </SocialLink>

                <SocialLink href={PERSONAL_INFO.github} ariaLabel="GitHub">
                  <svg className="w-5 h-5" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                  </svg>
                </SocialLink>

                <SocialLink href={PERSONAL_INFO.linkedin} ariaLabel="LinkedIn">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"/>
                  </svg>
                </SocialLink>
              </div>
            </div>
          </div>

          <div className={`flex-shrink-0 transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem]">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 rounded-full bg-emerald/20 blur-2xl scale-110"></div>

                <div className="absolute inset-0 conic-ring ring-rotate"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-emerald/30 z-10">
                  <img
                    src="/images/profilepic.jpg"
                    alt="Anthony Doan - IT Professional"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Full Width Below */}
        <div className={`grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 pt-8 transition-all duration-1000 delay-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SlotCounter target={PERSONAL_INFO.age} label="Age" delay={0} />
          <SlotCounter target={PERSONAL_INFO.yearsExperience} label="Years Experience" delay={200} />
          <SlotCounter target={PERSONAL_INFO.projectsCount} label="Projects" delay={400} />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-emerald/30 text-emerald/80 hover:text-emerald hover:bg-emerald/10 hover:border-emerald hover:scale-110 flex items-center justify-center transition-all duration-300"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

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

const SlotCounter = ({ target, label, delay = 0 }: { target: number | string; label: string; delay?: number }) => {
  const numTarget = typeof target === 'number' ? target : parseInt(String(target));
  const numbers = getSlotNumbers(numTarget);

  return (
    <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 text-center">
      <div className="h-[2.5rem] sm:h-[3rem] md:h-[3.75rem] overflow-hidden relative">
        {/* Gradient masks for fade effect */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-background via-transparent to-background"></div>
        <div
          className="flex flex-col animate-slot-spin"
          style={{ animationDelay: `${delay}ms` }}
        >
          {numbers.map((num, i) => (
            <div
              key={i}
              className="h-[2.5rem] sm:h-[3rem] md:h-[3.75rem] flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono"
            >
              {num}
            </div>
          ))}
        </div>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium tracking-wider uppercase">{label}</div>
    </div>
  );
};

export default Hero;
