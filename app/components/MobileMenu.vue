<template>
  <!-- Floating Dropdown Card (Slides down smoothly from top, NO backdrop blur overlay) -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="-translate-y-6 opacity-0 scale-95"
    enter-to-class="translate-y-0 opacity-100 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100 scale-100"
    leave-to-class="-translate-y-6 opacity-0 scale-95"
  >
    <div
      v-if="isOpen"
      id="mobile-menu"
      class="md:hidden fixed top-20 sm:top-28 inset-x-0 z-50 px-4 sm:px-6 max-w-lg mx-auto pointer-events-auto"
    >
      <div
        class="w-full bg-white/50 dark:bg-slate-800/95 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-[32px] p-5 sm:p-6 space-y-4 max-h-[85vh] overflow-y-auto"
      >
        <!-- Top Utility Action Bar: Search & Dark Mode Toggle -->
        <div class="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <!-- Search Trigger Button (Primary Theme Color) -->
          <button
            @click="triggerSearch"
            class="flex-1 py-2.5 px-4 rounded-2xl bg-primary/10 hover:bg-primary dark:bg-accent-teal/10 dark:hover:bg-accent-teal text-primary dark:text-accent-teal hover:text-white dark:hover:text-slate-900 font-semibold text-sm flex items-center justify-center gap-2 border border-primary/20 dark:border-accent-teal/20 transition-all duration-200 cursor-pointer shadow-sm"
          >
            <Search class="w-4 h-4" />
            <span>Cari / Search</span>
          </button>

          <!-- Dark / Light Mode Toggle Button -->
          <button
            @click="toggleDarkMode"
            class="py-2.5 px-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm"
          >
            <ClientOnly>
              <Sun v-if="isDarkMode" class="w-4 h-4 text-amber-400" />
              <Moon v-else class="w-4 h-4 text-slate-600" />
              <span>{{ isDarkMode ? 'Terang' : 'Gelap' }}</span>
              <template #fallback>
                <div class="w-4 h-4"></div>
              </template>
            </ClientOnly>
          </button>
        </div>

        <!-- Navigation Links List -->
        <div class="space-y-1 py-1">
          <a
            href="#"
            @click="closeMenu"
            class="py-2.5 px-4 rounded-2xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-primary/5 dark:hover:bg-accent-teal/10 hover:text-primary dark:hover:text-accent-teal transition-all flex items-center gap-3"
          >
            <span>Beranda</span>
          </a>

          <a
            href="#about"
            @click="closeMenu"
            class="py-2.5 px-4 rounded-2xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-primary/5 dark:hover:bg-accent-teal/10 hover:text-primary dark:hover:text-accent-teal transition-all flex items-center gap-3"
          >
            <span>{{ $t('nav.about') }}</span>
          </a>

          <a
            href="#skills"
            @click="closeMenu"
            class="py-2.5 px-4 rounded-2xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-primary/5 dark:hover:bg-accent-teal/10 hover:text-primary dark:hover:text-accent-teal transition-all flex items-center gap-3"
          >
            <span>{{ $t('nav.skills') }}</span>
          </a>

          <a
            href="#portfolio"
            @click="closeMenu"
            class="py-2.5 px-4 rounded-2xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-primary/5 dark:hover:bg-accent-teal/10 hover:text-primary dark:hover:text-accent-teal transition-all flex items-center gap-3"
          >
            <span>{{ $t('nav.work') }}</span>
          </a>

          <a
            href="#experience"
            @click="closeMenu"
            class="py-2.5 px-4 rounded-2xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-primary/5 dark:hover:bg-accent-teal/10 hover:text-primary dark:hover:text-accent-teal transition-all flex items-center gap-3"
          >
            <span>{{ $t('nav.experience') }}</span>
          </a>

          <NuxtLink
            to="/dashboard"
            @click="closeMenu"
            class="py-2.5 px-4 rounded-2xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-primary/5 dark:hover:bg-accent-teal/10 hover:text-primary dark:hover:text-accent-teal transition-all flex items-center gap-3"
          >
            <span>{{ $t('nav.dashboard') }}</span>
          </NuxtLink>
        </div>

        <!-- Contact Primary CTA Button (Uses Primary Brand Color #26048c / Teal) -->
        <a
          href="#contact"
          @click="closeMenu"
          class="w-full py-3.5 rounded-2xl bg-primary hover:bg-primary-light dark:bg-accent-teal dark:hover:bg-teal-300 text-white dark:text-slate-900 font-bold text-base shadow-lg shadow-primary/30 dark:shadow-accent-teal/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-center flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          <Mail class="w-5 h-5" />
          <span>Hubungi Kami</span>
        </a>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Search, Sun, Moon, Mail } from 'lucide-vue-next'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ close: [] }>()

const { isDarkMode, toggleDarkMode } = useDarkMode()

const closeMenu = () => emit('close')

const triggerSearch = () => {
  closeMenu()
  if (import.meta.client) {
    window.dispatchEvent(new CustomEvent('open-search'))
  }
}
</script>
