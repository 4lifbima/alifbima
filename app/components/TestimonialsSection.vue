<template>
  <section class="py-24 bg-white dark:bg-dark-bg w-full max-w-full overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-10 reveal break-words">
        GitHub Contributions
      </h2>

      <div
        class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-900 text-slate-100 shadow-md p-4 sm:p-6 lg:p-7">
        <div class="flex items-start justify-between gap-4 mb-5">
          <h3 class="text-base sm:text-lg font-semibold leading-tight">
            {{ githubContributions.total }} contributions {{ githubContributions.periodLabel }}
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 whitespace-nowrap">
            {{ githubContributions.username }}
          </p>
        </div>

        <div class="overflow-x-auto pb-2">
          <div class="min-w-[820px]">
            <div class="grid grid-cols-[auto,1fr] gap-2">
              <div />
              <div class="relative h-6 text-xs text-slate-400">
                <span v-for="month in githubContributions.months" :key="month.label"
                  class="absolute -translate-x-1/2 whitespace-nowrap" :style="monthStyle(month.week)">
                  {{ month.label }}
                </span>
              </div>

              <div class="grid grid-rows-[repeat(7,minmax(0,1fr))] gap-1 text-xs text-slate-400 pr-2 pt-[2px]">
                <span class="h-3 leading-3">Mon</span>
                <span class="h-3" />
                <span class="h-3 leading-3">Wed</span>
                <span class="h-3" />
                <span class="h-3 leading-3">Fri</span>
                <span class="h-3" />
                <span class="h-3" />
              </div>

              <div class="grid grid-flow-col grid-rows-[repeat(7,minmax(0,1fr))] gap-1">
                <div v-for="cell in contributionCells" :key="cell.id" class="w-3 h-3 rounded-[2px]"
                  :class="levelClass(cell.level)"
                  :title="`Week ${cell.week + 1}, Day ${cell.day + 1} - Level ${cell.level}`" />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 flex items-center justify-end gap-2 text-xs text-slate-400">
          <span>Less</span>
          <div class="w-3 h-3 rounded-[2px] bg-[#161b22]" />
          <div class="w-3 h-3 rounded-[2px] bg-[#0e4429]" />
          <div class="w-3 h-3 rounded-[2px] bg-[#006d32]" />
          <div class="w-3 h-3 rounded-[2px] bg-[#26a641]" />
          <div class="w-3 h-3 rounded-[2px] bg-[#39d353]" />
          <span>More</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { fallbackGitHubContributions } from '~/data/ClientFeedback'

const runtimeConfig = useRuntimeConfig()
const username = runtimeConfig.public.githubUsername

const { data } = await useFetch('/api/github/contributions', {
  query: { username },
  key: `github-contributions-${username}`,
  server: true
})

const githubContributions = computed(() => data.value ?? fallbackGitHubContributions)

const totalWeeks = computed(() => githubContributions.value.weeks.length)

const contributionCells = computed(() => {
  return githubContributions.value.weeks.flatMap((week, weekIndex) =>
    week.days.map((level, dayIndex) => ({
      id: `${weekIndex}-${dayIndex}`,
      week: weekIndex,
      day: dayIndex,
      level
    }))
  )
})

const levelClass = (level: number) => {
  const classes = ['bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]']
  return classes[level] || classes[0]
}

const monthStyle = (week: number) => {
  return {
    left: `${(week / totalWeeks.value) * 100}%`
  }
}
</script>
