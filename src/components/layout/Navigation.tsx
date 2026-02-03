import { NAVIGATION_BRAND, NAVIGATION_LINKS } from "@/lib/constants";
import { instantScrollToTop, smoothScrollToElement } from "@/lib/scrollUtils";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = useCallback((href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  }, [location.pathname]);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
    instantScrollToTop();
  }, []);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const elementId = href.substring(1);
    if (elementId) {
      smoothScrollToElement(elementId, 80, 600);
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 active:opacity-70 transition-opacity" onClick={handleLinkClick}>
              <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold font-mono">{NAVIGATION_BRAND}</span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald rounded-full"></span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAVIGATION_LINKS.map((link, index) => (
                link.href.startsWith("#") ? (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm lg:text-base font-semibold transition-colors pb-1 text-foreground hover:text-emerald active:text-emerald/70"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={handleLinkClick}
                    className={`text-sm lg:text-base font-semibold transition-colors pb-1 ${
                      isActive(link.href)
                        ? "text-emerald border-b-2 border-emerald hover:text-emerald-light"
                        : "text-foreground hover:text-emerald"
                    } active:text-emerald/70`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 -mr-2 rounded-lg hover:bg-secondary/50 active:bg-secondary/70 transition-colors touch-manipulation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 pt-4 border-t border-border/50 animate-slide-in-right">
              <div className="flex flex-col gap-1">
                {NAVIGATION_LINKS.map((link, index) => (
                  link.href.startsWith("#") ? (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        handleAnchorClick(e, link.href);
                        closeMenu();
                      }}
                      className="text-base font-semibold transition-colors text-foreground hover:text-emerald active:text-emerald/70 py-3 px-2 rounded-lg hover:bg-secondary/30 active:bg-secondary/50 touch-manipulation"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={link.href}
                      onClick={handleLinkClick}
                      className={`text-base font-semibold transition-colors py-3 px-2 rounded-lg ${
                        isActive(link.href)
                          ? "text-emerald bg-emerald/10"
                          : "text-foreground hover:text-emerald hover:bg-secondary/30"
                      } active:bg-secondary/50 touch-manipulation`}
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

      {/* Mobile menu backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
          style={{ animation: 'fade-in-up 0.2s ease forwards', opacity: 0 }}
        />
      )}
    </>
  );
};

export default Navigation;
