<template>
  <div class="min-h-screen bg-white dark:bg-dark-bg pt-24 pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="mb-12">
        <NuxtLink to="/" 
          class="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-accent-teal mb-6 transition-colors">
          <ArrowLeft class="w-5 h-5" />
          <span>Back to Home</span>
        </NuxtLink>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          All Portfolio
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          Kumpulan project dan case study yang telah saya kerjakan
        </p>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink v-for="item in portfolios" :key="item.id" 
          :to="`/portfolio/${item.slug}`"
          class="group bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block">
          <div class="relative h-64 overflow-hidden">
            <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10">
            </div>
            <img :src="item.image" :alt="item.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <div class="p-6 md:p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="cat in item.category" :key="cat"
                class="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-accent-teal/20 dark:text-accent-teal">
                {{ cat }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent-teal transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
              {{ item.description }}
            </p>
            <div class="flex items-center gap-2 text-sm text-primary dark:text-accent-teal font-semibold">
              View Details <ArrowRight class="w-4 h-4" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const portfolios = usePortfolios()

useSeoMeta({
  title: 'All Projects | Alif Bima Pradana',
  description: 'Kumpulan project dan case study yang telah saya kerjakan sebagai Fullstack Developer.',
  
  // Open Graph
  ogType: 'website',
  ogTitle: 'All Projects | Alif Bima Pradana',
  ogDescription: 'Kumpulan project dan case study yang telah saya kerjakan sebagai Fullstack Developer.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://alifbimapradana.com/portfolio',
  ogLocale: 'id_ID',
  ogSiteName: 'Alif Bima Pradana',
  
  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'All Projects | Alif Bima Pradana',
  twitterDescription: 'Kumpulan project dan case study yang telah saya kerjakan sebagai Fullstack Developer.',
  twitterImage: '/og-image.jpg',
  twitterCreator: '@alifbima_'
})
</script>
