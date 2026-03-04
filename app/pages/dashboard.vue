<template>
  <div class="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
    <!-- Background decoration -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-teal/5 dark:bg-accent-teal/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div class="bg-grid absolute inset-0 opacity-50" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

      <!-- Page Header -->
      <div class="text-center mb-12 reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent-teal text-sm font-semibold mb-4">
          <Github class="w-4 h-4" />
          GitHub Statistics
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-3">
          My Dev Dashboard
        </h1>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
          Statistik & aktivitas coding terbaru dari GitHub saya.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="space-y-8">
        <!-- Profile Skeleton -->
        <div class="glass-card rounded-3xl p-8 animate-pulse">
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="w-28 h-28 rounded-2xl bg-slate-200 dark:bg-slate-700 shrink-0" />
            <div class="flex-1 space-y-3 w-full">
              <div class="h-7 bg-slate-200 dark:bg-slate-700 rounded-lg w-48" />
              <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg w-72" />
              <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg w-56" />
            </div>
          </div>
        </div>
        <!-- Stats Skeleton -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="i in 4" :key="i" class="glass-card rounded-2xl p-6 animate-pulse">
            <div class="h-8 bg-slate-200 dark:bg-slate-700 rounded-lg mb-2" />
            <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg w-2/3" />
          </div>
        </div>
        <!-- Cards Skeleton -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="i in 6" :key="i" class="glass-card rounded-2xl p-6 h-40 animate-pulse" />
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="flex flex-col items-center justify-center py-24 text-center">
        <AlertCircle class="w-16 h-16 text-red-400 mb-4" />
        <h3 class="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">Gagal memuat data</h3>
        <p class="text-slate-500 dark:text-slate-400 mb-6">{{ error }}</p>
        <button @click="fetchData" class="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-light transition-colors">
          Coba Lagi
        </button>
      </div>

      <!-- Main Content -->
      <div v-else-if="stats" class="space-y-8">

        <!-- ─── Profile Card ─── -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 reveal">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <!-- Avatar -->
            <div class="relative shrink-0">
              <img
                :src="stats.profile.avatarUrl"
                :alt="stats.profile.name"
                class="w-28 h-28 rounded-2xl object-cover ring-4 ring-primary/20 dark:ring-accent-teal/20 shadow-xl"
              />
              <span class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-dark-card shadow-md" title="Active" />
            </div>
            <!-- Info -->
            <div class="flex-1 text-center sm:text-left">
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{{ stats.profile.name }}</h2>
              <p class="text-primary dark:text-accent-teal font-mono text-sm mb-2">@{{ stats.profile.login }}</p>
              <p v-if="stats.profile.bio" class="text-slate-600 dark:text-slate-400 mb-4 max-w-lg">{{ stats.profile.bio }}</p>
              <div class="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span v-if="stats.profile.location" class="flex items-center gap-1">
                  <MapPin class="w-4 h-4" /> {{ stats.profile.location }}
                </span>
                <span v-if="stats.profile.company" class="flex items-center gap-1">
                  <Building2 class="w-4 h-4" /> {{ stats.profile.company }}
                </span>
                <span class="flex items-center gap-1">
                  <CalendarDays class="w-4 h-4" /> Joined {{ formatDate(stats.profile.createdAt) }}
                </span>
              </div>
              <div class="flex flex-wrap justify-center sm:justify-start gap-3">
                <a :href="stats.profile.profileUrl" target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium hover:bg-primary transition-colors">
                  <Github class="w-4 h-4" /> GitHub Profile
                </a>
                <a v-if="stats.profile.blog" :href="stats.profile.blog" target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-primary hover:text-primary dark:hover:border-accent-teal dark:hover:text-accent-teal transition-colors">
                  <ExternalLink class="w-4 h-4" /> Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- ─── Quick Stats ─── -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          <div v-for="stat in quickStats" :key="stat.label"
            class="glass-card rounded-2xl p-5 sm:p-6 group hover:scale-[1.03] transition-transform duration-200">
            <div class="flex items-center justify-between mb-3">
              <div :class="['p-2.5 rounded-xl', stat.bgColor]">
                <component :is="stat.icon" :class="['w-5 h-5', stat.iconColor]" />
              </div>
              <TrendingUp class="w-4 h-4 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div class="text-3xl font-bold text-slate-900 dark:text-white mb-1">{{ stat.value }}</div>
            <div class="text-sm text-slate-500 dark:text-slate-400">{{ stat.label }}</div>
          </div>
        </div>

        <!-- ─── Language Stats ─── -->
        <div v-if="stats.languageStats.length" class="glass-card rounded-3xl p-6 sm:p-8 reveal">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Code2 class="w-5 h-5 text-primary dark:text-accent-teal" />
            Top Languages
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="lang in stats.languageStats" :key="lang.language" class="space-y-1.5">
              <div class="flex justify-between text-sm">
                <span class="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span :style="{ background: getLangColor(lang.language) }" class="w-3 h-3 rounded-full inline-block shrink-0" />
                  {{ lang.language }}
                </span>
                <span class="text-slate-500 dark:text-slate-400">{{ lang.percentage }}%</span>
              </div>
              <div class="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  :style="{ width: lang.percentage + '%', background: getLangColor(lang.language) }"
                  class="h-full rounded-full transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- ─── Top Repos ─── -->
        <div v-if="stats.topRepos.length" class="reveal">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Star class="w-5 h-5 text-yellow-400" />
            Top Repositories
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              v-for="repo in stats.topRepos"
              :key="repo.name"
              :href="repo.url"
              target="_blank"
              class="glass-card rounded-2xl p-5 flex flex-col gap-3 group hover:scale-[1.02] hover:border-primary/40 dark:hover:border-accent-teal/40 transition-all duration-200 border border-transparent"
            >
              <div class="flex items-start justify-between gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  <BookOpen class="w-4 h-4 text-primary dark:text-accent-teal shrink-0" />
                  <span class="font-semibold text-slate-900 dark:text-white text-sm truncate group-hover:text-primary dark:group-hover:text-accent-teal transition-colors">
                    {{ repo.name }}
                  </span>
                </div>
                <ExternalLink class="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1 line-clamp-2">
                {{ repo.description || 'No description provided.' }}
              </p>
              <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span v-if="repo.language" class="flex items-center gap-1.5">
                  <span :style="{ background: getLangColor(repo.language) }" class="w-2.5 h-2.5 rounded-full" />
                  {{ repo.language }}
                </span>
                <span class="flex items-center gap-1">
                  <Star class="w-3.5 h-3.5 text-yellow-400" /> {{ repo.stars }}
                </span>
                <span class="flex items-center gap-1">
                  <GitFork class="w-3.5 h-3.5" /> {{ repo.forks }}
                </span>
              </div>
            </a>
          </div>
        </div>

        <!-- ─── GitHub Streak Stats ─── -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 reveal">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Flame class="w-5 h-5 text-orange-400" />
            Streak & Activity
          </h3>
          <div class="flex justify-center">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=4lifbima&theme=tokyonight&hide_border=true&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B6B&currStreakLabel=58A6FF"
              alt="GitHub Streak Stats"
              class="rounded-2xl w-full max-w-2xl object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <!-- ─── Activity Graph ─── -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 reveal">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Activity class="w-5 h-5 text-accent-teal" />
            Activity Graph
          </h3>
          <div class="flex justify-center overflow-x-auto">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=4lifbima&theme=react-dark&hide_border=true&bg_color=0D1117&color=58A6FF&line=58A6FF&point=FF6B6B&area=true&area_color=58A6FF"
              alt="GitHub Activity Graph"
              class="rounded-2xl w-full object-contain min-w-[320px]"
              loading="lazy"
            />
          </div>
        </div>

        <!-- ─── Profile Summary Cards ─── -->
        <div class="reveal">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <BarChart3 class="w-5 h-5 text-primary dark:text-accent-teal" />
            Profile Summary
          </h3>

          <!-- Top row: 3 cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div v-for="card in summaryCardsTop" :key="card.alt" class="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-200">
              <img
                :src="card.src"
                :alt="card.alt"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Bottom row: 2 cards centered -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div v-for="card in summaryCardsBottom" :key="card.alt" class="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-200">
              <img
                :src="card.src"
                :alt="card.alt"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- ─── Contribution Heatmap ─── -->
        <div v-if="contributions" class="glass-card rounded-3xl p-6 sm:p-8 reveal">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CalendarDays class="w-5 h-5 text-primary dark:text-accent-teal" />
              Contribution Heatmap
            </h3>
            <span class="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <span class="font-semibold text-primary dark:text-accent-teal">{{ contributions.total }}</span>
              contributions in the last year
            </span>
          </div>
          <!-- Heatmap Grid -->
          <div class="overflow-x-auto pb-2">
            <div class="flex gap-1 min-w-max mx-auto w-fit">
              <div v-for="(week, wi) in contributions.weeks" :key="wi" class="flex flex-col gap-1">
                <div v-for="(level, di) in week.days" :key="di"
                  :class="['w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 cursor-default', getCellClass(level)]"
                  :title="`Level ${level}`"
                />
              </div>
            </div>
          </div>
          <!-- Legend -->
          <div class="flex items-center justify-end gap-2 mt-3 text-xs text-slate-400 dark:text-slate-500">
            <span>Less</span>
            <div v-for="l in [0,1,2,3,4]" :key="l" :class="['w-3 h-3 rounded-sm', getCellClass(l)]" />
            <span>More</span>
          </div>
        </div>

      </div>
      <!-- /Main Content -->

    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Github, MapPin, Building2, CalendarDays, ExternalLink,
  Code2, Star, GitFork, BookOpen, TrendingUp, Activity,
  AlertCircle, Flame, BarChart3
} from 'lucide-vue-next'

