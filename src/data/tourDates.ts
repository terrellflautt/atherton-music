export interface TourDate {
  date: string;
  venue: string;
  location: string;
  time?: string;
  ticketLink?: string;
  isSpainTour?: boolean;
}

export const tourDates: TourDate[] = [
  {
    date: "2025-05-17",
    venue: "Sam's Town Point",
    location: "Austin, TX",
  },
  {
    date: "2025-05-18",
    venue: "Moontower Saloon",
    location: "Austin, TX",
    time: "Afternoon",
  },
  {
    date: "2025-05-25",
    venue: "Songwriter Soire at the American Legion",
    location: "Encinitas, CA",
    time: "2-5pm",
  },
  {
    date: "2025-05-26",
    venue: "The Flag CD Release - Memorial Day at Post 416 American Legion",
    location: "Encinitas, CA",
  },
  {
    date: "2025-06-01",
    venue: "Happy Church at the Legion",
    location: "Encinitas, CA",
  },
  {
    date: "2025-06-04",
    venue: "Thai One On",
    location: "Carlsbad, CA",
  },
  {
    date: "2025-06-08",
    venue: "Private Party",
    location: "Chula Vista, CA",
  },
  {
    date: "2025-06-13",
    venue: "Post 416",
    location: "Encinitas, CA",
    time: "7pm",
  },
  {
    date: "2025-06-15",
    venue: "Moontower Saloon",
    location: "Austin, TX",
  },
  {
    date: "2025-06-21",
    venue: "Backstage",
    location: "Austin, TX",
  },
  {
    date: "2025-06-28",
    venue: "Private Party",
    location: "Encinitas, CA",
  },
  {
    date: "2025-06-29",
    venue: "Hondo's Benefit or Encinitas Songwriter Swap",
    location: "Austin, TX / Encinitas, CA",
  },
  {
    date: "2025-07-13",
    venue: "Hot As Hell Barn Dance",
    location: "Austin, TX",
  },
  {
    date: "2025-07-17",
    venue: "She Rises Festival w/ PAACK",
    location: "Taos, NM",
  },
  {
    date: "2025-07-31",
    venue: "Spain - Pueblos Blancas Music Festival",
    location: "Spain",
    isSpainTour: true,
  },
  {
    date: "2025-12-06",
    venue: "Jones Family Singers & The Athertons - Los Matinales Gospel",
    location: "Madrid, Valencia, Alicante, Spain",
    isSpainTour: true,
  },
];
