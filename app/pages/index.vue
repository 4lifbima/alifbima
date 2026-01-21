<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <PortfolioSection />
    <ExperienceSection />
    <TestimonialsSection />
    <InsightsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Alif Bima Pradana',
  description: 'Alif Bima Pradana - Fullstack Developer yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.',
  
  // Open Graph
  ogType: 'website',
  ogTitle: 'Alif Bima Pradana',
  ogDescription: 'Fullstack Developer yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://www.alifbima.my.id',
  ogLocale: 'id_ID',
  ogSiteName: 'Alif Bima Pradana',
  
  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Alif Bima Pradana',
  twitterDescription: 'Fullstack Developer yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.',
  twitterImage: '/og-image.jpg',
  twitterCreator: '@alifbima_'
})

useHead({
  htmlAttrs: {
    lang: 'id'
  }
})
</script>
