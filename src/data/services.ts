export type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Garden Maintenance",
    description: "Comprehensive care to keep your garden pristine, including weeding, pruning, and soil management.",
    price: "Starting from £50/visit",
    icon: "Leaf",
  },
  {
    id: 2,
    title: "Lawn Care",
    description: "Professional mowing, aeration, fertilization, and weed control for a lush, healthy lawn.",
    price: "Starting from £30/visit",
    icon: "Wind",
  },
  {
    id: 3,
    title: "Patio & Decking",
    description: "Custom design and installation of beautiful patios and decking to enhance your outdoor living space.",
    price: "Quotes on request",
    icon: "BrickWall",
  },
  {
    id: 4,
    title: "Planting & Softscaping",
    description: "Expert selection and arrangement of plants, trees, and shrubs to create stunning garden aesthetics.",
    price: "Starting from £150",
    icon: "Flower",
  },
  {
    id: 5,
    title: "Landscape Design",
    description: "Full-service landscape design from concept to completion, tailored to your vision and property.",
    price: "Quotes on request",
    icon: "Trees",
  },
  {
    id: 6,
    title: "Fencing & Gates",
    description: "High-quality fencing and gate installation for privacy, security, and style.",
    price: "Quotes on request",
    icon: "Fence",
  },
];