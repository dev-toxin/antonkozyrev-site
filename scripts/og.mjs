// Generates public/og.png (1200x630) in the site's "blade" cyber-neon palette. Run: node scripts/og.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff6a00"/><stop offset=".55" stop-color="#ffb000"/><stop offset="1" stop-color="#fcee0a"/></linearGradient>
    <radialGradient id="o1" cx="0.05" cy="0" r="0.55"><stop offset="0" stop-color="#ff6a00" stop-opacity=".22"/><stop offset="1" stop-color="#ff6a00" stop-opacity="0"/></radialGradient>
    <radialGradient id="o2" cx="1" cy="1" r="0.55"><stop offset="0" stop-color="#00f0ff" stop-opacity=".16"/><stop offset="1" stop-color="#00f0ff" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#00f0ff" stroke-opacity=".09"/></pattern>
    <pattern id="scan" width="4" height="3" patternUnits="userSpaceOnUse"><rect width="4" height="1" fill="#ffffff" fill-opacity=".035"/></pattern>
    <filter id="glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="1200" height="630" fill="#04060d"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#scan)"/>
  <rect width="1200" height="630" fill="url(#o1)"/>
  <rect width="1200" height="630" fill="url(#o2)"/>
  <path d="M24 24H1176V570L1140 606H24Z" fill="none" stroke="#ff6a00" stroke-width="2" opacity=".85"/>
  <rect x="84" y="112" width="14" height="14" fill="#00f0ff" filter="url(#glow)"/>
  <text x="112" y="128" font-family="Menlo, monospace" font-size="26" fill="#00f0ff">antonkozyrev.dev</text>
  <text x="80" y="290" font-family="Helvetica Neue, Arial, sans-serif" font-weight="800" font-size="96" fill="url(#g)" filter="url(#glow)">Anton Kozyrev</text>
  <text x="80" y="370" font-family="Helvetica Neue, Arial, sans-serif" font-weight="600" font-size="40" fill="#eef4ff">Senior Flutter Developer · Go · LLM integrations</text>
  <text x="80" y="520" font-family="Menlo, monospace" font-size="26" fill="#9eaabf">› plan → diff → tests  <tspan fill="#00f0ff">✓</tspan></text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('public/og.png written');
