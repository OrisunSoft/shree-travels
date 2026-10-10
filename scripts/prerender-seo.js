/**
 * Static Route-Specific SEO HTML Generator & Sitemap Synchronizer for Shree Travels (https://shreetravels.in)
 * Synchronizes all 95 footer keyword routes into public/sitemap.xml & build/sitemap.xml and
 * generates build/<route>/index.html for every URL with exact <title>, <meta name="description">,
 * <link rel="canonical">, OpenGraph tags, and JSON-LD so Googlebot receives complete route-specific HTML on first byte.
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://shreetravels.in';
const BUILD_DIR = path.join(__dirname, '..', 'build');
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');
const KEYWORD_PAGE_PATH = path.join(__dirname, '..', 'src', 'pages', 'KeywordLandingPage.jsx');

// Parse RAW_KEYWORD_ENTRIES from KeywordLandingPage.jsx so prerender & sitemap stay 100% in sync
function loadKeywordEntries() {
  const src = fs.readFileSync(KEYWORD_PAGE_PATH, 'utf8');
  const match = src.match(/const RAW_KEYWORD_ENTRIES = (\[[\s\S]*?\n\]);/);
  if (!match) return [];
  // Safe evaluation of the array literal
  // eslint-disable-next-line no-new-func
  return new Function(`return ${match[1]}`)();
}

const ROUTE_META = {
  '/': {
    h1: 'Shree Travels – Urbania on Rent in Pune | Tempo Traveller & Bus Rental',
    title: 'Shree Travels – Urbania on Rent in Pune | Tempo Traveller & Bus Rental',
    description: 'Shree Travels – Urbania on Rent in Pune (@ ₹32/km for 10, 13 & 17 Seater), Tempo Traveller on Rent in Pune (13 & 17 Seater @ ₹22/km), 32, 40 & 50 Seater Bus on Rent in Pune, Pune to Mumbai Cab & Pune Airport Cab. 24/7 dispatch across Pune, Mumbai, Shirdi, Nashik & Lonavala.',
    image: `${SITE_URL}/img/force-ub.jpg`
  },
  '/service': {
    h1: 'Bus, Force Urbania & Tempo Traveller Services in Pune',
    title: 'Popular Tour Packages, Outstation Bus & Urbania Hire in Pune | Shree Travels',
    description: 'Explore Shree Travels Pune services: Popular Tour Packages (Mahabaleshwar, Lonavala, Goa, Konkan, Ashtavinayak, 5 Jyotirlinga, Sade Teen Shakti Peeth), Force Urbania @ ₹32/km, Tempo Travellers & 32-50 Seater Buses.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-39.jpg`
  },
  '/our-fleet': {
    h1: 'Our Fleet — Force Urbania, Tempo Travellers & Luxury Buses in Pune',
    title: 'Our Fleet in Pune | Force Urbania, Tempo Traveller & Bus Hire | Shree Travels',
    description: 'Inspect Shree Travels Pune fleet: 10, 13 & 17 Seater Force Urbania (@ ₹32/km), 13-26 Seater Tempo Travellers (@ ₹22/km), and 20-50 Seater AC/Non-AC Luxury Buses.',
    image: `${SITE_URL}/img/force-ub.jpg`
  },
  '/packages': {
    h1: 'Transparent Per-KM Rates & Tour Packages in Pune',
    title: 'Bus, Tempo Traveller & Force Urbania Per KM Rates in Pune | Shree Travels',
    description: 'Official per-km rates in Pune: Force Urbania ₹32/km, 17 Seater Tempo Traveller ₹22-₹25/km, 20 Seater Bus ₹28/km, 32 Seater Bus ₹45/km, 50 Seater Bus ₹58/km.',
    image: `${SITE_URL}/img/force-ub.jpg`
  },
  // 8 Dedicated Popular Tour Packages & Outstation Pages
  '/pune-to-mahabaleshwar-bus-hire': {
    h1: 'Pune to Mahabaleshwar & Panchgani Tour Package – Bus, Urbania & Tempo Traveller Hire',
    title: 'Pune to Mahabaleshwar Bus Hire | Force Urbania @ ₹32/Km & Tempo Traveller | Shree Travels',
    description: 'Book Pune to Mahabaleshwar & Panchgani group tour in Force Urbania (₹32/km), 17-Seater Tempo Traveller (₹22/km) or 32-50 Seater Bus. Covers Arthur Seat, Mapro Garden, Pratapgad & Venna Lake.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-31.jpg`
  },
  '/pune-to-lonavala-bus-hire': {
    h1: 'Pune to Lonavala & Khandala Tour Package – Bus, Mini Bus & Force Urbania Hire',
    title: 'Pune to Lonavala Bus Hire | Force Urbania @ ₹32/Km & Tempo Traveller | Shree Travels',
    description: 'Rent Force Urbania (₹32/km), Tempo Traveller (₹22/km) or Mini/Large Bus from Pune to Lonavala & Khandala. Visit Bhushi Dam, Tiger Point, Karla-Bhaja Caves, Pawna Lake & Imagicaa.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-26.jpg`
  },
  '/pune-to-goa-bus-hire': {
    h1: 'Pune to Goa Tour Package – Luxury Bus, Force Urbania & Tempo Traveller Hire',
    title: 'Pune to Goa Bus Hire | Force Urbania @ ₹32/Km & Luxury Tempo Traveller | Shree Travels',
    description: 'Hire Pune to Goa Bus, Force Urbania (@ ₹32/km) or Tempo Traveller (@ ₹22/km) for North & South Goa sightseeing: Baga, Calangute, Aguada Fort, Old Goa Churches, Dudhsagar & Palolem.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-23.jpg`
  },
  '/pune-to-konkan-darshan': {
    h1: 'Pune to Konkan Darshan Tour Package – Bus, Mini Bus & Force Urbania Hire',
    title: 'Pune to Konkan Darshan Bus Hire | Dapoli, Diveagar, Ganpatipule & Tarkarli | Shree Travels',
    description: 'Book Pune to Konkan Darshan coastal tour in Force Urbania (@ ₹32/km), Tempo Traveller (@ ₹22/km) or 32-Seater Bus. Covers Diveagar, Harihareshwar, Murud Janjira, Dapoli, Ganpatipule & Sindhudurg.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-24.jpg`
  },
  '/pune-to-mumbai-darshan': {
    h1: 'Pune to Mumbai Darshan Tour Package – Bus, Force Urbania & Tempo Traveller On Rent',
    title: 'Pune to Mumbai Darshan Bus On Rent | Siddhivinayak, Gateway & Marine Drive | Shree Travels',
    description: 'Book Pune to Mumbai Darshan Bus, Force Urbania (@ ₹32/km) or Tempo Traveller (@ ₹22/km). Covers Siddhivinayak, Mahalaxmi, Haji Ali, Gateway of India, Marine Drive, Atal Setu & Juhu Beach.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-27.jpg`
  },
  '/ashtavinayak-darshan-bus-hire-pune': {
    h1: 'Pune to Ashtavinayak Darshan Yatra Package – Bus, Force Urbania & Tempo Traveller Hire',
    title: 'Ashtavinayak Darshan Bus Hire from Pune | 2 & 3 Day Yatra Packages | Shree Travels',
    description: 'Book Ashtavinayak Darshan Bus, Force Urbania (@ ₹32/km) or Tempo Traveller (@ ₹22/km) from Pune covering all 8 Swayambhu Ganpati temples: Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar & Ranjangaon.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-29.jpg`
  },
  '/bhimashankar-5-jyotirlinga-darshan-pune': {
    h1: 'Pune to Bhimashankar & 5 Jyotirlinga in Maharashtra Darshan – Bus & Urbania Hire',
    title: 'Bhimashankar & 5 Jyotirlinga Darshan Bus Hire in Pune | Urbania @ ₹32/Km | Shree Travels',
    description: 'Book Bhimashankar 1-Day trip or 4-Day Maharashtra 5 Jyotirlinga Darshan (Bhimashankar, Trimbakeshwar, Grishneshwar, Parli Vaijnath & Aundha Nagnath) in Force Urbania, Tempo Traveller or Bus.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-63.jpg`
  },
  '/sade-teen-shakti-peeth-darshan-pune': {
    h1: 'Pune to Sade Teen Shakti Peeth Darshan Tour – Bus, Mini Bus & Force Urbania On Rent',
    title: 'Pune Sade Teen Shakti Peeth Bus On Rent | Kolhapur, Tuljapur, Mahurgad & Saptashrungi',
    description: 'Book Pune to Sade Teen Shakti Peeth Yatra Bus, Force Urbania (@ ₹32/km) or Tempo Traveller (@ ₹22/km) covering Mahalaxmi Kolhapur, Tulja Bhavani Tuljapur, Renuka Mata Mahurgad & Saptashrungi Vani.',
    image: `${SITE_URL}/img/Keyword%20Based%20Image/Keyword%20Based%20Image-25.jpg`
  }
};

// Populate all 93 keyword entries into ROUTE_META
const keywordEntries = loadKeywordEntries();
for (const item of keywordEntries) {
  const routePath = `/${item.slug}`;
  ROUTE_META[routePath] = {
    h1: item.h1,
    title: `${item.h1} | Shree Travels`,
    description: `Book ${item.h1} with Shree Travels (${item.rate}). Choose ${item.cap} with uniformed chauffeurs for ${item.focus}. Call +91 7620411277 or WhatsApp +91 78757 74499.`,
    image: `${SITE_URL}${encodeURI(item.img)}`
  };
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function deriveMetaForRoute(routePath) {
  if (ROUTE_META[routePath]) {
    return ROUTE_META[routePath];
  }
  const cleanSlug = routePath.replace(/^\/+|\/+$/g, '').replace(/\//g, ' - ').replace(/-/g, ' ');
  const titleWords = cleanSlug.replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    h1: `${titleWords} | Shree Travels`,
    title: `${titleWords} | Shree Travels`,
    description: `Book ${titleWords} with Shree Travels Pune. Force Urbania @ ₹32/km, 17-Seater Tempo Traveller @ ₹22/km, and 20 to 50 Seater Luxury Buses. Call +91 7620411277 or WhatsApp +91 78757 74499.`,
    image: `${SITE_URL}/img/force-ub.jpg`
  };
}

function buildJsonLd(routePath, meta) {
  const canonicalUrl = `${SITE_URL}${routePath === '/' ? '' : routePath}`;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoRental',
        '@id': `${SITE_URL}/#organization`,
        name: 'Shree Travels – Urbania on Rent in Pune | Tempo Traveller & Bus Rental',
        url: SITE_URL,
        logo: `${SITE_URL}/img/Logo/shree.png`,
        image: meta.image,
        telephone: '+91-7620411277',
        email: 'shreetravelspune5@gmail.com',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Office no 201, Dodke Palazzo, near mahatma society, Pramathesh Housing Society, Jijai Nagar, Kothrud',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411038',
          addressCountry: 'IN'
        },
        contactPoint: [
          { '@type': 'ContactPoint', telephone: '+91-7620411277', contactType: 'customer service', areaServed: 'IN' },
          { '@type': 'ContactPoint', telephone: '+91-7875774499', contactType: 'reservations', areaServed: 'IN' },
          { '@type': 'ContactPoint', telephone: '+91-9860256019', contactType: 'customer support', areaServed: 'IN' },
          { '@type': 'ContactPoint', telephone: '+91-9145411005', contactType: 'sales', areaServed: 'IN' }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '348',
          bestRating: '5',
          worstRating: '1'
        },
        sameAs: [
          'https://www.facebook.com/profile.php?id=100063648079773',
          'https://www.instagram.com/shreetravelspune10/',
          'https://share.google/p6WieDC55DgKtuLN6'
        ]
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.title,
        headline: meta.h1,
        description: meta.description,
        isPartOf: { '@id': `${SITE_URL}/#organization` }
      }
    ]
  });
}

function syncSitemapWithKeywords() {
  let sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const existingLocs = new Set(
    [...sitemapXml.matchAll(/<loc>https:\/\/shreetravels\.in([^<]*)<\/loc>/g)].map((m) => m[1] || '/')
  );

  const missingSnippets = [];
  for (const item of keywordEntries) {
    const routePath = `/${item.slug}`;
    if (!existingLocs.has(routePath)) {
      missingSnippets.push(
        `  <url>\n    <loc>${SITE_URL}${routePath}</loc>\n    <lastmod>2026-10-09</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`
      );
      existingLocs.add(routePath);
    }
  }

  if (missingSnippets.length > 0) {
    sitemapXml = sitemapXml.replace(
      '</urlset>',
      `\n  <!-- ==================== ADDITIONAL DEDICATED FOOTER KEYWORD PAGES ==================== -->\n${missingSnippets.join('\n')}\n</urlset>`
    );
    fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
    if (fs.existsSync(BUILD_DIR)) {
      fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
    }
  }

  return Array.from(existingLocs);
}

function run() {
  const routes = syncSitemapWithKeywords();

  if (!fs.existsSync(BUILD_DIR)) {
    console.error('build directory not found. Run npm run build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

  let count = 0;
  for (const routePath of routes) {
    const meta = deriveMetaForRoute(routePath);
    const canonicalUrl = `${SITE_URL}${routePath === '/' ? '' : routePath}`;
    const jsonLd = buildJsonLd(routePath, meta);

    // Replace existing canonical tag in index.html so there is NEVER a duplicate canonical tag
    let html = baseHtml
      .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(meta.title)}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(meta.description)}" />`)
      .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`)
      .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`)
      .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`)
      .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`)
      .replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${escapeHtml(meta.image)}" />`);

    const headInjection = `<meta name="robots" content="index, follow, max-image-preview:large" /><script type="application/ld+json">${jsonLd}</script></head>`;
    html = html.replace('</head>', headInjection);

    const staticSeoArticle = `<article style="max-width:1140px;margin:0 auto;padding:24px 16px;font-family:sans-serif"><h1>${escapeHtml(meta.h1)}</h1><p>${escapeHtml(meta.description)}</p><p>Official Shree Travels Pune Tariff: Force Urbania (10, 13 &amp; 17 Seater) @ flat ₹32/km | 13 &amp; 17 Seater Tempo Traveller @ ₹22/km (Non-AC) &amp; ₹25/km (AC) | 20 Seater @ ₹25/km (Non-AC) &amp; ₹28/km (AC) | 26 Seater @ ₹32/km (Non-AC) &amp; ₹37/km (AC) | 32 Seater Bus @ ₹35/km (Non-AC) &amp; ₹50/km (AC) | 35 Seater Bus @ ₹38/km (Non-AC) &amp; ₹50/km (AC) | 45/49 Seater Bus @ ₹50/km | 53 Seater Volvo/Benz Special @ ₹80/km. Please note that toll, parking, and border tax charges are extra. Head Office: Office no 201, Dodke Palazzo, near mahatma society, Pramathesh Housing Society, Jijai Nagar, Kothrud, Pune, Maharashtra 411038. 24/7 Dispatch: +91 7620411277, WhatsApp: +91 78757 74499, +91 9860256019, +91 9145411005.</p><nav><a href="/urbania-on-rent-in-pune">Urbania on Rent in Pune</a> | <a href="/13-seater-urbania-on-rent-pune">13 Seater Urbania on Rent in Pune</a> | <a href="/17-seater-urbania-on-rent-pune">17 Seater Urbania on Rent in Pune</a> | <a href="/tempo-traveller-on-rent-in-pune">Tempo Traveller on Rent in Pune</a> | <a href="/bus-on-rent-in-pune">Bus on Rent in Pune</a> | <a href="/32-seater-bus-on-rent-in-pune">32 Seater Bus on Rent in Pune</a> | <a href="/pune-to-mumbai-cab">Pune to Mumbai Cab</a> | <a href="/pune-airport-cab">Pune Airport Cab</a></nav></article>`;

    // Inject static crawlable HTML inside #root (replaced automatically when React mounts) AND inside <noscript>
    html = html.replace('<div id="root"></div>', `<div id="root">${staticSeoArticle}</div>`);
    html = html.replace(/<noscript>.*?<\/noscript>/s, `<noscript>${staticSeoArticle}</noscript>`);

    if (routePath === '/') {
      fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), html, 'utf8');
    } else {
      const targetDir = path.join(BUILD_DIR, ...routePath.split('/').filter(Boolean));
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
    }
    count++;
  }

  console.log(`Pre-rendered static SEO HTML for ${count} routes in build/.`);
}

run();
