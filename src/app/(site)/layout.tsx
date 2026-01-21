import Navigation from "@/components/layout/Navigation";
import { Outlet } from "react-router-dom";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Outlet />
      <footer className="py-8 md:py-12 text-center text-muted-foreground px-4">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm md:text-base">
            Built with React & TypeScript • © 2026 Anthony Doan
          </p>
        </div>
      </footer>
    </div>
  );
}
