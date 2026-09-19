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
    slug: 'crosswith-swag',
    title: 'crosswithswag',
    titleLine2: 'crosswithswag',
    client: 'crosswithswag',
    category: 'Brand Design // Marketing // UIUX Design',
    year: '2026',
    image: '/images/staging/crosswith/crosswith-01.jpg',
    imageAlt:
      'Kloof Street Nights campaign poster: interlocking globe mark, quoted KLOOFSTREETNIGHTS lockup, and crosswithswag wordmark on white',
    headline: 'Wearable editions. One thought. Permanently closed.',
    intro:
      'crosswithswag is a Cape Town label that treats each drop as a closed edition: one idea held in a garment, a campaign image, and a framed print—conceived, released, then never reissued. Edition 001, Kloof Street Nights, is the winter drop: black hoodies, crewnecks, and tees with cream type that carry the after-dinner hour on Kloof Street—après le dîner, after the noise, before tomorrow. We built the identity, the drop campaign, and the Current / Archive / Manifesto site so the clothes, posters, and UI speak the same language.',
    challenges: [
      'Streetwear that reads as merch instead of a numbered, closed edition',
      'A Cape Town nightlife story with no visual system to wear or archive',
      'Drop marketing that repeats instead of locking the edition shut',
      'No digital surface for Current, Archive, and Manifesto that matches the garment',
    ],
    solutions: [
      {
        title: 'Branding',
        items: [
          'SWAG wordmark and interlocking globe',
          'Kloof Street Nights lockups',
          'Cream-on-black garment typography',
          'Closed-edition naming (Edition 001)',
        ],
      },
      {
        title: 'Marketing',
        items: [
          'Winter-drop campaign stills',
          'Kloof Street Nights posters',
          'No repeats — no reissues narrative',
          'Wear the evening copy system',
        ],
      },
      {
        title: 'UI/UX Design',
        items: [
          'Editorial landing (Current / Archive / Manifesto)',
          'Wearable Editions information architecture',
          'Edition 001 product layouts',
          'Dark, type-led campaign site',
        ],
      },
    ],
    identity: {
      colors: 'Black, Cream, Clay',
      typography: 'Condensed display, SWAG script, tight poster type',
      style: 'Closed-edition streetwear, cream on black, editorial dark UI',
    },
    relatedSlugs: ['free-period', 'only-the-brave', 'sunscreen', 'custom-designed'],
  },
  {
    slug: 'free-period',
    title: 'Free Period',
    titleLine2: 'Free Period',
    client: 'Free Period',
    category: 'UI/UX design // product // SaaS // app development',
    year: '2026',
    image: '/images/staging/freeperiod/freeperiod-01-card.png',
    imageAlt:
      'Dark-mode Free Period marketing hero: “Lesson plans in seconds, not hours” beside a coffee-cup clock pictogram, with Start for free and Sign in actions',
    headline: 'Lesson plans in seconds — evenings given back to teachers',
    intro:
      'Free Period is an AI lesson planner for teachers. Upload curriculum docs, describe the lesson, and the product returns a complete twelve-section plan — objectives, activities, differentiation, and assessment — ready to edit inline and export. The case study uses marketing screenshots from free-period.vercel.app. No personal student data is collected or shown.',
    challenges: [
      'Planning still eats evenings even when teachers know the material',
      'Generic AI output dumps unstructured text instead of a trusted lesson shape',
      'Curriculum, year group, and subject alignment is easy to miss under time pressure',
      'Export workflows fight school templates instead of filling them in',
    ],
    solutions: [
      {
        title: 'UI/UX Design',
        items: [
          'Dark-mode marketing hero and feature IA',
          'Planner flow from prompt to editable plan',
          'Inline review before export',
          'Light/dark mode toggle and clear CTAs',
        ],
      },
      {
        title: 'Product',
        items: [
          'Twelve-section structure every generation',
          'Curriculum-, subject-, and year-aware generation',
          'DOCX and filled-template export',
          'Start-from-scratch or teacher-template fill-in',
        ],
      },
    ],
    identity: {
      colors: 'Charcoal, Blush Pink, Warm Gold',
      typography: 'Geometric sans, high-contrast display headlines',
      style: 'Dark product marketing, aurora glow, tea-break clock pictogram',
    },
    relatedSlugs: ['only-the-brave', 'web-design', 'crosswith-swag'],
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
    relatedSlugs: ['web-design', 'crosswith-swag', 'better-built'],
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
    relatedSlugs: ['face-seram', 'custom-designed', 'crosswith-swag'],
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
    relatedSlugs: ['crosswith-swag', 'better-built', 'sunscreen'],
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
    relatedSlugs: ['only-the-brave', 'free-period', 'face-seram'],
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
    slug: 'better-built',
    title: 'BetterBuilt',
    titleLine2: 'BetterBuilt',
    client: 'BetterBuilt',
    category: 'branding // website design',
    year: '2026',
    image: '/images/staging/betterbuilt/site/bb-site-04.png',
    imageAlt:
      'BetterBuilt storefront hero: Better Gear / Better Performance / Better You over gym-ready product photography',
    headline: 'Better gear. Better performance. Better you.',
    intro:
      'BetterBuilt is a South African gym-apparel and accessories store. We captured the storefront, collections, and identity so the brand reads as performance gear — not generic fitness merch.',
    challenges: [
      'Fitness retail that looks like every other gym shop',
      'Collections (bundles, apparel, accessories) without a clear visual system',
      'A locked storefront that still needs to feel premium on first view',
    ],
    solutions: [
      {
        title: 'Branding',
        items: ['BETTER BUILT™ speed-B lockup', 'Performance type hierarchy', 'Dark store chrome'],
      },
      {
        title: 'Website Design',
        items: ['Hero and collections rhythm', 'Product grid', 'Contact and service paths'],
      },
    ],
    identity: {
      colors: 'Black, White, Performance Pink',
      typography: 'Condensed athletic sans, uppercase lockups',
      style: 'Gym-performance retail, high-contrast product stills',
    },
    relatedSlugs: ['crosswith-swag', 'custom-designed', 'only-the-brave'],
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
