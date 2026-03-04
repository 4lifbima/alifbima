<template>
  <nav class="fixed w-full z-50 glass-nav transition-all duration-300 max-w-full overflow-x-hidden" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" @click="scrollToTop">
          <ClientOnly>
            <img v-if="!isDarkMode" 
              class="lg:w-42 w-30 h-6 lg:h-10" src="/icon/my-icon.png" alt="Logo">
            <img v-else 
              class="lg:w-42 w-30 h-6 lg:h-10" src="/icon/my-dark.png" alt="Logo">
            <template #fallback>
              <img class="lg:w-42 w-30 h-6 lg:h-10" src="/icon/my-icon.png" alt="Logo">
            </template>
          </ClientOnly>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#about"
            class="text-sm font-medium hover:text-primary dark:hover:text-accent-teal transition-colors text-slate-800 dark:text-slate-200">{{ $t('nav.about') }}</a>
          <a href="#skills"
            class="text-sm font-medium hover:text-primary dark:hover:text-accent-teal transition-colors text-slate-800 dark:text-slate-200">{{ $t('nav.skills') }}</a>
          <a href="#portfolio"
            class="text-sm font-medium hover:text-primary dark:hover:text-accent-teal transition-colors text-slate-800 dark:text-slate-200">{{ $t('nav.work') }}</a>
          <a href="#experience"
            class="text-sm font-medium hover:text-primary dark:hover:text-accent-teal transition-colors text-slate-800 dark:text-slate-200">{{ $t('nav.experience') }}</a>
          <NuxtLink to="/dashboard"
            class="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2"
            active-class="bg-primary-dark shadow-primary/60">
              <ChartColumnBig class="w-4 h-4" />
            {{ $t('nav.dashboard') }}
          </NuxtLink>

          <!-- Language Switcher -->
          <div class="relative" ref="langDropdownRef">
            <button
              @click="langOpen = !langOpen"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary dark:hover:border-accent-teal transition-colors"
            >
              <img :src="currentLocaleFlag" :alt="currentLocaleCode" class="w-5 h-3.5 object-cover rounded-sm" />
              <span>{{ currentLocaleCode.toUpperCase() }}</span>
              <ChevronDown class="w-3.5 h-3.5 transition-transform" :class="{ 'rotate-180': langOpen }" />
            </button>

            <Teleport to="body">
              <Transition name="lang-drop">
                <div
                  v-if="langOpen"
                  :style="dropdownStyle"
                  class="fixed w-44 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-2xl z-[9999] py-1"
                >
                  <button
                    v-for="loc in availableLocales"
                    :key="loc.code"
                    @click="switchLang(loc.code)"
                    class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-left text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    :class="{ 'bg-primary/5 dark:bg-accent-teal/10 text-primary dark:text-accent-teal font-semibold': loc.code === currentLocaleCode }"
                  >
                    <img :src="loc.flag" :alt="loc.name" class="w-6 h-4 object-cover rounded-sm flex-shrink-0 shadow-sm" />
                    <span>{{ loc.name }}</span>
                    <span v-if="loc.code === currentLocaleCode" class="ml-auto text-primary dark:text-accent-teal">✓</span>
                  </button>
                </div>
              </Transition>
            </Teleport>
          </div>

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
          <!-- Mobile Lang Switcher (simple cycle) -->
          <button
            @click="cycleLang"
            class="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors z-[60] relative"
          >
            <img :src="currentLocaleFlag" :alt="currentLocaleCode" class="w-5 h-3.5 object-cover rounded-sm" />
            <span>{{ currentLocaleCode.toUpperCase() }}</span>
          </button>
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
            class="text-slate-600 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 focus:outline-none p-2 border-2 border-slate-200 dark:border-slate-600 rounded-xl z-[60] relative"
            aria-label="Toggle mobile menu">
            <Menu class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Menu, ChartColumnBig, ChevronDown } from 'lucide-vue-next'

const { isDarkMode, toggleDarkMode } = useDarkMode()
const { locale, locales, setLocale } = useI18n()

const emit = defineEmits<{ toggleMenu: [] }>()
const toggleMobileMenu = () => emit('toggleMenu')

const scrollToTop = () => {
  if (import.meta.client) window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ── Language ─────────────────────────────────────────────
const langFlags: Record<string, string> = {
  id: '/assets/img/bendera-indonesia.png',
  en: '/assets/img/bendera-inggris.svg',
  ja: '/assets/img/bendera-jepang.png'
}
const langOpen = ref(false)
const langDropdownRef = ref<HTMLElement | null>(null)

const currentLocaleCode = computed(() => locale.value as string)
const currentLocaleFlag = computed(() => langFlags[currentLocaleCode.value] ?? '/assets/img/bendera-indonesia.png')

const availableLocales = computed(() =>
  (locales.value as { code: string; name: string }[]).map(l => ({
    ...l,
    flag: langFlags[l.code] ?? '🌐'
  }))
)

// Position for the Teleported dropdown
const dropdownStyle = computed(() => {
  if (!langDropdownRef.value) return {}
  const rect = langDropdownRef.value.getBoundingClientRect()
  return {
    top: `${rect.bottom + 8}px`,
    right: `${window.innerWidth - rect.right}px`,
  }
})

const switchLang = (code: string) => {
  setLocale(code as 'id' | 'en' | 'ja')
  langOpen.value = false
}

const cycleLang = () => {
  const codes = ['id', 'en', 'ja']
  const next = codes[(codes.indexOf(currentLocaleCode.value) + 1) % codes.length]
  setLocale(next as 'id' | 'en' | 'ja')
}

// Close on outside click
const handleOutsideClick = (e: MouseEvent) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(e.target as Node)) {
    langOpen.value = false
  }
}
onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<style scoped>
.lang-drop-enter-active,
.lang-drop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.lang-drop-enter-from,
.lang-drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
