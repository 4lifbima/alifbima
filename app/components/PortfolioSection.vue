<template>
  <section id="portfolio" class="py-24 bg-white dark:bg-dark-bg relative overflow-hidden w-full max-w-full">
    <div class="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
        <div class="w-full md:w-auto">
          <h2 class="text-primary dark:text-accent-teal font-bold tracking-wider uppercase text-sm mb-3">
            Portfolio</h2>
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white break-words">Featured Case Studies</h3>
        </div>
        <NuxtLink to="/portfolio"
          class="hidden md:flex items-center gap-2 text-primary dark:text-accent-teal font-semibold hover:underline mt-4 md:mt-0">
          View All Works <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        <NuxtLink v-for="(item, index) in featuredPortfolios" :key="item.id" 
          :to="`/portfolio/${item.slug}`"
          :class="`group bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal ${index > 0 ? `delay-${index * 100}` : ''}`">
          <div class="relative h-64 overflow-hidden">
            <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10">
            </div>
            <img :src="item.image" :alt="item.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
          </div>
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="cat in item.category" :key="cat"
                :class="`px-3 py-1 text-xs font-semibold rounded-full ${
                  cat === 'Fintech' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300' :
                  cat === 'SaaS' ? 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-300' :
                  cat === 'E-Commerce' ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300' :
                  'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                }`">
                {{ cat }}
              </span>
              <span v-for="tag in item.tags.slice(0, 1)" :key="tag"
                class="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                {{ tag }}
              </span>
            </div>
            <h4
              class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent-teal transition-colors">
              {{ item.title }}
            </h4>
            <p class="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{{ item.description }}</p>
            <div class="inline-flex items-center text-sm font-bold text-primary dark:text-white hover:text-primary-light transition-colors">
              View Case Study <ArrowUpRight class="w-4 h-4 ml-1" />
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-8 text-center md:hidden">
        <NuxtLink to="/portfolio"
          class="inline-flex items-center gap-2 text-primary dark:text-accent-teal font-semibold hover:underline">
          View All Works <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'
import { getFeaturedPortfolios } from '~/data/Portofolio'

const featuredPortfolios = getFeaturedPortfolios().slice(0, 3)
</script>
