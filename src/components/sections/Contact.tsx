import { PERSONAL_INFO } from "@/lib/constants";
import { MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
          <MessageSquare className="w-3 h-3" />
          <span>Get in Touch</span>
        </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            Let's <span className="text-emerald">Talk</span>
        </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm currently available for immediate start and flexible with onsite work.
          Let's discuss how I can help with your IT needs.
        </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          <ContactCard
            href={`mailto:${PERSONAL_INFO.email}`}
            title="Email Me"
            value={PERSONAL_INFO.email}
          >
            <svg className="w-5 h-5" viewBox="0 -2.5 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" transform="translate(-340 -922) translate(56 160)"/>
            </svg>
          </ContactCard>

          <ContactCard
            href={`tel:${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
            title="Call Me"
            value={PERSONAL_INFO.phone}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </ContactCard>

          <ContactCard
            href={PERSONAL_INFO.linkedin}
            title="Connect on LinkedIn"
            value="anthonyduydoan"
            external
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"/>
            </svg>
          </ContactCard>

          <div className="group border border-border/50 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-emerald/30 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-emerald/30 text-emerald/80 group-hover:text-emerald group-hover:bg-emerald/10 group-hover:border-emerald group-hover:scale-110 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </div>
              <div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Location</div>
            <div className="text-lg font-medium text-foreground">
              {PERSONAL_INFO.location}
            </div>
          </div>
        </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">

          <SocialLink href={PERSONAL_INFO.github} ariaLabel="GitHub">
            <svg className="w-5 h-5" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
            </svg>
          </SocialLink>

        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  href: string;
  title: string;
  value: string;
  external?: boolean;
  children: React.ReactNode;
}

const ContactCard = ({ href, title, value, external, children }: ContactCardProps) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="group border border-border/50 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-emerald/30 hover:bg-emerald/5 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full border border-emerald/30 text-emerald/80 group-hover:text-emerald group-hover:bg-emerald/10 group-hover:border-emerald group-hover:scale-110 flex items-center justify-center flex-shrink-0 transition-all duration-300">
        {children}
    </div>
      <div>
    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1 group-hover:text-emerald/80 transition-colors">{title}</div>
    <div className="text-sm sm:text-base md:text-lg font-medium text-foreground group-hover:text-emerald transition-colors break-all sm:break-normal">
      {value}
        </div>
      </div>
    </div>
  </a>
);

const SocialLink = ({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-emerald/30 text-emerald/80 hover:text-emerald hover:bg-emerald/10 hover:border-emerald hover:scale-110 flex items-center justify-center transition-all duration-300"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

export default Contact;
