import { ServiceItem, PortfolioProject, TestimonialItem, ArticleItem } from '../types';
import logoImg from '../assets/images/logo.png';
import heroImg from '../assets/images/hero_editorial_books_1793656621578.jpg';
import brandSpreadImg from '../assets/images/portfolio_literary_branding_1793656622328.jpg';
import hardcoverSpreadImg from '../assets/images/portfolio_hardcover_spread_1793656620901.jpg';
import writingDeskImg from '../assets/images/editorial_writing_desk_1793656621962.jpg';

export const BRAND_CONFIG = {
  name: 'ARTHUR WELLS',
  tagline: 'Book Promotion • Book Marketing • Author Strategy • Literary Branding',
  email: 'info.clementpeters@gmail.com',
  logoUrl: logoImg,
  year: '2026',
  brandStatement: 'CREATIVE STORIES. STRATEGIC THINKING. GREATER VISIBILITY.',
  heroHeadline: 'EVERY GREAT BOOK DESERVES TO BE DISCOVERED.',
  heroLead:
    'Strategic book promotion. Thoughtful marketing. Meaningful visibility. At Arthur Wells, we help authors transform their creative work into recognizable brands through intentional book promotion, strategic positioning, and reader-focused marketing.',
  footerStatement: 'Thoughtful strategy for stories worth discovering.',
  copyright: '© 2026 Arthur Wells. All Rights Reserved.',
  heroImage: heroImg,
  brandSpreadImage: brandSpreadImg,
  hardcoverSpreadImage: hardcoverSpreadImg,
  writingDeskImage: writingDeskImg,
};

