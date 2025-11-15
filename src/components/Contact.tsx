import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          Let's <span className="text-emerald">Talk</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          I'm currently available for immediate start and flexible with onsite work. 
          Let's discuss how I can help with your IT needs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:anthonydoanwork@gmail.com"
            className="group bg-card border border-border rounded-lg p-6 hover:border-emerald transition-all duration-300"
          >
            <Mail className="w-8 h-8 text-emerald mx-auto mb-3" />
            <div className="font-mono text-sm text-muted-foreground group-hover:text-emerald transition-colors">
              anthonydoanwork@gmail.com
            </div>
          </a>

          <a 
            href="tel:8322790182"
            className="group bg-card border border-border rounded-lg p-6 hover:border-emerald transition-all duration-300"
          >
            <Phone className="w-8 h-8 text-emerald mx-auto mb-3" />
            <div className="font-mono text-sm text-muted-foreground group-hover:text-emerald transition-colors">
              (832) 279-0182
            </div>
          </a>

          <a 
            href="https://linkedin.com/in/anthonyduydoan"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-6 hover:border-emerald transition-all duration-300"
          >
            <Linkedin className="w-8 h-8 text-emerald mx-auto mb-3" />
            <div className="font-mono text-sm text-muted-foreground group-hover:text-emerald transition-colors">
              linkedin.com/in/anthonyduydoan
            </div>
          </a>

          <div className="bg-card border border-border rounded-lg p-6">
            <MapPin className="w-8 h-8 text-emerald mx-auto mb-3" />
            <div className="font-mono text-sm text-muted-foreground">
              Houston, TX 77002
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/anthonydoan" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-emerald hover:bg-emerald/10 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/anthonyduydoan" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-emerald hover:bg-emerald/10 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
