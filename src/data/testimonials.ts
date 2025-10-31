export type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah J.",
    location: "Surrey",
    rating: 5,
    comment: "Green Scape completely transformed our garden! The team was professional, creative, and finished the project on time and on budget. We couldn't be happier.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "David L.",
    location: "Kent",
    rating: 5,
    comment: "The regular maintenance service is fantastic. Our lawn has never looked better, and the team is always friendly and reliable. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Emily R.",
    location: "London",
    rating: 5,
    comment: "Our new patio is stunning. The quality of the workmanship is top-notch, and it has become our favourite spot to relax.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Mark T.",
    location: "Hertfordshire",
    rating: 4,
    comment: "A very positive experience. The team provided a great design and were very knowledgeable about plants. A few minor delays but the end result was worth it.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Jessica P.",
    location: "Essex",
    rating: 5,
    comment: "From the initial consultation to the final planting, Green Scape was a pleasure to work with. They listened to our ideas and brought our vision to life.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];