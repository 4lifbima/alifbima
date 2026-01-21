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
          All Articles
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          Kumpulan artikel dan insights tentang development, design, dan teknologi
        </p>
      </div>

      <!-- Articles Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink v-for="item in artikels" :key="item.id" 
          :to="`/artikel/${item.slug}`"
          class="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all block">
          <div class="h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <img :src="item.image" :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary dark:bg-accent-teal/20 dark:text-accent-teal">
                {{ item.category }}
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400">{{ item.readTime }}</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent-teal transition-colors line-clamp-2">
              {{ item.title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
              {{ item.excerpt }}
            </p>
            <div class="flex items-center gap-2 text-sm text-primary dark:text-accent-teal font-semibold">
              Read More <ArrowRight class="w-4 h-4" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const artikels = useArtikels()

useSeoMeta({
  title: 'All Insights | Alif Bima Pradana',
  description: 'Kumpulan artikel dan insights tentang development, design, dan teknologi.',
  
  // Open Graph
  ogType: 'website',
  ogTitle: 'All Insights | Alif Bima Pradana',
  ogDescription: 'Kumpulan artikel dan insights tentang development, design, dan teknologi.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://alifbimapradana.com/artikel',
  ogLocale: 'id_ID',
  ogSiteName: 'Alif Bima Pradana',
  
  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'All Insights | Alif Bima Pradana',
  twitterDescription: 'Kumpulan artikel dan insights tentang development, design, dan teknologi.',
  twitterImage: '/og-image.jpg',
  twitterCreator: '@alifbima_'
})
</script>