export const BRAND_VALUES = [
  {
    number: '01',
    title: 'PURPOSEFUL STRATEGY',
    description:
      'Every book has a different audience. We believe in creating thoughtful promotional approaches that reflect each author\'s individual goals and artistic integrity.',
  },
  {
    number: '02',
    title: 'CREATIVE PRESENTATION',
    description:
      'We understand the importance of positioning books in a compelling and recognizable way, elevating cover presence, typography, and brand aesthetics.',
  },
  {
    number: '03',
    title: 'LASTING CONNECTIONS',
    description:
      'We focus on helping authors build meaningful visibility and connect with readers beyond a single promotional campaign for enduring literary equity.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'book-promotion',
    number: '01',
    title: 'BOOK PROMOTION',
    shortDescription:
      'Creative promotional strategies designed to introduce books to potential readers, improve visibility, and generate sustained interest.',
    fullDescription:
      'Our book promotion service goes far beyond quick blips and transactional advertising. We orchestrate tailored promotional initiatives designed around your book\'s unique narrative hook, securing strategic placement across targeted reader communities, literary outlets, and genre hubs.',
    deliverables: [
      'Targeted reader community outreach',
      'Editorial positioning & angle refinement',
      'Promotional partnership curation',
      'High-impact digital showcases',
      'Campaign timeline & execution roadmap',
    ],
    idealFor: 'Authors with published books or imminent releases seeking expanded reach and genuine reader engagement.',
    iconName: 'Sparkles',
  },
  {
    id: 'book-marketing-strategy',
    number: '02',
    title: 'BOOK MARKETING STRATEGY',
    shortDescription:
      'Customized marketing direction based on the book, genre, target audience, author objectives, and promotional opportunities.',
    fullDescription:
      'A holistic, bespoke marketing blueprint tailored to your genre nuances and creative ambitions. We audit your current reader touchpoints, identify untapped market segments, and map out a cohesive commercial and cultural strategy.',
    deliverables: [
      'Comprehensive competitive landscape audit',
      'Reader persona definition & audience mapping',
      'Multi-channel promotional roadmap',
      'Messaging framework & narrative hooks',
      'Quarterly priority & milestone schedule',
    ],
    idealFor: 'Authors desiring a clear, methodical plan of action instead of sporadic, disconnected marketing efforts.',
    iconName: 'Compass',
  },
  {
    id: 'author-brand-development',
    number: '03',
    title: 'AUTHOR BRAND DEVELOPMENT',
    shortDescription:
      'Helping authors establish a recognizable identity through consistent messaging, professional presentation, and strategic positioning.',
    fullDescription:
      'Readers connect with stories, but they remain loyal to voices. We help you distill your creative philosophy into an unmistakable visual and verbal brand—from aesthetic guidelines and author bios to speaking positioning and portfolio design.',
    deliverables: [
      'Core brand positioning & literary voice manifesto',
      'Author biographical narrative & press kit bio variants',
      'Visual identity guidelines (typography, palette, mood)',
      'Digital presence aesthetic direction',
      'Brand consistency checklist across platforms',
    ],
    idealFor: 'Debut authors establishing their professional presence or experienced writers modernizing their platform.',
    iconName: 'PenTool',
  },
  {
    id: 'book-launch-strategy',
    number: '04',
    title: 'BOOK LAUNCH STRATEGY',
    shortDescription:
      'Planning structured promotional activities to build awareness and generate interest before, during, and after publication.',
    fullDescription:
      'A book launch is not a single date—it is a carefully paced campaign spanning pre-order momentum, launch-week impact, and post-launch staying power. We structure a synchronized campaign that commands attention when it counts most.',
    deliverables: [
      'Pre-launch momentum plan (8–12 weeks out)',
      'ARC (Advance Review Copy) distribution strategy',
      'Launch week activation sequence & announcements',
      'Post-launch long-tail reader discovery strategy',
      'Retailer visibility & metadata optimization advice',
    ],
    idealFor: 'Authors with an upcoming book seeking to maximize launch visibility and sales velocity.',
    iconName: 'Rocket',
  },
  {
    id: 'social-media-content-strategy',
    number: '05',
    title: 'SOCIAL MEDIA CONTENT STRATEGY',
    shortDescription:
      'Content ideas, promotional calendars, captions, creative direction, and platform-specific strategies to maintain an engaging author presence.',
    fullDescription:
      'Never wonder what to post again. We build a high-conviction content system tailored to your comfort level and preferred platforms (Substack, Instagram, LinkedIn, TikTok, or newsletter), focusing on storytelling that converts casual browsers into dedicated readers.',
    deliverables: [
      'Monthly editorial calendar & thematic content pillars',
      'Custom caption blueprints & hook formulas',
      'Visual asset templates & aesthetic moodboard',
      'Reader engagement & discussion starter prompts',
      'Newsletter integration & list-building guidance',
    ],
    idealFor: 'Authors who want an intentional, literary social presence without losing precious writing hours to guesswork.',
    iconName: 'Share2',
  },
  {
    id: 'author-platform-development',
    number: '06',
    title: 'AUTHOR PLATFORM DEVELOPMENT',
    shortDescription:
      'Helping authors strengthen their online presence through strategic website presentation, professional positioning, and audience engagement.',
    fullDescription:
      'Your digital home is your permanent literary asset. We advise on website layout, lead capture, reader reader magnets, and speaking inquiries to transform your online footprint into an authoritative hub that publishers and readers respect.',
    deliverables: [
      'Author website architecture & UX recommendations',
      'Reader magnet & newsletter sign-up optimization',
      'Media kit & press page structural design',
      'Speaker & event enquiry funnel strategy',
      'Search discoverability & metadata recommendations',
    ],
    idealFor: 'Authors ready to build a lasting, owned platform that is not beholden to algorithmic volatility.',
    iconName: 'Globe',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'silence-and-form',
    title: 'Silence & Form',
    subtitle: 'Architectural Monograph & Debut Launch',
    category: 'Book Launch Campaigns',
    clientType: 'Design & Architecture Imprint',
    genre: 'Non-Fiction / Architecture',
    image: hardcoverSpreadImg,
    overview:
      'An illustrative campaign concept demonstrating a synchronized 12-week release strategy for a high-end design monograph. Focus was placed on positioning the volume as both an academic reference and a collectible design object.',
    servicesProvided: ['Book Launch Strategy', 'Editorial Placement', 'Visual Content Direction'],
    creativeStrategy:
      'Leveraged high-contrast architectural imagery, bespoke interior spreads, and targeted previews in boutique architecture periodicals to establish early collector pre-orders.',
    outcomesHighlight: 'Concept blueprint for luxury non-fiction releases seeking dual academic and aesthetic appeal.',
    isConcept: true,
  },
  {
    id: 'the-silent-echo',
    title: 'The Silent Echo',
    subtitle: 'Literary Mystery Re-Positioning',
    category: 'Book Promotion',
    clientType: 'Independent Literary Fiction',
    genre: 'Literary Fiction / Mystery',
    image: heroImg,
    overview:
      'A concept promotional campaign designed to elevate a sophomore literary mystery from regional obscurity into national indie bookstore spotlight through curated reading group initiatives.',
    servicesProvided: ['Book Promotion', 'Reader Community Outreach', 'Book Club Guide Creation'],
    creativeStrategy:
      'Crafted an evocative reader experience kit, pairing author discussion notes with atmospheric teaser excerpts that resonated strongly with contemporary book clubs.',
    outcomesHighlight: 'Illustrative framework showcasing how intentional thematic marketing expands reader word-of-mouth.',
    isConcept: true,
  },
  {
    id: 'elara-vance-identity',
    title: 'Elara Vance Literary Brand',
    subtitle: 'Author Platform & Comprehensive Identity',
    category: 'Author Branding',
    clientType: 'Multi-Book Historical Novelist',
    genre: 'Historical Fiction / Essays',
    image: brandSpreadImg,
    overview:
      'A comprehensive branding concept created to unify an author\'s diverse body of work—spanning historical novels, academic essays, and public lectures—under an unmistakable visual and verbal signature.',
    servicesProvided: ['Author Brand Development', 'Visual Identity Blueprint', 'Press Kit Narrative'],
    creativeStrategy:
      'Introduced a refined monochromatic typographic palette, bespoke emblem, and streamlined messaging architecture that elevated the author\'s institutional authority.',
    outcomesHighlight: 'Sample identity system demonstrating how unified branding creates lasting reader brand recall.',
    isConcept: true,
  },
  {
    id: 'essays-on-light',
    title: 'Essays on Light',
    subtitle: 'Omni-Channel Content Strategy',
    category: 'Social Media Campaigns',
    clientType: 'Poet & Visual Artist',
    genre: 'Poetry & Visual Arts',
    image: writingDeskImg,
    overview:
      'A concept content strategy demonstrating how reflective, quiet writing can thrive on modern digital platforms without compromising literary subtlety or succumbing to loud clickbait.',
    servicesProvided: ['Social Media Content Strategy', 'Substack Editorial Calendar', 'Visual Asset System'],
    creativeStrategy:
      'Built a monthly editorial cadence alternating tactile process photography with micro-excerpts and thoughtful author commentary on the nature of creative solitude.',
    outcomesHighlight: 'Illustrative content blueprint illustrating dignified audience cultivation for contemplative authors.',
    isConcept: true,
  },
  {
    id: 'the-unseen-city',
    title: 'The Unseen City',
    subtitle: 'Comprehensive Pre-Order Marketing Blueprint',
    category: 'Marketing Strategy',
    clientType: 'Urban Speculative Fiction',
    genre: 'Speculative Fiction / Noir',
    image: heroImg,
    overview:
      'A strategic roadmap designed for a speculative noir novel, orchestrating an 8-month runway before wide distribution to establish strong reader anticipation.',
    servicesProvided: ['Book Marketing Strategy', 'Audience Personas', 'Retailer Metadata Direction'],
    creativeStrategy:
      'Mapped out targeted micro-influencer arcs, early digital chapter samplers, and strategic cross-genre promotion alongside vintage cinematic references.',
    outcomesHighlight: 'Sample marketing blueprint providing structured guidance from manuscript completion to bookshelf.',
    isConcept: true,
  },
  {
    id: 'chronicles-of-exile',
    title: 'Chronicles of Exile',
    subtitle: 'Re-Launch & Backlist Revival',
    category: 'Book Promotion',
    clientType: 'Independent Epic Fantasy',
    genre: 'Epic Fantasy / Backlist',
    image: hardcoverSpreadImg,
    overview:
      'A backlist revival concept demonstrating how older titles can experience renewed commercial life through repackaged positioning, anniversary editions, and targeted promotional pushes.',
    servicesProvided: ['Book Promotion', 'Cover Brief Refinement', 'Omnibus Positioning'],
    creativeStrategy:
      'Re-anchored the series narrative around modern character-driven themes and refreshed cover typography to appeal to a new generation of genre readers.',
    outcomesHighlight: 'Illustrative framework demonstrating the long-term value inherent in an author\'s intellectual property.',
    isConcept: true,
  },
];

