<template>
  <footer class="bg-slate-50 dark:bg-[#0b1120] py-12 border-t border-slate-200 dark:border-slate-800 w-full max-w-full overflow-hidden">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 w-full">
      <div class="flex items-center gap-2">
        <ClientOnly>
          <img v-if="!isDarkMode" 
            class="w-24 h-8 rounded" src="/assets/img/bima.png" alt="Logo">
          <img v-else 
            class="w-24 h-8 rounded" src="/assets/img/dark.png" alt="Logo">
          <template #fallback>
            <img class="w-24 h-8 rounded" src="/assets/img/bima.png" alt="Logo">
          </template>
        </ClientOnly>
      </div>
      <p class="text-slate-500 dark:text-slate-400 text-sm">© 2026 All Rights Reserved. Made with ❤️ and Tailwind.
      </p>
      <div class="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
        <a href="#" class="hover:text-primary dark:hover:text-accent-teal">Privacy</a>
        <a href="#" class="hover:text-primary dark:hover:text-accent-teal">Terms</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { isDarkMode } = useDarkMode()
</script>
