import { PERSONAL_INFO } from "@/lib/constants";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Shield className="w-3 h-3" />
            <span>Privacy & Security</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-foreground font-mono leading-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">Policy</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-emerald max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono border-b border-border/50 pb-2">
              Personal Use Application
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              This is a personal finance dashboard created and used solely by {PERSONAL_INFO.name} for managing personal financial accounts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono border-b border-border/50 pb-2">
              Data Collection
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              This application connects to financial institutions via Plaid to retrieve:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Account balances and transactions</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Investment holdings</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Credit card information</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono border-b border-border/50 pb-2">
              Data Storage
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              All financial data is:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Stored securely in Supabase (PostgreSQL) with encryption at rest</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Protected by Row Level Security (RLS) policies</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Transmitted via TLS 1.3 encryption</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Access tokens are encrypted before storage</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono border-b border-border/50 pb-2">
              Data Access
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Only the account owner ({PERSONAL_INFO.name}) can access this data. No third parties have access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono border-b border-border/50 pb-2">
              Data Retention
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Financial data is retained for as long as the application is in use. Transaction history older than 2 years is automatically archived.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono border-b border-border/50 pb-2">
              Data Deletion
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              To delete all data, the user can:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Disconnect accounts via the application settings</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Delete the Supabase database</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-emerald mt-1.5 flex-shrink-0">▹</span>
                <span className="text-base sm:text-lg text-muted-foreground">Revoke Plaid access via Plaid dashboard</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono border-b border-border/50 pb-2">
              Contact
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              For questions about this privacy policy, please contact:{" "}
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-emerald hover:text-emerald/80 transition-colors underline"
              >
                {PERSONAL_INFO.email}
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border/50 text-center">
          <p className="font-mono text-xs sm:text-sm text-muted-foreground">
            Built with React & TypeScript • © 2026 {PERSONAL_INFO.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
