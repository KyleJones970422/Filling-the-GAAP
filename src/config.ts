/**
 * Site-wide settings. Edit these in one place and every page updates.
 */
export const site = {
  name: 'Filling the GAAP',
  shortName: 'FTGAAP',
  url: 'https://www.ftgaap.co.za',
  tagline: 'Accounting and tax that closes the gap between where your finances are and where they should be.',
  description:
    'Filling the GAAP is a remote South African accounting and tax practice run by a Professional Accountant (SA), Professional Tax Practitioner (SA) and Independent Reviewer (SA). Personal tax, business accounting, payroll, VAT, CIPC and independent reviews, plus free accounting software for clients.',
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
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
  },
  /** The tax year the calculator defaults to. Tables live in src/data/tax-tables.ts */
  defaultTaxYear: 2026,
};

export const whatsappLink = (text = 'Hi Kyle, I found you via ftgaap.co.za and would like to chat about my accounting and tax needs.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: 'Services', href: '/services', children: [
    { label: 'For individuals', href: '/services/individuals' },
    { label: 'For businesses', href: '/services/businesses' },
    { label: 'Pricing', href: '/pricing' },
  ]},
  { label: 'Solutions', href: '/solutions', children: [
    { label: 'FTG Books', href: '/solutions/ftg-books' },
    { label: 'FTG Review', href: '/solutions/ftg-review' },
    { label: 'Custom development', href: '/solutions/custom-development' },
  ]},
  { label: 'Tools', href: '/tools', children: [
    { label: 'Income tax calculator', href: '/tools/income-tax-calculator' },
    { label: 'PI score calculator', href: '/tools/pi-score-calculator' },
    { label: 'Tax calendar', href: '/resources/tax-calendar' },
  ]},
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
