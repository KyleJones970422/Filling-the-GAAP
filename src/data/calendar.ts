/**
 * Recurring South African tax and compliance deadlines.
 * Dates are the standard rules; SARS and CIPC may announce changes, which are flagged on the page.
 */
export type Deadline = { when: string; what: string; who: string; detail?: string; category: 'SARS' | 'CIPC' | 'Payroll' | 'VAT' };

export const monthly: Deadline[] = [
  { when: '7th of every month', what: 'EMP201 submission and PAYE, UIF and SDL payment', who: 'All employers', category: 'Payroll', detail: 'If the 7th falls on a weekend or public holiday, the deadline moves to the last business day before it.' },
  { when: '25th of every month', what: 'VAT201 return and payment (manual filers)', who: 'VAT vendors not using eFiling', category: 'VAT' },
  { when: 'Last business day of the month', what: 'VAT201 return and payment (eFiling)', who: 'VAT vendors on eFiling, for the preceding tax period', category: 'VAT', detail: 'Category A vendors file for periods ending January, March, May, July, September and November. Category B for the alternate months. Category C file monthly.' },
  { when: 'Last day of the following month', what: 'Dividends tax return (DTR01/DTR02) and payment', who: 'Companies that declared a dividend', category: 'SARS' },
  { when: 'Last business day of the following month', what: 'Withholding tax on interest and royalties', who: 'Payers of interest or royalties to non-residents', category: 'SARS' },
];

export const annual: Deadline[] = [
  { when: '31 May', what: 'Annual EMP501 employer reconciliation', who: 'All employers, for the tax year ended 28/29 February', category: 'Payroll', detail: 'IRP5 and IT3(a) certificates are issued to employees from this submission.' },
  { when: '1 to 12 July', what: 'SARS issues auto-assessments', who: 'Individuals with simple tax affairs', category: 'SARS', detail: '2026 season: 1 to 12 July 2026. Check your auto-assessment before accepting it; it does not include deductions SARS cannot see.' },
  { when: '13 July', what: 'Individual filing season opens', who: 'Individuals and provisional taxpayers', category: 'SARS', detail: '2026 season opened on 13 July 2026. Trusts opened on 19 September 2026.' },
  { when: '31 August', what: 'First provisional tax payment (IRP6)', who: 'Provisional taxpayers with a February year end', category: 'SARS', detail: 'Based on at least the basic amount or a reasonable estimate of the full year taxable income.' },
  { when: '30 September', what: 'Voluntary third provisional (top-up) payment', who: 'Provisional taxpayers with a February year end', category: 'SARS', detail: 'Avoids interest on any shortfall for the previous tax year.' },
  { when: 'Late October', what: 'Filing season closes for non-provisional individuals', who: 'Individuals who are not provisional taxpayers', category: 'SARS', detail: '2026 season closed on 23 October 2026. Returns filed after this date attract monthly administrative penalties.' },
  { when: '31 October', what: 'Interim EMP501 reconciliation', who: 'All employers, for March to August', category: 'Payroll' },
  { when: 'Late January', what: 'Filing season closes for provisional taxpayers and trusts', who: 'Provisional taxpayers and trusts (ITR12 and ITR12T)', category: 'SARS', detail: '2026 season closes on 22 January 2027.' },
  { when: '28 or 29 February', what: 'Second provisional tax payment (IRP6)', who: 'Provisional taxpayers with a February year end', category: 'SARS', detail: 'To avoid underestimation penalties, your estimate must be at least 80% of actual taxable income if that income is above R1 million. At R1 million or below, it must be at least 90% of actual taxable income or the basic amount, whichever is lower.' },
  { when: '28 or 29 February', what: 'End of the tax year for individuals and most companies', who: 'Everyone', category: 'SARS' },
  { when: '12 months after financial year end', what: 'Company income tax return (ITR14)', who: 'All companies, including dormant ones', category: 'SARS', detail: 'Companies with a non-February year end have provisional payments six months into the year and at year end.' },
  { when: '30 business days after your incorporation anniversary', what: 'CIPC annual return and beneficial ownership declaration', who: 'All companies and close corporations', category: 'CIPC', detail: 'Annual financial statements or a Financial Accountability Supplement are filed with the return. Late filing attracts penalties and eventual deregistration.' },
  { when: 'Within 6 months of financial year end', what: 'Annual financial statements approved by the board', who: 'All companies', category: 'CIPC', detail: 'Companies Act section 30. Audited or independently reviewed where required.' },
  { when: '31 March (COIDA)', what: 'Return of Earnings (W.As.8)', who: 'All employers', category: 'Payroll', detail: 'Submitted to the Compensation Fund; the window is often extended, confirm each year.' },
];
