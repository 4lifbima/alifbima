export interface ContributionMonth {
  label: string
  week: number
}

export interface ContributionWeek {
  days: number[]
}

export interface GitHubContributions {
  username: string
  total: number
  periodLabel: string
  months: ContributionMonth[]
  weekdays: string[]
  weeks: ContributionWeek[]
}

const monthByWeek = [
  2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7,
  8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1
]

const monthIntensity = [3.2, 3.4, 0.8, 1.1, 1.2, 1.3, 1.1, 1.5, 2.2, 2.8, 2.7, 2.9]

const pseudoRandom = (week: number, day: number) => {
  const x = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453
  return x - Math.floor(x)
}

const makeContributionWeeks = (): ContributionWeek[] => {
  return monthByWeek.map((monthIndex, weekIndex) => {
    const days = Array.from({ length: 7 }, (_, dayIndex) => {
      const base = monthIntensity[monthIndex]
      const signal = base + pseudoRandom(weekIndex, dayIndex) * 2.2

      if (signal < 1.1) return 0
      if (signal < 1.9) return 1
      if (signal < 2.6) return 2
      if (signal < 3.4) return 3
      return 4
    })

    return { days }
  })
}

export const fallbackGitHubContributions: GitHubContributions = {
  username: '4lifbima',
  total: 587,
  periodLabel: 'in the last year',
  months: [
    { label: 'Mar', week: 0 },
    { label: 'Apr', week: 4 },
    { label: 'May', week: 8 },
    { label: 'Jun', week: 12 },
    { label: 'Jul', week: 16 },
    { label: 'Aug', week: 20 },
    { label: 'Sep', week: 25 },
    { label: 'Oct', week: 29 },
    { label: 'Nov', week: 33 },
    { label: 'Dec', week: 37 },
    { label: 'Jan', week: 41 },
    { label: 'Feb', week: 46 }
  ],
  weekdays: ['Mon', 'Wed', 'Fri'],
  weeks: makeContributionWeeks()
}

// Compatibility export to avoid breaking older imports.
export interface ClientFeedback {}
export const clientFeedbacks: ClientFeedback[] = []
