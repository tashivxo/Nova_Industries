export type Project = {
  slug: string;
  title: string;
  titleLine2: string;
  client: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  headline: string;
  intro: string;
  challenges: string[];
  solutions: {
    title: string;
    items: string[];
  }[];
  identity?: {
    colors: string;
    typography: string;
    style: string;
  };
  relatedSlugs: string[];
};

export const projects: Project[] = [
  {
    slug: 'slims-t-shirt',
    title: 'slims t-shirt',
    titleLine2: 'slims t-shirt',
    client: 'Gentle Park',
    category: 'branding // marketing',
    year: '2026',
    image: '/images/projects/slims-t-shirt.webp',
    imageAlt: 'Black t-shirt on wet grass',
    headline: 'Redefining Everyday Comfort for the Modern Lifestyle',
    intro:
      'Slims T-Shirt is designed for individuals who value comfort, simplicity, and effortless style. In a fast-paced modern world, people seek clothing that feels light, looks minimal, and fits perfectly for daily wear. Our goal was to create a t-shirt brand that blends premium comfort with modern aesthetics, making it suitable for casual outings, work-from-home, and everyday use.',
    challenges: [
      'Overcrowded t-shirt market with repetitive designs',
      'Lack of balance between comfort and style',
      'Poor fabric quality in affordable segments',
      'Limited branding that resonates with modern youth',
    ],
    solutions: [
      {
        title: 'Branding',
        items: ['Logo Design', 'Brand Guidelines', 'Color System', 'Typography Kit'],
      },
      {
        title: 'Packaging Design',
        items: ['Box Design', 'Label Design', 'Insert Card', 'Mockup Renders'],
      },
      {
        title: 'Marketing Strategy',
        items: [
          'Target Audience Research',
          'Campaign Concept',
          'Social Content Plan',
          'Launch Playbook',
        ],
      },
    ],
    identity: {
      colors: 'Black, White, Soft Gray',
      typography: 'Sans-serif, clean, modern',
      style: 'Minimal, soft shadows, breathable spacing',
    },
    relatedSlugs: ['i-phone-cover', 'only-the-brave', 'sunscreen', 'custom-designed'],
  },
  {
    slug: 'i-phone-cover',
    title: 'i-phone cover',
    titleLine2: 'i-phone cover',
    client: 'mobile elegant',
    category: 'Branding //cover design',
    year: '2026',
    image: '/images/projects/i-phone-cover.png',
    imageAlt: 'White phone case on rocks against blue background',
    headline: 'Protective form with quiet luxury presence',
    intro:
      'A cover collection built around tactile materiality and clean geometry. The brand needed packaging and visuals that felt premium without overpowering the product.',
    challenges: [
      'Commodity phone-accessory market',
      'Weak shelf differentiation',
      'Inconsistent visual language across SKUs',
    ],
    solutions: [
      {
        title: 'Branding',
        items: ['Logo System', 'Packaging Language', 'Color Palette', 'Art Direction'],
      },
      {
        title: 'Cover Design',
        items: ['Pattern Library', 'Material Studies', 'Mockup Suite', 'Retail Displays'],
      },
    ],
    identity: {
      colors: 'White, Stone, Deep Blue',
      typography: 'Geometric sans',
      style: 'Clean product photography, soft contrast',
    },
    relatedSlugs: ['slims-t-shirt', 'only-the-brave', 'sunscreen'],
  },
  {
    slug: 'only-the-brave',
    title: 'Only The Brave',
    titleLine2: 'Only The Brave',
    client: 'Lereve',
    category: 'ui/ux design // website design',
    year: '2026',
    image: '/images/projects/only-the-brave.webp',
    imageAlt: 'Denim-wrapped cologne bottle held by hand',
    headline: 'A digital experience with fragrance-level intensity',
    intro:
      'Lereve needed a website that matched the boldness of Only The Brave—cinematic motion, confident typography, and a product story that feels exclusive.',
    challenges: [
      'Generic ecommerce templates',
      'Weak narrative around scent identity',
      'Low conversion on campaign landings',
    ],
    solutions: [
      {
        title: 'UI/UX Design',
        items: ['Information Architecture', 'Campaign Pages', 'Product Detail UX', 'Motion Specs'],
      },
      {
        title: 'Website Design',
        items: ['Visual System', 'Responsive Layouts', 'Component Library', 'Launch QA'],
      },
    ],
    relatedSlugs: ['web-design', 'slims-t-shirt', 'custom-designed'],
  },
  {
    slug: 'sunscreen',
    title: 'sunscreen',
    titleLine2: 'sunscreen',
    client: 'syagi',
    category: 'branding // marketing',
    year: '2026',
    image: '/images/projects/sunscreen.png',
    imageAlt: 'SYAGI SPF 50++ sunscreen lotion on sand with water',
    headline: 'Sun care branding that feels coastal and clinical',
    intro:
      'Syagi SPF needed a brand system that balanced outdoor lifestyle energy with trust and clarity for SPF messaging.',
    challenges: [
      'Crowded sunscreen aisle',
      'Complex SPF claims hard to communicate',
      'Inconsistent lifestyle photography',
    ],
    solutions: [
      {
        title: 'Branding',
        items: ['Identity Refresh', 'Packaging Hierarchy', 'Claim Typography', 'Campaign Art Direction'],
      },
      {
        title: 'Marketing',
        items: ['Launch Narrative', 'Social Templates', 'Retail Story', 'Influencer Kit'],
      },
    ],
    relatedSlugs: ['face-seram', 'custom-designed', 'slims-t-shirt'],
  },
  {
    slug: 'custom-designed',
    title: 'custom-designed',
    titleLine2: 'custom-designed',
    client: 'matcha club',
    category: 'Branding // marketing',
    year: '2026',
    image: '/images/projects/custom-designed.webp',
    imageAlt: 'Cream t-shirt with a Matcha Club graphic',
    headline: 'Custom apparel identity for a matcha lifestyle club',
    intro:
      'Matcha Club needed merchandise and brand graphics that felt collectible, calm, and community-driven.',
    challenges: [
      'Lifestyle brand without a clear merch system',
      'Inconsistent illustration language',
      'Need for drop-based marketing cadence',
    ],
    solutions: [
      {
        title: 'Branding',
        items: ['Graphic System', 'Apparel Templates', 'Drop Naming', 'Packaging'],
      },
      {
        title: 'Marketing',
        items: ['Launch Cadence', 'Community Content', 'Lookbook Direction', 'Email Visuals'],
      },
    ],
    relatedSlugs: ['slims-t-shirt', 'casual-shirt-marketing', 'sunscreen'],
  },
  {
    slug: 'web-design',
    title: 'Web design',
    titleLine2: 'Web design',
    client: 'orfolio',
    category: 'ui/ux design // agency',
    year: '2026',
    image: '/images/projects/web-design.png',
    imageAlt: 'Glowing vintage TV on a grassy hill',
    headline: 'Agency web presence with editorial gravity',
    intro:
      'Orfolio needed a portfolio website that showcased work with cinematic pacing and clear service pathways.',
    challenges: [
      'Portfolio overload without hierarchy',
      'Unclear CTA paths',
      'Heavy imagery slowing the experience',
    ],
    solutions: [
      {
        title: 'UI/UX',
        items: ['Site Map', 'Case Study Templates', 'Motion Guidelines', 'Performance Plan'],
      },
      {
        title: 'Web Design',
        items: ['Art Direction', 'Typography System', 'Responsive Grid', 'CMS Structure'],
      },
    ],
    relatedSlugs: ['only-the-brave', 'i-phone-cover', 'face-seram'],
  },
  {
    slug: 'face-seram',
    title: 'Face seram',
    titleLine2: 'Face seram',
    client: 'Novili',
    category: 'Strategy // Marketing',
    year: '2026',
    image: '/images/projects/face-seram.webp',
    imageAlt: 'Woman applying facial serum with a dropper',
    headline: 'Serum storytelling rooted in ritual and results',
    intro:
      'Novili Face Serum required a strategy-led campaign system that felt clinical enough for trust and soft enough for beauty.',
    challenges: [
      'Crowded serum category',
      'Need for proof-led messaging',
      'Fragmented channel creative',
    ],
    solutions: [
      {
        title: 'Strategy',
        items: ['Positioning', 'Audience Insights', 'Message Architecture', 'Launch Roadmap'],
      },
      {
        title: 'Marketing',
        items: ['Campaign Concept', 'Social System', 'Packaging Story', 'Retail Scripts'],
      },
    ],
    relatedSlugs: ['sunscreen', 'custom-designed', 'web-design'],
  },
  {
    slug: 'casual-shirt-marketing',
    title: 'casual shirt marketing',
    titleLine2: 'casual shirt marketing',
    client: 'easy fashion',
    category: 'marketing // branding',
    year: '2026',
    image: '/images/projects/casual-shirt-marketing.webp',
    imageAlt: 'Man holding a yellow TV with static',
    headline: 'Casualwear campaigns with cultural energy',
    intro:
      'Easy Fashion needed marketing creative that felt youthful, kinetic, and instantly shareable across social drops.',
    challenges: [
      'Seasonal content burnout',
      'Weak brand memorability',
      'Inconsistent campaign photography',
    ],
    solutions: [
      {
        title: 'Marketing',
        items: ['Campaign Worlds', 'Shot Lists', 'Social Sequencing', 'Influencer Briefs'],
      },
      {
        title: 'Branding',
        items: ['Visual Motifs', 'Type Lockups', 'Color Accents', 'Merch Extensions'],
      },
    ],
    relatedSlugs: ['slims-t-shirt', 'custom-designed', 'only-the-brave'],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string) {
  const project = getProject(slug);
  if (!project) return [];
  return project.relatedSlugs
    .map((s) => getProject(s))
    .filter((p): p is Project => Boolean(p));
}
