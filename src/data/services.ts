export type Service = { title: string; blurb: string; details?: string[] };
export type ServiceGroup = { title: string; intro: string; services: Service[]; id?: string };

export const individualGroups: ServiceGroup[] = [
  {
    title: 'Tax returns',
    intro: 'Annual and provisional returns done right, with every deduction you are entitled to.',
    services: [
      { title: 'Personal income tax returns (ITR12)', blurb: 'Accurate, on-time returns for salaried employees, commission earners and multiple-income households.', details: ['Review of your SARS auto-assessment before you accept it', 'Medical, retirement annuity, travel and home-office deductions', 'Multiple IRP5s and additional income', 'Submission via eFiling and follow-up on assessments and refunds'] },
      { title: 'Provisional tax (IRP6)', blurb: 'Estimates and submissions for freelancers, sole traders, directors and anyone with income not fully taxed at source.', details: ['First, second and voluntary third payment calculations', 'Penalty-avoidance planning around the 80% and 90% accuracy rules', 'Cash-flow planning so the February payment never surprises you'] },
    ],
  },
  {
    title: 'SARS problems',
    intro: 'When SARS is the problem, we deal with SARS so you do not have to.',
    services: [
      { title: 'SARS eFiling registration and profile help', blurb: 'Getting registered, recovering access, fixing profile and banking detail issues, and sorting out registered representative problems.' },
      { title: 'Tax clearance and compliance status', blurb: 'Tax Compliance Status (TCS) PINs for tenders, emigration, foreign investment allowance and good standing, with the underlying compliance issues resolved first.' },
      { title: 'Disputes, objections and appeals', blurb: 'Requests for correction, notices of objection, appeals and suspension of payment, presented properly and tracked to resolution.' },
    ],
  },
  {
    title: 'Property, investments and retirement',
    intro: 'The parts of a return where the biggest mistakes, and the biggest savings, hide.',
    services: [
      { title: 'Capital gains tax', blurb: 'Disposals of property, shares, crypto assets and businesses, including primary residence exclusions and base-cost reconstruction.' },
      { title: 'Rental income', blurb: 'Correct treatment of rental income and expenses, bond interest, levies, repairs versus improvements, and losses ring-fenced under section 20A.' },
      { title: 'Retirement and investment tax advice', blurb: 'How retirement annuities, tax-free savings, endowments and the two-pot system affect your tax position, explained in plain language.' },
    ],
  },
  {
    title: 'Foreign income and expats',
    intro: 'Specialist situations that most generalist preparers get wrong.',
    services: [
      { title: 'Foreign income and expatriate tax', blurb: 'The R1.25 million foreign employment exemption, double tax agreements, tax residency and ceasing residency, and foreign tax credits.' },
    ],
  },
];

