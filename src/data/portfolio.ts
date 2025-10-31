export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Family Garden",
    category: "Landscape Design",
    beforeImage: "https://picsum.photos/seed/before1/800/600",
    afterImage: "https://picsum.photos/seed/after1/800/600",
    description: "Transformed a neglected backyard into a vibrant, modern space for the whole family to enjoy, featuring a new lawn, patio, and raised flower beds.",
  },
  {
    id: 2,
    title: "Urban Courtyard Oasis",
    category: "Patio & Decking",
    beforeImage: "https://picsum.photos/seed/before2/800/600",
    afterImage: "https://picsum.photos/seed/after2/800/600",
    description: "Created a low-maintenance, stylish courtyard with composite decking, vertical planting, and ambient lighting.",
  },
  {
    id: 3,
    title: "Lush Lawn Restoration",
    category: "Lawn Care",
    beforeImage: "https://picsum.photos/seed/before3/800/600",
    afterImage: "https://picsum.photos/seed/after3/800/600",
    description: "Revitalized a patchy, weed-infested lawn into a thick, green carpet through intensive treatment and a new care regimen.",
  },
  {
    id: 4,
    title: "Country Cottage Garden",
    category: "Planting & Softscaping",
    beforeImage: "https://picsum.photos/seed/before4/800/600",
    afterImage: "https://picsum.photos/seed/after4/800/600",
    description: "Designed and planted a classic cottage garden with a mix of perennials, shrubs, and climbing roses for year-round color.",
  },
  {
    id: 5,
    title: "Sleek Slate Patio",
    category: "Patio & Decking",
    beforeImage: "https://picsum.photos/seed/before5/800/600",
    afterImage: "https://picsum.photos/seed/after5/800/600",
    description: "Installed a contemporary slate patio, providing a perfect area for outdoor dining and entertainment.",
  },
  {
    id: 6,
    title: "Privacy Fencing Solution",
    category: "Fencing & Gates",
    beforeImage: "https://picsum.photos/seed/before6/800/600",
    afterImage: "https://picsum.photos/seed/after6/800/600",
    description: "Erected a durable and attractive cedar fence to provide privacy and security for a terraced property.",
  },
];