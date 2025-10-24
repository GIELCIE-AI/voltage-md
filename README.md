# voltage-md
New multi-language WhatsApp bot 2025


<img src="https://camo.githubusercontent.com/381a7074551bb010da01518b5b508e6654ba7f45ffafa00e314c293c00be9229/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d3f666f6e743d526f636b737461722d4578747261426f6c6426636f6c6f723d626c7565266c696e65733d2545322539362541302b2545322539362541302b2545322539362541302b2545322539362541302b2545322539362541302b2545322538342539392546302539442539352538332546302539442539342542432546302539442539342542382546302539442539352538412546302539442539342542432b2546302539442539342542442546302539442539352538362545322538342539442546302539442539352538322b2546302539442539352538422545322538342538442546302539442539342542432b254532253834253944254630253944253934254243254532253834253939254630253944253935253836" alt="Typing SVG" data-canonical-src="https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&amp;color=blue&amp;lines=%E2%96%A0+%E2%96%A0+%E2%96%A0+%E2%96%A0+%E2%96%A0+%E2%84%99%F0%9D%95%83%F0%9D%94%BC%F0%9D%94%B8%F0%9D%95%8A%F0%9D%94%BC+%F0%9D%94%BD%F0%9D%95%86%E2%84%9D%F0%9D%95%82+%F0%9D%95%8B%E2%84%8D%F0%9D%94%BC+%E2%84%9D%F0%9D%94%BC%E2%84%99%F0%9D%95%86" style="max-width: 100%;">
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" role="img" aria-label="Voltage MD logo">
  <defs>
    <!-- glow filter -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- inner shadow for depth -->
    <filter id="inset" x="-20%" y="-20%" width="140%" height="140%">
      <feOffset dx="0" dy="4" result="off"/>
      <feGaussianBlur in="off" stdDeviation="6" result="blur"/>
      <feComposite in="blur" in2="SourceAlpha" operator="out" result="comp"/>
      <feColorMatrix in="comp" type="matrix"
        values="0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 .6 0" result="shadow"/>
      <feComposite in="shadow" in2="SourceGraphic" operator="over"/>
    </filter>

    <!-- diagonal hazard stripes pattern -->
    <pattern id="stripes" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(25)">
      <rect width="60" height="60" fill="#111"/>
      <rect x="0" y="0" width="30" height="60" fill="#f2c94c"/>
    </pattern>

    <!-- lightning shape as symbol -->
    <g id="bolt">
      <path d="M48 0 L18 34 L40 38 L8 96 L68 44 L44 40 Z" fill="#fff"/>
    </g>

    <!-- gradient for text -->
    <linearGradient id="neonGrad" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#ffef00"/>
      <stop offset="0.4" stop-color="#ff6a00"/>
      <stop offset="1" stop-color="#ff00d4"/>
    </linearGradient>

    <!-- subtle noise texture (small, keeps safe file size) -->
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feBlend mode="overlay"/>
    </filter>

    <!-- clip circle to make DP rounder when needed -->
    <clipPath id="round">
      <circle cx="512" cy="512" r="480"/>
    </clipPath>
  </defs>

  <!-- background panel -->
  <g clip-path="url(#round)">
    <rect width="100%" height="100%" fill="#05060a"/>

    <!-- vignette / radial glow center -->
    <radialGradient id="centerGlow" cx="50%" cy="44%" r="60%">
      <stop offset="0" stop-color="#0b1220" stop-opacity="0.0"/>
      <stop offset="0.35" stop-color="#071226" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#03040a" stop-opacity="0.9"/>
    </radialGradient>
    <rect width="100%" height="100%" fill="url(#centerGlow)"/>

    <!-- hazard frame -->
    <g filter="url(#inset)">
      <rect x="56" y="56" width="912" height="912" rx="60" ry="60" fill="url(#stripes)"/>
      <!-- frame overlay to darken edges -->
      <rect x="56" y="56" width="912" height="912" rx="60" ry="60" fill="black" opacity="0.15"/>
      <!-- inner black panel -->
      <rect x="96" y="96" width="832" height="832" rx="44" ry="44" fill="#071024"/>
    </g>

    <!-- decorative corner bolts (left-top, right-bottom) -->
    <g transform="translate(160,160) scale(1.8)">
      <use href="#bolt" transform="scale(3) rotate(-10)" fill="#ffd54a" stroke="#ffc400" stroke-width="2" filter="url(#glow)"/>
    </g>
    <g transform="translate(720,680) scale(1.8)">
      <use href="#bolt" transform="scale(3) rotate(170)" fill="#ffd54a" stroke="#ffc400" stroke-width="2" filter="url(#glow)"/>
    </g>

    <!-- center emblem: a rounded panel with a subtle tech grid -->
    <g transform="translate(512,420)">
      <!-- outer ring -->
      <circle r="260" fill="#070a12" stroke="rgba(255,110,0,0.12)" stroke-width="6"/>
      <!-- inner subtle ring -->
      <circle r="200" fill="url(#centerGlow)" opacity="0.06"/>

      <!-- electric arcs / stylized lightning behind text -->
      <g transform="translate(-140,-20) scale(1.6)">
        <path d="M40 60 L92 12 L72 80 L128 54 L80 126 L100 76 L40 60 Z"
              fill="none" stroke="#ffec6b" stroke-width="8" stroke-linejoin="round" stroke-linecap="round" opacity="0.95" filter="url(#glow)"/>
        <path d="M220 20 L260 74 L238 84 L292 140" fill="none" stroke="#ff6a00" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" opacity="0.9" filter="url(#glow)"/>
      </g>
    </g>

    <!-- main text: Voltage MD -->
    <g transform="translate(512,520)" text-anchor="middle" filter="url(#glow)">
      <!-- shadow / edge for boldness -->
      <text x="0" y="-6" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="120" fill="#000" opacity="0.45">
        Voltage
      </text>
      <text x="0" y="-6" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="120" fill="url(#neonGrad)" letter-spacing="2">
        Voltage
      </text>

      <!-- MD smaller with dangerous stroke -->
      <text x="0" y="90" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="68" fill="#fff" stroke="#ff3b00" stroke-width="2.5" letter-spacing="6">
        MD
      </text>

      <!-- electric sparks around text -->
      <g transform="translate(-220,-50) scale(0.9)" opacity="0.95">
        <use href="#bolt" transform="scale(2.2) rotate(-20)" fill="#fff" stroke="#ffde59" stroke-width="2" filter="url(#glow)"/>
      </g>
      <g transform="translate(260,-20) scale(1.1)">
        <use href="#bolt" transform="scale(1.8) rotate(35)" fill="#fff" stroke="#ffde59" stroke-width="2" filter="url(#glow)"/>
      </g>
    </g>

    <!-- danger marker: small triangle with exclamation -->
    <g transform="translate(512,250)">
      <polygon points="0,-86 74,60 -74,60" fill="#ffca28" stroke="#ff9800" stroke-width="4" filter="url(#glow)"/>
      <text x="0" y="-8" font-family="Arial, sans-serif" font-weight="800" font-size="70" text-anchor="middle" fill="#3b2e00">!</text>
    </g>

    <!-- subtle circuit-like lines -->
    <g stroke="#0b3a3f" stroke-opacity="0.25" stroke-width="3" fill="none">
      <path d="M180 540 C260 500 360 520 444 492" />
      <path d="M860 480 C780 520 680 500 596 528" />
    </g>

    <!-- small caption under center -->
    <g transform="translate(512,760)" text-anchor="middle">
      <text font-family="Segoe UI, Roboto, Arial" font-size="28" fill="#98a2b3" opacity="0.95">Dangerous voltage — handle with care</text>
    </g>

    <!-- optional noise overlay for grit -->
    <rect width="100%" height="100%" fill="transparent" filter="url(#noise)" opacity="0.02"/>
  </g>
</svg>

                                                                                                                                                                                                                            
