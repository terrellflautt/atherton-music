export interface Album {
  title: string;
  year: number;
  description: string;
  coverArt: string;
  youtubeLink?: string;
  producer?: string;
  keyTracks?: string[];
  featured?: boolean;
  spotifyEmbed?: string;
}

export const completeAlbums: Album[] = [
  {
    title: "New Gospel Album",
    year: 2025,
    description: "Atherton's upcoming gospel album celebrates faith, community, and the transformative power of song. Featuring six soul-stirring tracks that blend traditional gospel with Texas blues and Americana roots. Emphasis on 'good God gospel' for the Spain tour. Releasing December 15, 2025.",
    coverArt: "/images/albums/e7b5a792-bdf6-4759-97ff-2093f9ed5c28.jpeg",
    featured: true,
  },
  {
    title: "Fallen Angel",
    year: 2020,
    description: "A full-band masterpiece showcasing Atherton's extensive emotional range. From the euphoric 'Smack Dab in a Miracle' to the politically charged 'Cleaning House.' Features the late Barry 'Frosty' Smith on drums. Closes with the a cappella 'Motherless Children's Club,' recorded spontaneously at Leeann's mother's memorial service.",
    coverArt: "/images/albums/Fallen-Angel-new.jpg",
    youtubeLink: "https://youtu.be/bKa9X3fALhE",
    producer: "Mac McNabb",
    keyTracks: ["Smack Dab in a Miracle", "Joy", "Cleaning House", "Lift Me Up", "Champagne and Pills", "Motherless Children's Club"],
  },
  {
    title: "Cleaning House",
    year: 2020,
    description: "A soulful-rocker with lyrics suggesting an 'out with the old, in with the new' mindset. With powerhouse vocals compared to Bonnie Raitt's grit, Billie Holiday's soulfulness, and Janis Joplin's raw power. Originally released as a politically-charged single, it became an anthem for change and renewal.",
    coverArt: "/images/albums/unnamed-scaled-e1601570775143-1.jpg",
    youtubeLink: "https://youtu.be/IDdKzlqXp1g",
  },
  {
    title: "Barefoot Fields",
    year: 2018,
    description: "An intimate collection of low-key torch songs recalling Leeann's folky, hippie days. Produced by Rich Brotherton, it's stripped down, laid back, and cozy. Known for powerful vocals delivered with controlled restraint, inviting listeners to open their hearts. Features 'Add It Up' (honky-tonk groove with jazzy chorus) and the gospel-flavored 'Mustard Seed.'",
    coverArt: "/images/albums/CD-Cover-Barefoot_Fields-960-960x960-1.jpg",
    youtubeLink: "https://youtu.be/JrRQN9pJvhU",
    producer: "Rich Brotherton",
    keyTracks: ["Add It Up", "Mustard Seed"],
  },
  {
    title: "Heart Traveled Road",
    year: 2015,
    description: "A Texas belter mixing gospel, soul, folk, and a little twang for an Americana stew dished up by Austin's A-Team. Produced by Rich Brotherton with a hand-picked cast of Austin's #1 session players. Featured on the Lifetime Network. A beautiful, heartfelt production that showcases Leeann's barn-burning vocal power.",
    coverArt: "/images/albums/HeartTraveledRoad.jpg",
    youtubeLink: "https://youtu.be/ncTKOTCQ7K8",
    producer: "Rich Brotherton",
  },
  {
    title: "Every Day Dream",
    year: 2012,
    description: "A soulful look at the blues, capturing the modern American single southern woman. Powerful, heartfelt songs with virtuosic vocals that soar through the emotional ranges of everyday life, with tears and laughter. Self-produced release exploring blues and soul.",
    coverArt: "/images/albums/CD-Cover-Everyday_Dream-960.jpg",
    youtubeLink: "https://youtu.be/VPC4BgAfsgg",
  },
  {
    title: "Mama's House",
    year: 2010,
    description: "Bluesy, ballsy, heart-felt, gut-wrenching rock with an attitude for the real thing: love, truth, and a good time, especially on the dance floor. An acoustic/electric blend of twang and folk filled with songs of heart and soul. Years of songwriting, travel, heartbreak, child raising, and big dreams shine through every track.",
    coverArt: "/images/albums/CD-Cover-Mamas_House-960.jpg",
    youtubeLink: "https://youtu.be/7fK3I_W2IDA",
  },
  {
    title: "Songwriters Across Texas: Volume 1",
    year: 2008,
    description: "A television show compilation recorded at the iconic Broken Spoke in Austin, promoting emerging and legendary songwriters from the Lone Star State. Features Leeann alongside Steven Collins, Brennen Leigh, Dale Watson, Alvin Crow, Josh Allen, Omar Dykes, Armadillo Road, Redd Volkaert, and Amanda Cevallos.",
    coverArt: "/images/albums/CD-Cover-Leeanns_Barndance-960.jpg",
  },
  {
    title: "Lady Liberty",
    year: 2006,
    description: "An acclaimed Americana recording produced by Rich Brotherton for Steppin Stone Records. Garnered #1 on local and independent charts (Austin Chronicle, No Depression) and received international airplay. Features evocative lyrics, captivating instrumentation played by Austin's finest acoustic musicians, and classic real Americana heartland sound.",
    coverArt: "/images/albums/CD-Cover-Lady_Liberty-960.jpg",
    youtubeLink: "https://youtu.be/Op8nEgB4xLM",
    producer: "Rich Brotherton",
  },
  {
    title: "Limited Edition",
    year: 2004,
    description: "A collection of Jazz standards recorded with legendary Slim Richey. This album showcases Leeann's versatility and her ability to interpret classic material with her own soulful touch. A rare glimpse into her jazz vocal capabilities.",
    coverArt: "/images/albums/CD-Cover-Limited_Edition-960.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=CLWiGk64570",
  },
  {
    title: "Only Glory",
    year: 1995,
    description: "Leeann's first independent release following her Texas recording sessions at Willie Nelson's Pedernales Studio with acclaimed guitarist and producer Rich Brotherton. This seamless blend of country, soul, pop, and blues features songs that are both timeless and modern. Every song was co-written by Leeann, marking the beginning of a legendary musical friendship and Austin career.",
    coverArt: "/images/albums/CD-Cover-Only_Glory-960.jpg",
    youtubeLink: "https://youtu.be/01-03VEKnCw",
    producer: "Rich Brotherton",
  },
];

export const videos = [
  { title: "Fallen Angel", url: "https://youtu.be/bKa9X3fALhE", year: 2020 },
  { title: "Cleaning House", url: "https://youtu.be/IDdKzlqXp1g", year: 2020 },
  { title: "Barefoot Fields", url: "https://youtu.be/JrRQN9pJvhU", year: 2018 },
  { title: "Heart Traveled Road", url: "https://youtu.be/ncTKOTCQ7K8", year: 2015 },
  { title: "Every Day Dream", url: "https://youtu.be/VPC4BgAfsgg", year: 2012 },
  { title: "Mama's House", url: "https://youtu.be/7fK3I_W2IDA", year: 2010 },
  { title: "Lady Liberty", url: "https://youtu.be/Op8nEgB4xLM", year: 2006 },
  { title: "Only Glory", url: "https://youtu.be/01-03VEKnCw", year: 1995 },
  { title: "Limited Edition", url: "https://www.youtube.com/watch?v=CLWiGk64570", year: 2004 },
  { title: "Straight From the Heart (Live)", url: "https://youtu.be/ka1AXIqUmPQ", year: 2020 },
  { title: "Leeann's Barn Dance", url: "https://youtu.be/f5QJr5zsy-Q", year: 2008 },
];
