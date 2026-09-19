export type ProjectImage = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
};

export type Project = {
  slug: string;
  title: string;
  titleLine2: string;
  client: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
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
  galleryLabel?: string;
  gallery?: ProjectImage[];
};

const projectList: Project[] = [
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
    relatedSlugs: ['free-period', 'betterbuilt', 'birdseye', 'custom-designed'],
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
    relatedSlugs: ['betterbuilt', 'web-design', 'crosswith-swag'],
  },
  {
    slug: 'betterbuilt',
    title: 'Better Built',
    titleLine2: 'Better Built',
    client: 'Better Built',
    category: 'branding // ecommerce // website',
    year: '2026',
    image: '/images/staging/betterbuilt/site/bb-site-05.png',
    imageAlt:
      'Better Built collections: Bundles, Gym Apparel, and Accessories cards with leak-proof bottles, MagGrip bag, and gym towel',
    imagePosition: 'center 22%',
    headline: 'BETTER GEAR / BETTER PERFORMANCE / BETTER YOU',
    intro:
      'Better Built is a South African gym-gear store at betterbuilt.co.za. Collections cover Bundles, Gym Apparel, and Accessories — leak-proof water bottle, MagGrip gym bag, premium towel, and the Ultimate Gym Bundle — with delivery anywhere in South Africa and free delivery on orders over R750. Home promo: complimentary gift with every bundle. Contact: support@betterbuilt.co.za. The case study uses store screenshots and the supplied BETTER BUILT™ lockup.',
    challenges: [
      'Gym gear that reads generic next to global sportswear templates',
      'Bundles, apparel, and accessories need one clear shop hierarchy',
      'Promo and delivery messaging easy to miss above the fold',
      'Product lineup (bottle, bag, towel, bundle) needs equal shelf presence',
    ],
    solutions: [
      {
        title: 'Branding',
        items: [
          'BETTER BUILT™ speed-B lockup',
          'Box logo system',
          'Performance tagline hierarchy',
          'Bundle gift promo line',
        ],
      },
      {
        title: 'Ecommerce',
        items: [
          'Collections: Bundles, Gym Apparel, Accessories',
          'Products grid and filter/sort UX',
          'Featured Ultimate Gym Bundle',
          'Free delivery over R750 messaging',
        ],
      },
      {
        title: 'Website',
        items: [
          'Home hero and announcement bars',
          'Shop and contact IA',
          'support@betterbuilt.co.za contact flow',
          'Email capture for drops and deals',
        ],
      },
    ],
    identity: {
      colors: 'Black, White, Smoke Grey',
      typography: 'Bold sans headlines, uppercase nav',
      style: 'High-contrast gym ecommerce, product-led grids, speed-B mark',
    },
    galleryLabel: 'Store & identity',
    gallery: [
      {
        src: '/images/staging/betterbuilt/site/bb-site-04.png',
        alt: 'Home hero: BETTER GEAR, BETTER PERFORMANCE, BETTER YOU over gym photography',
      },
      {
        src: '/images/staging/betterbuilt/bb-logo-whatsapp.jpeg',
        alt: 'BETTER BUILT™ speed-B lockup on black',
        fit: 'contain',
      },
      {
        src: '/images/staging/betterbuilt/site/bb-site-02.png',
        alt: 'Products grid: leak-proof water bottle, MagGrip bag, towel, and Ultimate Gym Bundle',
      },
      {
        src: '/images/staging/betterbuilt/site/bb-site-01.png',
        alt: 'Home header, promo bars, and hero opening',
      },
      {
        src: '/images/staging/betterbuilt/site/bb-site-03.png',
        alt: 'Contact page: Get in Touch headline and support@betterbuilt.co.za',
      },
    ],
    relatedSlugs: ['birdseye', 'crosswith-swag', 'free-period'],
  },
  {
    slug: 'birdseye',
    title: 'BXRDS.EYE',
    titleLine2: 'BXRDS.EYE',
    client: 'Birds Eye',
    category: 'branding // identity',
    year: '2026',
    image: '/images/staging/birdseye/logo-mark-sand.png',
    imageAlt: 'Sand BXRDS.EYE studio mark',
    imageFit: 'contain',
    headline: 'Sand mark. Dark field. Studio identity first.',
    intro:
      'BXRDS.EYE is a creative studio. This case holds the supplied studio identity — sand mark and wordmark — on dark, as specified for presentation. No campaign stills are in this set; the marks are the work on show.',
    challenges: [
      'A studio mark that has to read on dark without campaign photography',
      'Mark, word, and lockup living as separate files',
      'Keeping the studio distinct from unrelated Birds Eye brands',
    ],
    solutions: [
      {
        title: 'Branding',
        items: ['Sand mark', 'Sand wordmark', 'Cyprus green and imperial red variants'],
      },
      {
        title: 'Presentation',
        items: ['Dark-background application', 'Mark-led Works card', 'Wordmark lockup in the case'],
      },
    ],
    identity: {
      colors: 'Sand, Cyprus Green, Imperial Red, Black',
      typography: 'BXRDS.EYE wordmark',
      style: 'Mark-led studio identity on dark',
    },
    galleryLabel: 'Studio marks',
    gallery: [
      {
        src: '/images/staging/birdseye/logo-word-sand.png',
        alt: 'Sand BXRDS.EYE Creative Studio wordmark',
        fit: 'contain',
      },
    ],
    relatedSlugs: ['betterbuilt', 'free-period', 'crosswith-swag'],
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
    relatedSlugs: ['crosswith-swag', 'casual-shirt-marketing', 'birdseye'],
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
    relatedSlugs: ['betterbuilt', 'free-period', 'face-seram'],
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
    relatedSlugs: ['birdseye', 'custom-designed', 'web-design'],
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
    relatedSlugs: ['crosswith-swag', 'custom-designed', 'betterbuilt'],
  },
];

const stagedSlugs = new Set(['crosswith-swag', 'free-period', 'betterbuilt', 'birdseye']);

// Leftover X-axis stills still in the grid: custom-designed, web-design, face-seram, casual-shirt-marketing.
// Tashiv replaced only-the-brave and sunscreen with Better Built and BXRDS.EYE on main.
export const projects = [
  ...projectList.filter((project) => stagedSlugs.has(project.slug)),
  ...projectList.filter((project) => !stagedSlugs.has(project.slug)),
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
