<template>
  <nav class="fixed w-full z-50 glass-nav transition-all duration-300 max-w-full overflow-hidden" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" @click="scrollToTop">
          <ClientOnly>
            <img v-if="!isDarkMode" 
              class="w-24 h-8" src="/assets/img/bima.png" alt="Logo">
            <img v-else 
              class="w-24 h-8" src="/assets/img/dark.png" alt="Logo">
            <template #fallback>
              <img class="w-24 h-8" src="/assets/img/bima.png" alt="Logo">
            </template>
          </ClientOnly>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#about"
            class="text-sm font-medium hover:text-primary dark:hover:text-accent-teal transition-colors text-slate-800 dark:text-slate-200">About</a>
          <a href="#skills"
            class="text-sm font-medium hover:text-primary dark:hover:text-accent-teal transition-colors text-slate-800 dark:text-slate-200">Skills</a>
          <a href="#portfolio"
            class="text-sm font-medium hover:text-primary dark:hover:text-accent-teal transition-colors text-slate-800 dark:text-slate-200">Work</a>
          <a href="#experience"
            class="text-sm font-medium hover:text-primary dark:hover:text-accent-teal transition-colors text-slate-800 dark:text-slate-200">Experience</a>
          <a href="#contact"
            class="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
            Let's Talk
          </a>

          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle dark mode">
            <ClientOnly>
              <Sun v-if="isDarkMode" class="w-5 h-5" />
              <Moon v-else class="w-5 h-5" />
              <template #fallback>
                <div class="w-5 h-5"></div>
              </template>
            </ClientOnly>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-4">
          <button @click="toggleDarkMode"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 z-[60] relative"
            aria-label="Toggle dark mode">
            <ClientOnly>
              <Sun v-if="isDarkMode" class="w-5 h-5" />
              <Moon v-else class="w-5 h-5" />
              <template #fallback>
                <div class="w-5 h-5"></div>
              </template>
            </ClientOnly>
          </button>
          <button @click="toggleMobileMenu"
            class="text-slate-600 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 focus:outline-none p-3 border-2 border-slate-200 dark:border-slate-600 rounded-2xl z-[60] relative"
            aria-label="Toggle mobile menu">
            <Menu class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Sun, Moon, Menu } from 'lucide-vue-next'

const { isDarkMode, toggleDarkMode } = useDarkMode()

const emit = defineEmits<{
  toggleMenu: []
}>()

const toggleMobileMenu = () => {
  emit('toggleMenu')
}

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