// ── Types ──────────────────────────────────────────────
interface GitHubStats {
  profile: {
    login: string; name: string; bio: string; avatarUrl: string
    profileUrl: string; publicRepos: number; publicGists: number
    followers: number; following: number; createdAt: string
    company: string; location: string; blog: string; twitterUsername: string
  }
  topRepos: { name: string; description: string; language: string; stars: number; forks: number; url: string }[]
  languageStats: { language: string; count: number; percentage: number }[]
  totalStars: number
}

interface GitHubContributions {
  username: string; total: number; periodLabel: string
  months: { label: string; week: number }[]
  weekdays: string[]
  weeks: { days: number[] }[]
}

// ── State ───────────────────────────────────────────────
const stats = ref<GitHubStats | null>(null)
const contributions = ref<GitHubContributions | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

// ── Data Fetch ──────────────────────────────────────────
const fetchData = async () => {
  loading.value = true
  error.value = null
  try {
    const [s, c] = await Promise.all([
      $fetch<GitHubStats>('/api/github/stats'),
      $fetch<GitHubContributions>('/api/github/contributions')
    ])
    stats.value = s
    contributions.value = c
  } catch (e: any) {
    error.value = e?.data?.statusMessage ?? e?.message ?? 'Terjadi kesalahan.'
  } finally {
    loading.value = false
  }
}

