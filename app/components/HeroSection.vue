<template>
  <section class="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-grid bg-white dark:bg-dark-bg w-full max-w-full">
    <!-- Ambient Background Glass Blobs -->
    <div
      class="absolute top-10 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/25 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-normal dark:bg-primary/20 pointer-events-none"
    />
    <div
      class="absolute top-20 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent-teal/25 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-normal dark:bg-accent-teal/15 pointer-events-none"
    />
    <div
      class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 md:w-[450px] md:h-[450px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000 dark:mix-blend-normal dark:bg-indigo-900/20 pointer-events-none"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
      <!-- Left Column: Text & Hero Actions (Col 7) -->
      <div class="lg:col-span-7 text-center lg:text-left reveal active">
        <!-- Status Badge -->
        <div
          class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-md shadow-sm mb-6"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span class="text-xs font-bold text-slate-700 dark:text-slate-200 tracking-wide uppercase">
            {{ $t('hero.badge') }}
          </span>
        </div>

        <!-- Main Title -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6 break-words"
        >
          Alif Bima
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-accent-teal dark:from-accent-teal dark:via-cyan-300 dark:to-teal-200">
            Pradana
          </span>
        </h1>

        <!-- Subtitle Paragraph -->
        <p class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
          {{ $t('hero.intro') }}
          <span class="font-bold text-primary dark:text-accent-teal">{{ $t('hero.role') }}</span>
          {{ $t('hero.desc') }}
        </p>

        <!-- CTA Buttons Group -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
          <a
            href="#portfolio"
            class="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-light text-white font-bold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 text-sm tracking-wide group"
          >
            <span>{{ $t('hero.viewProjects') }}</span>
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/CV_ALIF.pdf"
            target="_blank"
            class="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 text-slate-800 dark:text-slate-100 font-bold hover:bg-white dark:hover:bg-slate-800 hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 text-sm"
          >
            <Download class="w-4 h-4 text-primary dark:text-accent-teal" />
            <span>{{ $t('hero.downloadCV') }}</span>
          </a>
        </div>
      </div>

      <!-- Right Column: Modern Glass Showcase Frame (Col 5) -->
      <div class="lg:col-span-5 flex justify-center lg:justify-end reveal delay-200">
        <!-- Floating Glass Card Outer Container -->
        <div class="relative w-full max-w-md lg:max-w-lg">
          <!-- Ambient Glow Effect behind card -->
          <div class="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-indigo-500/20 to-accent-teal/30 rounded-[45px] blur-2xl opacity-70 animate-pulse pointer-events-none" />

          <!-- Floating Glass Badge Top Left -->
          <div
            class="absolute -top-5 -left-3 sm:-left-6 z-20 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/80 dark:border-slate-800 shadow-xl flex items-center gap-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300"
          >
            <div class="p-2 rounded-xl bg-primary/10 dark:bg-accent-teal/10 text-primary dark:text-accent-teal">
              <Sparkles class="w-4 h-4" />
            </div>
            <div>
              <p class="text-[10px] font-extrabold uppercase text-slate-400">Tech Stack</p>
              <p class="text-xs font-bold text-slate-800 dark:text-slate-100">{{ currentImageLabel }} Developer</p>
            </div>
          </div>

          <!-- Main Glass Card Frame -->
          <div
            class="relative z-10 w-full bg-white/70 dark:bg-slate-900/75 backdrop-blur-2xl border border-white/90 dark:border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[40px] p-6 sm:p-8 overflow-hidden"
          >
            <!-- Card Glass Header Bar -->
            <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/50 dark:border-slate-800/80">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
              </div>
              <span class="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">portfolio.dev</span>
            </div>

            <!-- Image Stack Display Window -->
            <div class="relative w-full h-64 sm:h-72 lg:h-80 flex items-center justify-center">
              <TransitionGroup name="carousel-fade" tag="div" class="w-full h-full relative">
                <img
                  v-for="(img, i) in stackImages"
                  v-show="currentIndex === i"
                  :key="img.src"
                  :src="img.src"
                  :alt="img.label"
                  class="absolute inset-0 w-full h-full object-contain p-4 select-none drop-shadow-xl"
                  draggable="false"
                />
              </TransitionGroup>
            </div>

            <!-- Interactive Tech Stack Indicators -->
            <div class="pt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <button
                  v-for="(img, i) in stackImages"
                  :key="img.label"
                  @click="goTo(i)"
                  :title="img.label"
                  class="h-2 rounded-full transition-all duration-300"
                  :class="currentIndex === i ? 'w-7 bg-primary dark:bg-accent-teal' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'"
                />
              </div>
              <span class="text-xs font-bold text-primary dark:text-accent-teal bg-primary/5 dark:bg-accent-teal/10 px-3 py-1 rounded-full border border-primary/10 dark:border-accent-teal/20">
                {{ stackImages[currentIndex].label }}
              </span>
            </div>
          </div>

          <!-- Floating Glass Badge Bottom Right -->
          <div
            class="absolute -bottom-4 -right-3 sm:-right-6 z-20 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/80 dark:border-slate-800 shadow-xl flex items-center gap-3 transform rotate-2 hover:rotate-0 transition-transform duration-300"
          >
            <div class="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
              <ShieldCheck class="w-4 h-4" />
            </div>
            <div>
              <p class="text-[10px] font-extrabold uppercase text-slate-400">Status</p>
              <p class="text-xs font-bold text-slate-800 dark:text-slate-100">100% Ready for Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Download, Sparkles, Code, CheckCircle2, ShieldCheck } from 'lucide-vue-next'

// ── Image carousel ───────────────────────────────────────
const stackImages = [
  { src: '/assets/stack/coder.png',   label: 'Coder' },
  { src: '/assets/stack/vue.png',     label: 'Vue.js' },
  { src: '/assets/stack/laravel.png', label: 'Laravel' },
  { src: '/assets/stack/react.png',   label: 'React' },
  { src: '/assets/stack/kotlin.png',  label: 'Kotlin' },
]

const currentIndex = ref(0)
const currentImageLabel = computed(() => stackImages[currentIndex.value].label)

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
  transform: scale(1.05);
}
.carousel-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.carousel-fade-enter-to,
.carousel-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
