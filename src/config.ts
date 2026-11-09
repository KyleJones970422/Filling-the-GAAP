/**
 * Site-wide settings. Edit these in one place and every page updates.
 */
export const site = {
  name: 'Filling the GAAP',
  shortName: 'FTGAAP',
  url: 'https://www.ftgaap.co.za',
  tagline: 'Accounting and tax that closes the gap between where your finances are and where they should be.',
  description:
    'Remote South African accounting and tax practice: personal tax, business accounting, payroll, VAT, CIPC and independent reviews, plus free software for clients.',
  owner: 'John Knight',
  email: 'john@ftgaap.co.za',
  phoneDisplay: '081 285 7843',
  phoneIntl: '+27812857843',
  whatsapp: '27812857843',
  whatsappDisplay: '081 285 7843',
  /** The FTG Books accounting software website. */
  ftgBooksUrl: 'https://www.ftgbooks.co.za',
  /** The Practice Nexus document management portal. */
  practiceNexusUrl: 'https://www.practicenexus.co.za',
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
   * The team shown on the About page. Photo is a path under /public (e.g. '/john.jpg');
   * leave it empty to show initials. Add, remove or reorder people here.
   */
  team: [
    {
      name: 'John Knight',
      initials: 'JK',
      role: 'Director',
      credentials: ['Professional Accountant (SA)', 'Professional Tax Practitioner (SA)', 'Independent Reviewer (SA)'],
      photo: '',
      bio: "John is a finance executive with more than 30 years' experience across Southern and Sub-Saharan Africa, most of it in hotels and hospitality. He has run finance on both sides of the table: as financial controller for operators, and as asset manager and owner's representative for investors. He has supported hotel openings in Nigeria, Sharjah, St Helena, Tanzania, Rwanda and Zambia, and specialises in USALI hotel reporting, multi-property consolidation, feasibility modelling and statutory compliance. John is based in Port Elizabeth and works with clients in English and Afrikaans.",
      /** Past and current roles, most recent first. Shown as a list under the bio; leave empty to hide it. */
      career: [
        'Director, JK Hospitality Consulting',
        'Group Financial Manager, Indalo Hotels & Leisure',
        'Financial Controller and Asset Manager, Valor Hospitality Partners',
        'Financial Controller, Finance and Support (Africa), Mantis Developments',
        'General Manager, Lake Pleasant Living',
        'Financial Controller, Radisson Blu Hotel, Port Elizabeth',
      ],
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
    { title: 'Fixed fees, in writing', text: 'A written quote before any work starts. No hourly billing on regular work and no surprise invoices.' },
    { title: 'Month to month', text: 'No lock-in contracts. One month\'s notice if you ever want to leave, with a proper handover.' },
    { title: 'Reply within one business day', text: 'Email, WhatsApp or phone. You deal with the people who do your work, not a call centre.' },
    { title: 'Free switch', text: 'Moving from another accountant? We move your data from your old accounting system to the new one at no charge. Historical catch-up is billed per hour at a reduced rate.' },
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
