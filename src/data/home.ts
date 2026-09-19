export const pricingPlans = [
  {
    name: 'Starter',
    blurb: 'Perfect for freelancers and solo creators just getting started.',
    price: '$49',
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
    price: '$99',
    period: 'Per month',
    features: [
      'Up to 5 active brand projects',
      'UI/UX design + branding strategy',
      'Priority support within 24h',
      'Motion design and video editing',
    ],
  },
];

export const homeMetrics = [
  { value: '100+', label: 'Digital experiences' },
  { value: '32%', label: 'More Qualified rate' },
  { value: '160+', label: 'Eng user interfaces' },
  { value: '47%', label: 'Higher retention rate' },
  { value: '115+', label: 'Innovative solutions' },
  { value: '40%', label: 'Con rate optimization' },
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
