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
    name: 'Starter',
    price: 'R2,250',
    period: 'per month',
    tagline: 'For new and micro businesses that need the basics done properly.',
    features: ['Monthly bookkeeping (up to 60 transactions)', 'Bank reconciliations', 'VAT201 returns if registered', 'Annual financial statements', 'Company income tax return (ITR14)', 'Provisional tax (IRP6)', 'Free FTG Books subscription'],
  },
  {
    name: 'Growth',
    price: 'R4,950',
    period: 'per month',
    tagline: 'For established small businesses with staff and regular reporting needs.',
    features: ['Everything in Starter', 'Up to 200 transactions a month', 'Payroll for up to 5 employees (EMP201, EMP501, IRP5s)', 'Quarterly management accounts', 'CIPC annual return and beneficial ownership filing', 'Tax planning review once a year'],
    highlight: true,
  },
  {
    name: 'Established',
    price: 'R9,500',
    period: 'per month',
    tagline: 'For growing companies that want a finance function without the headcount.',
    features: ['Everything in Growth', 'Unlimited transactions', 'Payroll for up to 20 employees', 'Monthly management accounts and cash flow forecast', 'Independent review of annual financial statements', 'Quarterly strategy meeting', 'Priority response'],
  },
];

export const onceOff: { service: string; price: string; note?: string }[] = [
  { service: 'Company registration (CIPC)', price: 'from R1,450', note: 'Includes name reservation, registration, share certificates and SARS income tax registration. CIPC fees included.' },
  { service: 'Annual financial statements (compilation)', price: 'from R4,500', note: 'Depends on size, complexity and the state of the underlying records.' },
  { service: 'Independent review (ISRE 2400)', price: 'from R8,500', note: 'For companies with a public interest score below 350 that are not owner-managed or have a PI score of 100 or more.' },
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
