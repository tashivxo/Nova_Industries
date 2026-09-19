export const pricingPlans = [
  {
    name: 'Starter',
    blurb: 'Perfect for freelancers and solo creators just getting started.',
    from: 49,
    to: 79,
    period: 'Per month',
    features: [
      '1 active brand project',
      'Basic design consultation',
      'Email support within 48h',
      'Access to brand templates',
    ],
  },
  {
    name: 'Professional',
    blurb: 'For growing brands and startups that need full creative support.',
    from: 99,
    to: 149,
    period: 'Per month',
    features: [
      'Up to 5 active brand projects',
      'UI/UX design + branding strategy',
      'Priority support within 24h',
      'Motion design and video editing',
    ],
  },
];

// Counters count from -> to when scrolled into view (Framer's Animated Number Counter values).
export const homeMetrics = [
  { from: 100, to: 150, suffix: '+', label: 'Digital experiences' },
  { from: 32, to: 67, suffix: '%', label: 'More Qualified rate' },
  { from: 160, to: 200, suffix: '+', label: 'Eng user interfaces' },
  { from: 47, to: 75, suffix: '%', label: 'Higher retention rate' },
  { from: 115, to: 150, suffix: '+', label: 'Innovative solutions' },
  { from: 40, to: 80, suffix: '%', label: 'Con rate optimization' },
];

export const partnerMetricGroups = [
  {
    name: 'BetterBuilt',
    logo: '/images/staging/betterbuilt/bb-wordmark.png',
    logoClass: 'logo-bb',
    stats: [homeMetrics[0], homeMetrics[1]],
  },
  {
    name: 'BXRDS.EYE',
    logo: '/images/staging/birdseye/logo-word-sand.png',
    logoClass: 'logo-bx',
    stats: [homeMetrics[2], homeMetrics[3]],
  },
  {
    name: 'crosswithswag',
    logo: '/images/staging/crosswith/swag-logo.svg',
    logoClass: 'logo-swag',
    stats: [homeMetrics[4], homeMetrics[5]],
  },
];

export const homeHeroStats = [
  { value: '9+', label: 'years' },
  { value: '500+', label: 'projects' },
  { value: '99%', label: 'client satisfaction' },
];

export const skillPairs = [
  {
    a: 'Creative',
    b: 'Direction',
    image: '/images/staging/crosswith/crosswith-04.jpg',
  },
  {
    a: 'UI/UX',
    b: 'Design',
    image: '/images/staging/freeperiod/freeperiod-01-card.png',
  },
  { a: 'Branding', b: 'Strategy' },
  { a: 'Video', b: 'Editing' },
  { a: 'Motion', b: 'Design' },
  { a: 'Digital', b: 'Marketing' },
];

export const processSteps = [
  {
    title: 'Discover',
    body: 'Research provides insights for the project.',
  },
  {
    title: 'Define & design',
    body: 'Insights into strategy and make your product visible.',
  },
  {
    title: 'Launch & Scale',
    body: 'We ensure a smooth launch and help brands grow.',
  },
];

// TEMPLATE PLACEHOLDERS from the X-axis template. Replace with real Nova client quotes before launch.
export const testimonials = [
  {
    quote:
      "Before joining Be-tech, I was just going through the motions. Now, I'm part of a team that's genuinely changing the world. The support here is incredible.",
    name: 'Neatian Meyal',
    role: 'Head of Product, SaaS Company',
    image: '/images/ui/testimonial.jpg',
  },
  {
    quote:
      "I came in skeptical, but Be-tech changed everything. The culture, the people, the mission — it's unlike anywhere I've worked before.",
    name: 'James Whitford',
    role: 'Engineering Lead, Fintech Company',
    image: '/images/ui/testimonial-2.png',
  },
  {
    quote:
      'Be-tech gave me the confidence to step up. The mentorship and resources here pushed me further than I ever thought possible.',
    name: 'Priya Kalani',
    role: 'Product Manager, SaaS Platform',
    image: '/images/ui/testimonial-3.png',
  },
];
