export type Service = { title: string; blurb: string; details?: string[] };

export const individualServices: Service[] = [
  { title: 'Personal income tax returns (ITR12)', blurb: 'Accurate, on-time returns that claim every deduction you are entitled to, including salaried employees, commission earners and multiple-income households.', details: ['Review of your SARS auto-assessment before you accept it', 'Medical, retirement annuity, travel and home-office deductions', 'Multiple IRP5s and additional income', 'Submission via eFiling and follow-up on assessments and refunds'] },
  { title: 'Provisional tax (IRP6)', blurb: 'Estimates and submissions for freelancers, sole traders, directors and anyone with income that is not fully taxed at source.', details: ['First, second and voluntary third payment calculations', 'Penalty-avoidance planning around the 80% / 90% accuracy rules', 'Cash-flow planning so the February payment never surprises you'] },
  { title: 'SARS eFiling registration and profile help', blurb: 'Getting registered, recovering access, fixing profile and banking detail issues, and sorting out registered representative problems.' },
  { title: 'Tax clearance and compliance status', blurb: 'Tax Compliance Status (TCS) PINs for tenders, emigration, foreign investment allowance and good standing, with the underlying compliance issues resolved first.' },
  { title: 'SARS disputes, objections and appeals', blurb: 'Requests for correction, notices of objection, appeals and suspension of payment, presented properly and tracked to resolution.' },
  { title: 'Capital gains tax', blurb: 'Disposals of property, shares, crypto assets and businesses, including primary residence exclusions and base-cost reconstruction.' },
  { title: 'Rental income', blurb: 'Correct treatment of rental income and expenses, bond interest, levies, repairs versus improvements, and losses ring-fenced under section 20A.' },
  { title: 'Foreign income and expatriate tax', blurb: 'The R1.25 million foreign employment exemption, double tax agreements, tax residency and ceasing residency, and foreign tax credits.' },
  { title: 'Tax directives', blurb: 'Applications for lump-sum, severance and fixed-percentage directives for commission earners and independent contractors.' },
  { title: 'Estates and deceased estates', blurb: 'Pre- and post-date-of-death returns, executor support and estate duty considerations handled with care.' },
  { title: 'Retirement and investment tax advice', blurb: 'How retirement annuities, tax-free savings, endowments and the two-pot system affect your tax position, explained in plain language.' },
];

export const businessServices: Service[] = [
  { title: 'Monthly bookkeeping', blurb: 'Clean, reconciled books every month in FTG Books, Xero, Sage or QuickBooks, so you always know where you stand.' },
  { title: 'Management accounts', blurb: 'Monthly or quarterly reports that explain what happened and what to do about it, not just a printout from the system.' },
  { title: 'Annual financial statements', blurb: 'IFRS for SMEs or IFRS compliant AFS, compiled independently so you meet Companies Act requirements and lender expectations.' },
  { title: 'Independent reviews and compilations', blurb: 'As an Independent Reviewer (SA), I perform ISRE 2400 independent reviews for companies that do not require an audit, and compilation engagements under ISRS 4410.' },
  { title: 'Company income tax (ITR14)', blurb: 'Tax computations, deferred tax, assessed losses, section 12 allowances and submission of your ITR14 and supporting schedules.' },
  { title: 'VAT registration and VAT201 returns', blurb: 'Voluntary and compulsory VAT registration, bi-monthly or monthly returns, apportionment, and SARS VAT verifications.' },
  { title: 'Payroll, PAYE, UIF and SDL', blurb: 'Monthly payslips, EMP201 submissions, bi-annual EMP501 reconciliations, IRP5 and IT3(a) certificates, UIF declarations and COIDA returns.' },
  { title: 'CIPC company registration and annual returns', blurb: 'New company registrations, name reservations, director changes, annual returns and beneficial ownership filings, so your company stays in good standing.' },
  { title: 'Beneficial ownership filings', blurb: 'CIPC beneficial ownership declarations and securities register updates, now required with every annual return.' },
  { title: 'B-BBEE affidavits', blurb: 'Sworn affidavits for Exempted Micro Enterprises and qualifying start-ups, with turnover confirmation from your financial statements.' },
  { title: 'Business tax planning', blurb: 'Structuring, remuneration planning, small business corporation status, turnover tax eligibility and timing of expenditure to legally minimise tax.' },
  { title: 'Budgeting and cash flow forecasting', blurb: 'Rolling 12-month forecasts, scenario planning and funding readiness for banks and investors.' },
  { title: 'Accounting software setup and training', blurb: 'Implementation, migration and training on FTG Books, Xero, Sage and QuickBooks so your team captures data correctly from day one.' },
  { title: 'CFO as a service', blurb: 'Senior financial leadership on a part-time basis: board packs, KPI dashboards, pricing decisions and growth strategy without a full-time salary.' },
];

export const clientTypes = [
  { title: 'Salaried individuals', text: 'Employees with one or more IRP5s, medical aid, retirement annuities, travel allowances or side income.' },
  { title: 'Freelancers and sole traders', text: 'Provisional taxpayers who need their income and expenses handled correctly and their payments planned.' },
  { title: 'Start-ups and small businesses', text: 'Owner-managed companies that want clean books, compliant filings and a partner who speaks plainly.' },
  { title: 'Companies and trusts', text: 'Private companies, family and business trusts with annual financial statement, IT12T and compliance requirements.' },
  { title: 'NPOs and body corporates', text: 'Non-profit companies, PBOs and sectional title schemes needing independent reviews, AFS and tax exemption support.' },
  { title: 'Accounting practices', text: 'Fellow practitioners who use FTG Review to run efficient, well-documented independent review engagements.' },
];

export const software = ['FTG Books', 'Xero', 'Sage', 'QuickBooks', 'SimplePay', 'Draftworx'];
