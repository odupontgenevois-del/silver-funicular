import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });

const shots = [
  { scroll: 0,    file: '/tmp/s01_hero.png' },
  { scroll: 1000, file: '/tmp/s02_probleme.png' },
  { scroll: 2400, file: '/tmp/s03_comparateur.png' },
  { scroll: 4200, file: '/tmp/s04_profil.png' },
  { scroll: 6500, file: '/tmp/s05_offres.png' },
  { scroll: 8800, file: '/tmp/s06_contact.png' },
];

for (const s of shots) {
  await page.evaluate(y => window.scrollTo(0, y), s.scroll);
  await page.waitForTimeout(700);
  await page.screenshot({ path: s.file });
  console.log('✓', s.file);
}

await browser.close();
