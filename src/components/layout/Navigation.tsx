import { NAVIGATION_BRAND, NAVIGATION_LINKS } from "@/lib/constants";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-mono">{NAVIGATION_BRAND}</span>
            <span className="w-2 h-2 bg-emerald rounded-full"></span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link, index) => (
              link.href.startsWith("#") ? (
                <a
                  key={index}
                  href={link.href}
                  className="text-base font-semibold transition-colors pb-1 text-foreground hover:text-emerald"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  className={`text-base font-semibold transition-colors pb-1 ${
                    isActive(link.href)
                      ? "text-emerald border-b-2 border-emerald hover:text-emerald-light"
                      : "text-foreground hover:text-emerald"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