export const businessGroups: ServiceGroup[] = [
  {
    title: 'Bookkeeping and reporting',
    intro: 'Clean books every month and reports that tell you what to do next.',
    services: [
      { title: 'Monthly bookkeeping', blurb: 'Reconciled books every month in FTG Books, Xero, Sage or QuickBooks, so you always know where you stand.' },
      { title: 'Management accounts', blurb: 'Monthly or quarterly reports that explain what happened and what to do about it, not just a printout from the system.' },
      { title: 'Budgeting and cash flow forecasting', blurb: 'Rolling 12-month forecasts, scenario planning and funding readiness for banks and investors.' },
    ],
  },
  {
    title: 'Tax and VAT',
    intro: 'Every return filed on time, and a plan to pay no more tax than the law requires.',
    services: [
      { title: 'Company income tax (ITR14)', blurb: 'Tax computations, deferred tax, assessed losses, section 12 allowances and submission of your ITR14 and supporting schedules.' },
      { title: 'VAT registration and VAT201 returns', blurb: 'Voluntary and compulsory registration (the compulsory threshold is R2.3 million from 1 April 2026), bi-monthly or monthly returns, apportionment, and SARS VAT verifications.' },
      { title: 'Business tax planning', blurb: 'Structuring, remuneration planning, small business corporation status, turnover tax eligibility and timing of expenditure to legally minimise tax.' },
    ],
  },
  {
    title: 'Payroll',
    intro: 'Staff paid correctly and SARS, UIF and the Compensation Fund kept happy.',
    services: [
      { title: 'Payroll, PAYE, UIF and SDL', blurb: 'Monthly payslips, EMP201 submissions, bi-annual EMP501 reconciliations, IRP5 and IT3(a) certificates, UIF declarations and COIDA returns.' },
    ],
  },
  {
    title: 'Company secretarial and CIPC',
    intro: 'Keeping the company itself in good standing, not just its tax.',
    services: [
      { title: 'Company registration and annual returns', blurb: 'New company registrations, name reservations, director changes and annual returns, so your company stays in good standing.' },
      { title: 'Beneficial ownership filings', blurb: 'CIPC beneficial ownership declarations and securities register updates, now required with every annual return.' },
      { title: 'B-BBEE affidavits', blurb: 'Sworn affidavits for Exempted Micro Enterprises and qualifying start-ups, with turnover confirmation from your financial statements.' },
    ],
  },
  {
    id: 'reviews',
    title: 'Financial statements and assurance',
    intro: 'Annual financial statements that meet the Companies Act, and only as much assurance as the law requires.',
    services: [
      { title: 'Annual financial statements', blurb: 'IFRS for SMEs or IFRS compliant AFS, compiled independently so you meet Companies Act requirements and lender expectations.' },
      { title: 'Independent reviews and compilations', blurb: 'Our Independent Reviewer (SA) performs ISRE 2400 independent reviews for companies that do not require an audit, and compilation engagements under ISRS 4410.' },
    ],
  },
  {
    title: 'Advisory',
    intro: 'Senior financial thinking when you need it, without the salary.',
    services: [
      { title: 'CFO as a service', blurb: 'Part-time financial leadership: board packs, KPI dashboards, pricing decisions and growth strategy without a full-time hire.' },
    ],
  },
];

export const individualServices: Service[] = individualGroups.flatMap((g) => g.services);
export const businessServices: Service[] = businessGroups.flatMap((g) => g.services);

export const clientTypes = [
  { title: 'Salaried individuals', text: 'Employees with one or more IRP5s, medical aid, retirement annuities, travel allowances or side income.' },
  { title: 'Freelancers and sole traders', text: 'Provisional taxpayers who need their income and expenses handled correctly and their payments planned.' },
  { title: 'Start-ups and small businesses', text: 'Owner-managed companies that want clean books, compliant filings and a partner who speaks plainly.' },
  { title: 'Companies and trusts', text: 'Private companies, family and business trusts with annual financial statement, ITR12T and compliance requirements.' },
  { title: 'NPOs and body corporates', text: 'Non-profit companies, PBOs and sectional title schemes needing annual financial statements and tax exemption support.' },
];

export const steps = [
  { n: '01', title: 'Free consultation', text: 'A 30-minute call to understand your situation, your deadlines and what is keeping you up at night.' },
  { n: '02', title: 'Clear fixed quote', text: 'You get a written scope and price. No surprises, and no work starts until you say go.' },
  { n: '03', title: 'Onboarding and clean-up', text: 'We collect your records, take over SARS and CIPC access, set up FTG Books and bring everything current.' },
  { n: '04', title: 'Ongoing, proactive care', text: 'Deadlines tracked, returns filed, questions answered on WhatsApp, and a real conversation about the numbers.' },
];

export const switching = [
  { title: 'Professional clearance', text: 'We write to your current accountant for clearance and your records. You do not need to have an awkward conversation.' },
  { title: 'SARS and CIPC access', text: 'You sign a power of attorney and we take over your eFiling profile and CIPC customer code.' },
  { title: 'Data move and catch-up', text: 'Your data moves from your old accounting system to the new one at no charge. Any historical catch-up is billed per hour at a reduced rate.' },
  { title: 'Steady state', text: 'From the next month-end you are on the normal rhythm: books done, returns filed, deadlines tracked.' },
];

export const software = ['FTG Books', 'Xero', 'Sage', 'QuickBooks', 'SimplePay', 'Draftworx'];
