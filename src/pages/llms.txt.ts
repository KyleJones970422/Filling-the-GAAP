import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../config';

const url = (path: string) => new URL(path, site.url).href;

/**
 * A plain-text guide to the site for AI tools, following the llms.txt proposal (llmstxt.org).
 * Built from the same config and articles as the pages, so it stays in step with them.
 */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} is a fully remote practice serving individuals, companies and trusts across South Africa. Fees are fixed and quoted in writing, and the first consultation is free. Contact: ${site.email}, ${site.phoneDisplay}, ${site.hours}.`,
    '',
    '## Services',
    `- [Tax for individuals](${url('/services/individuals')}): personal income tax returns, provisional tax, SARS disputes, tax clearance, capital gains, rental and expat tax`,
    `- [Accounting and tax for businesses](${url('/services/businesses')}): bookkeeping, management accounts, annual financial statements, independent reviews, VAT, payroll, CIPC and company tax`,
    `- [Pricing](${url('/pricing')}): indicative fixed fees for every service`,
    `- [Frequently asked questions](${url('/faq')})`,
    '',
    '## Free tools',
    `- [Income tax calculator](${url('/tools/income-tax-calculator')}): annual and monthly tax using current SARS tables`,
    `- [PI score calculator](${url('/tools/pi-score-calculator')}): whether a company needs an audit, an independent review, or neither`,
    `- [Tax calendar](${url('/resources/tax-calendar')}): SARS, CIPC, VAT and payroll deadlines`,
    '',
    '## Guides',
    ...posts.map((p) => `- [${p.data.title}](${url(`/resources/${p.id}`)}): ${p.data.description}`),
    '',
    '## Software',
    `- [FTG Books](${site.ftgBooksUrl}): South African cloud accounting software, free for clients`,
    `- [Practice Nexus](${site.practiceNexusUrl}): the document portal for clients, available once you have signed up`,
    '',
    '## Contact',
    `- [Contact and free consultation](${url('/contact')})`,
    `- [About](${url('/about')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
