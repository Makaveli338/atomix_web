<template>
  <section class="overflow-x-clip">
    <NuxtPage />
  </section>
</template>

<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public
const route = useRoute()

const siteName = 'Atomix Systems'
const description =
  'Atomix Systems provides advanced security and inspection solutions, including radiation detection, cargo and vehicle inspection, for ports, borders, airports and critical infrastructure across Kenya and beyond.'

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: 'en-KE',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      slogan: 'Detect threats. Deter risks. Respond with confidence.',
      description,
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      image: `${siteUrl}/hero.png`,
      email: 'info@atomix.co.ke',
      telephone: '+254784000000',
      address: { '@type': 'PostalAddress', addressCountry: 'KE' },
      areaServed: { '@type': 'Country', name: 'Kenya' },
      knowsAbout: [
        'Radiation detection',
        'Cargo inspection',
        'Vehicle inspection',
        'Baggage and parcel inspection',
        'Optical inspection technologies',
        'Border and port security',
      ],
    },
  ],
}

useHead({
  titleTemplate: (title) =>
    title && title !== siteName ? `${title} | ${siteName}` : `${siteName} | Security & Inspection Solutions`,
  link: [{ rel: 'canonical', href: () => `${siteUrl}${route.path}` }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(businessSchema) }],
})

useSeoMeta({
  description,
  ogSiteName: siteName,
  ogType: 'website',
  ogLocale: 'en_KE',
  ogTitle: `${siteName} | Security & Inspection Solutions`,
  ogDescription: description,
  ogUrl: () => `${siteUrl}${route.path}`,
  ogImage: `${siteUrl}/hero.png`,
  twitterCard: 'summary_large_image',
})
</script>
