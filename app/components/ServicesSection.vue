<template>
  <section
    id="services"
    class="w-full bg-[#1D1D1D] rounded-[32px] sm:rounded-[48px] text-white py-14 sm:py-20 md:py-24 px-5 sm:px-8 lg:px-14 relative overflow-hidden"
  >
    <!-- Subtle ambient top highlight -->
    <div
      class="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[280px] bg-[#FE4619]/10 rounded-full blur-[110px] pointer-events-none"
    />

    <div class="max-w-[1160px] mx-auto relative z-10">
      <!-- Header Row -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 pb-10 border-b border-white/15 reveal">
        <h2 class="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight leading-tight">
          {{ $t('services.titlePrefix') }}
          <span class="text-[#FE4619]">{{ $t('services.titleAccent') }}</span>
        </h2>
        <p class="text-neutral-300/80 text-sm sm:text-[15px] leading-relaxed max-w-md font-normal">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <!-- 3 Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 mt-12">
        <div
          v-for="(service, idx) in services"
          :key="service.key"
          @mouseenter="activeIndex = idx"
          @click="activeIndex = idx"
          class="group relative rounded-[28px] overflow-hidden flex flex-col justify-between transition-all duration-300 border cursor-pointer reveal"
          :class="[
            idx === activeIndex
              ? 'bg-[#FE4619] border-[#FE4619] shadow-2xl shadow-[#FE4619]/20'
              : 'bg-[#282828] border-white/10 hover:border-white/20',
            idx > 0 ? `delay-${idx * 100}` : ''
          ]"
        >
          <!-- Card Title Header -->
          <div
            class="px-6 sm:px-7 pt-6 sm:pt-7 pb-5 border-b transition-colors duration-300"
            :class="idx === activeIndex ? 'border-white/25' : 'border-white/10'"
          >
            <h3 class="text-xl sm:text-[23px] font-medium text-white tracking-tight">
              {{ $t(service.titleKey) }}
            </h3>
          </div>

          <!-- 3-Layer Stacked Mockup Preview Deck -->
          <div class="pt-7 relative flex flex-col justify-end flex-1">
            <!-- Recessed Layer 1 (backmost) -->
            <div
              class="w-[76%] h-4 mx-auto rounded-t-[16px] transition-colors duration-300"
              :class="idx === activeIndex ? 'bg-white/25' : 'bg-white/10'"
            />
            <!-- Recessed Layer 2 (middle) -->
            <div
              class="w-[88%] h-4 mx-auto -mt-1.5 rounded-t-[18px] transition-colors duration-300"
              :class="idx === activeIndex ? 'bg-white/40' : 'bg-white/20'"
            />
            <!-- Front Preview Image Card -->
            <div class="relative w-full aspect-[4/3.1] -mt-1.5 rounded-[24px] overflow-hidden bg-white shadow-xl">
              <img
                :src="service.image"
                :alt="$t(service.titleKey)"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- Concave Bottom-Right Cutout + Circular Arrow Button -->
          <div class="notch-corner" style="--notch-bg: #1D1D1D;">
            <NuxtLink
              :to="service.link"
              class="w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105"
              :class="idx === activeIndex ? 'bg-[#FE4619] shadow-lg shadow-[#FE4619]/35' : 'bg-[#2C2C2C] group-hover:bg-[#FE4619]'"
              :aria-label="$t(service.titleKey)"
            >
              <ArrowUpRight class="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

// Default highlighted card is the center card (index 1), matching reference design
const activeIndex = ref(1)

const services = [
  {
    key: 'uiux',
    titleKey: 'services.card1Title',
    image: '/portofolio/money.png',
    link: '/portfolio/aplikasi-money-tracker'
  },
  {
    key: 'webdev',
    titleKey: 'services.card2Title',
    image: '/portofolio/desa.png',
    link: '/portfolio/website-desa-digital'
  },
  {
    key: 'landing',
    titleKey: 'services.card3Title',
    image: '/portofolio/ai.png',
    link: '/portfolio/buildify-ai-web-generator'
  }
]
</script>

