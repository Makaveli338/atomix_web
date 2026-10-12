import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-09',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      siteUrl: 'http://localhost:3000',
      web3formsKey: '',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en-KE' },
      title: 'Atomix Systems',
      meta: [
        { name: 'theme-color', content: '#0568C4' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }],
    },
  },
  nitro: { prerender: { routes: ['/robots.txt', '/sitemap.xml'] } },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
