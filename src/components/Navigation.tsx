

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold font-mono">Anthony Doan</span>
          <span className="w-2 h-2 bg-emerald rounded-full"></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#professional" className="text-emerald text-base font-semibold hover:text-emerald-light transition-colors border-b-2 border-emerald pb-1">
            Professional
          </a>
          <a href="#personal" className="text-foreground text-base font-semibold hover:text-emerald transition-colors pb-1">
            Personal
          </a>
          <a href="#contact" className="text-foreground text-base font-semibold hover:text-emerald transition-colors pb-1">
            Contact
          </a>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navigation;
