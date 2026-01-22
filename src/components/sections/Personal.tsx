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
import { BookOpen, Cpu, Database, Gamepad2, HardDrive, Heart, MemoryStick, Monitor, Music, Server, Zap } from "lucide-react";
import { memo } from "react";

// Icon mapping for hardware specs
const hardwareIcons: Record<string, typeof Cpu> = {
  cpu: Cpu,
  processor: Cpu,
  gpu: Monitor,
  egpu: Monitor,
  ram: MemoryStick,
  memory: MemoryStick,
  storage: HardDrive,
  ssd: HardDrive,
  motherboard: Database,
  psu: Zap,
  "power supply": Zap,
  model: Server,
  os: Database,
};

const getHardwareIcon = (key: string): typeof Cpu => {
  const lowerKey = key.toLowerCase();
  return hardwareIcons[lowerKey] || HardDrive;
};

const Personal = () => {
  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="personal">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Heart className="w-3 h-3" />
            <span>Personal Life</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-foreground font-mono leading-tight">
            Life Beyond the <span className="text-emerald">Grind</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-normal px-4">
            When I'm not diagnosing hardware or writing code, you'll find me gaming,
            reading books or manga, or tinkering with my homelab.
          </p>
        </div>

        {/* Homelab Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <SectionHeader icon={Server} title="Homelab" subtitle="" />

          <div className="mt-6 sm:mt-8">
            <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed mb-5 sm:mb-6 max-w-2xl">
              My homelab serves as a hands-on learning environment where I explore virtualization, containerization,
              and self-hosted solutions. It's where I build practical skills in infrastructure management and automation.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">Services</h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
                  {homelabSetup.map((service) => (
                    <div
                      key={service.name}
                      className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50 bg-card/30 text-center"
                    >
                      <div className="text-xs sm:text-sm font-semibold text-foreground mb-1 sm:mb-1.5">{service.name}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{service.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proxmox Server Specs */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">Server Hardware</h4>
                <div className="space-y-2.5 sm:space-y-3 max-w-lg">
                  {Object.entries(proxmoxServerSpecs).map(([key, value]) => {
                    const Icon = getHardwareIcon(key);
                    return (
                      <div
                        key={key}
                        className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50 bg-card/30"
                      >
                        <div className="flex items-start gap-2.5 sm:gap-3">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-emerald/10 border border-emerald/20 flex-shrink-0">
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">{key}</div>
                            <div className="text-xs sm:text-sm font-medium text-foreground break-words">{value}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gaming Section - Full Width Feature */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <SectionHeader icon={Gamepad2} title="Gaming" subtitle="" />

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 mt-6 sm:mt-8">
            {/* Currently Playing */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">Currently Playing</h4>
              <div className="space-y-3 sm:space-y-4">
                {currentlyPlaying.map((game) => (
                  <div
                    key={game.name}
                    className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50 bg-card/30"
                  >
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-xs sm:text-sm font-semibold text-foreground break-words">{game.name}</span>
                      <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald/10 text-emerald border border-emerald/20 font-medium whitespace-nowrap flex-shrink-0">
                        {game.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Games */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">All-Time Favorites</h4>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {favoriteGames.map((game) => (
                  <span
                    key={game}
                    className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-xs sm:text-sm font-medium cursor-default"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reading & Anime Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <SectionHeader icon={BookOpen} title="Reading & Anime" subtitle="" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
            {/* Currently Reading */}
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">Currently Reading</h4>
              <div className="grid xs:grid-cols-2 gap-3 sm:gap-4">
                {currentlyReading.map((item) => (
                  <div
                    key={item.title}
                    className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50 bg-card/30"
                  >
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-xs sm:text-sm font-semibold text-foreground break-words">{item.title}</span>
                      <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald/10 text-emerald border border-emerald/20 font-medium whitespace-nowrap flex-shrink-0">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Genres */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">Favorite Genres</h4>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {favoriteGenres.map((genre) => (
                  <span
                    key={genre}
                    className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-[10px] sm:text-xs font-medium cursor-default"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Anime Row */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">Favorite Anime</h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {favoriteAnime.map((anime) => (
                <span
                  key={anime}
                  className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-xs sm:text-sm font-medium cursor-default"
                >
                  {anime}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PC Setup Section */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <SectionHeader icon={Monitor} title="PC Setup" subtitle="" />

          <div className="mt-6 sm:mt-8">
            <div className="space-y-2.5 sm:space-y-3 max-w-lg">
              {Object.entries(pcSpecs).map(([key, value]) => {
                const Icon = getHardwareIcon(key);
                return (
                  <div
                    key={key}
                    className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50 bg-card/30"
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-emerald/10 border border-emerald/20 flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">{key}</div>
                        <div className="text-xs sm:text-sm font-medium text-foreground break-words">{value}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Music Section */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <SectionHeader icon={Music} title="Music" subtitle="" />
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-6 sm:mt-8">
            {musicGenres.map((genre) => (
              <span
                key={genre}
                className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-xs sm:text-sm font-medium cursor-default"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Fun Facts Footer */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-border/50">
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-muted-foreground uppercase tracking-wider">Fun Facts</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground">
              <span>☕ Coffee enthusiast</span>
              <span>🏔️ Mountain hiker</span>
              <span>🏆 Eagle Scout</span>
              <span>🍳 Amateur Chef</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = memo(({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) => (
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-emerald/30 bg-emerald/5 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald" />
    </div>
    <div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground font-mono leading-tight">{title}</h3>
      {subtitle && <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
    </div>
  </div>
));

export default Personal;
