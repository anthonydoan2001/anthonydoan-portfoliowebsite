const CodeShowcase = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Do you want to get a <span className="text-emerald">website?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              I personally think that the first thing you need is a well-designed website 
              that creates a powerful first impression for potential employers or clients.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block bg-emerald text-background px-6 py-3 rounded-lg font-semibold hover:bg-emerald-dark transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald"></div>
            </div>
            <pre className="text-foreground/80">
              <code>{`const anthonyDoan = {
  role: "IT Professional",
  skills: [
    "Windows 10/11",
    "Microsoft 365",
    "Active Directory",
    "PowerShell",
    "Python",
    "SQL"
  ],
  currentFocus: "Helpdesk Support",
  availability: "Immediate"
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
