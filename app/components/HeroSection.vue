<template>
  <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid bg-white dark:bg-dark-bg w-full max-w-full">
    <!-- Background Blobs - constrained to prevent overflow -->
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
          Welcome to my website
        </div>
        <h1
          class="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 break-words">
          Alif Bima <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 dark:from-accent-teal dark:to-cyan-500">Pradana</span>
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Saya seorang <span class="font-semibold text-primary dark:text-slate-200">Fullstack Developer</span>
          yang berfokus membangun aplikasi, sistem informasi, dan website yang fungsional dan efisien.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#portfolio"
            class="px-8 py-4 rounded-full bg-primary hover:bg-primary-light text-white font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2">
            View Projects <ArrowRight class="w-4 h-4" />
          </a>
          <a href="#contact"
            class="px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
            <Download class="w-4 h-4" /> Download CV
          </a>
        </div>
      </div>

      <!-- Visual / Illustration -->
      <div class="relative reveal delay-200 hidden md:block">
        <div class="relative w-full aspect-square max-w-lg mx-auto">
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-teal/10 rounded-3xl transform rotate-3">
          </div>
          <div
            class="absolute inset-0 bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden transform -rotate-3 hover:rotate-0 transition-all duration-700 ease-out p-6 group">
            <div class="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="w-1/3 h-32 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse"></div>
                <div
                  class="w-2/3 h-32 bg-primary/5 dark:bg-primary/20 rounded-xl border border-dashed border-primary/30 flex items-center justify-center">
                  <Code2 class="w-8 h-8 text-primary dark:text-primary-light opacity-50" />
                </div>
              </div>
              <div class="h-4 bg-slate-100 dark:bg-slate-800 rounded w-3/4"></div>
              <div class="h-4 bg-slate-100 dark:bg-slate-800 rounded w-1/2"></div>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div
                  class="p-4 rounded-xl bg-orange-50 dark:bg-slate-800/50 border border-orange-100 dark:border-slate-700">
                  <div
                    class="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-2">
                    <Figma class="w-4 h-4 text-orange-500" />
                  </div>
                  <div class="h-2 bg-orange-200 dark:bg-slate-700 rounded w-12"></div>
                </div>
                <div
                  class="p-4 rounded-xl bg-blue-50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700">
                  <div
                    class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                    <Atom class="w-4 h-4 text-blue-500" />
                  </div>
                  <div class="h-2 bg-blue-200 dark:bg-slate-700 rounded w-12"></div>
                </div>
              </div>
            </div>
            <div
              class="absolute bottom-6 right-6 bg-white dark:bg-dark-card p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-600 flex items-center gap-3 animate-[bounce_3s_infinite]">
              <div
                class="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <CheckCircle2 class="w-6 h-6" />
              </div>
              <div>
                <p class="text-xs text-slate-400 font-medium">Status</p>
                <p class="text-sm font-bold text-slate-800 dark:text-white">On Track</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Download, Code2, Figma, Atom, CheckCircle2 } from 'lucide-vue-next'
</script>
