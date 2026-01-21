<template>
  <section id="skills" class="py-24 bg-slate-50 dark:bg-[#151e32] w-full max-w-full overflow-hidden relative">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 reveal">
        <span class="inline-block px-4 py-1.5 bg-primary/10 dark:bg-accent-teal/10 text-primary dark:text-accent-teal text-sm font-bold rounded-full mb-4">
          Tech Stack
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          Technical <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 dark:from-accent-teal dark:to-cyan-400">Proficiency</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Toolkit yang saya gunakan sebagai Fullstack Developer untuk menghidupkan ide-ide kreatif menjadi produk fungsional.
        </p>
      </div>

      <!-- All Skills in One Card -->
      <div class="reveal">
        <div class="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-xl">
          <div class="flex justify-center">
            <ClientOnly>
              <img 
                v-if="!isDarkMode"
                src="https://skillicons.dev/icons?i=html,css,js,ts,vite,astro,react,vue,nextjs,nuxtjs,tailwind,bootstrap,alpinejs,nodejs,express,php,laravel,nestjs,django,flutter,spring,go,mysql,postgres,mongodb,supabase,sqlite,prisma,nginx,vercel,firebase,git,github,vscode,figma,postman,linux,ubuntu,npm,yarn&perline=10" 
                alt="My Skills" 
                class="w-[320px] lg:w-full h-auto max-w-7xl"
              >
              <img 
                v-else
                src="https://skillicons.dev/icons?i=html,css,js,ts,vite,astro,react,vue,nextjs,nuxtjs,tailwind,bootstrap,alpinejs,nodejs,express,php,laravel,nestjs,django,flutter,spring,go,mysql,postgres,mongodb,supabase,sqlite,prisma,nginx,vercel,firebase,git,github,vscode,figma,postman,linux,ubuntu,npm,yarn&theme=dark&perline=10" 
                alt="My Skills" 
                class="w-[320px] lg:w-full h-auto max-w-7xl"
              >
              <template #fallback>
                <div class="h-32 flex items-center justify-center text-slate-400">Loading icons...</div>
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isDarkMode } = useDarkMode()
</script>