export const PROCESS_STAGES = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Audience & Core Narrative',
    description:
      'We learn about your book, genre, intended audience, current positioning, and promotional goals. We read your materials and understand the heart of your work.',
    keyAction: 'Deep-dive author questionnaire, manuscript appraisal & current platform evaluation.',
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    subtitle: 'Direction & Roadmap',
    description:
      'We identify suitable marketing opportunities and develop a direction that aligns with the book and the author\'s objectives, setting clear milestones.',
    keyAction: 'Custom promotional blueprint, reader persona mapping & channel allocation.',
  },
  {
    step: '03',
    title: 'CREATE',
    subtitle: 'Assets & Messaging',
    description:
      'We develop the promotional concepts, content direction, and marketing materials required for the strategy, upholding the highest visual and editorial standards.',
    keyAction: 'Narrative hooks, press copy, social templates, launch collateral & reader guides.',
  },
  {
    step: '04',
    title: 'PROMOTE',
    subtitle: 'Execution & Momentum',
    description:
      'We put the promotional strategy into action and identify opportunities to build stronger visibility, community engagement, and enduring reader discovery.',
    keyAction: 'Campaign activation, ongoing monitoring, outreach coordination & momentum preservation.',
  },
];

export const WHY_US_PILLARS = [
  {
    title: 'Individual Attention to Every Book and Author',
    description:
      'We do not employ cookie-cutter formulas or automated blast campaigns. Every book receives tailored thinking that honours its singular voice.',
  },
  {
    title: 'Strategic Rather Than Random Promotional Planning',
    description:
      'Random social posts do not sell books. We construct methodical, interconnected promotional roadmaps where every action reinforces the next.',
  },
  {
    title: 'A Strong Understanding of Literary Positioning',
    description:
      'We combine deep respect for literary craft with commercial acumen, speaking the language of both serious readers and publishing professionals.',
  },
  {
    title: 'Creative Marketing and Content Direction',
    description:
      'Our materials look like fine publishing art, not garish corporate ads. We create assets that authors are genuinely proud to display.',
  },
  {
    title: 'Professional and Consistent Brand Presentation',
    description:
      'From social channels to media kits and website presence, we ensure your visual and verbal identity communicates prestige and coherence.',
  },
  {
    title: 'Reader-Focused Promotional Thinking',
    description:
      'Book marketing succeeds when it respects reader desires. We focus on connecting your storytelling directly with people who will cherish it.',
  },
];

