<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto pointer-events-none transition-all duration-300"
    id="navbar"
  >
    <div
      class="pointer-events-auto w-full glass-nav rounded-full px-4 sm:px-6 py-2 md:py-2.5 transition-all duration-300 flex items-center justify-between shadow-xl border border-white/80 dark:border-slate-800/80"
      :class="{ 'py-1.5 md:py-2 px-4 shadow-2xl bg-white/90 dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-700/90': isScrolled }"
    >
      <!-- Left: Brand / Logo -->
      <div class="flex-shrink-0 flex items-center gap-3 cursor-pointer group" @click="scrollToTop">
        <ClientOnly>
          <img
            v-if="!isDarkMode"
            class="h-6 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="/icon/my-icon.png"
            alt="Logo"
          />
          <img
            v-else
            class="h-6 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="/icon/my-dark.png"
            alt="Logo"
          />
          <template #fallback>
            <img class="h-7 sm:h-9 w-auto object-contain" src="/icon/my-icon.png" alt="Logo" />
          </template>
        </ClientOnly>
      </div>

      <!-- Center: Desktop Menu Links with Chevron Dropdowns -->
      <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
        <!-- Tentang / About Dropdown Menu -->
        <div class="relative group" @mouseenter="activeDropdown = 'about'" @mouseleave="activeDropdown = null">
          <a
            href="#about"
            class="px-3.5 py-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-accent-teal hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-sm font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer"
          >
            <span>{{ $t('nav.about') }}</span>
            <ChevronDown class="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <!-- Hover Dropdown Card -->
          <Transition name="dropdown">
            <div
              v-if="activeDropdown === 'about'"
              class="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-2xl p-2 z-50"
            >
              <a
                href="#about"
                @click="activeDropdown = null"
                class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                <User class="w-4 h-4 text-primary dark:text-accent-teal" />
                <span>Profil & Biografi</span>
              </a>
              <a
                href="#experience"
                @click="activeDropdown = null"
                class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                <Clock class="w-4 h-4 text-primary dark:text-accent-teal" />
                <span>Latar Belakang</span>
              </a>
            </div>
          </Transition>
        </div>

        <!-- Keahlian / Skills Dropdown Menu -->
        <div class="relative group" @mouseenter="activeDropdown = 'skills'" @mouseleave="activeDropdown = null">
          <a
            href="#skills"
            class="px-3.5 py-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-accent-teal hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-sm font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer"
          >
            <span>{{ $t('nav.skills') }}</span>
            <ChevronDown class="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <!-- Hover Dropdown Card -->
          <Transition name="dropdown">
            <div
              v-if="activeDropdown === 'skills'"
              class="absolute top-full left-0 mt-2 w-52 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-2xl p-2 z-50"
            >
              <a
                href="#skills"
                @click="activeDropdown = null"
                class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                <Code2 class="w-4 h-4 text-primary dark:text-accent-teal" />
                <span>Frontend & Backend</span>
              </a>
            </div>
          </Transition>
        </div>

        <!-- Portofolio / Work Dropdown Menu -->
        <div class="relative group" @mouseenter="activeDropdown = 'portfolio'" @mouseleave="activeDropdown = null">
          <a
            href="#portfolio"
            class="px-3.5 py-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-accent-teal hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-sm font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer"
          >
            <span>{{ $t('nav.work') }}</span>
            <ChevronDown class="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <!-- Hover Dropdown Card -->
          <Transition name="dropdown">
            <div
              v-if="activeDropdown === 'portfolio'"
              class="absolute top-full left-0 mt-2 w-52 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-2xl p-2 z-50"
            >
              <a
                href="#portfolio"
                @click="activeDropdown = null"
                class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                <Briefcase class="w-4 h-4 text-primary dark:text-accent-teal" />
                <span>Proyek Web & App</span>
              </a>
            </div>
          </Transition>
        </div>

        <!-- Pengalaman / Experience Dropdown Menu -->
        <div class="relative group" @mouseenter="activeDropdown = 'experience'" @mouseleave="activeDropdown = null">
          <a
            href="#experience"
            class="px-3.5 py-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-accent-teal hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-sm font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer"
          >
            <span>{{ $t('nav.experience') }}</span>
            <ChevronDown class="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <!-- Hover Dropdown Card -->
          <Transition name="dropdown">
            <div
              v-if="activeDropdown === 'experience'"
              class="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-2xl p-2 z-50"
            >
              <a
                href="#experience"
                @click="activeDropdown = null"
                class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                <Clock class="w-4 h-4 text-primary dark:text-accent-teal" />
                <span>Karir & Organisasi</span>
              </a>
            </div>
          </Transition>
        </div>

        <!-- Dashboard Button Link -->
        <NuxtLink
          to="/dashboard"
          class="px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary dark:bg-accent-teal/10 dark:hover:bg-accent-teal text-primary dark:text-accent-teal hover:text-white dark:hover:text-slate-900 text-sm font-semibold transition-all duration-200 flex items-center gap-2"
          active-class="bg-primary text-white dark:bg-accent-teal dark:text-slate-900"
        >
          <ChartColumnBig class="w-4 h-4" />
          <span>{{ $t('nav.dashboard') }}</span>
        </NuxtLink>
      </div>

      <!-- Right: Action Controls (Mobile: Flag Language & Hamburger ONLY; Desktop: Flags, Primary Search Icon, Dark Mode) -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Language Switcher Flags Cluster (Visible on both Mobile & Desktop) -->
        <div class="relative" ref="langDropdownRef">
          <div class="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50">
            <button
              v-for="loc in availableLocales"
              :key="loc.code"
              @click="switchLang(loc.code)"
              :title="loc.name"
              class="relative p-1 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none"
              :class="{
                'ring-2 ring-primary dark:ring-accent-teal bg-white dark:bg-slate-700 shadow-sm': loc.code === currentLocaleCode,
                'opacity-70 hover:opacity-100': loc.code !== currentLocaleCode
              }"
            >
              <img
                :src="loc.flag"
                :alt="loc.name"
                class="w-5 h-5 rounded-full object-cover shadow-sm"
              />
            </button>
          </div>
        </div>

        <!-- Primary Circular Search Button (Desktop Only: hidden md:flex) -->
        <button
          @click="openSearchModal"
          class="hidden md:flex p-2 sm:p-2.5 rounded-full bg-primary hover:bg-primary-light dark:bg-accent-teal dark:hover:bg-teal-300 text-white dark:text-slate-900 active:scale-95 shadow-md shadow-primary/25 dark:shadow-accent-teal/20 hover:shadow-lg transition-all duration-200 items-center justify-center cursor-pointer"
          title="Search / Cari (Ctrl+K)"
          aria-label="Search"
        >
          <Search class="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>

        <!-- Dark Mode Toggle Button (Desktop Only: hidden md:flex) -->
        <button
          @click="toggleDarkMode"
          class="hidden md:flex p-2 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-300 transition-colors items-center justify-center"
          aria-label="Toggle dark mode"
        >
          <ClientOnly>
            <Sun v-if="isDarkMode" class="w-4.5 h-4.5 text-amber-400 hover:rotate-45 transition-transform" />
            <Moon v-else class="w-4.5 h-4.5 text-slate-600 hover:-rotate-12 transition-transform" />
            <template #fallback>
              <div class="w-4.5 h-4.5"></div>
            </template>
          </ClientOnly>
        </button>

        <!-- Mobile Menu Trigger Button (Swaps between Hamburger Menu & X Close Icon) -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-center"
          aria-label="Toggle mobile menu"
        >
          <Transition name="icon-swap" mode="out-in">
            <X v-if="isMobileMenuOpen" class="w-5 h-5 text-primary dark:text-accent-teal" />
            <Menu v-else class="w-5 h-5" />
          </Transition>
        </button>
      </div>
    </div>
  </nav>

  <!-- Interactive Quick Search Modal Overlay -->
  <Teleport to="body">
    <Transition name="search-modal">
      <div
        v-if="isSearchOpen"
        class="fixed inset-0 z-[99999] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-md"
        @click.self="closeSearchModal"
      >
        <div
          class="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transform transition-all duration-300"
        >
          <!-- Search Header Input -->
          <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
            <Search class="w-5 h-5 text-primary dark:text-accent-teal flex-shrink-0" />
            <input
              ref="searchInputRef"
              v-model="searchQuery"
              type="text"
              placeholder="Cari menu, proyek, atau keahlian..."
              class="w-full bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base font-medium"
              @keydown.esc="closeSearchModal"
            />
            <button
              @click="closeSearchModal"
              class="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Search Content Results -->
          <div class="p-3 max-h-80 overflow-y-auto space-y-1">
            <div
              v-for="item in filteredSearchItems"
              :key="item.title"
              @click="navigateToSearchItem(link)"
              class="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer group transition-colors"
            >
              <div class="flex items-center gap-3">
                <div class="p-2 rounded-xl bg-primary/10 dark:bg-accent-teal/10 text-primary dark:text-accent-teal group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent-teal dark:group-hover:text-slate-900 transition-colors">
                  <component :is="item.icon" class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-slate-800 dark:text-slate-100">{{ item.title }}</h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400">{{ item.subtitle }}</p>
                </div>
              </div>
              <ArrowRight class="w-4 h-4 text-slate-400 group-hover:text-primary dark:group-hover:text-accent-teal group-hover:translate-x-1 transition-all" />
            </div>

            <div v-if="filteredSearchItems.length === 0" class="py-8 text-center text-slate-400 text-sm">
              Tidak ditemukan hasil untuk "{{ searchQuery }}"
            </div>
          </div>

          <!-- Search Footer -->
          <div class="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Tekan <kbd class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">ESC</kbd> untuk menutup</span>
            <span>Shortcut: <kbd class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">Ctrl + K</kbd></span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import {
  Sun,
  Moon,
  Menu,
  ChartColumnBig,
  ChevronDown,
  Search,
  X,
  User,
  Code2,
  Briefcase,
  Clock,
  ArrowRight
} from 'lucide-vue-next'

