// Verifies every internal link in dist/ resolves to a built file.
const fs = require('fs'); const path = require('path');
const dist = path.resolve(__dirname, '../dist');
const files = []; (function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(dist);
const exists = (href) => {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return fs.existsSync(path.join(dist, 'index.html'));
  const base = path.join(dist, clean);
  return fs.existsSync(base) || fs.existsSync(base + '.html') || fs.existsSync(path.join(base, 'index.html'));
};
let bad = 0;
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (!exists(m[1])) { bad++; console.log(path.relative(dist, f), '->', m[1]); }
  }
}
console.log(bad ? `${bad} broken internal links` : `All internal links OK across ${files.length} pages`);
process.exit(bad ? 1 : 0);
