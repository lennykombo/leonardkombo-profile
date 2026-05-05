import { Project } from "@/types";

export const projects: Project[] = [
  {
  id: 1,
  title: "Reserve Me",
  category: "AI & SaaS",
  description: "AI-Driven Hospitality Engine powered by Grok.",
  longDescription: "Architected a high-performance reservation platform featuring an intent-based search engine powered by Grok AI (xAI). Deployed a scalable Node.js backend on Render to process complex natural language queries and provide real-time geospatial restaurant recommendations.",
  tags: ["React", "React Native", "Cloudinary", "Grok AI", "Node.js", "Render", "Geospatial"],
  link: "https://reserveme.ke/",
  //github: "#",
   github: {
    web: "https://github.com/lennykombo/reservemewebsites",
    mobile: "https://github.com/lennykombo/easyreserve-mobile"
  },
  image: "/projects/reserve-me.png" 
},
  {
    id: 2,
    title: "Transaction Reconciler",
    category: "Fintech",
    description: "Automated Financial Reconciliation & Matching System.",
    longDescription: "Engineered a complex logic-based system to automate the matching of financial records. Developed custom algorithms to detect discrepancies, reducing manual audit work by 80%. Both in mobile app and a dashboard for reconciliation",
    tags: ["React", "React Native", "Cloudinary", "JavaScript logic", "Data Validation", "Firebase", "Tailwind"],
    link: "https://dukarecon.netlify.app/",
   // github: "https://github.com/lennykombo/Dukarecon-dashboard",
    github: {
    web: "https://github.com/lennykombo/Dukarecon-dashboard",
    mobile: "https://github.com/lennykombo/DukaRecon" 
  },
    image: "/projects/reconciliation.jpg"
  },
  {
    id: 3,
    title: "HustleWave360",
    category: "Marketplace",
    description: "B2B Influencer Marketing & Campaign Management.",
    longDescription: "Built a digital marketplace connecting brands with influencers. Features included campaign booking workflows and real-time engagement metric visualizations.",
    tags: ["React", "Cloudinary", "Firebase Auth", "Marketplace Logic", "Tailwind"],
    link: "https://hustlewave360.netlify.app/",
    //github: "https://github.com/lennykombo/Tangazo-chapchap",
    github: {
    web: "https://github.com/lennykombo/Tangazo-chapchap",
    mobile: "#"
  },
    image: "/projects/hustlewave.png"
  },
  {
    id: 4,
    title: "MTTA Awards",
    category: "Event Tech",
    description: "High-Traffic Live Voting & Engagement Platform.",
    longDescription: "Deployed a real-time voting ecosystem used in a live event environment. Scaled to handle concurrent public engagement with instant vote tallying via Firebase.",
    tags: ["React", "Cloudinary", "Firebase Real-time DB", "Live Scaling"],
    link: "https://mzinyitaitatavetaawards.netlify.app/",
   // github: "https://github.com/lennykombo/awards",
    github: {
    web: "https://github.com/lennykombo/awards",
    mobile: "#"
  },
    image: "/projects/mtta.png"
  },
  {
    id: 5,
    title: "Lagos Suya",
    category: "Ordering App",
    description: "Digital Menu & Order Management System.",
    longDescription: "Digitized the ordering process for boutique restaurants. Developed a high-conversion UI for menu browsing, cart management, and order placement workflows.",
    tags: ["React", "Cloudinary", "UX Design", "Firebase Store", "Tailwind"],
    link: "https://lagossuyanairobi.com/order-online/",
   // github: "https://github.com/lennykombo/lagossuyaspot-menu",
     github: {
    web: "https://github.com/lennykombo/lagossuyaspot-menu",
    mobile: "#"
  },
    image: "/projects/lagos-suya.jpg"
  },
  {
    id: 6,
    title: "Art Community Hub",
    category: "Community",
    description: "UGC Social Platform for Digital Artists.",
    longDescription: "Designed a social platform focused on User Generated Content (UGC). Implemented image processing, social interactions (likes/shares), and artist profiles.",
    tags: ["React", "Cloudinary", "Firebase", "Social Integration"],
    link: "https://art-community.netlify.app/",
    //github: "#",
     github: {
    web: "#",
    mobile: "#"
  },
    image: "/projects/art-community.png"
  }
];