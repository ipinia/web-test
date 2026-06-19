/**
 * screenshot.mjs — Screenshot tool for La Palapa Cabo Pulmo
 * Usage:
 *   node screenshot.mjs http://localhost:3000
 *   node screenshot.mjs http://localhost:3000 label
 *
 * Saves to ./temporary screenshots/screenshot-N.png (auto-incremented, never overwritten)
 * With label: ./temporary screenshots/screenshot-N-label.png
 */

import puppeteer from 'puppeteer';
import { mkdirSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const screenshotsDir = join(__dirname, 'temporary screenshots');

mkdirSync(screenshotsDir, { recursive: true });

const [,, url = 'http://localhost:3000', label] = process.argv;

// Auto-increment filename
const existing = readdirSync(screenshotsDir).filter(f => /^screenshot-\d+/.test(f) && f.endsWith('.png'));
const numbers = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] ?? '0')).filter(n => !isNaN(n));
const next = numbers.length ? Math.max(...numbers) + 1 : 1;
const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outputPath = join(screenshotsDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });

// Force all scroll-reveal elements to their visible end-state immediately
// (IntersectionObserver doesn't fire reliably in headless full-page screenshots)
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.transition = 'none';
    el.classList.add('visible');
  });
});
// Allow one frame for style recalc
await new Promise(r => setTimeout(r, 200));

await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outputPath}`);
