/**
 * Site-wide settings. Edit these in one place and every page updates.
 */
export const site = {
  name: 'Filling the GAAP',
  shortName: 'FTGAAP',
  url: 'https://www.ftgaap.co.za',
  tagline: 'Accounting and tax that closes the gap between where your finances are and where they should be.',
  description:
    'Filling the GAAP is a remote South African accounting and tax practice led by a Professional Accountant (SA), Professional Tax Practitioner (SA) and Independent Reviewer (SA). Personal tax, business accounting, payroll, VAT, CIPC and independent reviews, plus free accounting software for clients.',
  owner: 'Kyle Jones',
  email: 'kyle@ftgaap.co.za',
  phoneDisplay: '067 148 7014',
  phoneIntl: '+27671487014',
  whatsapp: '27671487014',
  hours: 'Monday to Friday, 08:00 to 18:00',
  location: 'Fully remote. Serving clients across South Africa.',
  /** Paste your Calendly / Cal.com / Google appointment link here to enable the booking embed. */
  bookingUrl: '',
  credentials: [
    'Professional Accountant (SA)',
    'Professional Tax Practitioner (SA)',
    'Independent Reviewer (SA)',
  ],
  /**
   * The team shown on the About page. Photo is a path under /public (e.g. '/kyle.jpg');
   * leave it empty to show initials. Add, remove or reorder people here.
   */
  team: [
    {
      name: 'Kyle Jones',
      initials: 'KJ',
      role: 'Founder',
      credentials: ['Professional Accountant (SA)', 'Professional Tax Practitioner (SA)', 'Independent Reviewer (SA)'],
      photo: '',
      bio: 'Kyle started in audit, then spent several years as a financial manager in industry across a range of sectors. He founded Filling the GAAP to combine professional accounting and tax with software he builds himself.',
    },
    {
      name: 'New team member',
      initials: '?',
      role: 'Role to be confirmed',
      credentials: [],
      photo: '',
      bio: 'Details coming soon. Replace this entry in src/config.ts with their name, role, credentials and a short bio.',
    },
  ],
  /** Google Business Profile review link. When set, a "Review us on Google" link appears with the testimonials. */
  googleReviewsUrl: '',
  /** Client testimonials. The section is hidden until this list has at least one entry. */
  reviews: [] as { quote: string; name: string; role: string; rating?: number }[],
  /** Shown under every price. Change if you are not VAT registered. */
  pricesNote: 'Prices exclude VAT where applicable.',
  /** The four promises shown on the home and pricing pages. */
  promises: [
    { title: 'Fixed fees, in writing', text: 'A written quote before any work starts. No hourly billing and no surprise invoices.' },
    { title: 'Month to month', text: 'No lock-in contracts. One month\'s notice if you ever want to leave, with a proper handover.' },
    { title: 'Reply within one business day', text: 'Email, WhatsApp or phone. You deal with the people who do your work, not a call centre.' },
    { title: 'Free switch', text: 'Moving from another accountant? We handle the clearance, SARS and CIPC access and the catch-up at no charge.' },
  ],
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
  },
  /** The tax year the calculator defaults to. Tables live in src/data/tax-tables.ts */
  defaultTaxYear: 2027,
};

export const whatsappLink = (text = 'Hi, I found Filling the GAAP via ftgaap.co.za and would like to chat about my accounting and tax needs.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: 'Services', href: '/services', children: [
    { label: 'For individuals', href: '/services/individuals' },
    { label: 'For businesses', href: '/services/businesses' },
    { label: 'Switching accountants', href: '/services/businesses#switching' },
    { label: 'Pricing', href: '/pricing' },
  ]},
  { label: 'Solutions', href: '/solutions', children: [
    { label: 'FTG Books', href: '/solutions/ftg-books' },
  ]},
  { label: 'Resources', href: '/resources', children: [
    { label: 'Articles', href: '/resources' },
    { label: 'Tax calendar', href: '/resources/tax-calendar' },
    { label: 'Income tax calculator', href: '/tools/income-tax-calculator' },
    { label: 'PI score calculator', href: '/tools/pi-score-calculator' },
  ]},
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
