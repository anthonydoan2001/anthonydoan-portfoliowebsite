import {
  currentlyPlaying,
  currentlyReading,
  favoriteAnime,
  favoriteGames,
  favoriteGenres,
  homelabSetup,
  musicGenres,
  pcSpecs,
  setupHighlights
} from "@/lib/data";
import { BookOpen, Gamepad2, Heart, Monitor, Music, Server, Tv } from "lucide-react";

const Personal = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="personal">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Heart className="w-3 h-3" />
            <span>Personal Life</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-mono">
            Beyond the <span className="text-emerald">Code</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When I'm not diagnosing hardware or writing code, you'll find me gaming,
            reading books or manga, or tinkering with my homelab.
          </p>
        </div>

        {/* Homelab Section */}
        <div className="mb-20">
          <SectionHeader icon={Server} title="Homelab" subtitle="My self-hosted playground" />

          <div className="mt-8">
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Running a homelab has been an incredible learning experience. It's where I experiment with
              virtualization, networking, and self-hosted services. From media streaming to home automation,
              I love having full control over my digital infrastructure.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {homelabSetup.map((service) => (
                <div
                  key={service.name}
                  className="p-4 rounded-xl border border-border/50 bg-card/30 hover:border-emerald/30 transition-colors text-center"
                >
                  <div className="font-bold text-foreground mb-1">{service.name}</div>
                  <div className="text-xs text-muted-foreground">{service.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gaming Section - Full Width Feature */}
        <div className="mb-20">
          <SectionHeader icon={Gamepad2} title="Gaming" subtitle="My digital battlegrounds" />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Currently Playing */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Currently Playing</h4>
              <div className="space-y-4">
                {currentlyPlaying.map((game) => (
                  <div
                    key={game.name}
                    className="p-4 rounded-xl border border-border/50 bg-card/30 hover:border-emerald/30 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">{game.name}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald/10 text-emerald border border-emerald/20">
                        {game.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Games */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">All-Time Favorites</h4>
              <div className="flex flex-wrap gap-3">
                {favoriteGames.map((game) => (
                  <span
                    key={game}
                    className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-sm cursor-default"
                  >
                    {game}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I gravitate towards games with deep mechanics, challenging gameplay, and rich lore.
                Whether it's mastering builds in PoE or climbing ranked in League, I love the
                competitive and strategic aspects of gaming.
              </p>
            </div>
          </div>
        </div>

        {/* Reading & Anime Section */}
        <div className="mb-20">
          <SectionHeader icon={BookOpen} title="Reading & Anime" subtitle="Stories that inspire me" />

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Currently Reading */}
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Currently Reading</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {currentlyReading.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl border border-border/50 bg-card/30 hover:border-emerald/30 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">{item.title}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald/10 text-emerald border border-emerald/20">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Genres */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Favorite Genres</h4>
              <div className="flex flex-wrap gap-2">
                {favoriteGenres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1.5 rounded-full border border-border bg-secondary/30 text-foreground/80 text-xs cursor-default"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Anime Row */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-emerald" />
              <h4 className="text-lg font-semibold text-foreground">Favorite Anime</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {favoriteAnime.map((anime) => (
                <span
                  key={anime}
                  className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-sm cursor-default"
                >
                  {anime}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PC Setup Section */}
        <div className="mb-12">
          <SectionHeader icon={Monitor} title="PC Setup" subtitle="Where the magic happens" />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Specs */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Main Rig Specs</h4>
              <div className="space-y-3">
                {Object.entries(pcSpecs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center p-3 rounded-lg border border-border/50 bg-card/30"
                  >
                    <span className="text-muted-foreground capitalize text-sm">{key}</span>
                    <span className="font-mono text-sm text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Setup Highlights */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Setup Highlights</h4>
              <div className="flex flex-wrap gap-3">
                {setupHighlights.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-sm cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building PCs has been a passion since I was a teenager. I love the process of
                researching components, optimizing airflow, and achieving that perfect cable management.
                There's something satisfying about a clean build that performs well.
              </p>
            </div>
          </div>
        </div>

        {/* Music Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full border border-emerald/30 bg-emerald/5 flex items-center justify-center">
              <Music className="w-5 h-5 text-emerald" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">What I Listen To</h3>
              <p className="text-sm text-muted-foreground">Music that keeps me focused</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {musicGenres.map((genre) => (
              <span
                key={genre}
                className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-sm cursor-default"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Fun Facts Footer */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-muted-foreground">Fun Facts</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>☕ Coffee enthusiast</span>
              <span>🌙 Night owl coder</span>
              <span>🎧 Always has headphones on</span>
              <span>🍜 Ramen connoisseur</span>
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
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

export default Personal;
