/**
 * SARS individual income tax tables.
 * The key is the TAX YEAR (the year in which the period ends on 28/29 February).
 * 2026 = 1 March 2025 to 28 February 2026.
 * Add a new year by copying a block and updating the numbers from the Budget Speech.
 */
export type Bracket = { upTo: number | null; base: number; rate: number; from: number };
export type TaxYear = {
  label: string;
  period: string;
  brackets: Bracket[];
  rebates: { primary: number; secondary: number; tertiary: number };
  thresholds: { under65: number; from65: number; from75: number };
  medicalCredit: { firstTwo: number; additional: number }; // per month, per beneficiary
  interestExemption: { under65: number; from65: number };
  uifCeiling: number; // monthly remuneration ceiling for UIF
  notes?: string;
};

export const taxYears: Record<number, TaxYear> = {
  2027: {
    label: '2027 tax year',
    period: '1 March 2026 to 28 February 2027',
    brackets: [
      { from: 0, upTo: 245_100, base: 0, rate: 0.18 },
      { from: 245_101, upTo: 383_100, base: 44_118, rate: 0.26 },
      { from: 383_101, upTo: 530_200, base: 79_998, rate: 0.31 },
      { from: 530_201, upTo: 695_800, base: 125_599, rate: 0.36 },
      { from: 695_801, upTo: 887_000, base: 185_215, rate: 0.39 },
      { from: 887_001, upTo: 1_878_600, base: 259_783, rate: 0.41 },
      { from: 1_878_601, upTo: null, base: 666_339, rate: 0.45 },
    ],
    rebates: { primary: 17_820, secondary: 9_765, tertiary: 3_249 },
    thresholds: { under65: 99_000, from65: 153_250, from75: 171_300 },
    medicalCredit: { firstTwo: 376, additional: 254 },
    interestExemption: { under65: 23_800, from65: 34_500 },
    uifCeiling: 17_712,
    notes: 'The 2026 Budget adjusted brackets, rebates and thresholds for inflation by 3.4%, the first adjustment since the 2024 tax year.',
  },
  2026: {
    label: '2026 tax year',
    period: '1 March 2025 to 28 February 2026',
    brackets: [
      { from: 0, upTo: 237_100, base: 0, rate: 0.18 },
      { from: 237_101, upTo: 370_500, base: 42_678, rate: 0.26 },
      { from: 370_501, upTo: 512_800, base: 77_362, rate: 0.31 },
      { from: 512_801, upTo: 673_000, base: 121_475, rate: 0.36 },
      { from: 673_001, upTo: 857_900, base: 179_147, rate: 0.39 },
      { from: 857_901, upTo: 1_817_000, base: 251_258, rate: 0.41 },
      { from: 1_817_001, upTo: null, base: 644_489, rate: 0.45 },
    ],
    rebates: { primary: 17_235, secondary: 9_444, tertiary: 3_145 },
    thresholds: { under65: 95_750, from65: 148_217, from75: 165_689 },
    medicalCredit: { firstTwo: 364, additional: 246 },
    interestExemption: { under65: 23_800, from65: 34_500 },
    uifCeiling: 17_712,
    notes: 'Brackets, rebates and thresholds were not adjusted for inflation in the 2025 Budget, so they are identical to the 2025 tax year.',
  },
  2025: {
    label: '2025 tax year',
    period: '1 March 2024 to 28 February 2025',
    brackets: [
      { from: 0, upTo: 237_100, base: 0, rate: 0.18 },
      { from: 237_101, upTo: 370_500, base: 42_678, rate: 0.26 },
      { from: 370_501, upTo: 512_800, base: 77_362, rate: 0.31 },
      { from: 512_801, upTo: 673_000, base: 121_475, rate: 0.36 },
      { from: 673_001, upTo: 857_900, base: 179_147, rate: 0.39 },
      { from: 857_901, upTo: 1_817_000, base: 251_258, rate: 0.41 },
      { from: 1_817_001, upTo: null, base: 644_489, rate: 0.45 },
    ],
    rebates: { primary: 17_235, secondary: 9_444, tertiary: 3_145 },
    thresholds: { under65: 95_750, from65: 148_217, from75: 165_689 },
    medicalCredit: { firstTwo: 364, additional: 246 },
    interestExemption: { under65: 23_800, from65: 34_500 },
    uifCeiling: 17_712,
  },
};

export function calcTax(year: TaxYear, taxableIncome: number, age: number, medicalMembers: number, retirementContrib = 0) {
  // Retirement contributions deductible up to 27.5% of taxable income, capped at R350,000.
  const raCap = Math.min(taxableIncome * 0.275, 350_000);
  const raDeduction = Math.min(retirementContrib, raCap);
  const income = Math.max(0, taxableIncome - raDeduction);
  let gross = 0;
  for (const b of year.brackets) {
    if (b.upTo === null || income <= b.upTo) {
      gross = b.base + (income - (b.from === 0 ? 0 : b.from - 1)) * b.rate;
      break;
    }
  }
  let rebates = year.rebates.primary;
  if (age >= 65) rebates += year.rebates.secondary;
  if (age >= 75) rebates += year.rebates.tertiary;
  const medical = medicalMembers <= 0 ? 0 : 12 * (Math.min(medicalMembers, 2) * year.medicalCredit.firstTwo + Math.max(0, medicalMembers - 2) * year.medicalCredit.additional);
  const net = Math.max(0, gross - rebates - medical);
  const effective = income > 0 ? net / income : 0;
  const marginal = income <= 0 ? 0 : (year.brackets.find((b) => b.upTo === null || income <= b.upTo)?.rate ?? 0);
  return { income, raDeduction, gross, rebates, medical, net, effective, marginal, monthly: net / 12 };
}
