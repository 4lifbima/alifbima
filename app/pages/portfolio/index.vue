<template>
  <div class="min-h-screen bg-white text-[#1D1D1D] pt-28 sm:pt-32 flex flex-col justify-between">
    <div class="max-w-[1160px] mx-auto px-5 sm:px-8 pb-20 w-full">
      <!-- Header -->
      <div class="mb-12">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-[#555555] hover:text-[#FE4619] mb-6 text-sm font-medium transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>{{ $t('portfolio.backHome') }}</span>
        </NuxtLink>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-3 tracking-tight">
          {{ $t('portfolio.allTitle') }}
        </h1>
        <p class="text-base sm:text-lg text-[#555555] max-w-2xl">
          {{ $t('portfolio.allSubtitle') }}
        </p>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        <NuxtLink
          v-for="item in portfolios"
          :key="item.id"
          :to="`/portfolio/${item.slug}`"
          class="group bg-white rounded-[26px] overflow-hidden border border-neutral-100 shadow-[0_10px_34px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 block"
        >
          <div class="relative aspect-[16/10.5] overflow-hidden bg-[#F5F5F5]">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3.5">
              <span
                v-for="cat in item.category"
                :key="cat"
                class="px-3.5 py-1 text-xs font-medium rounded-full bg-[#F2F2F2] text-[#333333]"
              >
                {{ cat }}
              </span>
            </div>
            <h3 class="text-xl font-semibold text-[#1D1D1D] mb-2 group-hover:text-[#FE4619] transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-sm text-[#555555] mb-4 line-clamp-2 leading-relaxed">
              {{ item.description }}
            </p>
            <div class="inline-flex items-center gap-1.5 text-sm text-[#FE4619] font-semibold">
              <span>{{ $t('portfolio.viewDetails') }}</span>
              <ArrowUpRight class="w-4 h-4" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'

const portfolios = usePortfolios()

useSeoMeta({
  title: 'All Projects | Alif Bima Pradana',
  description: 'Kumpulan project dan case study yang telah saya kerjakan sebagai Fullstack Developer.',
  ogType: 'website',
  ogTitle: 'All Projects | Alif Bima Pradana',
  ogDescription: 'Kumpulan project dan case study yang telah saya kerjakan sebagai Fullstack Developer.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://www.alifbima.my.id/portfolio',
  ogLocale: 'id_ID',
  ogSiteName: 'Alif Bima Pradana',
  twitterCard: 'summary_large_image',
  twitterTitle: 'All Projects | Alif Bima Pradana',
  twitterDescription: 'Kumpulan project dan case study yang telah saya kerjakan sebagai Fullstack Developer.',
  twitterImage: '/og-image.jpg',
  twitterCreator: '@alifbima_'
})
</script>
