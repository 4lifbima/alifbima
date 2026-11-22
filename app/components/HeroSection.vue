<template>
  <section
    id="home"
    class="relative w-full bg-white pt-24 sm:pt-28 md:pt-32 pb-0 overflow-hidden"
  >
    <div class="max-w-[1160px] mx-auto px-5 sm:px-8 relative">
      <!-- Top Greeting Pill with Hand-Drawn Orange Spark Rays -->
      <div class="flex justify-center">
        <div class="relative inline-flex items-center">
          <span
            class="px-5 py-1 rounded-full border border-[#222222] bg-white text-[#1D1D1D] text-sm font-medium tracking-tight"
          >
            {{ $t('hero.hello') }}
          </span>
          <!-- 3 Hand-drawn orange rays top-right -->
          <svg
            class="absolute -top-3.5 -right-5 w-6 h-6 text-[#FE4619] pointer-events-none"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 17L10 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M11 20L21 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M14 24L24 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
      </div>

      <!-- Main 2-Line Centered Headline -->
      <div class="text-center mt-3 sm:mt-4 relative z-10">
        <h1 class="text-[36px] sm:text-[54px] md:text-[66px] lg:text-[74px] font-bold text-[#1D1D1D] tracking-tight leading-[1.08]">
          {{ $t('hero.im') }}
          <span class="text-[#FE4619]">{{ $t('hero.name') }}</span>
          <br />
          <span>Software Engineer</span>
        </h1>
      </div>

      <!-- Mobile Compact Trust Bar (Quote/Stat + 5 Stars/Years) -->
      <div class="grid lg:hidden grid-cols-2 gap-4 mt-7 mb-4 items-center max-w-md mx-auto">
        <div class="text-left border-r border-neutral-200 pr-3">
          <div class="text-2xl sm:text-3xl font-bold text-[#1D1D1D] leading-none">
            {{ $t('hero.statNumber') }}
          </div>
          <p class="text-xs sm:text-sm text-[#555555] mt-1 font-medium">
            {{ $t('hero.statLabel') }}
          </p>
        </div>
        <div class="text-right pl-2">
          <div class="flex items-center justify-end gap-0.5 mb-1">
            <Star
              v-for="n in 5"
              :key="n"
              class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FE4619] text-[#FE4619]"
            />
          </div>
          <div class="text-xl sm:text-2xl font-bold text-[#1D1D1D] leading-tight">
            {{ $t('hero.years') }}
          </div>
          <p class="text-xs sm:text-sm text-[#555555] font-medium">
            {{ $t('hero.experienceLabel') }}
          </p>
        </div>
      </div>

      <!-- 3-Column Hero Stage -->
      <div class="grid grid-cols-1 lg:grid-cols-12 items-end relative">
        <!-- Left Column (Desktop): Quote + Stat + Hand-drawn Curved Arrow -->
        <div class="hidden lg:flex lg:col-span-3 flex-col justify-center self-center pb-14 relative z-10">
          <!-- Opening Quote Mark -->
          <svg
            class="w-7 h-7 text-[#1D1D1D] mb-2.5"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10.5 14.5C12.985 14.5 15 16.515 15 19C15 21.485 12.985 23.5 10.5 23.5C8.015 23.5 6 21.485 6 19C6 13.5 9.2 9.2 13.8 7.5L14.8 9.8C11.9 11 10.2 12.8 9.8 14.6C10.03 14.53 10.26 14.5 10.5 14.5ZM22.5 14.5C24.985 14.5 27 16.515 27 19C27 21.485 24.985 23.5 22.5 23.5C20.015 23.5 18 21.485 18 19C18 13.5 21.2 9.2 25.8 7.5L26.8 9.8C23.9 11 22.2 12.8 21.8 14.6C22.03 14.53 22.26 14.5 22.5 14.5Z" />
          </svg>
          <p class="text-[14px] text-[#333333] leading-[1.6] font-medium max-w-[235px]">
            {{ $t('hero.quote') }}
          </p>

          <div class="mt-8">
            <div class="text-[32px] font-bold text-[#1D1D1D] leading-none">
              {{ $t('hero.statNumber') }}
            </div>
            <div class="text-[13px] text-[#555555] mt-1.5 font-medium">
              {{ $t('hero.statLabel') }}
            </div>
          </div>

          <!-- Hand-drawn curved black arrow pointing to CTA button -->
          <svg
            class="absolute -right-14 bottom-4 w-20 h-16 text-[#1D1D1D] pointer-events-none"
            viewBox="0 0 90 70"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M22 8C10 28 24 54 74 52"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M65 44L76 52L66 60"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- Center Column: Vibrant Orange Semicircle + Portrait + Floating Dual CTA Pill -->
        <div class="lg:col-span-6 relative flex flex-col items-center justify-end mt-2 sm:-mt-4 lg:-mt-10 pt-4">
          <!-- Orange Semicircle Dome Flush at Bottom -->
          <div
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[310px] sm:w-[440px] md:w-[510px] h-[160px] sm:h-[225px] md:h-[260px] bg-[#FE4619] rounded-t-full z-0"
            aria-hidden="true"
          />

          <!-- Small Hand-drawn Star Doodle on Right Shoulder of Dome -->
          <svg
            class="hidden sm:block absolute bottom-[185px] md:bottom-[210px] right-[12%] md:right-[16%] w-7 h-7 text-[#1D1D1D] z-20 pointer-events-none"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M16 4L19.1 11.4L27 12.1L21 17.3L22.8 25L16 20.9L9.2 25L11 17.3L5 12.1L12.9 11.4L16 4Z"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
          </svg>

          <!-- Portrait Image Rising Above Semicircle -->
          <img
            src="/assets/img/alif-hero.png"
            alt="Alif Bima Pradana"
            class="relative z-10 w-[290px] sm:w-[390px] md:w-[440px] h-auto object-contain object-bottom select-none pointer-events-none"
          />

          <!-- Floating White Pill CTA Bar: Portfolio (orange) + Hire Me (outlined) -->
          <div class="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 w-max max-w-[92vw]">
            <div class="bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.18)] border border-white flex items-center gap-1.5">
              <a
                href="#portfolio"
                class="inline-flex items-center gap-1.5 bg-[#FE4619] hover:bg-[#e53910] text-white rounded-full px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-[15px] font-medium transition-all active:scale-95"
              >
                <span>{{ $t('hero.portfolioBtn') }}</span>
                <ArrowUpRight class="w-4 h-4" />
              </a>
              <button
                type="button"
                @click="openHireModal"
                class="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-[#1D1D1D] border border-[#222222] rounded-full px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-[15px] font-medium transition-all active:scale-95 cursor-pointer"
              >
                {{ $t('hero.hireBtn') }}
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column (Desktop): 5 Orange Stars + Years Experience + Crisp Bottom Line -->
        <div class="hidden lg:flex lg:col-span-3 flex-col items-end justify-center self-center pb-20 text-right z-10">
          <div class="flex items-center gap-1 mb-2.5">
            <Star
              v-for="n in 5"
              :key="n"
              class="w-5 h-5 fill-[#FE4619] text-[#FE4619]"
            />
          </div>
          <div class="text-[36px] xl:text-[42px] font-bold text-[#1D1D1D] leading-tight">
            {{ $t('hero.years') }}
          </div>
          <div class="text-[16px] text-[#333333] font-medium mt-0.5">
            {{ $t('hero.experienceLabel') }}
          </div>
          <div class="w-40 h-[2px] bg-[#1D1D1D] mt-4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight, Star } from 'lucide-vue-next'

const openHireModal = () => {
  if (import.meta.client) {
    window.dispatchEvent(new CustomEvent('open-hire-modal'))
  }
}
</script>
