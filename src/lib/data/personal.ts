export const personalTags = [
  'Coffee enthusiast',
  'Mountain hiker',
  'Eagle Scout',
  'Amateur Chef',
];

export const homelabSetup = [
  { name: 'Nextcloud', description: 'File Sync/Share' },
  { name: 'Docker', description: 'Containers' },
  { name: 'Jellyfin', description: 'Media Server' },
  { name: 'Pi-hole', description: 'DNS/Ad-block' },
  { name: 'Nginx Proxy', description: 'Reverse Proxy' },
  { name: 'Komga', description: 'Manga/Comic Server' },
  { name: 'Calibre-Web', description: 'eBook Library' },
  { name: 'Minecraft Server', description: 'Game Server' },
];

export const currentlyPlaying = [
  { name: 'League of Legends', type: 'MOBA' },
  { name: 'Path of Exile', type: 'ARPG' },
];

export const favoriteGames = [
  "Baldur's Gate 3",
  'Cyberpunk 2077',
  'Civilization VI',
];

export const currentlyReading = [
  { title: 'One Piece', type: 'Manga' },
  { title: 'Vagabond', type: 'Manga' },
  { title: 'The Philosophy Book', type: 'Philosophy' },
  { title: 'A Short History of China', type: 'History' },
];

export const favoriteAnime = ['One Piece', 'Hajime no Ippo', 'Inuyashiki'];

export const musicGenres = ['R&B', 'EDM', 'K-Pop', 'Lo-fi', 'Hip Hop'];

export const hardware = [
  {
    title: 'PC Setup',
    specs: {
      cpu: 'AMD Ryzen 7 8745HS',
      gpu: 'NVIDIA RTX 4070',
      ram: '32GB DDR5 4800MHz',
      storage: '2TB M.2 NVMe SSD',
      eGPU: 'MINISFORUM DEG2 OCulink Dock',
    },
  },
  {
    title: 'Proxmox Node 1',
    specs: {
      model: 'Dell OptiPlex 5000 Micro PC',
      cpu: 'Intel Core i7-12700T (12 Core)',
      ram: '48GB DDR4 3200MHz',
      storage: '256GB M.2 NVMe SSD + 1TB SATA SSD',
    },
  },
  {
    title: 'Proxmox Node 2',
    specs: {
      model: 'Dell OptiPlex 3040 Micro',
      cpu: 'Intel Core i5-6500T (4 Core)',
      ram: '8GB DDR3 2133MHz',
      storage: '512GB SATA SSD',
    },
  },
  {
    title: 'Proxmox Node 3',
    specs: {
      model: 'MINISFORUM UM773 Lite',
      cpu: 'AMD Ryzen 7 7735HS (8 Core)',
      ram: '32GB DDR5 4800MHz',
      storage: '1TB M.2 NVMe SSD',
    },
  },
  {
    title: 'Network & Security',
    specs: {
      firewall: 'V1410 N5105, 8GB RAM, coreboot',
      switch: 'TP-Link TL-SG2008 V3 (VLANs)',
    },
  },
];

// Legacy exports for backward compatibility
export const pcSpecs = hardware[0].specs;
export const proxmoxServerSpecs = hardware[1].specs;
