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
          {{ $t('insights.allTitle') }}
        </h1>
        <p class="text-base sm:text-lg text-[#555555] max-w-2xl">
          {{ $t('insights.allSubtitle') }}
        </p>
      </div>

      <!-- Articles Grid Matching Notched Card Style -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="(item, idx) in artikels"
          :key="item.id"
          :to="`/artikel/${item.slug}`"
          class="group block"
        >
          <div class="relative aspect-[4/3.6] rounded-[26px] overflow-hidden bg-neutral-100">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="notch-corner" style="--notch-bg: #FFFFFF;">
              <div
                class="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105"
                :class="idx % 3 === 1 ? 'bg-[#FE4619]' : 'bg-[#222222] group-hover:bg-[#FE4619]'"
              >
                <ArrowUpRight class="w-6 h-6 stroke-[1.75]" />
              </div>
            </div>
          </div>

          <div class="mt-5">
            <span class="inline-block px-4 py-1.5 rounded-full bg-[#F2F2F2] text-[#333333] text-xs font-medium">
              {{ item.category }}
            </span>
          </div>

          <h3 class="mt-3 text-lg sm:text-xl font-semibold text-[#1D1D1D] group-hover:text-[#FE4619] transition-colors line-clamp-2 leading-snug">
            {{ item.title }}
          </h3>

          <div class="mt-3 flex items-center flex-wrap gap-x-5 gap-y-1 text-xs sm:text-sm text-[#555555]">
            <span class="inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FE4619]" />
              <span>{{ item.author }}</span>
            </span>
            <span class="inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FE4619]" />
              <span>{{ formatDate(item.date) }}</span>
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'

const { locale } = useI18n()
const artikels = useArtikels()

const formatDate = (dateStr: string) => {
  const loc = locale.value === 'ja' ? 'ja-JP' : locale.value === 'en' ? 'en-GB' : 'id-ID'
  return new Date(dateStr).toLocaleDateString(loc, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

useSeoMeta({
  title: 'All Articles | Alif Bima Pradana',
  description: 'Kumpulan artikel dan insights tentang development, design, dan teknologi.',
  ogType: 'website',
  ogTitle: 'All Articles | Alif Bima Pradana',
  ogDescription: 'Kumpulan artikel dan insights tentang development, design, dan teknologi.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://www.alifbima.my.id/artikel',
  ogLocale: 'id_ID',
  ogSiteName: 'Alif Bima Pradana',
  twitterCard: 'summary_large_image',
  twitterTitle: 'All Articles | Alif Bima Pradana',
  twitterDescription: 'Kumpulan artikel dan insights tentang development, design, dan teknologi.',
  twitterImage: '/og-image.jpg',
  twitterCreator: '@alifbima_'
})
</script>
