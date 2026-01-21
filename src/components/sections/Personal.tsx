import {
  currentlyPlaying,
  currentlyReading,
  favoriteAnime,
  favoriteGames,
  favoriteGenres,
  homelabSetup,
  musicGenres,
  pcSpecs,
  proxmoxServerSpecs
} from "@/lib/data";
import { BookOpen, Gamepad2, Heart, Monitor, Music, Server, Tv } from "lucide-react";

const Personal = () => {
  return (
    <section className="pt-4 md:pt-6 lg:pt-8 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="personal">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-14 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Heart className="w-3 h-3" />
            <span>Personal Life</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-mono">
            Life Beyond the <span className="text-emerald">Grind</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-normal px-2">
            When I'm not diagnosing hardware or writing code, you'll find me gaming,
            reading books or manga, or tinkering with my homelab.
          </p>
        </div>

        {/* Homelab Section */}
        <div className="mb-16 md:mb-20">
          <SectionHeader icon={Server} title="Homelab" subtitle="" />

          <div className="mt-8">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              My homelab serves as a hands-on learning environment where I explore virtualization, containerization, 
              and self-hosted solutions. It's where I build practical skills in infrastructure management and automation.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {homelabSetup.map((service) => (
                    <div
                      key={service.name}
                      className="p-4 rounded-xl border border-border/50 bg-card/30 text-center"
                    >
                      <div className="text-sm font-semibold text-foreground mb-1.5">{service.name}</div>
                      <div className="text-xs text-muted-foreground">{service.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proxmox Server Specs */}
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Server Hardware</h4>
                <div className="space-y-2 max-w-2xl">
                  {Object.entries(proxmoxServerSpecs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center p-3 rounded-lg border border-border/50 bg-card/30 gap-2"
                    >
                      <span className="text-sm text-muted-foreground capitalize">{key}</span>
                      <span className="text-sm font-mono font-medium text-foreground text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gaming Section - Full Width Feature */}
        <div className="mb-16 md:mb-20">
          <SectionHeader icon={Gamepad2} title="Gaming" subtitle="" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-8">
            {/* Currently Playing */}
            <div className="space-y-6">
              <h4 className="text-base font-semibold text-foreground mb-4">Currently Playing</h4>
              <div className="space-y-3">
                {currentlyPlaying.map((game) => (
                  <div
                    key={game.name}
                    className="p-4 rounded-xl border border-border/50 bg-card/30"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-foreground">{game.name}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald/10 text-emerald border border-emerald/20 font-medium">
                        {game.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Games */}
            <div className="space-y-6">
              <h4 className="text-base font-semibold text-foreground mb-4">All-Time Favorites</h4>
              <div className="flex flex-wrap gap-2.5">
                {favoriteGames.map((game) => (
                  <span
                    key={game}
                    className="px-3.5 py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-sm font-medium cursor-default"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reading & Anime Section */}
        <div className="mb-16 md:mb-20">
          <SectionHeader icon={BookOpen} title="Reading & Anime" subtitle="" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
            {/* Currently Reading */}
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-base font-semibold text-foreground mb-4">Currently Reading</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentlyReading.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl border border-border/50 bg-card/30"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-foreground">{item.title}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald/10 text-emerald border border-emerald/20 font-medium">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Genres */}
            <div className="space-y-6">
              <h4 className="text-base font-semibold text-foreground mb-4">Favorite Genres</h4>
              <div className="flex flex-wrap gap-2.5">
                {favoriteGenres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3.5 py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-sm font-medium cursor-default"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Anime Row */}
          <div className="mt-8 space-y-4">
            <h4 className="text-base font-semibold text-foreground mb-4">Favorite Anime</h4>
            <div className="flex flex-wrap gap-2.5">
              {favoriteAnime.map((anime) => (
                <span
                  key={anime}
                  className="px-3.5 py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-sm font-medium cursor-default"
                >
                  {anime}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PC Setup Section */}
        <div className="mb-12 md:mb-16">
          <SectionHeader icon={Monitor} title="PC Setup" subtitle="" />

          <div className="mt-8">
            <div className="space-y-3 max-w-md">
              {Object.entries(pcSpecs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center p-4 rounded-xl border border-border/50 bg-card/30 gap-2"
                >
                  <span className="text-sm text-muted-foreground capitalize">{key}</span>
                  <span className="text-sm font-mono font-medium text-foreground text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Music Section */}
        <div className="mb-12 md:mb-16">
          <SectionHeader icon={Music} title="Music" subtitle="" />
          <div className="flex flex-wrap gap-2.5 mt-8">
            {musicGenres.map((genre) => (
              <span
                key={genre}
                className="px-3.5 py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-sm font-medium cursor-default"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Fun Facts Footer */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="text-center space-y-4">
            <h3 className="text-base font-semibold text-muted-foreground uppercase tracking-wider">Fun Facts</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <span>☕ Coffee enthusiast</span>
              <span>🌙 Night owl coder</span>
              <span>🎧 Always has headphones on</span>
              <span>🍜 Noodles connoisseur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full border border-emerald/30 bg-emerald/5 flex items-center justify-center">
      <Icon className="w-6 h-6 text-emerald" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-foreground font-mono">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
    </div>
  </div>
);

export default Personal;
