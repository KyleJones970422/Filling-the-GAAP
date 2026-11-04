// Screenshots key pages at desktop and mobile widths for visual review (not part of the build).
const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
const { spawn } = require('child_process');
const out = process.argv[2] || path.resolve(__dirname, '../.screens');
fs.mkdirSync(out, { recursive: true });
(async () => {
  const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { cwd: path.resolve(__dirname, '..'), stdio: 'ignore' });
  await new Promise((r) => setTimeout(r, 4000));
  const browser = await chromium.launch();
  const pages = ['/', '/services/businesses', '/solutions/ftg-books', '/pricing', '/tools/pi-score-calculator', '/tools/income-tax-calculator', '/contact', '/resources/provisional-tax-explained', '/about', '/resources/tax-calendar'];
  for (const [name, vp] of [['desktop', { width: 1366, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const p of pages) {
      await page.goto('http://localhost:4321' + p, { waitUntil: 'networkidle' });
      await page.screenshot({ path: path.join(out, `${name}-${p.replace(/\//g, '_') || 'home'}.png`), fullPage: true });
    }
    await ctx.close();
  }
  await browser.close(); server.kill();
  console.log('screenshots in', out);
})();
