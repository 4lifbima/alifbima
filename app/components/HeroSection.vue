<template>
  <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid bg-white dark:bg-dark-bg w-full max-w-full">
    <!-- Background Blobs -->
    <div
      class="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-normal dark:bg-primary/20 max-w-[90vw]">
    </div>
    <div
      class="absolute top-0 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-accent-teal/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-normal dark:bg-accent-teal/10 max-w-[90vw]">
    </div>
    <div
      class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-48 md:w-72 md:h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-normal dark:bg-purple-900/20 max-w-[90vw]">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
      <!-- Text Content -->
      <div class="text-center md:text-left reveal active">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary dark:text-accent-teal dark:bg-accent-teal/10 dark:border-accent-teal/20 text-xs font-bold uppercase tracking-wider mb-6">
          <span class="w-2 h-2 rounded-full bg-current animate-pulse"></span>
          {{ $t('hero.badge') }}
        </div>
        <h1
          class="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 break-words">
          Alif Bima <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 dark:from-accent-teal dark:to-cyan-500">Pradana</span>
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          {{ $t('hero.intro') }} <span class="font-semibold text-primary dark:text-slate-200">{{ $t('hero.role') }}</span>
          {{ $t('hero.desc') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#portfolio"
            class="px-8 py-4 rounded-full bg-primary hover:bg-primary-light text-white font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2">
            {{ $t('hero.viewProjects') }} <ArrowRight class="w-4 h-4" />
          </a>
          <a href="/CV_ALIF.pdf"
            class="px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
            <Download class="w-4 h-4" /> {{ $t('hero.downloadCV') }}
          </a>
        </div>
      </div>

      <!-- Visual / Image Carousel -->
      <div class="relative reveal delay-200 hidden md:flex items-center justify-center">
        <!-- Outer glow ring -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-accent-teal/10 to-purple-400/20 blur-3xl animate-blob" />
        </div>

        <!-- Card frame -->
        <div class="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
          <div class="absolute inset-4" />
          <div class="absolute inset-0" />

          <!-- Main carousel container -->
          <div class="relative w-full h-full overflow-hidden">

            <!-- Images (stacked, crossfade) -->
            <div class="relative w-full h-full">
              <transition-group name="carousel-fade" tag="div" class="w-full h-full">
                <img
                  v-for="(img, i) in stackImages"
                  v-show="currentIndex === i"
                  :key="img.src"
                  :src="img.src"
                  :alt="img.label"
                  class="absolute inset-0 w-full h-full object-contain p-6 select-none"
                  draggable="false"
                />
              </transition-group>
            </div>

            <!-- Bottom gradient overlay -->
            <div class="absolute bottom-0 inset-x-0 h-20 pointer-events-none rounded-b-3xl" />
          </div>
        </div>
      </div>
      <!-- /Visual -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Download } from 'lucide-vue-next'

// ── Image carousel ───────────────────────────────────────
const stackImages = [
  { src: '/assets/stack/coder.png',   label: 'Coder' },
  { src: '/assets/stack/vue.png',     label: 'Vue.js' },
  { src: '/assets/stack/laravel.png', label: 'Laravel' },
  { src: '/assets/stack/react.png',   label: 'React' },
  { src: '/assets/stack/kotlin.png',  label: 'Kotlin' },
]

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const goTo = (i: number) => {
  currentIndex.value = i
  resetTimer()
}

const resetTimer = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % stackImages.length
  }, 2500)
}

onMounted(() => resetTimer())
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
  position: absolute;
  inset: 0;
}
.carousel-fade-enter-from {
  opacity: 0;
  transform: scale(1.04);
}
.carousel-fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
.carousel-fade-enter-to,
.carousel-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
