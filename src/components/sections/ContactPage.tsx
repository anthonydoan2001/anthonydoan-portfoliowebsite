import { EmailIcon, GitHubIcon, LinkedInIcon, MapPinIcon, PhoneIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/lib/constants";
import { ArrowUpRight, Download, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { memo, useCallback, useRef } from "react";

const ContactPage = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoSubject = encodeURIComponent(subject || `Contact from ${name}`);
    const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  }, []);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-6rem)]"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-6xl mx-auto w-full ${isInView ? "revealed" : ""}`}>
        {/* Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 reveal-up">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald mb-3">
            Get in Touch
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">
              together.
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">
            I'm currently available for immediate start. Whether you have a project in mind
            or just want to chat — reach out.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Contact Form */}
          <div className="lg:col-span-3 reveal-up stagger-1">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Name" name="name" placeholder="Your name" required />
                <FormField label="Email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <FormField label="Subject" name="subject" placeholder="What's this about?" />
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-secondary/40 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald/40 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-emerald text-background font-semibold rounded-xl hover:bg-emerald/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-emerald/15 text-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="lg:col-span-2 reveal-up stagger-2">
            <div className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Contact Details
              </h2>

              <ContactDetail
                icon={<EmailIcon className="w-4 h-4" />}
                label="Email"
                value={PERSONAL_INFO.email}
                href={`mailto:${PERSONAL_INFO.email}`}
              />
              <ContactDetail
                icon={<PhoneIcon className="w-4 h-4" />}
                label="Phone"
                value={PERSONAL_INFO.phone}
                href={`tel:${PERSONAL_INFO.phone.replace(/\D/g, "")}`}
                sublabel="Available 9am–5pm CT"
              />
              <ContactDetail
                icon={<LinkedInIcon className="w-4 h-4" />}
                label="LinkedIn"
                value="anthonyduydoan"
                href={PERSONAL_INFO.linkedin}
                external
              />
              <ContactDetail
                icon={<GitHubIcon className="w-4 h-4" />}
                label="GitHub"
                value="anthonydoandev"
                href={PERSONAL_INFO.github}
                external
              />

              <div className="flex items-start gap-3 py-3">
                <div className="p-2 rounded-lg bg-secondary/60 text-emerald flex-shrink-0">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Location</p>
                  <p className="text-sm font-semibold text-foreground">{PERSONAL_INFO.location}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Open to onsite & hybrid</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border/40 pt-6">
                <a
                  href={PERSONAL_INFO.cvPath}
                  download
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald transition-colors group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const FormField = memo(({ label, name, type = "text", placeholder, required }: FormFieldProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-secondary/40 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald/40 transition-all duration-200"
    />
  </div>
));
FormField.displayName = "FormField";

interface ContactDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  sublabel?: string;
  external?: boolean;
}

const ContactDetail = memo(({ icon, label, value, href, sublabel, external }: ContactDetailProps) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex items-start gap-3 py-3 group hover:bg-secondary/20 -mx-3 px-3 rounded-xl transition-colors duration-200"
  >
    <div className="p-2 rounded-lg bg-secondary/60 text-emerald group-hover:bg-emerald group-hover:text-background transition-colors duration-200 flex-shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">{label}</p>
      <p className="text-sm font-semibold text-foreground group-hover:text-emerald transition-colors duration-200 truncate">
        {value}
      </p>
      {sublabel && <p className="text-xs text-muted-foreground mt-0.5">{sublabel}</p>}
    </div>
    {external && (
      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-emerald transition-colors duration-200 flex-shrink-0 mt-2" />
    )}
  </a>
));
ContactDetail.displayName = "ContactDetail";

export default ContactPage;
