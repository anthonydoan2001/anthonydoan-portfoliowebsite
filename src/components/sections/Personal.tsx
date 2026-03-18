'use client';

import {
  personalTags,
  homelabSetup,
  currentlyPlaying,
  favoriteGames,
  currentlyReading,
  favoriteAnime,
  musicGenres,
  hardware,
} from '@/lib/data';

const Personal = () => {
  return (
    <div className="relative border-[6px] border-primary/30 bg-background p-4 md:p-8">
        {/* Corner accents */}
        <div className="absolute -top-2 -left-2 w-10 h-10 border-t-4 border-l-4 border-primary" />
        <div className="absolute -top-2 -right-2 w-10 h-10 border-t-4 border-r-4 border-primary" />
        <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-4 border-l-4 border-primary" />
        <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-4 border-r-4 border-primary" />
        <div className="border-b-4 border-primary pb-6 mb-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-primary">Life Beyond<br/>The Grind</h1>
          <p className="mt-4 text-xl font-mono max-w-2xl">
            When I&apos;m not diagnosing hardware or writing code, you&apos;ll find me gaming, reading books or manga, or tinkering with my homelab.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {personalTags.map(tag => (
              <span key={tag} className="bg-primary text-background font-bold px-3 py-1 uppercase text-sm border-2 border-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border-2 border-border p-6 relative lg:col-span-2">
            <div className="absolute -top-3 left-4 bg-background px-2 font-mono font-bold text-primary">01_HOMELAB</div>
            <p className="mb-6 font-mono text-sm text-muted-foreground">My homelab is a hands-on environment for exploring virtualization, containerization, and self-hosted solutions.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {homelabSetup.map(s => (
                <div key={s.name} className="border border-border p-3 hover:border-primary hover:bg-primary/10 transition-colors">
                  <div className="font-bold uppercase">{s.name}</div>
                  <div className="text-xs font-mono text-primary">{s.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-border p-6 relative lg:col-span-2">
            <div className="absolute -top-3 left-4 bg-background px-2 font-mono font-bold text-primary">02_HARDWARE</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardware.map((hw) => (
                <div key={hw.title} className="border border-border p-4 bg-secondary/20">
                  <div className="bg-primary text-background font-bold px-2 py-1 mb-4 inline-block uppercase text-sm">{hw.title}</div>
                  <div className="space-y-3 font-mono text-sm">
                    {Object.entries(hw.specs).map(([k, v]) => (
                      <div key={k} className="flex flex-col border-b border-border/50 pb-2">
                        <span className="text-primary uppercase text-xs mb-1">{k}</span>
                        <span className="text-foreground">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-border p-6 relative">
            <div className="absolute -top-3 left-4 bg-background px-2 font-mono font-bold text-primary">03_GAMING</div>
            <div className="space-y-4">
              <div className="border border-border p-4">
                <div className="font-bold text-primary mb-2 uppercase">Currently Playing</div>
                {currentlyPlaying.map(g => (
                  <div key={g.name} className="flex justify-between font-mono text-sm mb-1">
                    <span>{g.name}</span>
                    <span className="text-muted-foreground">[{g.type}]</span>
                  </div>
                ))}
              </div>
              <div className="border border-border p-4">
                <div className="font-bold text-primary mb-2 uppercase">Favorites</div>
                <div className="flex flex-wrap gap-2">
                  {favoriteGames.map(game => (
                    <span key={game} className="px-3 py-1.5 text-sm font-mono border border-border bg-secondary/20">{game}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-border p-6 relative">
            <div className="absolute -top-3 left-4 bg-background px-2 font-mono font-bold text-primary">04_MEDIA</div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-border p-4">
                  <div className="font-bold text-primary mb-2 uppercase">Reading</div>
                  {currentlyReading.map(r => (
                    <div key={r.title} className="font-mono text-sm mb-1 leading-tight">
                      {r.title} <span className="text-muted-foreground text-xs block">{r.type}</span>
                    </div>
                  ))}
                </div>
                <div className="border border-border p-4">
                  <div className="font-bold text-primary mb-2 uppercase">Anime</div>
                  <div className="flex flex-wrap gap-2">
                    {favoriteAnime.map(anime => (
                      <span key={anime} className="px-3 py-1.5 text-sm font-mono border border-border bg-secondary/20">{anime}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border border-border p-4">
                <div className="font-bold text-primary mb-2 uppercase">Music</div>
                <div className="flex flex-wrap gap-2">
                  {musicGenres.map(genre => (
                    <span key={genre} className="px-3 py-1.5 text-sm font-mono border border-border bg-secondary/20">{genre}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Personal;
