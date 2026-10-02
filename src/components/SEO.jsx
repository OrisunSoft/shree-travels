import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Shree Travels';
const SITE_URL = 'https://shreetravels.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`; 
const DEFAULT_LOCALE = 'en_IN';

// Massive, curated master list of top-ranking keywords categorized for local SEO dominance.
const BASE_KEYWORDS = [
  // 1. Force Urbania Keywords
  'Force Urbania on rent in Pune', 'Luxury Force Urbania Pune', '13 seater Force Urbania rent Pune', '17 seater Urbania rent Pune', 'Force Urbania outstation Pune', 'Urbania per km rate Pune', 'Force Urbania 35 Rs per km', 'Urbania van rental Pune', 'Premium Urbania booking Pune', 'Urbania for airport drop Pune',
  
  // 2. Tempo Traveller Keywords
  'Tempo traveller hire in Pune', 'Tempo traveller on rent in Pune', '13 seater tempo traveller Pune', '17 seater tempo traveller rent', '20 seater tempo traveller Pune', '26 seater tempo traveller hire', 'AC tempo traveller Pune', 'Luxury tempo traveller Pune', 'Tempo traveller outstation Pune', 'Tempo traveller per km rate Pune', 'Tempo traveller 25 Rs per km', 'Maharaja seat tempo traveller',
  
  // 3. Mini Bus & Standard Bus Keywords
  'Bus on rent in Pune', 'Mini bus on rent in Pune', 'Luxury bus rental Pune', 'AC bus on rent Pune', 'Non AC bus rent Pune', '15 seater mini bus Pune', '20 seater bus on rent Pune', '25 seater bus hire Pune', '30 seater bus rent Pune', '32 seater bus on rent Pune', '35 seater bus rental Pune', '40 seater bus hire Pune', '45 seater bus on rent Pune', '49 seater bus on rent Pune', '50 seater bus booking Pune', 'Volvo bus rent in Pune', 'Scania bus hire Pune', 'Bus rent per km in Pune', 'Luxury coach rental Pune',
  
  // 4. Route-Specific Keywords (Outstation)
  'Pune to Mumbai bus on rent', 'Pune to Mumbai tempo traveller', 'Pune to Mumbai cab', 'Pune to Mumbai airport drop', 'Pune to Lonavala tempo traveller', 'Pune to Lonavala bus hire', 'Pune to Mahabaleshwar bus rent', 'Pune to Mahabaleshwar tempo traveller', 'Pune to Shirdi bus darshan', 'Pune to Shirdi tempo traveller', 'Pune to Nashik cab', 'Pune to Nashik bus rent', 'Pune to Goa bus rental', 'Pune to Goa tempo traveller', 'Mumbai airport to Pune cab', 'Pune to Ashtavinayak darshan bus', 'Pune to Bhimashankar cab',
  
  // 5. Hyper-Local Pune Keywords
  'Bus rental Hinjewadi', 'Tempo traveller Wakad', 'Force Urbania Baner', 'Bus on rent Kothrud', 'Mini bus Pimpri Chinchwad', 'Tempo traveller Kharadi', 'Bus hire Hadapsar', 'Cab service Viman Nagar', 'Travels in Koregaon Park', 'Outstation cab Shivaji Nagar', 'Bus booking Magarpatta',
  
  // 6. Use-Case & Intent Keywords
  'Corporate bus transport Pune', 'Employee transport service Pune', 'Monthly bus contract Pune', 'Wedding bus on rent Pune', 'Marriage transport Pune', 'Picnic bus booking Pune', 'School trip bus rent Pune', 'Outstation vehicle rental Pune', 'Group tour bus hire Pune', 'Family trip tempo traveller', 'Airport transfer Pune', 'Corporate event bus hire'
];

const SEO = ({
  title,
  description,
  keywords,
  path = '/', 
  image = DEFAULT_OG_IMAGE,
  schema, 
  noindex = false,
  publishedTime, 
  modifiedTime, 
  breadcrumbs, 
}) => {
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

  const finalTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Bus, Force Urbania & Tempo Traveller Rental in Pune`;

  const finalDescription =
    description ||
    'Book Force Urbania, luxury buses (13 to 49 seater), tempo travellers and cars on rent in Pune. Reliable outstation and local rental service across Hinjewadi, Kharadi, Wakad and Baner.';

  // Combines page-specific keywords with the master list, filtering out duplicates
  const finalKeywords = keywords
    ? Array.from(new Set([...keywords.split(',').map(k => k.trim()), ...BASE_KEYWORDS])).join(', ')
    : BASE_KEYWORDS.join(', ');

  const defaultLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
    url: SITE_URL,
    telephone: '+91-7875774499',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No. 2, Ground Floor, Wings H (Puram), Prayeja City, Phase-2, Vadgaon Budruk',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411041',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5204,
      longitude: 73.8567,
    },
    areaServed: [
      'Pune', 'Hinjewadi', 'Kharadi', 'Wakad', 'Baner', 'Pimpri-Chinchwad',
    ],
    sameAs: [
      'https://www.facebook.com/people/Shree-travels/61567052876581/',
      'https://www.instagram.com/amruta_travels_/',
      'https://share.google/gtBZ4nroQ0YOjdmUT',
    ],
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.url}`,
        })),
      }
    : null;

  const customSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const allSchemas = [defaultLocalBusinessSchema, breadcrumbSchema, ...customSchemas].filter(Boolean);

  return (
    <Helmet>
      {/* Core */}
      <html lang="en-IN" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      {!noindex && <link rel="canonical" href={canonicalUrl} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <meta name="author" content={SITE_NAME} />

      {/* Local relevance signals */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune" />
      <meta name="geo.position" content="18.5204;73.8567" />
      <meta name="ICBM" content="18.5204, 73.8567" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={DEFAULT_LOCALE} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={publishedTime ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Mobile / performance signals */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f172a" />

      {/* Structured Data (JSON-LD) */}
      {allSchemas.map((schemaObj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schemaObj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;