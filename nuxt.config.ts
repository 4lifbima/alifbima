// https://nuxt.com/docs/api/configuration/nuxt-config
import { portfolios } from './app/data/Portofolio'
import { artikels } from './app/data/Artikel'

// Generate dynamic URLs for prerender
const dynamicUrls = [
  '/',
  '/portfolio',
  '/artikel',
  ...portfolios.map(p => `/portfolio/${p.slug}`),
  ...artikels.map(a => `/artikel/${a.slug}`)
]

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n'],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'id',
    lazy: true,
    langDir: 'locales/',
    locales: [
      { code: 'id', name: 'Indonesia', file: 'id.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ja', name: '日本語', file: 'ja.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'id',
      redirectOn: 'root'
    },
  },

  // Runtime Config for environment variables
  runtimeConfig: {
    // Server-side only (not exposed to client)
    resendApiKey: process.env.NUXT_RESEND_API_KEY || process.env.RESEND_API_KEY || ''
  },

  // Nitro configuration for Cloudflare & dynamic prerender routes
  nitro: {
    alias: {
      '@react-email/render': 'unenv/runtime/mock/empty'
    },
    prerender: {
      routes: dynamicUrls
    }
  },

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
        { name: 'keywords', content: 'Fullstack Developer, Web Developer, Frontend, Backend, React, Vue, Laravel, Nuxt.js, Next.js, Portfolio, Alif Bima Pradana, Bima, mahasiswa informatika, UNG, Universitas Negeri Gorontalo, Gorontalo, Indonesia, ' },
        { name: 'robots', content: 'index, follow' },
        { name: 'google-site-verification', content: '7Crp0mhx89e215XuL8F-xoiMKxiHRbQd62oa4jpdR40' },
        { name: 'theme-color', content: '#FE4619' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Alif Bima Pradana' },
        { property: 'og:title', content: 'Alif Bima Pradana' },
        { property: 'og:description', content: 'Fullstack Developer yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.' },
        { property: 'og:image', content: 'https://www.alifbima.my.id/og-image.jpg' },
        { property: 'og:image:width', content: '1024' },
        { property: 'og:image:height', content: '1024' },
        { property: 'og:locale', content: 'id_ID' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Alif Bima Pradana' },
        { name: 'twitter:description', content: 'Fullstack Developer yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.' },
        { name: 'twitter:image', content: 'https://www.alifbima.my.id/og-image.jpg' },
        { name: 'twitter:creator', content: '@alifbima_' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/og-image.jpg' },
        { rel: 'apple-touch-icon', href: '/og-image.jpg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Urbanist:wght@400;500;600;700;800&display=swap' },
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
