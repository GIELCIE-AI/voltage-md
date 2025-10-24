# voltage-md
New multi-language WhatsApp bot 2025


<img src="https://camo.githubusercontent.com/381a7074551bb010da01518b5b508e6654ba7f45ffafa00e314c293c00be9229/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d3f666f6e743d526f636b737461722d4578747261426f6c6426636f6c6f723d626c7565266c696e65733d2545322539362541302b2545322539362541302b2545322539362541302b2545322539362541302b2545322539362541302b2545322538342539392546302539442539352538332546302539442539342542432546302539442539342542382546302539442539352538412546302539442539342542432b2546302539442539342542442546302539442539352538362545322538342539442546302539442539352538322b2546302539442539352538422545322538342538442546302539442539342542432b254532253834253944254630253944253934254243254532253834253939254630253944253935253836" alt="Typing SVG" data-canonical-src="https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&amp;color=blue&amp;lines=%E2%96%A0+%E2%96%A0+%E2%96%A0+%E2%96%A0+%E2%96%A0+%E2%84%99%F0%9D%95%83%F0%9D%94%BC%F0%9D%94%B8%F0%9D%95%8A%F0%9D%94%BC+%F0%9D%94%BD%F0%9D%95%86%E2%84%9D%F0%9D%95%82+%F0%9D%95%8B%E2%84%8D%F0%9D%94%BC+%E2%84%9D%F0%9D%94%BC%E2%84%99%F0%9D%95%86" style="max-width: 100%;">
// neon-banner.js
// Small, dependency-light neon-style animated banner for Node terminals.
// Usage: require('./neon-banner').showBanner('Voltage MD', { font: 'Big', duration: 2500 });

const figlet = require('figlet');

function hslToRgb(h, s, l) {
  // h in [0,360], s,l in [0,1]
  s = Math.max(0, Math.min(1, s));
  l = Math.max(0, Math.min(1, l));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hh = h / 60;
  const x = c * (1 - Math.abs((hh % 2) - 1));
  let r = 0, g = 0, b = 0;
  if (hh >= 0 && hh < 1) { r = c; g = x; b = 0; }
  else if (hh >= 1 && hh < 2) { r = x; g = c; b = 0; }
  else if (hh >= 2 && hh < 3) { r = 0; g = c; b = x; }
  else if (hh >= 3 && hh < 4) { r = 0; g = x; b = c; }
  else if (hh >= 4 && hh < 5) { r = x; g = 0; b = c; }
  else if (hh >= 5 && hh < 6) { r = c; g = 0; b = x; }
  const m = l - c / 2;
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return { r, g, b };
}

function rgbToAnsi(r, g, b, text) {
  // 24-bit color escape
  return `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;
}

function colorizeAscii(asciiStr, offset) {
  // color each character based on its index + offset to create a moving gradient
  let out = '';
  const lines = asciiStr.split('\n');
  for (let y = 0; y < lines.length; y++) {
    const line = lines[y];
    for (let x = 0; x < line.length; x++) {
      const ch = line[x];
      if (ch === ' ') { out += ' '; continue; }
      // hue cycles across columns and with offset for animation
      const hue = ( (x * 8) + offset + (y * 12) ) % 360;
      // saturation and light chosen to appear "neon"
      const { r, g, b } = hslToRgb(hue, 0.95, 0.55);
      out += rgbToAnsi(r, g, b, ch);
    }
    out += '\n';
  }
  return out;
}

function showBanner(text = 'Voltage MD', opts = {}) {
  const font = opts.font || 'Big';
  const frameDelay = opts.frameDelay || 80; // ms between frames
  const duration = opts.duration || 2500; // total ms to show the animation
  const ascii = figlet.textSync(text, { font });
  let offset = 0;
  const start = Date.now();

  // animation interval
  const id = setInterval(() => {
    // clear screen
    process.stdout.write('\x1b[2J\x1b[0f'); // clear & reset cursor
    // print colorized ascii
    process.stdout.write(colorizeAscii(ascii, offset));
    // optional small subtitle
    const subtitle = `  ⚡ Voltage MD — bot starting...  `;
    const subColored = colorizeAscii(figlet.textSync(subtitle, { font: 'Small' }), offset + 180);
    // we place the subtitle below: (but keep it short to avoid huge output)
    process.stdout.write('\n' + subColored + '\n');
    offset = (offset + 6) % 360;
    if (Date.now() - start > duration) {
      clearInterval(id);
      // final static bright banner (keep it on terminal)
      process.stdout.write('\x1b[2J\x1b[0f');
      process.stdout.write(colorizeAscii(ascii, offset));
      process.stdout.write('\n');
    }
  }, frameDelay);
}

module.exports = { showBanner };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
