<template>
  <section class="py-24 bg-slate-50 dark:bg-[#151e32] w-full max-w-full overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white break-words">Latest Insights</h2>
        <NuxtLink to="/artikel" class="text-primary dark:text-accent-teal text-sm font-semibold hover:underline whitespace-nowrap">Read
          Blog</NuxtLink>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        <NuxtLink v-for="(artikel, index) in featuredArtikels" :key="artikel.id" 
          :to="`/artikel/${artikel.slug}`"
          :class="`group bg-white dark:bg-dark-card rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all block reveal ${index > 0 ? `delay-${index * 100}` : ''}`">
          <!-- Image -->
          <div class="relative h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <img :src="artikel.image" :alt="artikel.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <!-- Content -->
          <div class="p-5">
            <!-- Category & Date -->
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-1 text-xs font-bold rounded-md bg-primary/10 text-primary dark:bg-accent-teal/20 dark:text-accent-teal uppercase tracking-wide">
                {{ artikel.category }}
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400">{{ artikel.readTime }}</span>
            </div>
            
            <!-- Title -->
            <h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent-teal transition-colors line-clamp-2 leading-tight">
              {{ artikel.title }}
            </h3>
            
            <!-- Excerpt -->
            <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
              {{ artikel.excerpt }}
            </p>
            
            <!-- Author & Date -->
            <div class="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
              <div v-if="artikel.authorAvatar" class="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img :src="artikel.authorAvatar" :alt="artikel.author" class="w-full h-full object-cover">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold text-slate-900 dark:text-white truncate">{{ artikel.author }}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  {{ new Date(artikel.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' }) }}
                </p>
              </div>
              <ArrowRight class="w-4 h-4 text-primary dark:text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { getFeaturedArtikels } from '~/data/Artikel'

const featuredArtikels = getFeaturedArtikels()
</script>