const props = defineProps<{ isMobileMenuOpen?: boolean }>()

const { isDarkMode, toggleDarkMode } = useDarkMode()
const { locale, locales, setLocale } = useI18n()

const emit = defineEmits<{ toggleMenu: [] }>()
const toggleMobileMenu = () => emit('toggleMenu')

// ── Dropdown State ─────────────────────────────────────────
const activeDropdown = ref<string | null>(null)

// ── Scroll Effect ──────────────────────────────────────────
const isScrolled = ref(false)
const handleScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 20
  }
}

const scrollToTop = () => {
  if (import.meta.client) window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ── Language Selector ──────────────────────────────────────
const langFlags: Record<string, string> = {
  id: '/assets/img/bendera-indonesia.png',
  en: '/assets/img/bendera-inggris.svg',
  ja: '/assets/img/bendera-jepang.png'
}

const currentLocaleCode = computed(() => locale.value as string)
const availableLocales = computed(() =>
  (locales.value as { code: string; name: string }[]).map(l => ({
    ...l,
    flag: langFlags[l.code] ?? '/assets/img/bendera-indonesia.png'
  }))
)

const switchLang = (code: string) => {
  setLocale(code as 'id' | 'en' | 'ja')
}

// ── Quick Search Modal ──────────────────────────────────────
const isSearchOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref<HTMLInputElement | null>(null)

const openSearchModal = () => {
  isSearchOpen.value = true
  searchQuery.value = ''
  nextTick(() => {
    searchInputRef.value?.focus()
  })
}

const closeSearchModal = () => {
  isSearchOpen.value = false
}

const handleOpenSearchCustomEvent = () => {
  openSearchModal()
}

defineExpose({
  openSearchModal
})

const searchItems = [
  { title: 'Tentang Saya', subtitle: 'Biografi, profil, dan filosofi kerja', link: '#about', icon: User },
  { title: 'Keahlian Teknis', subtitle: 'Frontend, Backend, & Tech Stack', link: '#skills', icon: Code2 },
  { title: 'Portofolio Project', subtitle: 'Daftar aplikasi dan hasil karya web', link: '#portfolio', icon: Briefcase },
  { title: 'Pengalaman Kerja', subtitle: 'Riwayat karir & organisasi', link: '#experience', icon: Clock },
  { title: 'Developer Dashboard', subtitle: 'Statistik GitHub & Aktivitas', link: '/dashboard', icon: ChartColumnBig }
]

const filteredSearchItems = computed(() => {
  if (!searchQuery.value.trim()) return searchItems
  const q = searchQuery.value.toLowerCase()
  return searchItems.filter(
    item => item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q)
  )
})

const router = useRouter()
const navigateToSearchItem = (link: string) => {
  closeSearchModal()
  if (link.startsWith('#')) {
    if (import.meta.client) {
      const el = document.querySelector(link)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/' + link)
      }
    }
  } else {
    router.push(link)
  }
}

// Keyboard shortcuts (Ctrl+K to search)
const handleKeyDown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    if (isSearchOpen.value) {
      closeSearchModal()
    } else {
      openSearchModal()
    }
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-search', handleOpenSearchCustomEvent)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('open-search', handleOpenSearchCustomEvent)
  }
})
</script>

<style scoped>
/* Icon swap animation */
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.icon-swap-enter-from,
.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.96);
}

/* Search Modal animation */
.search-modal-enter-active,
.search-modal-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.search-modal-enter-from,
.search-modal-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-12px);
}
</style>
