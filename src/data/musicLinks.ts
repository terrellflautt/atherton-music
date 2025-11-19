export interface MusicLink {
  platform: string;
  url: string;
  icon: string;
}

export const musicLinks: MusicLink[] = [
  {
    platform: "Spotify",
    url: "https://open.spotify.com/artist/4RHxs2rK2iKABmhgqHH2Fb",
    icon: "spotify",
  },
  {
    platform: "Apple Music",
    url: "https://music.apple.com/us/artist/leeann-atherton/255104334",
    icon: "apple",
  },
  {
    platform: "SoundCloud",
    url: "https://soundcloud.com/leeann-atherton",
    icon: "soundcloud",
  },
  {
    platform: "Bandcamp",
    url: "https://leeannatherton.bandcamp.com/album/fallen-angel",
    icon: "bandcamp",
  },
  {
    platform: "Amazon Music",
    url: "https://www.amazon.com/s?k=leeann+atherton&i=digital-music",
    icon: "amazon",
  },
];

export const socialLinks = [
  {
    platform: "X (Twitter)",
    url: "https://x.com/LeeannAtherton",
    icon: "twitter",
  },
  {
    platform: "ReverbNation",
    url: "https://www.reverbnation.com/leeannatherton",
    icon: "reverbnation",
  },
];
