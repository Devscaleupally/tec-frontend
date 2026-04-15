export type Report = {
  id: string;
  title: string;
  tags: string[];
  formats: string[];
  date: string;
  imageSrc: string;
};

export type ThemeCategory = {
  id: string;
  label: string;
  icon: "chart" | "leaf" | "users" | "building";
};

export const themeCategories: ThemeCategory[] = [
  { id: "economic", label: "Economic", icon: "chart" },
  {
    id: "sustainability",
    label: "Sustainability and Justice",
    icon: "leaf",
  },
  { id: "social", label: "Social Development", icon: "users" },
  {
    id: "government",
    label: "Government Excellence and Service Improvement",
    icon: "building",
  },
];

const cardImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ef?w=800&q=80";

export const recentlyAddedReports: Report[] = [
  {
    id: "1",
    title: "From Smart to Adaptive Cities",
    tags: ["Economic", "Social"],
    formats: ["Summary", "Full Report", "Podcast", "+All Formats"],
    date: "January 2024",
    imageSrc: cardImage,
  },
  {
    id: "2",
    title: "Future of Public Services in Dubai",
    tags: ["Government", "Social"],
    formats: ["Summary", "Full Report", "Podcast", "+All Formats"],
    date: "February 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
  },
  {
    id: "3",
    title: "Green Growth and Circular Economy",
    tags: ["Sustainability", "Economic"],
    formats: ["Summary", "Full Report", "+All Formats"],
    date: "March 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    id: "4",
    title: "Inclusive Workforce Development",
    tags: ["Social", "Economic"],
    formats: ["Summary", "Podcast", "+All Formats"],
    date: "April 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
];

export const featuredReports: Report[] = [
  ...recentlyAddedReports,
  {
    id: "5",
    title: "Data-Driven Policy Design",
    tags: ["Government", "Economic"],
    formats: ["Summary", "Full Report", "Podcast", "+All Formats"],
    date: "May 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "6",
    title: "Quality of Life Indicators 2024",
    tags: ["Social", "Sustainability"],
    formats: ["Summary", "Full Report", "+All Formats"],
    date: "June 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "7",
    title: "Innovation Ecosystems in the Emirates",
    tags: ["Economic", "Government"],
    formats: ["Summary", "Podcast", "+All Formats"],
    date: "July 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
  {
    id: "8",
    title: "Community Resilience and Preparedness",
    tags: ["Social", "Government"],
    formats: ["Summary", "Full Report", "Podcast", "+All Formats"],
    date: "August 2024",
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];
