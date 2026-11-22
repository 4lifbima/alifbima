<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none transition-all duration-300"
    id="navbar"
  >
    <nav
      class="pointer-events-auto max-w-[1160px] mx-auto bg-[#141414] rounded-full px-3 sm:px-5 lg:px-7 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-white/10 transition-all duration-300"
      :class="{ 'shadow-[0_16px_40px_rgba(0,0,0,0.28)] bg-[#141414]/95 backdrop-blur-md': isScrolled }"
      aria-label="Main Navigation"
    >
      <!-- Desktop Left Links (Home, About, Service) -->
      <div class="hidden lg:flex items-center gap-7 xl:gap-9">
        <NuxtLink
          to="/#home"
          @click="activeSection = 'home'"
          class="text-[14px] font-medium transition-colors"
          :class="isHomeActive ? 'text-[#FE4619] font-semibold' : 'text-neutral-300 hover:text-white'"
        >
          {{ $t('nav.home') }}
        </NuxtLink>
        <NuxtLink
          to="/#experience"
          @click="activeSection = 'about'"
          class="text-[14px] font-medium transition-colors"
          :class="activeSection === 'about' ? 'text-[#FE4619] font-semibold' : 'text-neutral-300 hover:text-white'"
        >
          {{ $t('nav.about') }}
        </NuxtLink>
        <NuxtLink
          to="/#services"
          @click="activeSection = 'services'"
          class="text-[14px] font-medium transition-colors"
          :class="activeSection === 'services' ? 'text-[#FE4619] font-semibold' : 'text-neutral-300 hover:text-white'"
        >
          {{ $t('nav.service') }}
        </NuxtLink>
      </div>

      <!-- Center Brand Logo (Matches orange circle badge + bold serif brand wordmark) -->
      <NuxtLink
        to="/#home"
        @click="scrollToTop"
        class="flex items-center gap-2.5 cursor-pointer group shrink-0"
        aria-label="Alif Bima Home"
      >
        <span
          class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FE4619] flex items-center justify-center text-white font-brand font-bold text-lg sm:text-xl leading-none shadow-sm group-hover:scale-105 transition-transform"
        >
          a
        </span>
        <span class="font-brand text-white text-lg sm:text-[21px] font-bold tracking-tight">
          Alif
        </span>
      </NuxtLink>

      <!-- Desktop Right Links (Resume, Project, Contact Us) + Language Switcher -->
      <div class="hidden lg:flex items-center gap-6 xl:gap-8">
        <NuxtLink
          to="/#experience"
          @click="activeSection = 'resume'"
          class="text-[14px] font-medium transition-colors"
          :class="activeSection === 'resume' ? 'text-[#FE4619] font-semibold' : 'text-neutral-300 hover:text-white'"
        >
          {{ $t('nav.resume') }}
        </NuxtLink>
        <NuxtLink
          to="/#portfolio"
          @click="activeSection = 'project'"
          class="text-[14px] font-medium transition-colors"
          :class="activeSection === 'project' || route.path.startsWith('/portfolio') ? 'text-[#FE4619] font-semibold' : 'text-neutral-300 hover:text-white'"
        >
          {{ $t('nav.project') }}
        </NuxtLink>
        <NuxtLink
          to="/#contact"
          @click="activeSection = 'contact'"
          class="text-[14px] font-medium transition-colors"
          :class="activeSection === 'contact' ? 'text-[#FE4619] font-semibold' : 'text-neutral-300 hover:text-white'"
        >
          {{ $t('nav.contact') }}
        </NuxtLink>

        <!-- Multilingual Compact Dropdown -->
        <div class="relative" ref="langDropdownRef">
          <button
            type="button"
            @click="isLangOpen = !isLangOpen"
            class="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-full pl-1.5 pr-2.5 py-1 text-xs font-semibold text-white uppercase transition-colors cursor-pointer"
            aria-label="Switch Language"
          >
            <img
              :src="currentLocaleFlag"
              :alt="currentLocaleCode"
              class="w-5 h-5 rounded-full object-cover"
            />
            <span>{{ currentLocaleCode }}</span>
            <ChevronDown
              class="w-3.5 h-3.5 text-neutral-300 transition-transform duration-200"
              :class="{ 'rotate-180': isLangOpen }"
            />
          </button>

          <Transition name="dropdown">
            <div
              v-if="isLangOpen"
              class="absolute right-0 top-full mt-3 w-40 rounded-2xl bg-[#1A1A1A] border border-white/15 shadow-2xl p-1.5 z-50"
            >
              <button
                v-for="loc in availableLocales"
                :key="loc.code"
                type="button"
                @click="selectLang(loc.code)"
                class="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                :class="loc.code === currentLocaleCode ? 'bg-[#FE4619] text-white font-semibold' : 'text-neutral-300 hover:bg-white/10 hover:text-white'"
              >
                <span class="flex items-center gap-2">
                  <img :src="loc.flag" :alt="loc.name" class="w-4 h-4 rounded-full object-cover" />
                  <span>{{ loc.name }}</span>
                </span>
                <span v-if="loc.code === currentLocaleCode" class="w-1.5 h-1.5 rounded-full bg-white" />
              </button>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Mobile Controls: Compact Flag Switcher + Hamburger Button -->
      <div class="flex lg:hidden items-center gap-2">
        <!-- Quick Language Pill on Mobile -->
        <div class="flex items-center gap-1 p-1 rounded-full bg-white/10 border border-white/10">
          <button
            v-for="loc in availableLocales"
            :key="loc.code"
            type="button"
            @click="switchLang(loc.code)"
            :title="loc.name"
            class="p-0.5 rounded-full transition-all cursor-pointer"
            :class="loc.code === currentLocaleCode ? 'ring-2 ring-[#FE4619] opacity-100 scale-105' : 'opacity-60 hover:opacity-100'"
          >
            <img :src="loc.flag" :alt="loc.name" class="w-5 h-5 rounded-full object-cover" />
          </button>
        </div>

        <!-- Hamburger Toggle -->
        <button
          type="button"
          @click="toggleMobileMenu"
          class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FE4619] text-white transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          <X v-if="isMobileMenuOpen" class="w-5 h-5" />
          <Menu v-else class="w-5 h-5" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Menu, X } from 'lucide-vue-next'