export const TESTIMONIALS_SAMPLE: TestimonialItem[] = [
  {
    id: 'placeholder-1',
    quote:
      'Working with a team that truly understood both literary tone and modern marketing completely transformed how I approach my book releases. The strategic clarity was unmatched.',
    authorName: 'Sample Author — Literary Fiction',
    authorRole: 'Novelist & Essayist',
    bookTitle: 'Echoes of the North',
    genre: 'Contemporary Fiction',
    isSamplePlaceholder: true,
  },
  {
    id: 'placeholder-2',
    quote:
      'Arthur Wells provided the exact blend of aesthetic sophistication and practical promotional discipline that my non-fiction book needed before launch week.',
    authorName: 'Sample Author — Narrative Non-Fiction',
    authorRole: 'Historian & Cultural Critic',
    bookTitle: 'The Architecture of Time',
    genre: 'Historical Non-Fiction',
    isSamplePlaceholder: true,
  },
  {
    id: 'placeholder-3',
    quote:
      'For the first time, my author platform felt cohesive and dignified. It removed the stress of social media and gave me a sustainable framework to connect with genuine readers.',
    authorName: 'Sample Author — Speculative Fiction',
    authorRole: 'Series Author',
    bookTitle: 'The Forgotten Frontier',
    genre: 'Speculative Fiction',
    isSamplePlaceholder: true,
  },
];

