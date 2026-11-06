export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  idealFor: string;
  iconName: 'Sparkles' | 'Compass' | 'PenTool' | 'Rocket' | 'Share2' | 'Globe';
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Book Promotion' | 'Book Launch Campaigns' | 'Author Branding' | 'Social Media Campaigns' | 'Marketing Strategy';
  clientType: string;
  genre: string;
  image: string;
  overview: string;
  servicesProvided: string[];
  creativeStrategy: string;
  outcomesHighlight: string;
  isConcept: true; // Clearly marked illustrative concept project per guidelines
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  bookTitle: string;
  genre: string;
  isSamplePlaceholder: true; // Explicitly marked as sample placeholder
}

export interface ArticleItem {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  readTime: string;
  publishedDate: string;
  image: string;
  contentParagraphs: {
    heading?: string;
    text: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  bookTitle: string;
  bookGenre: string;
  serviceInterestedIn: string;
  projectDetails: string;
}
