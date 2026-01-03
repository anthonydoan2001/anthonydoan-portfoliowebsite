import Navigation from "@/components/layout/Navigation";
import { Outlet } from "react-router-dom";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Outlet />
      <footer className="border-t border-border py-8 text-center text-muted-foreground">
        <p className="font-mono text-sm">
          Built with React & TypeScript • © 2026 Anthony Doan
        </p>
      </footer>
    </div>
  );
}