export const BLOG_ARTICLES: ArticleItem[] = [
  {
    id: 'why-every-author-needs-a-book-marketing-strategy',
    category: 'Strategy',
    title: 'WHY EVERY AUTHOR NEEDS A BOOK MARKETING STRATEGY.',
    shortDescription:
      'A brilliant manuscript is only half the journey. Discover why intentional marketing planning preserves artistic integrity and guarantees your work reaches its readers.',
    readTime: '6 min read',
    publishedDate: 'Editorial Insight',
    image: heroImg,
    contentParagraphs: [
      {
        heading: 'The Myth of Accidental Discovery',
        text:
          'In an era where thousands of books are released every week, the romantic notion that a great book will simply "find its own way" has become an expensive misunderstanding. While quality is the essential foundation, reader discovery is a deliberate process created through intentional positioning.',
      },
      {
        heading: 'Strategy As Artistic Stewardship',
        text:
          'Many authors view marketing as an unwelcome commercial intrusion into their creative sanctuary. At Arthur Wells, we view strategic marketing as the highest form of artistic stewardship. You invested months or years writing your story; taking equal care in how it is introduced to the world honors that effort.',
      },
      {
        heading: 'Three Foundations of Effective Book Strategy',
        text:
          'First, precise reader definition: knowing not just the demographic, but the emotional itch your book scratches. Second, narrative clarity: articulating in one compelling sentence why this book matters right now. Third, sustainable pacing: building promotional momentum that continues long after launch day has passed.',
      },
      {
        heading: 'Moving Forward With Clarity',
        text:
          'When you approach book marketing with an overarching strategy rather than scattered tactics, the anxiety dissipates. You no longer worry about every trending algorithm; you focus strictly on cultivating meaningful connections with your ideal readership.',
      },
    ],
  },
  {
    id: 'how-to-build-an-author-brand-that-readers-recognize',
    category: 'Branding',
    title: 'HOW TO BUILD AN AUTHOR BRAND THAT READERS RECOGNIZE.',
    shortDescription:
      'An author brand is not a corporate logo—it is the emotional promise you make to your audience across every book, essay, and interaction.',
    readTime: '5 min read',
    publishedDate: 'Editorial Insight',
    image: brandSpreadImg,
    contentParagraphs: [
      {
        heading: 'The Essence of an Author Brand',
        text:
          'Your author brand is what readers feel when they see your name on a spine. It is the cumulative impression formed by your storytelling themes, your visual presentation, your public remarks, and the philosophical thread that connects your work.',
      },
      {
        heading: 'Visual & Verbal Coherence',
        text:
          'Authors frequently stumble by presenting fractured identities: an elegant historical novel paired with whimsical social media graphics and a neglected, outdated website. Aligning your typography, color palette, author portraits, and biographical copy creates instant credibility.',
      },
      {
        heading: 'Defining Your Thematic Signature',
        text:
          'What questions keep resurfacing in your writing? Whether it is the tension between solitude and community, historical justice, or human vulnerability, articulating your central theme helps readers instantly recognize what your books promise.',
      },
      {
        heading: 'The Long-Term Dividend of Recognition',
        text:
          'A strong brand cushions the volatility between book releases. Readers buy your next book not just because of its cover blurb, but because they have come to trust your voice as a reliable companion in their reading life.',
      },
    ],
  },
  {
    id: 'five-creative-ways-to-increase-your-books-visibility',
    category: 'Promotion',
    title: 'FIVE CREATIVE WAYS TO INCREASE YOUR BOOK\'S VISIBILITY.',
    shortDescription:
      'Move beyond repetitive social links and algorithmic fatigue. Explore five thoughtful, dignified promotional techniques that captivate readers.',
    readTime: '7 min read',
    publishedDate: 'Editorial Insight',
    image: writingDeskImg,
    contentParagraphs: [
      {
        heading: '1. Curated Reading Group Kits',
        text:
          'Book clubs are among the most passionate drivers of word-of-mouth recommendations. Design an exquisite, downloadable reader companion featuring thematic discussion prompts, author background notes, and behind-the-scenes writing context.',
      },
      {
        heading: '2. Niche Newsletter & Essay Collaborations',
        text:
          'Rather than shouting into the social media void, contribute thoughtful guest essays or thematic commentary to independent Substack publications and literary newsletters that already possess the rapt attention of your target audience.',
      },
      {
        heading: '3. Editorial Video Excerpts with Atmospheric Aesthetics',
        text:
          'Short-form visual media does not require performing to trending audio. Quiet, atmospheric recordings of natural reading light, fountain pens, and spoken-word excerpts filmed with cinematic restraint create remarkable emotional resonance.',
      },
      {
        heading: '4. Themed Bookseller & Librarian Mailings',
        text:
          'Independent booksellers and librarians remain the greatest gatekeepers in publishing. Personalized, beautifully presented advance materials that demonstrate an understanding of their curation preferences leave an indelible impression.',
      },
      {
        heading: '5. The Evergreen Backlist Ecosystem',
        text:
          'Treat your backlist as an active asset. Pair previous titles with new thematic packaging, anniversary promotions, or thematic reading bundles that continually introduce earlier work to readers newly discovering your world.',
      },
    ],
  },
];
