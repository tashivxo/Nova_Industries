export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/company' },
  { label: 'Works', href: '/project' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
];

export const footerNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'works', href: '/project' },
  { label: 'Company', href: '/company' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export const brand = {
  name: 'NOVA INDUSTRIES',
  shortName: 'Nova Industries',
};

export const contact = {
  email: 'info@novaindustries.com',
  contactEmail: 'info@novaindustries.com',
  phone: '+27 63 046 6417',
  phoneHref: 'tel:+27630466417',
  addressLine1: 'Cape Town,',
  addressLine2: 'South Africa',
  mapsUrl: '#',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'x', href: 'https://www.x.com/' },
    { label: 'Dribble', href: 'https://www.dribbble.com/' },
  ],
  copyright: '© 2026 Nova Industries. All rights reserved.',
};
