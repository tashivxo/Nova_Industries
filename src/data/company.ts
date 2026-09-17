export type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

export const team: TeamMember[] = [
  { name: 'Ether Aditya', role: 'Founder & Creative Director' },
  { name: 'Liam Anderson', role: 'Motion & Animation Director' },
  { name: 'Maya Chen', role: 'Brand Strategy Director' },
  { name: 'James Collins', role: 'Digital Marketing Lead' },
  { name: 'Sophia Reynolds', role: 'Lead Product Designer' },
  { name: 'Olivia Bennett', role: 'Senior UI/UX Designer' },
];

export const companyStats = [
  { value: '100+', label: 'Digital Projects Executed' },
  { value: '0x', label: 'Product Teams Supported' },
  { value: '2+', label: 'Years Creative Experience' },
  { value: '82%', label: 'Client Satisfaction Rate' },
];

export const coreStandards = [
  {
    title: 'Strategy First',
    body: 'We align creativity with business objectives to ensure every decision supports measurable growth.',
  },
  {
    title: 'Creativity',
    body: 'Our work is measured by impact, engagement, and business performance — not just aesthetics.',
  },
  {
    title: 'Over Complexity',
    body: 'We simplify systems, interfaces, and brand communication to make complex ideas easy to understand.',
  },
  {
    title: 'Execution',
    body: 'We move fast without cutting corners. Timelines are respected, deliverables are polished, and quality is non-negotiable.',
  },
  {
    title: 'Scalable Systems',
    body: 'We build modular, flexible foundations — brand systems, design systems, and digital infrastructure that grow with your business.',
  },
  {
    title: 'Collaborative',
    body: 'We are operate as an extension of your team — transparent, accountable, and aligned.',
  },
];
