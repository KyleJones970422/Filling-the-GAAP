/**
 * Indicative, market-related pricing. All amounts in ZAR.
 * Edit freely. Every price is shown as "from" and is confirmed after the free consultation.
 */
export type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
  cta?: string;
};

export const personalPlans: Plan[] = [
  {
    name: 'Simple return',
    price: 'R850',
    period: 'per return',
    tagline: 'One IRP5, standard deductions, no provisional tax.',
    features: ['Review of your auto-assessment', 'Medical aid and retirement annuity deductions', 'eFiling submission', 'Assessment check and refund follow-up'],
  },
  {
    name: 'Standard return',
    price: 'R1,650',
    period: 'per return',
    tagline: 'Multiple income sources, investments or a travel allowance.',
    features: ['Everything in Simple', 'Multiple IRP5s and IT3 certificates', 'Travel logbook and allowance claims', 'Capital gains on shares or unit trusts', 'Rental income (one property)'],
    highlight: true,
  },
  {
    name: 'Provisional taxpayer',
    price: 'R3,950',
    period: 'per tax year',
    tagline: 'Freelancers, sole traders and anyone paying provisional tax.',
    features: ['Two IRP6 provisional returns', 'Annual ITR12 with income statement', 'Expense review and home-office claims', 'Quarterly check-ins on your tax position', 'Free FTG Books subscription'],
  },
];

export const businessPlans: Plan[] = [
  {
    name: 'Compliance',
    price: 'R1,450',
    period: 'per month',
    tagline: 'Turnover under R1 million. You keep your own books in FTG Books; I handle every filing.',
    features: ['Annual financial statements', 'Company income tax return (ITR14)', 'Provisional tax (IRP6), twice a year', 'CIPC annual return and beneficial ownership filing', 'Quarterly check of your books', 'Free FTG Books subscription'],
  },
  {
    name: 'Starter',
    price: 'R2,450',
    period: 'per month',
    tagline: 'Turnover under R1 million. The books done for you, plus all compliance.',
    features: ['Everything in Compliance', 'Monthly bookkeeping and bank reconciliations', 'VAT201 returns if registered', 'Annual tax planning review', 'WhatsApp access for quick questions'],
  },
  {
    name: 'Growth',
    price: 'R4,950',
    period: 'per month',
    tagline: 'Turnover R1 million to R5 million. Staff, VAT and regular reporting.',
    features: ['Everything in Starter', 'Payroll for up to 5 employees (EMP201, EMP501, IRP5s)', 'Quarterly management accounts', 'Cash flow forecast updated quarterly', 'Half-yearly review meeting'],
    highlight: true,
  },
  {
    name: 'Established',
    price: 'R9,500',
    period: 'per month',
    tagline: 'Turnover R5 million and up. A finance function without the headcount.',
    features: ['Everything in Growth', 'Payroll for up to 20 employees', 'Monthly management accounts and cash flow forecast', 'Independent review of annual financial statements', 'Quarterly strategy meeting', 'Priority response'],
  },
];

export type OnceOff = { service: string; price: string; note?: string };

/** The four services people search for most. Shown first on the pricing page. */
export const mostRequested: OnceOff[] = [
  { service: 'Company registration (CIPC)', price: 'from R1,450', note: 'Name reservation, registration, share certificates and SARS income tax registration. CIPC fees included.' },
  { service: 'Personal tax return (ITR12)', price: 'from R850', note: 'See the personal tax packages above for what each level includes.' },
  { service: 'Annual financial statements (compilation)', price: 'from R4,500', note: 'Depends on size, complexity and the state of the underlying records.' },
  { service: 'Independent review (ISRE 2400)', price: 'from R8,500', note: 'For companies with a public interest score below 350 that are not owner-managed or have a PI score of 100 or more.' },
];

export const onceOff: OnceOff[] = [
  { service: 'VAT registration', price: 'from R1,850' },
  { service: 'PAYE / UIF / SDL registration', price: 'from R1,250' },
  { service: 'CIPC annual return and beneficial ownership', price: 'from R650', note: 'Plus CIPC fee.' },
  { service: 'Tax clearance (TCS PIN)', price: 'from R650', note: 'Assuming your profile is compliant. Remediation quoted separately.' },
  { service: 'SARS objection or appeal', price: 'from R1,950' },
  { service: 'Payroll only', price: 'from R120 per employee per month', note: 'Minimum R550 per month. Includes EMP201 and bi-annual EMP501.' },
  { service: 'Trust annual financial statements and IT12T', price: 'from R5,500' },
  { service: 'B-BBEE affidavit', price: 'from R450', note: 'Free for retainer clients.' },
  { service: 'Accounting software setup and training', price: 'from R2,500' },
];
