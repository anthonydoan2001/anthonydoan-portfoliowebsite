import { NAVIGATION_BRAND, NAVIGATION_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="text-lg sm:text-2xl font-bold font-mono">{NAVIGATION_BRAND}</span>
            <span className="w-2 h-2 bg-emerald rounded-full"></span>
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2 pt-4">
            <div className="flex flex-col gap-2">
              {NAVIGATION_LINKS.map((link, index) => (
                link.href.startsWith("#") ? (
                  <a
                    key={index}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-lg font-semibold transition-colors text-foreground hover:text-emerald py-2"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={closeMenu}
                    className={`text-lg font-semibold transition-colors py-2 ${
                      isActive(link.href)
                        ? "text-emerald"
                        : "text-foreground hover:text-emerald"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
