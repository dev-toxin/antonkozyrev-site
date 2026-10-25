// Generates public/og.png (1200x630) in the site's Cyber Neon style. Run: node scripts/og.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3d8bff"/><stop offset="1" stop-color="#a855f7"/></linearGradient>
    <radialGradient id="o1" cx="0.1" cy="0" r="0.6"><stop offset="0" stop-color="#3d8bff" stop-opacity=".55"/><stop offset="1" stop-color="#3d8bff" stop-opacity="0"/></radialGradient>
    <radialGradient id="o2" cx="1" cy="0.9" r="0.6"><stop offset="0" stop-color="#a855f7" stop-opacity=".5"/><stop offset="1" stop-color="#a855f7" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#7a6eff" stroke-opacity=".09"/></pattern>
    <filter id="glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="1200" height="630" fill="#07060f"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#o1)"/>
  <rect width="1200" height="630" fill="url(#o2)"/>
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="url(#g)" stroke-width="2" opacity=".7"/>
  <circle cx="90" cy="120" r="7" fill="#22f0d0" filter="url(#glow)"/>
  <text x="112" y="128" font-family="Menlo, monospace" font-size="26" fill="#22f0d0">antonkozyrev.dev</text>
  <text x="80" y="290" font-family="Helvetica Neue, Arial, sans-serif" font-weight="800" font-size="96" fill="url(#g)" filter="url(#glow)">Anton Kozyrev</text>
  <text x="80" y="370" font-family="Helvetica Neue, Arial, sans-serif" font-weight="600" font-size="40" fill="#ece9ff">Senior Flutter Developer · Go · LLM integrations</text>
  <text x="80" y="520" font-family="Menlo, monospace" font-size="26" fill="#a8a3c7">› plan → diff → tests  <tspan fill="#22f0d0">✓</tspan></text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('public/og.png written');