await fetchData()

// ── Quick Stats ─────────────────────────────────────────
const quickStats = computed(() => {
  if (!stats.value) return []
  return [
    { label: 'Public Repos', value: stats.value.profile.publicRepos, icon: BookOpen, bgColor: 'bg-primary/10 dark:bg-primary/20', iconColor: 'text-primary dark:text-accent-teal' },
    { label: 'Total Stars', value: stats.value.totalStars, icon: Star, bgColor: 'bg-yellow-50 dark:bg-yellow-400/10', iconColor: 'text-yellow-500' },
    { label: 'Followers', value: stats.value.profile.followers, icon: Github, bgColor: 'bg-green-50 dark:bg-green-400/10', iconColor: 'text-green-500' },
    { label: 'Following', value: stats.value.profile.following, icon: TrendingUp, bgColor: 'bg-blue-50 dark:bg-blue-400/10', iconColor: 'text-blue-500' },
  ]
})

// ── Summary Cards ────────────────────────────────────────
const gh = '4lifbima'
const summaryCardsTop = [
  { src: `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${gh}&theme=2077`, alt: 'GitHub Stats' },
  { src: `https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${gh}&theme=2077`, alt: 'Most Commit Language' },
  { src: `https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${gh}&theme=2077`, alt: 'Repos Per Language' },
]
const summaryCardsBottom = [
  { src: `https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${gh}&theme=2077`, alt: 'Productive Time' },
  { src: `https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${gh}&theme=2077`, alt: 'Profile Details' },
]

// ── Lang Colors ──────────────────────────────────────────
const langColors: Record<string, string> = {
  TypeScript: '#3178c6', JavaScript: '#f7df1e', Vue: '#42b883',
  Python: '#3776ab', PHP: '#777bb4', HTML: '#e34f26',
  CSS: '#1572b6', Dart: '#00b4ab', Kotlin: '#7f52ff',
  Java: '#ed8b00', Go: '#00add8', Rust: '#ce422b',
  'C#': '#239120', Swift: '#fa7343', Ruby: '#cc342d',
  Shell: '#89e051', SCSS: '#c6538c', Blade: '#f05340',
}
const getLangColor = (lang: string) => langColors[lang] ?? '#8b5cf6'

// ── Heatmap ──────────────────────────────────────────────
const getCellClass = (level: number) => {
  const classes: Record<number, string> = {
    0: 'bg-slate-100 dark:bg-slate-800',
    1: 'bg-primary/20 dark:bg-primary/25',
    2: 'bg-primary/45 dark:bg-primary/50',
    3: 'bg-primary/70 dark:bg-primary/75',
    4: 'bg-primary dark:bg-accent-teal',
  }
  return classes[level] ?? classes[0]
}

// ── Utils ────────────────────────────────────────────────
const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })
}

// ── SEO ─────────────────────────────────────────────────
useSeoMeta({
  title: 'Dashboard - Alif Bima Pradana',
  description: 'GitHub statistics dashboard - Alif Bima Pradana. Lihat aktivitas, kontribusi, dan proyek terbaru.',
  ogTitle: 'GitHub Dashboard - Alif Bima Pradana',
  ogDescription: 'GitHub statistics, contributions, dan top repositories Alif Bima Pradana.',
})
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.dark .glass-card {
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
