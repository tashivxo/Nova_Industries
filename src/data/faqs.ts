export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: 'What services does Nova Industries specialize in?',
    answer:
      'We specialize in UI/UX design, brand identity, website development, motion graphics, and creative direction—helping tech brands build impactful digital experiences.',
  },
  {
    question: 'Do you work with startups or enterprise clients?',
    answer:
      'Both. We partner with early-stage startups shaping new products and established teams that need sharper brand systems, clearer UX, and faster creative execution.',
  },
  {
    question: 'What industries do you usually work with?',
    answer:
      'We primarily work with tech brands, SaaS products, consumer startups, and digital-first companies across branding, product design, and marketing.',
  },
  {
    question: 'What is your design process like?',
    answer:
      'We move through Discover, Define & design, then Launch & Scale—research first, strategy-aligned creative systems next, then polished delivery that can grow with the brand.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'Most engagements run from a few weeks for focused brand or landing work to several months for full identity, product UI, and multi-channel marketing systems.',
  },
];
