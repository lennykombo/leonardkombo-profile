export interface Project {
  id: number;
  title: string;
  category: "AI & SaaS" | "Fintech" | "Marketplace" | "Community" | "Event Tech"| "Ordering App";
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  //github: string;
  github: {
    web?: string;
    mobile?: string;
  };
  image: string;
}