// Shared SVG Ornaments, Rich Archival Illustrations & Motifs for PPCL Design Suite

window.PPCLOrnaments = {
  // Intricate Victorian/Archival Corner Filigree
  cornerFiligree: (size = 64, color = '#C59B27', secondary = '#0E2B5C') => `
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2H96V8H8V96H2V2Z" fill="${color}"/>
      <path d="M12 12H78V16H16V78H12V12Z" fill="${secondary}" fill-opacity="0.8"/>
      <path d="M2 28H28V2H23V23H2V28Z" fill="${color}"/>
      <path d="M12 38C26 38 38 26 38 12" stroke="${color}" stroke-width="2.5"/>
      <path d="M16 52C36 52 52 36 52 16" stroke="${color}" stroke-width="1.6" stroke-dasharray="3 2"/>
      <circle cx="22" cy="22" r="4.5" fill="${secondary}"/>
      <circle cx="22" cy="22" r="2.2" fill="${color}"/>
      <path d="M38 22L50 12M22 38L12 50" stroke="${color}" stroke-width="1.8"/>
      <path d="M28 28L46 46" stroke="${color}" stroke-width="2"/>
      <circle cx="48" cy="48" r="3.5" fill="${color}"/>
    </svg>
  `,

  // Ornamental Archival Divider with Open Book / Quill Centerpiece
  dividerWithBook: (width = 340, color = '#C59B27', navy = '#0E2B5C') => `
    <svg width="${width}" height="24" viewBox="0 0 340 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="6" y1="12" x2="138" y2="12" stroke="${color}" stroke-width="1.8"/>
      <line x1="28" y1="16" x2="132" y2="16" stroke="${color}" stroke-width="1" stroke-opacity="0.7"/>
      <polygon points="145,12 151,6.5 157,12 151,17.5" fill="${navy}"/>
      <path d="M170 5.5C164.5 5.5 159.5 7 157.5 9V19C159.5 17 164.5 15.5 170 15.5C175.5 15.5 180.5 17 182.5 19V9C180.5 7 175.5 5.5 170 5.5Z" stroke="${color}" stroke-width="1.9" fill="none"/>
      <line x1="170" y1="6" x2="170" y2="16" stroke="${color}" stroke-width="1.6"/>
      <polygon points="183,12 189,6.5 195,12 189,17.5" fill="${navy}"/>
      <line x1="202" y1="12" x2="334" y2="12" stroke="${color}" stroke-width="1.8"/>
      <line x1="208" y1="16" x2="312" y2="16" stroke="${color}" stroke-width="1" stroke-opacity="0.7"/>
    </svg>
  `,

  // Gold Foil Preservation Seal Badge
  goldSealBadge: (size = 92) => `
    <svg width="${size}" height="${size}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="goldFoilGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FFF5C0"/>
          <stop offset="35%" stop-color="#E8C55A"/>
          <stop offset="72%" stop-color="#C59B27"/>
          <stop offset="100%" stop-color="#7E5B0B"/>
        </radialGradient>
      </defs>
      <path d="M42 95L32 118L46 111L53 120L58 97" fill="#0E2B5C"/>
      <path d="M78 95L88 118L74 111L67 120L62 97" fill="#0077C0"/>
      <circle cx="60" cy="56" r="45" fill="url(#goldFoilGrad)" stroke="#7A5809" stroke-width="1.8"/>
      <circle cx="60" cy="56" r="40" fill="none" stroke="#0E2B5C" stroke-width="1.4" stroke-dasharray="2.5 2"/>
      <circle cx="60" cy="56" r="34.5" fill="#091B3A"/>
      <circle cx="60" cy="56" r="31.5" fill="none" stroke="#E5C158" stroke-width="1"/>
      <path d="M44 52C49 49.5 55 50.5 60 53.5C65 50.5 71 49.5 76 52V67C71 64.5 65 65.5 60 68.5C55 65.5 49 64.5 44 67V52Z" fill="#FCF9F2" stroke="#E5C158" stroke-width="1.4"/>
      <line x1="60" y1="53.5" x2="60" y2="68.5" stroke="#091B3A" stroke-width="1.4"/>
      <path d="M60 47L68 35C71 38 71 43 66 47L60 52" fill="#E5C158"/>
      <circle cx="48" cy="40" r="1.8" fill="#E5C158"/>
      <circle cx="60" cy="37" r="2.4" fill="#FFF2B2"/>
      <circle cx="72" cy="40" r="1.8" fill="#E5C158"/>
      <text x="60" y="78" text-anchor="middle" fill="#E5C158" font-family="Cinzel, Georgia, serif" font-size="6.4" font-weight="700" letter-spacing="0.8">PPCL • 2026</text>
    </svg>
  `,

  // Detailed Archival Conservation Crest (Open Tome, Quill, Loupe, Brush & Laurel Wreath)
  conservationCrest: (size = 160) => `
    <svg width="${size}" height="${size}" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="crestGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFDF7"/>
          <stop offset="65%" stop-color="#F6E9C8"/>
          <stop offset="100%" stop-color="#E2C585"/>
        </radialGradient>
        <linearGradient id="bookCoverGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0E2B5C"/>
          <stop offset="100%" stop-color="#0077C0"/>
        </linearGradient>
      </defs>
      <!-- Outer Ornate Medallion Ring -->
      <circle cx="110" cy="110" r="102" fill="url(#crestGlow)" stroke="#C59B27" stroke-width="3.5"/>
      <circle cx="110" cy="110" r="94" stroke="#0E2B5C" stroke-width="1.5" stroke-dasharray="5 3"/>
      <circle cx="110" cy="110" r="87" stroke="#C59B27" stroke-width="1.2"/>
      <!-- Golden Sunburst Rays Inside Medallion -->
      <g stroke="#D9B036" stroke-width="1.2" opacity="0.45">
        <line x1="110" y1="24" x2="110" y2="196"/>
        <line x1="24" y1="110" x2="196" y2="110"/>
        <line x1="49" y1="49" x2="171" y2="171"/>
        <line x1="171" y1="49" x2="49" y2="171"/>
        <line x1="77" y1="30" x2="143" y2="190"/>
        <line x1="143" y1="30" x2="77" y2="190"/>
        <line x1="30" y1="77" x2="190" y2="143"/>
        <line x1="30" y1="143" x2="190" y2="77"/>
      </g>
      <!-- Botanical Laurel Wreath Left & Right -->
      <path d="M62 168C36 144 32 102 50 68C60 50 76 38 94 33" stroke="#9B7210" stroke-width="3" stroke-linecap="round"/>
      <path d="M158 168C184 144 188 102 170 68C160 50 144 38 126 33" stroke="#9B7210" stroke-width="3" stroke-linecap="round"/>
      <!-- Laurel Leaves -->
      <g fill="#C59B27">
        <ellipse cx="42" cy="126" rx="8" ry="4" transform="rotate(-35 42 126)"/>
        <ellipse cx="40" cy="102" rx="8" ry="4" transform="rotate(-15 40 102)"/>
        <ellipse cx="47" cy="78" rx="8" ry="4" transform="rotate(15 47 78)"/>
        <ellipse cx="62" cy="56" rx="8" ry="4" transform="rotate(35 62 56)"/>
        <ellipse cx="178" cy="126" rx="8" ry="4" transform="rotate(35 178 126)"/>
        <ellipse cx="180" cy="102" rx="8" ry="4" transform="rotate(15 180 102)"/>
        <ellipse cx="173" cy="78" rx="8" ry="4" transform="rotate(-15 173 78)"/>
        <ellipse cx="158" cy="56" rx="8" ry="4" transform="rotate(-35 158 56)"/>
      </g>
      <!-- Hardcover Book Base -->
      <path d="M50 98C70 91 92 94 110 104C128 94 150 91 170 98V154C150 147 128 150 110 160C92 150 70 147 50 154V98Z" fill="url(#bookCoverGrad)" stroke="#071733" stroke-width="2.5"/>
      <!-- Layered Archival Parchment Pages -->
      <path d="M55 92C73 85 93 88 110 98C127 88 147 85 165 92V146C147 139 127 142 110 152C93 142 73 139 55 146V92Z" fill="#FFFDF8" stroke="#C59B27" stroke-width="2.2"/>
      <!-- Turning Page Flourish -->
      <path d="M60 86C76 79 94 83 110 94C126 83 144 79 160 86" stroke="#C59B27" stroke-width="1.8" fill="none"/>
      <!-- Manuscript Lines on Pages -->
      <path d="M67 107H99M67 116H99M67 125H92M67 134H88" stroke="#0E2B5C" stroke-width="2" stroke-linecap="round" opacity="0.65"/>
      <path d="M121 107H153M121 116H153M121 125H146M121 134H142" stroke="#0E2B5C" stroke-width="2" stroke-linecap="round" opacity="0.65"/>
      <line x1="110" y1="94" x2="110" y2="156" stroke="#C59B27" stroke-width="3"/>
      <!-- Feather Quill & Conservation Brush Crossed Above Book -->
      <path d="M90 84L142 40C148 48 144 62 128 72L102 88Z" fill="#E5C158" stroke="#8A650E" stroke-width="1.6"/>
      <line x1="82" y1="90" x2="144" y2="40" stroke="#071733" stroke-width="2.2" stroke-linecap="round"/>
      <!-- Conservation Magnifying Glass / Loupe -->
      <circle cx="88" cy="68" r="17" fill="#E0F2FE" fill-opacity="0.55" stroke="#0077C0" stroke-width="3.5"/>
      <circle cx="88" cy="68" r="13" stroke="#E5C158" stroke-width="1.2"/>
      <line x1="75" y1="80" x2="63" y2="92" stroke="#8A650E" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Bottom Banner Ribbon Inside Crest -->
      <path d="M46 168H174L166 185H54L46 168Z" fill="#091B3A" stroke="#C59B27" stroke-width="1.6"/>
      <text x="110" y="179.5" text-anchor="middle" fill="#E5C158" font-family="Cinzel, Georgia, serif" font-size="7.2" font-weight="700" letter-spacing="0.7">HERITAGE CARE</text>
    </svg>
  `,

  // Decorative Archival Side Illustration: Stack of Antique Books, Scroll & Inkpot (Left Side Graphic for Tarpaulin)
  antiqueBooksIllustration: (size = 220) => `
    <svg width="${size}" height="${size}" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Warm Golden Halo -->
      <circle cx="120" cy="125" r="95" fill="#E5C158" fill-opacity="0.1" stroke="#E5C158" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="6 4"/>
      <!-- Bottom Tome (Crimson & Gold) -->
      <rect x="34" y="164" width="168" height="30" rx="6" fill="#8F1D22" stroke="#E5C158" stroke-width="2.2"/>
      <rect x="42" y="169" width="152" height="20" rx="3" fill="#FFFDF7" stroke="#C59B27" stroke-width="1.2"/>
      <line x1="46" y1="175" x2="188" y2="175" stroke="#D4C3A3" stroke-width="1.5"/>
      <line x1="46" y1="182" x2="188" y2="182" stroke="#D4C3A3" stroke-width="1.5"/>
      <rect x="62" y="164" width="10" height="30" fill="#E5C158"/>
      <rect x="160" y="164" width="10" height="30" fill="#E5C158"/>
      <!-- Middle Tome (Royal Navy & Gold) -->
      <rect x="46" y="132" width="148" height="32" rx="6" fill="#0E2B5C" stroke="#E5C158" stroke-width="2.2"/>
      <rect x="54" y="137" width="134" height="22" rx="3" fill="#FAF3E3" stroke="#C59B27" stroke-width="1.2"/>
      <line x1="58" y1="144" x2="182" y2="144" stroke="#D4C3A3" stroke-width="1.5"/>
      <line x1="58" y1="151" x2="182" y2="151" stroke="#D4C3A3" stroke-width="1.5"/>
      <rect x="76" y="132" width="8" height="32" fill="#E5C158"/>
      <rect x="148" y="132" width="8" height="32" fill="#E5C158"/>
      <!-- Top Tilted Archival Scroll & Open Manuscript -->
      <path d="M56 96C80 86 104 90 120 102C136 90 160 86 184 96V128C160 118 136 122 120 132C104 122 80 118 56 128V96Z" fill="#FFFDF8" stroke="#C59B27" stroke-width="2.5"/>
      <line x1="120" y1="102" x2="120" y2="132" stroke="#8A650E" stroke-width="2.5"/>
      <path d="M68 106H108M68 114H104M132 106H172M132 114H168" stroke="#0E2B5C" stroke-width="1.8" stroke-linecap="round" opacity="0.65"/>
      <!-- Feather Quill & Inkwell on Top -->
      <rect x="106" y="64" width="28" height="24" rx="5" fill="#0077C0" stroke="#E5C158" stroke-width="2"/>
      <path d="M120 64L154 24C162 32 158 48 140 58L120 64Z" fill="#E5C158" stroke="#FFFDF8" stroke-width="1.4"/>
      <circle cx="74" cy="66" r="14" stroke="#E5C158" stroke-width="2.5" fill="#4FA8E0" fill-opacity="0.25"/>
      <line x1="64" y1="76" x2="50" y2="90" stroke="#E5C158" stroke-width="3.5" stroke-linecap="round"/>
    </svg>
  `,

  // Conservation Tools & Heritage Scroll Illustration (Right Side Graphic for Tarpaulin)
  conservationToolsIllustration: (size = 220) => `
    <svg width="${size}" height="${size}" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="125" r="95" fill="#4FA8E0" fill-opacity="0.1" stroke="#E5C158" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="6 4"/>
      <!-- Unrolled Archival Parchment Scroll -->
      <rect x="52" y="54" width="136" height="136" rx="8" fill="#FFFDF7" stroke="#C59B27" stroke-width="2.5"/>
      <!-- Top & Bottom Wooden/Gold Scroll Rollers -->
      <rect x="40" y="44" width="160" height="16" rx="8" fill="#C59B27" stroke="#091B3A" stroke-width="2"/>
      <rect x="40" y="184" width="160" height="16" rx="8" fill="#C59B27" stroke="#091B3A" stroke-width="2"/>
      <circle cx="44" cy="52" r="5" fill="#0E2B5C"/>
      <circle cx="196" cy="52" r="5" fill="#0E2B5C"/>
      <circle cx="44" cy="192" r="5" fill="#0E2B5C"/>
      <circle cx="196" cy="192" r="5" fill="#0E2B5C"/>
      <!-- Manuscript Calligraphy & Seal on Scroll -->
      <path d="M72 80H168M72 94H168M72 108H148M72 122H158M72 136H132" stroke="#0E2B5C" stroke-width="2.2" stroke-linecap="round" opacity="0.7"/>
      <!-- Red Wax Seal on Scroll -->
      <circle cx="156" cy="154" r="18" fill="#A91D22" stroke="#E5C158" stroke-width="2"/>
      <circle cx="156" cy="154" r="13" stroke="#E5C158" stroke-width="1" stroke-dasharray="2 2"/>
      <path d="M150 168L144 182L154 177L160 182L158 168" fill="#8F1D22"/>
      <!-- Conservation Brush Sweeping Across Scroll -->
      <path d="M58 164L106 116L116 126L68 174Z" fill="#0077C0" stroke="#091B3A" stroke-width="1.6"/>
      <path d="M106 116L124 98C132 102 132 112 126 118L116 126Z" fill="#E5C158" stroke="#8A650E" stroke-width="1.6"/>
    </svg>
  `
};