defineProps<{ isMobileMenuOpen?: boolean }>()
const emit = defineEmits<{ toggleMenu: [] }>()

const route = useRoute()
const { locale, locales, setLocale } = useI18n()

const isScrolled = ref(false)
const isLangOpen = ref(false)
const activeSection = ref('home')
const langDropdownRef = ref<HTMLElement | null>(null)

const isHomeActive = computed(() => route.path === '/' && activeSection.value === 'home')

const toggleMobileMenu = () => emit('toggleMenu')

const scrollToTop = () => {
  activeSection.value = 'home'
  if (import.meta.client && route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const langFlags: Record<string, string> = {
  id: '/assets/img/bendera-indonesia.png',
  en: '/assets/img/bendera-inggris.svg',
  ja: '/assets/img/bendera-jepang.png'
}

const currentLocaleCode = computed(() => locale.value as string)
const currentLocaleFlag = computed(() => langFlags[currentLocaleCode.value] ?? '/assets/img/bendera-indonesia.png')

const availableLocales = computed(() =>
  (locales.value as { code: string; name: string }[]).map(l => ({
    ...l,
    flag: langFlags[l.code] ?? '/assets/img/bendera-indonesia.png'
  }))
)

const switchLang = (code: string) => {
  setLocale(code as 'id' | 'en' | 'ja')
}

const selectLang = (code: string) => {
  switchLang(code)
  isLangOpen.value = false
}

const handleScroll = () => {
  if (!import.meta.client) return
  isScrolled.value = window.scrollY > 24
}

const handleClickOutside = (e: MouseEvent) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(e.target as Node)) {
    isLangOpen.value = false
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.96);
}
</style>
