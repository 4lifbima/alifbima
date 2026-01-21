// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: 'Alif Bima Pradana',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Alif Bima Pradana - Fullstack Developer yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.' },
        { name: 'author', content: 'Alif Bima Pradana' },
        { name: 'keywords', content: 'Fullstack Developer, Web Developer, Frontend, Backend, React, Vue, Laravel, Nuxt.js, Next.js, Portfolio' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#4f46e5' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Alif Bima Pradana' },
        { property: 'og:title', content: 'Alif Bima Pradana' },
        { property: 'og:description', content: 'Fullstack Developer yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'id_ID' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Alif Bima Pradana' },
        { name: 'twitter:description', content: 'Fullstack Developer yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.' },
        { name: 'twitter:image', content: '/og-image.jpg' },
        { name: 'twitter:creator', content: '@alifbima_' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/og-image.jpg' },
        { rel: 'apple-touch-icon', href: '/og-image.jpg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap' },
        { rel: 'canonical', href: 'https://www.alifbima.my.id' }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})