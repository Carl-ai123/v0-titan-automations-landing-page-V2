export const SITE_URL = 'https://www.titan-automations.com'
export const BUSINESS_ID = `${SITE_URL}/#business`

export const BUSINESS = {
  name: 'Titan Automations',
  email: 'info@titan-automations.com',
  phone: '+447464256627',
  phoneDisplay: '07464 256627',
  location: 'Kent, United Kingdom',
  facebook: 'https://www.facebook.com/titanautomations/',
  instagram: 'https://www.instagram.com/titanautomations/',
} as const

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: BUSINESS.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  description:
    'Growth systems for UK commercial contractors, connecting websites, enquiry capture, CRM pipelines and automated follow-up.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Kent',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Kent' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Carl Wilkins',
  },
  sameAs: [BUSINESS.facebook, BUSINESS.instagram],
  priceRange: '££',
}
