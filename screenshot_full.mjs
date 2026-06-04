import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
});

// Desktop 1440px — section par section
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const d = await desktop.newPage();
await d.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });

const scrolls = [
  [0,    '/tmp/d01_hero.png'],
  [920,  '/tmp/d02_probleme.png'],
  [2300, '/tmp/d03_comparateur.png'],
  [3900, '/tmp/d04_profil.png'],
  [5700, '/tmp/d05_objections.png'],
  [6800, '/tmp/d06_process.png'],
  [7600, '/tmp/d07_offres.png'],
  [9400, '/tmp/d08_contact.png'],
];

for (const [y, file] of scrolls) {
  await d.evaluate(y => window.scrollTo(0, y), y);
  await d.waitForTimeout(600);
  await d.screenshot({ path: file });
  console.log('✓', file);
}

// Mobile 390px — hero uniquement
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const m = await mobile.newPage();
await m.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
await m.screenshot({ path: '/tmp/m01_hero_mobile.png' });
await m.evaluate(() => window.scrollTo(0, 800));
await m.waitForTimeout(500);
await m.screenshot({ path: '/tmp/m02_offres_mobile.png' });
console.log('✓ mobile shots');

await browser.close();
console.log('All done.');
