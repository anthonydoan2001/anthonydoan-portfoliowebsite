import Navigation from "@/components/layout/Navigation";
import { instantScrollToTop } from "@/lib/scrollUtils";
import { ArrowUp } from "lucide-react";
import { useCallback } from "react";
import { Outlet } from "react-router-dom";

export default function SiteLayout() {
  const handleBackToTop = useCallback(() => {
    instantScrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Outlet />
      <footer className="py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="section-divider-gradient mb-6 sm:mb-8" />
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="font-mono text-xs sm:text-sm text-muted-foreground">
            © 2026 Anthony Doan
          </p>
          <button
            onClick={handleBackToTop}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-emerald transition-colors touch-manipulation"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
