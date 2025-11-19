export interface Album {
  title: string;
  year: number;
  description: string;
  coverArt?: string;
  youtubeLink?: string;
  producer?: string;
  keyTracks?: string[];
  streamingLinks?: {
    spotify?: string;
    apple?: string;
    bandcamp?: string;
  };
  featured?: boolean;
  spotifyEmbed?: string;
}

export const albums: Album[] = [
  {
    title: "New Gospel Album",
    year: 2025,
    description: "Atherton's upcoming gospel album celebrates faith, community, and the transformative power of song. Featuring six soul-stirring tracks that blend traditional gospel with Texas blues and Americana roots. Releasing December 15, 2025.",
    featured: true,
    coverArt: "/images/albums/e7b5a792-bdf6-4759-97ff-2093f9ed5c28.jpeg",
  },
  {
    title: "Fallen Angel",
    year: 2020,
    description: "A full-band masterpiece that showcases Atherton's extensive emotional range. From the euphoric 'Smack Dab in a Miracle' to the politically charged 'Cleaning House,' this album proved that there's no better time to get to know her than right now. Features the late Barry 'Frosty' Smith on drums and closes with the a cappella 'Motherless Children's Club,' recorded at Leeann's mother's memorial.",
    coverArt: "/images/albums/Fallen-Angel-new.jpg",
    youtubeLink: "https://youtu.be/bKa9X3fALhE",
    producer: "Mac McNabb",
    keyTracks: ["Smack Dab in a Miracle", "Joy", "Cleaning House", "Lift Me Up", "Motherless Children's Club"],
  },
  {
    title: "Cleaning House",
    year: 2020,
    description: "A soulful-rocker with lyrics that suggest an out with the old and in with the new mindset. With powerhouse vocals often compared with Bonnie Raitt's grit, Billie Holiday's understated soulfulness, and Janis Joplin's raw power, this single became an anthem for change and renewal.",
    youtubeLink: "https://youtu.be/IDdKzlqXp1g",
  },
  {
    title: "Barefoot Fields",
    year: 2018,
    description: "An intimate collection of low-key torch songs that recalls Leeann's folky, hippie days. Produced by Rich Brotherton, it's stripped down, laid back, and cozy. Known for powerful vocals delivered with controlled restraint, inviting listeners to open their hearts and connect with deep emotions. Features 'Add It Up' and the gospel-flavored 'Mustard Seed.'",
    youtubeLink: "https://youtu.be/JrRQN9pJvhU",
  },
  {
    title: "Heart Traveled Road",
    year: 2015,
    description: "A Texas belter mixing gospel, soul, folk, and a little twang for an Americana stew dished up by Austin's A-Team. Produced by Rich Brotherton with a hand-picked cast of Austin's #1 session players. Featured on the Lifetime Network. A beautiful, heartfelt production that showcases Leeann's barn-burning vocal power.",
    youtubeLink: "https://youtu.be/ncTKOTCQ7K8",
  },
  {
    title: "Every Day Dream",
    year: 2012,
    description: "A soulful look at the blues, capturing the modern American single southern woman. Powerful, heartfelt songs with virtuosic vocals that soar through the emotional ranges of everyday life, with tears and laughter.",
    youtubeLink: "https://youtu.be/VPC4BgAfsgg",
  },
  {
    title: "Mama's House",
    year: 2010,
    description: "Bluesy, ballsy, heart-felt, gut-wrenching rock with an attitude for the real thing: love, truth, and a good time, especially on the dance floor. An acoustic/electric blend of twang and folk filled with songs of heart and soul. Years of songwriting, travel, heartbreak, child raising, and big dreams shine through every track.",
    youtubeLink: "https://youtu.be/7fK3I_W2IDA",
  },
  {
    title: "Songwriters Across Texas: Volume 1",
    year: 2008,
    description: "A television show compilation recorded at the iconic Broken Spoke in Austin, promoting emerging and legendary songwriters from the Lone Star State. Features Leeann alongside Steven Collins, Brennen Leigh, Dale Watson, Alvin Crow, and other Texas music legends.",
  },
  {
    title: "Lady Liberty",
    year: 2006,
    description: "An acclaimed Americana recording produced by Rich Brotherton for Steppin Stone Records. Garnered #1 on local and independent charts (Austin Chronicle, No Depression) and received international airplay. Features evocative lyrics, captivating instrumentation played by Austin's finest acoustic musicians, and classic real Americana heartland sound.",
    youtubeLink: "https://youtu.be/Op8nEgB4xLM",
  },
  {
    title: "Limited Edition",
    year: 2004,
    description: "A collection of Jazz standards recorded with legendary Slim Richey. This album showcases Leeann's versatility and her ability to interpret classic material with her own soulful touch.",
    youtubeLink: "https://www.youtube.com/watch?=CLWiGk64570",
  },
  {
    title: "Only Glory",
    year: 1995,
    description: "Leeann's first independent release following her Texas recording sessions at Willie Nelson's Pedernales Studio with acclaimed guitarist and producer Rich Brotherton. This seamless blend of country, soul, pop, and blues features songs that are both timeless and modern. Every song was co-written by Leeann, marking the beginning of a legendary musical friendship and Austin career.",
    youtubeLink: "https://youtu.be/01-03VEKnCw",
  },
];
