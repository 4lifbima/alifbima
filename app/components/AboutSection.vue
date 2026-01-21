<template>
  <section id="about" class="py-24 relative bg-white dark:bg-dark-bg w-full max-w-full overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <!-- Image -->
        <div class="md:col-span-5 relative reveal w-full">
          <div class="relative lg:max-h-[450px] max-h-[350px] rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl w-full">
            <div class="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              <User class="w-24 h-24 text-slate-300 dark:text-slate-600" />
            </div>
            <img src="/assets/img/alif.jpeg"
              alt="Profile"
              class="object-cover w-full h-full hover:scale-105 transition-transform duration-700 relative z-10 opacity-90 hover:opacity-100">
          </div>
          <div
            class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-grid rounded-full border border-slate-200 dark:border-slate-700 z-0 max-w-[90%]">
          </div>
        </div>

        <!-- Content -->
        <div class="md:col-span-7 reveal delay-100">
          <h2 class="text-primary dark:text-accent-teal font-bold tracking-wider uppercase text-sm mb-3">About
            Me</h2>
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 break-words">Bridging the gap
            <br class="hidden sm:block"> design & engineering.</h3>
          <div class="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Halo! Saya Alif Bima Pradana, seorang profesional yang berdedikasi dalam menciptakan solusi
              digital yang berdampak. Dengan latar belakang kuat di Computer Science dan passion mendalam
              pada User Interface, saya membantu brand menerjemahkan visi mereka menjadi realitas digital.
            </p>
            <p>
              Filosofi kerja saya sederhana: kualitas kode sama pentingnya dengan estetika visual. Saya
              memastikan setiap pixel presisi dan setiap baris kode efisien.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-6 mt-8">
            <div class="flex items-start gap-3 border border-slate-200 dark:border-slate-700 p-4 rounded-xl">
              <Zap class="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
              <div>
                <h5 class="font-bold text-slate-900 dark:text-white">Fast Performance</h5>
                <p class="text-sm text-slate-500 dark:text-slate-400">Optimized code & assets.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 border border-slate-200 dark:border-slate-700 p-4 rounded-xl">
              <Layout class="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h5 class="font-bold text-slate-900 dark:text-white">Responsive</h5>
                <p class="text-sm text-slate-500 dark:text-slate-400">Looks good on all screens.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { User, Zap, Layout } from 'lucide-vue-next'
</script>
