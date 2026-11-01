const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1366, height: 900 } });
  const r = await p.goto('https://www.ftgbooks.co.za', { waitUntil: 'networkidle', timeout: 60000 }).catch(e => { console.log('ERR', e.message); return null; });
  console.log('status', r && r.status(), p.url());
  await p.waitForTimeout(2000);
  await p.screenshot({ path: '/home/user/Filling-the-GAAP/scripts/.ftgbooks-full.png', fullPage: true });
  await p.screenshot({ path: '/home/user/Filling-the-GAAP/scripts/.ftgbooks-top.png' });
  const data = await p.evaluate(() => {
    const colors = {}, fonts = {}, weights = {};
    const els = [...document.querySelectorAll('body *')].slice(0, 3000);
    for (const el of els) {
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      if (rect.width * rect.height < 100) continue;
      for (const prop of ['color', 'background-color', 'border-color']) {
        const v = cs[prop];
        if (!v || v === 'rgba(0, 0, 0, 0)' || v === 'transparent') continue;
        const key = prop + ' ' + v;
        colors[key] = (colors[key] || 0) + (prop === 'background-color' ? rect.width * rect.height : 1);
      }
      const f = cs.fontFamily.split(',')[0].replace(/"/g, '').trim() + ' / ' + cs.fontWeight + ' / ' + el.tagName.toLowerCase();
      fonts[f] = (fonts[f] || 0) + 1;
    }
    const rootVars = {};
    for (const sheet of document.styleSheets) { try { for (const rule of sheet.cssRules) { if (rule.selectorText === ':root' || rule.selectorText === 'html') { for (const n of rule.style) if (n.startsWith('--')) rootVars[n] = rule.style.getPropertyValue(n).trim(); } } } catch (e) {} }
    const fontLinks = [...document.querySelectorAll('link[href*="font"]')].map(l => l.href);
    const title = document.title; const h1 = document.querySelector('h1')?.innerText;
    const h1cs = document.querySelector('h1') ? getComputedStyle(document.querySelector('h1')) : null;
    const bodycs = getComputedStyle(document.body);
    return { title, h1, h1font: h1cs && { family: h1cs.fontFamily, weight: h1cs.fontWeight, size: h1cs.fontSize, color: h1cs.color }, bodyfont: { family: bodycs.fontFamily, color: bodycs.color, bg: bodycs.backgroundColor }, rootVars, fontLinks,
      colors: Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 40), fonts: Object.entries(fonts).sort((a, b) => b[1] - a[1]).slice(0, 20),
      logos: [...document.querySelectorAll('img, svg')].slice(0, 15).map(i => i.tagName === 'IMG' ? i.src : 'svg:' + (i.outerHTML.length)) };
  });
  console.log(JSON.stringify(data, null, 1));
  await b.close();
})();
