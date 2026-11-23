<template>
  <section id="portfolio" class="py-16 sm:py-24 bg-white w-full overflow-hidden">
    <div class="max-w-[1160px] mx-auto px-5 sm:px-8">
      <!-- Header Row -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 reveal">
        <h2 class="text-3xl sm:text-4xl md:text-[46px] font-semibold text-[#1D1D1D] leading-[1.15] tracking-tight">
          {{ $t('portfolio.headingTop') }}<br />
          {{ $t('portfolio.headingPrefix') }}
          <span class="text-[#FE4619]">{{ $t('portfolio.headingAccent') }}</span>
        </h2>

        <NuxtLink
          to="/portfolio"
          class="inline-flex items-center gap-2 bg-[#FE4619] hover:bg-[#e53910] text-white rounded-full px-7 py-3 text-sm sm:text-base font-medium shadow-md shadow-[#FE4619]/25 transition-all hover:scale-105 active:scale-95 shrink-0"
        >
          <span>{{ $t('portfolio.seeMore') }}</span>
          <ArrowUpRight class="w-4 h-4 sm:w-5 sm:h-5" />
        </NuxtLink>
      </div>

      <!-- 2-Card Showcase Carousel with Overlapping Dark Left & Orange Right Arrow Controls -->
      <div class="relative reveal delay-100">
        <!-- Left Arrow Control (Dark) -->
        <button
          type="button"
          @click="prevSlide"
          class="absolute -left-2 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#3A3A3A] hover:bg-[#1D1D1D] text-white border-[4px] border-white shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Portfolio"
        >
          <ArrowLeft class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <!-- Right Arrow Control (Primary Orange) -->
        <button
          type="button"
          @click="nextSlide"
          class="absolute -right-2 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#FE4619] hover:bg-[#e53910] text-white border-[4px] border-white shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Portfolio"
        >
          <ArrowRight class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <!-- Two Side-by-Side Rounded Showcase Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <NuxtLink
            v-for="(item, idx) in visibleCards"
            :key="item.id"
            :to="`/portfolio/${item.slug}`"
            class="group block rounded-[26px] sm:rounded-[32px] overflow-hidden bg-white p-2.5 sm:p-3.5 shadow-[0_14px_44px_rgba(0,0,0,0.08)] border border-neutral-100 hover:shadow-[0_20px_54px_rgba(0,0,0,0.12)] transition-all duration-300"
            :class="idx === 1 ? 'hidden md:block' : 'block'"
          >
            <div class="rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[16/10.5] bg-[#F5F5F5] relative">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Centered Active Project Details Below Carousel -->
      <div v-if="activeItem" class="mt-9 sm:mt-11 text-center max-w-2xl mx-auto reveal delay-200">
        <!-- Category / Tag Pills -->
        <div class="flex flex-wrap items-center justify-center gap-2.5">
          <span
            v-for="tag in activeItem.tags.slice(0, 3)"
            :key="tag"
            class="px-5 py-2 rounded-full bg-[#F2F2F2] text-[#333333] text-xs sm:text-sm font-medium"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Active Project Title + Inline Orange Circular Arrow Badge -->
        <div class="mt-6 flex items-center justify-center">
          <NuxtLink
            :to="`/portfolio/${activeItem.slug}`"
            class="inline-flex items-center justify-center gap-3 group flex-wrap"
          >
            <h3 class="text-xl sm:text-2xl md:text-[30px] font-semibold text-[#1D1D1D] group-hover:text-[#FE4619] transition-colors">
              {{ activeItem.title }}
            </h3>
            <span
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FE4619] text-white inline-flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm"
            >
              <ArrowUpRight class="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </NuxtLink>
        </div>

        <!-- Centered Project Description -->
        <p class="mt-3 text-sm sm:text-[15px] text-[#555555] leading-relaxed">
          {{ activeItem.description }}
        </p>

        <!-- Pagination Dots -->
        <div class="mt-6 flex items-center justify-center gap-2">
          <button
            v-for="(item, idx) in allPortfolios"
            :key="item.id"
            type="button"
            @click="currentIndex = idx"
            :aria-label="`Go to ${item.title}`"
            class="h-2 rounded-full transition-all duration-300 cursor-pointer"
            :class="idx === currentIndex ? 'w-7 bg-[#FE4619]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-vue-next'
import { getFeaturedPortfolios } from '~/data/Portofolio'

const allPortfolios = getFeaturedPortfolios()
const currentIndex = ref(0)

const activeItem = computed(() => allPortfolios[currentIndex.value])

const visibleCards = computed(() => {
  if (allPortfolios.length === 0) return []
  if (allPortfolios.length === 1) return [allPortfolios[0]]
  const nextIdx = (currentIndex.value + 1) % allPortfolios.length
  return [allPortfolios[currentIndex.value], allPortfolios[nextIdx]]
})

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % allPortfolios.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + allPortfolios.length) % allPortfolios.length
}
</script>
