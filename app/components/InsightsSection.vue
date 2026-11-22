<template>
  <section id="blog" class="py-16 sm:py-24 bg-white w-full overflow-hidden">
    <div class="max-w-[1160px] mx-auto px-5 sm:px-8">
      <!-- Header Row -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 reveal">
        <h2 class="text-3xl sm:text-4xl md:text-[46px] font-semibold text-[#1D1D1D] leading-[1.12] tracking-tight">
          {{ $t('insights.headingTop') }}<br />
          {{ $t('insights.headingBottom') }}
        </h2>

        <NuxtLink
          to="/artikel"
          class="inline-flex items-center gap-2 bg-[#FE4619] hover:bg-[#e53910] text-white rounded-full px-7 py-3 text-sm sm:text-base font-medium shadow-md shadow-[#FE4619]/25 transition-all hover:scale-105 active:scale-95 shrink-0"
        >
          <span>{{ $t('insights.viewAll') }}</span>
          <ArrowUpRight class="w-4 h-4 sm:w-5 sm:h-5" />
        </NuxtLink>
      </div>

      <!-- 3-Column Blog Post Cards (Matches Image 1 Top) -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-7 lg:gap-8">
        <NuxtLink
          v-for="(artikel, idx) in featuredArtikels"
          :key="artikel.id"
          :to="`/artikel/${artikel.slug}`"
          class="group block reveal"
          :class="idx > 0 ? `delay-${idx * 100}` : ''"
        >
          <!-- Image Box with Concave Bottom-Right Cutout & Circular Arrow Button -->
          <div class="relative aspect-[4/3.6] rounded-[26px] overflow-hidden bg-neutral-100">
            <img
              :src="artikel.image"
              :alt="artikel.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <!-- Concave White Bottom-Right Notch -->
            <div class="notch-corner" style="--notch-bg: #FFFFFF;">
              <div
                class="w-[38px] h-[38px] sm:w-[66px] sm:h-[66px] rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105 mr-2 mb-1"
                :class="idx === 1 ? 'bg-[#FE4619] shadow-lg shadow-[#FE4619]/30' : 'bg-[#222222] group-hover:bg-[#FE4619]'"
              >
                <ArrowUpRight class="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
              </div>
            </div>
          </div>

          <!-- Category Pill -->
          <div class="mt-5">
            <span class="inline-block px-4 py-1.5 rounded-full bg-[#F2F2F2] text-[#333333] text-xs sm:text-sm font-medium">
              {{ artikel.category }}
            </span>
          </div>

          <!-- Article Title -->
          <h3 class="mt-3.5 text-lg sm:text-[21px] font-semibold text-[#1D1D1D] group-hover:text-[#FE4619] transition-colors line-clamp-2 leading-[1.35]">
            {{ artikel.title }}
          </h3>

          <!-- Author & Date with Orange Dot Separators -->
          <div class="mt-3.5 flex items-center flex-wrap gap-x-5 gap-y-1 text-xs sm:text-sm text-[#555555]">
            <span class="inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FE4619] shrink-0" />
              <span>{{ artikel.author }}</span>
            </span>
            <span class="inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FE4619] shrink-0" />
              <span>{{ formatDate(artikel.date) }}</span>
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { getFeaturedArtikels } from '~/data/Artikel'

const { locale } = useI18n()
const featuredArtikels = getFeaturedArtikels().slice(0, 3)

const formatDate = (dateStr: string) => {
  const loc = locale.value === 'ja' ? 'ja-JP' : locale.value === 'en' ? 'en-GB' : 'id-ID'
  return new Date(dateStr).toLocaleDateString(loc, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>
