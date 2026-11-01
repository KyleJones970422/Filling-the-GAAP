// Generates public/og.png and public/apple-touch-icon.png from HTML/SVG using the bundled Chromium.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(__dirname, 'og-image.html'));
  await page.waitForTimeout(1500); // fonts
  await page.screenshot({ path: path.resolve(__dirname, '../public/og.png') });
  const icon = await browser.newPage({ viewport: { width: 180, height: 180 } });
  await icon.setContent(`<body style="margin:0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="180" height="180"><rect width="64" height="64" fill="#173B2E"/><rect x="13" y="13" width="12" height="38" rx="2.5" fill="#F5F5EF"/><rect x="39" y="13" width="12" height="38" rx="2.5" fill="#F5F5EF"/><rect x="25" y="31" width="14" height="20" fill="#C46745"/><rect x="25" y="27" width="14" height="4" rx="1" fill="#C4D9AF" opacity="0.9"/></svg></body>`);
  await icon.screenshot({ path: path.resolve(__dirname, '../public/apple-touch-icon.png') });
  await browser.close();
  console.log('images written');
})();
