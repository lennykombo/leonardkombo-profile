export interface Project {
  id: number;
  title: string;
  category: "AI & SaaS" | "Fintech" | "Marketplace" | "Community" | "Event Tech"|"Film Plartform"|"AI Marketing Platform";
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