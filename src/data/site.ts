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
  email: 'info@ref.digital',
  contactEmail: 'hello@youragency.com',
  phone: '+1 514 281-8901',
  phoneHref: 'tel:+15142818901',
  addressLine1: '4051 Molson Street',
  addressLine2: 'Suite 100, Montreal, QC, H1Y 3L1',
  mapsUrl: 'https://maps.app.goo.gl/c1X7NhfmDLF7ydeK9',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'x', href: 'https://www.x.com/' },
    { label: 'Dribble', href: 'https://www.dribbble.com/' },
  ],
  copyright: '© 2026 Nova Industries. All rights reserved.',
};
