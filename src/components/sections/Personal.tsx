import {
  currentlyPlaying,
  currentlyReading,
  favoriteAnime,
  favoriteGames,
  homelabSetup,
  musicGenres,
  pcSpecs,
  proxmoxServerSpecs
} from "@/lib/data";
import { BookOpen, Cpu, Database, Gamepad2, HardDrive, Heart, MemoryStick, Monitor, Music, Server, Zap } from "lucide-react";
import { memo } from "react";
import { useInView } from "@/hooks/useInView";

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
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section
      className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="personal"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-6xl mx-auto ${isInView ? 'revealed' : ''}`}>
        {/* Hero Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Heart className="w-3 h-3" />
            <span>Personal Life</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-foreground font-mono leading-tight">
            Life Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">Grind</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-normal px-4">
            When I'm not diagnosing hardware or writing code, you'll find me gaming,
            reading books or manga, or tinkering with my homelab.
          </p>
          {/* Fun Facts — inline badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
            {["Coffee enthusiast", "Mountain hiker", "Eagle Scout", "Amateur Chef"].map((fact) => (
              <span
                key={fact}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 bg-secondary/20 text-xs text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald/50 flex-shrink-0" />
                {fact}
              </span>
            ))}
          </div>
        </div>

        {/* ── Homelab ── */}
        <div className="mb-14 sm:mb-16 md:mb-20 reveal-up stagger-1">
          <SectionHeader icon={Server} title="Homelab" />
          <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-2xl mt-4 sm:mt-5 mb-5 sm:mb-6">
            My homelab is a hands-on environment for exploring virtualization, containerization,
            and self-hosted solutions — where I build practical infrastructure skills.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {homelabSetup.map((service) => (
              <div
                key={service.name}
                className="px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border/50 bg-card/30"
              >
                <div className="text-xs sm:text-sm font-semibold text-foreground">{service.name}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{service.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Gaming ── */}
        <div className="mb-14 sm:mb-16 md:mb-20 reveal-up stagger-2">
          <SectionHeader icon={Gamepad2} title="Gaming" />

          <div className="space-y-5 sm:space-y-6 mt-5 sm:mt-6">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Currently Playing</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {currentlyPlaying.map((game) => (
                  <div
                    key={game.name}
                    className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border/50 bg-card/30"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-foreground">{game.name}</span>
                    <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-emerald/10 text-emerald border border-emerald/20 font-medium whitespace-nowrap flex-shrink-0">
                      {game.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">All-Time Favorites</h4>
              <div className="flex flex-wrap gap-2">
                {favoriteGames.map((game) => (
                  <span
                    key={game}
                    className="px-3 py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-xs sm:text-sm font-medium cursor-default"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Media — Reading, Anime & Music ── */}
        <div className="mb-14 sm:mb-16 md:mb-20 reveal-up stagger-3">
          <SectionHeader icon={BookOpen} title="Media" />

          <div className="mt-5 sm:mt-6 space-y-6 sm:space-y-8">
            {/* Currently reading */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Currently Reading</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {currentlyReading.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border/50 bg-card/30"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-foreground break-words min-w-0">{item.title}</span>
                    <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-emerald/10 text-emerald border border-emerald/20 font-medium whitespace-nowrap flex-shrink-0">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Anime & Music pills grouped */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Favorite Anime</h4>
                <div className="flex flex-wrap gap-2">
                  {favoriteAnime.map((anime) => (
                    <span
                      key={anime}
                      className="px-3 py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-xs sm:text-sm font-medium cursor-default"
                    >
                      {anime}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Music</h4>
                <div className="flex flex-wrap gap-2">
                  {musicGenres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/90 text-xs sm:text-sm font-medium cursor-default"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hardware ── */}
        <div className="reveal-up stagger-4">
          <SectionHeader icon={Monitor} title="Hardware" />

          <div className="mt-5 sm:mt-6 space-y-6 sm:space-y-8">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">PC Setup</h4>
              <SpecGrid specs={pcSpecs} />
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Proxmox Server</h4>
              <SpecGrid specs={proxmoxServerSpecs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = memo(({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-emerald/30 bg-emerald/5 flex items-center justify-center flex-shrink-0">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald" />
    </div>
    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground font-mono leading-tight">{title}</h3>
  </div>
));

const SpecGrid = memo(({ specs }: { specs: Record<string, string> }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
    {Object.entries(specs).map(([key, value]) => {
      const Icon = getHardwareIcon(key);
      return (
        <div
          key={key}
          className="p-3 sm:p-4 rounded-lg border border-border/50 bg-card/30 text-center space-y-1.5"
        >
          <div className="p-1.5 rounded-lg bg-emerald/10 border border-emerald/20 inline-flex">
            <Icon className="w-3.5 h-3.5 text-emerald" />
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{key}</div>
          <div className="text-xs sm:text-sm font-medium text-foreground break-words">{value}</div>
        </div>
      );
    })}
  </div>
));

export default Personal;
