export type Post = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  dateLabel: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'why-strong-brands-are-built-on-systems-not-logos',
    title: 'Why Strong Brands Are Built on Systems, Not Logos',
    category: 'Branding //',
    author: 'Ether Aditya',
    date: '2026-04-01',
    dateLabel: 'Apr 1, 2026',
    readTime: '12 min read',
    image: '/images/blog/systems.png',
    imageAlt: 'Minimal black device on a modern table',
    excerpt:
      'Many companies believe branding starts and ends with a logo. The strongest brands are built on systems.',
    body: [
      'Many companies believe branding starts and ends with a logo. While a logo is important, it is only one component of a much larger ecosystem. The most successful brands in today\'s digital landscape are built on structured systems — not isolated visuals.',
      'A brand system creates consistency, clarity, and scalability across every touchpoint, from product interfaces to marketing campaigns. Without it, even the most attractive design loses impact over time.',
      'Organizations that focus only on logo design often face inconsistent marketing materials, confusing product experiences, weak brand recognition, slow content production workflows, and poor scalability across platforms.',
      'A brand system is a structured framework that defines how a brand looks, feels, and communicates across all channels. It typically includes logo and variations, typography hierarchy, color systems, layout principles, imagery style, motion behavior, voice and messaging tone, and UI design patterns.',
      'Instead of creating assets repeatedly, teams use the system to produce consistent outputs faster. Consistency builds trust. Speed improves productivity. Scalability supports growth. Shared guidelines improve collaboration across teams.',
      'Organizations don\'t need to build everything at once. Define positioning, establish visual foundations, create layout guidelines, document rules, then expand into motion and digital systems. A logo introduces a brand, but a system sustains it.',
    ],
  },
  {
    slug: 'how-motion-design-improves-product-clarity',
    title: 'How Motion Design Improves Product Clarity',
    category: 'Motion // animation',
    author: 'Ether Aditya',
    date: '2026-01-24',
    dateLabel: '24 Jan 2026',
    readTime: '12 min read',
    image: '/images/blog/motion.png',
    imageAlt: 'Colorful tropical-themed LP covers',
    excerpt: 'Motion is not decoration. Used well, it explains hierarchy, feedback, and state.',
    body: [
      'Motion design helps users understand what changed, where to look next, and whether an action succeeded. Clarity beats spectacle.',
      'Effective product motion is short, purposeful, and consistent with a shared timing curve. It should reinforce spatial relationships rather than invent new ones.',
      'Teams that document motion tokens—duration, easing, and distance—ship clearer interfaces and avoid one-off animations that confuse the brand.',
    ],
  },
  {
    slug: 'from-vision-to-execution-aligning-teams-through-design',
    title: 'From Vision to Execution: Aligning Teams Through Design',
    category: 'marketing // strategy',
    author: 'Ether Aditya',
    date: '2026-01-24',
    dateLabel: '24 Jan 2026',
    readTime: '12 min read',
    image: '/images/blog/vision.png',
    imageAlt: 'A glowing orb in swirling cosmic light',
    excerpt: 'Design becomes a coordination tool when strategy, product, and marketing share a system.',
    body: [
      'Vision without shared artifacts stalls. Design systems, narrative maps, and prototype pathways turn intent into coordinated execution.',
      'When marketing, product, and brand work from one source of truth, campaigns stop fighting product reality and product stops shipping without story.',
      'Alignment is a design problem: clearer artifacts, fewer ambiguous handoffs, and rituals that keep teams reviewing the same references.',
    ],
  },
  {
    slug: 'design-led-marketing-the-competitive-advantage',
    title: 'Design-Led Marketing: The Competitive Advantage',
    category: 'Branding //',
    author: 'Ether Aditya',
    date: '2026-01-24',
    dateLabel: '24 Jan 2026',
    readTime: '12 min read',
    image: '/images/blog/design-led.png',
    imageAlt: 'Blurred tennis player mid-swing',
    excerpt: 'Design-led marketing compounds recognition and conversion when systems stay consistent.',
    body: [
      'Design-led marketing treats creative systems as infrastructure. Campaigns inherit type, color, motion, and message rather than reinventing them each quarter.',
      'The competitive advantage is speed with coherence: teams ship more often without diluting recognition.',
      'Brands that invest in reusable campaign modules outperform those that commission disconnected one-offs.',
    ],
  },
  {
    slug: 'using-motion-design-to-improve-product-understanding',
    title: 'Using Motion Design to Improve Product Understanding',
    category: 'Motion // animation',
    author: 'Ether Aditya',
    date: '2026-01-24',
    dateLabel: '24 Jan 2026',
    readTime: '12 min read',
    image: '/images/blog/understanding.png',
    imageAlt: 'Small stone structure atop a green hill',
    excerpt: 'Teaching complex flows is easier when motion shows cause and effect.',
    body: [
      'Users understand products faster when transitions reveal structure. Expand, collapse, and route changes should feel spatially honest.',
      'Onboarding sequences benefit from staged reveals that introduce one concept at a time.',
      'Motion that mirrors real-world physics without excess latency keeps attention on the task.',
    ],
  },
  {
    slug: 'how-design-systems-improve-product-consistency',
    title: 'How Design Systems Improve Product Consistency',
    category: 'Motion // animation',
    author: 'Meaniol Breath',
    date: '2026-01-24',
    dateLabel: '24 Jan 2026',
    readTime: '12 min read',
    image: '/images/blog/consistency.png',
    imageAlt: 'Person in a dark hoodie illuminated by red neon',
    excerpt: 'Consistency is a system outcome, not a QA afterthought.',
    body: [
      'Design systems reduce variance by encoding decisions once. Components, tokens, and content patterns keep product surfaces coherent as teams scale.',
      'Consistency improves trust because users learn patterns and reuse them unconsciously.',
      'The best systems stay living documents: audited, versioned, and owned by people who ship.',
    ],
  },
];

export const homepageJournalSlugs = [
  'why-strong-brands-are-built-on-systems-not-logos',
  'how-motion-design-improves-product-clarity',
  'from-vision-to-execution-aligning-teams-through-design',
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getHomepagePosts() {
  return homepageJournalSlugs.map((s) => getPost(s)!).filter(Boolean);
}
