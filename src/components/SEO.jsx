import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Shree Travels';
const SITE_URL = 'https://shreetravels.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/img/force-ub.jpg`; 
const DEFAULT_LOCALE = 'en_IN';

// Core brand & high-intent keywords used when a page does not supply custom keywords
const BASE_KEYWORDS = [
  'Urbania On Rent in Pune',
  '13 Seater Urbania on Rent in Pune',
  '17 Seater Urbania on Rent in Pune',
  'Urbania Hire in Pune',
  'Mini Bus On Rent Pune',
  'Urbania On Rent in Mumbai',
  'Urbania On Rent in Shirdi',
  'Urbania On Rent in Nashik',
  'Urbania Rent in Lonavala',
  'Force Urbania On Rent in Pune',
  'Tata Winger On Rent in Pune',
  'Tempo Traveller On Rent in Pune',
  '17 Seater Tempo Traveller On Rent in Pune',
  'Luxury Tempo Traveller On Rent in Pune',
  '13 Seater Tempo Traveller On Rent in Pune',
  '32 Seater Bus On Rent in Pune',
  'Mini Bus On Rent in Pune',
  'Bus On Rent in Pune',
  '20 Seater Bus On Rent in Pune',
  '50 Seater Bus On Rent in Pune',
  'Tempo Traveller On Rent Pune',
  '25 Seater Bus On Rent in Pune',
  '35 Seater Bus On Rent in Pune',
  '40 seater bus on rent in pune',
  '17 Seater Bus on Rent Pune',
  'Purandar Airport Bus Hire Services Pune',
  'Bus Hire in Pune',
  'Bus Rental for Corporate Events',
  '26 Seater Tempo Traveller On Rent in Pune',
  'Pune Bus Hire',
  'Volvo Bus On Rent in Pune',
  'Pune to Mumbai Cab',
  'Pune Airport Cab',
  'Outstation Cab Service Pune',
  'Bus on Rent in Mumbai',
  'Bus on Rent in Shirdi',
  'Bus on Rent in Nashik',
  'Bus on Rent in Lonavala',
  'Tempo Traveller on Rent in Mumbai',
  'Tempo Traveller on Rent in Shirdi',
  'Tempo Traveller on Rent in Nashik',
  'Tempo Traveller on Rent in Lonavala',
  'Mini Bus on Rent in Mumbai',
  'Mini Bus on Rent in Shirdi',
  'Mini Bus on Rent in Nashik',
  'Mini Bus on Rent in Lonavala'
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

  // Format title cleanly with brand name per SEO audit specification
  const finalTitle = title
    ? (title.toLowerCase().includes(SITE_NAME.toLowerCase())
        ? title
        : `${title} | ${SITE_NAME}`)
    : `Shree Travels – Urbania on Rent in Pune | Tempo Traveller & Bus Rental`;

  const finalDescription =
    description ||
    'Book Force Urbania on Rent in Pune (@ ₹32/km for 10, 13 & 17 seater), Tempo Traveller (13 to 26 seater @ ₹22/km), and luxury buses (32 to 50 seater). 24/7 dispatch across Pune, Mumbai, Shirdi, Nashik & Lonavala.';

  // Prioritize page-specific keywords when provided to prevent keyword cannibalization
  const finalKeywords = keywords
    ? Array.from(new Set([...keywords.split(',').map(k => k.trim()).filter(Boolean), 'Shree Travels Pune'])).join(', ')
    : BASE_KEYWORDS.join(', ');

  const defaultLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
    logo: `${SITE_URL}/img/Logo/shree.png`,
    url: SITE_URL,
    telephone: '+91-7620411277',
    email: 'shreetravelspune5@gmail.com',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office no 201, Dodke Palazzo, near mahatma society, Pramathesh Housing Society, Jijai Nagar, Kothrud',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411038',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5018,
      longitude: 73.8077,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-7620411277',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Marathi', 'Hindi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-7875774499',
        contactType: 'reservations',
        areaServed: 'IN',
        availableLanguage: ['English', 'Marathi', 'Hindi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9860256019',
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Marathi', 'Hindi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9145411005',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Marathi', 'Hindi']
      }
    ],
    areaServed: [
      'Pune', 'Hinjewadi', 'Kharadi', 'Wakad', 'Baner', 'Hadapsar', 'Pimpri-Chinchwad', 'Kothrud', 'Mumbai', 'Lonavala', 'Shirdi', 'Nashik', 'Maharashtra'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '348',
      bestRating: '5',
      worstRating: '1'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pune, Mumbai, Shirdi, Nashik & Lonavala Vehicle Rental Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Force Urbania on Rent in Pune',
            description: 'Luxury 10, 13 & 17 seater Force Urbania hire in Pune, Mumbai, Shirdi, Nashik & Lonavala at ₹32/km'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '13 Seater & 17 Seater Urbania on Rent in Pune',
            description: 'Dedicated 13 Seater and 17 Seater Force Urbania AC luxury vans on rent in Pune starting at ₹32/km'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tempo Traveller on Rent in Pune',
            description: '13, 17, 20 & 26 seater AC & Non-AC Tempo Traveller hire in Pune, Mumbai, Shirdi, Nashik & Lonavala starting at ₹22/km'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bus on Rent in Pune (32, 40 & 50 Seater)',
            description: '20, 25, 32, 35, 40, 45 & 50 seater AC & Non-AC luxury bus hire in Pune starting at ₹28/km'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pune to Mumbai Cab, Pune Airport Cab & Outstation Cab Service Pune',
            description: '24/7 Swift Dzire, Ertiga, Innova Crysta & Force Urbania airport transfers and outstation cabs from Pune starting at ₹12/km'
          }
        }
      ]
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100063648079773',
      'https://www.instagram.com/shreetravelspune10/',
      'https://share.google/p6WieDC55DgKtuLN6',
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