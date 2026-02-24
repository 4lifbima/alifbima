import type { GitHubContributions } from '~/data/ClientFeedback'

interface GitHubGraphQLError {
  message: string
}

interface GraphQLContributionDay {
  date: string
  contributionLevel: 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE'
}

interface GraphQLWeek {
  contributionDays: GraphQLContributionDay[]
}

interface GraphQLMonth {
  firstDay: string
  name: string
}

interface GraphQLCalendar {
  totalContributions: number
  weeks: GraphQLWeek[]
  months: GraphQLMonth[]
}

interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: GraphQLCalendar
      }
    }
  }
  errors?: GitHubGraphQLError[]
}

const contributionLevelMap = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4
} as const

export default defineCachedEventHandler(async (event): Promise<GitHubContributions> => {
  const config = useRuntimeConfig(event)
  const query = getQuery(event)
  const username = (query.username as string) || config.public.githubUsername
  const token = config.githubToken

  if (!username) {
    throw createError({
      statusCode: 400,
      statusMessage: 'GitHub username is required'
    })
  }

  if (!token) {
    throw createError({
      statusCode: 500,
      statusMessage: 'GITHUB_TOKEN is not configured'
    })
  }

  const to = new Date()
  const from = new Date(to)
  from.setFullYear(to.getFullYear() - 1)

  const response = await $fetch<GraphQLResponse>('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'nuxt-portfolio'
    },
    body: {
      query: `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                months {
                  firstDay
                  name
                }
                weeks {
                  contributionDays {
                    date
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        username,
        from: from.toISOString(),
        to: to.toISOString()
      }
    }
  })

  if (response.errors?.length) {
    throw createError({
      statusCode: 502,
      statusMessage: response.errors[0].message
    })
  }

  const calendar = response.data?.user?.contributionsCollection?.contributionCalendar
  if (!calendar) {
    throw createError({
      statusCode: 404,
      statusMessage: 'GitHub contribution data not found'
    })
  }

  const weeks = calendar.weeks.map((week) => ({
    days: week.contributionDays.map((day) => contributionLevelMap[day.contributionLevel] ?? 0)
  }))

  const weekByMonthKey = new Map<string, number>()
  calendar.weeks.forEach((week, weekIndex) => {
    const firstDate = week.contributionDays[0]?.date
    if (firstDate) {
      weekByMonthKey.set(firstDate.slice(0, 7), weekIndex)
    }
  })

  const months = calendar.months.map((month) => {
    const monthKey = month.firstDay.slice(0, 7)
    return {
      label: month.name.slice(0, 3),
      week: weekByMonthKey.get(monthKey) ?? 0
    }
  })

  return {
    username,
    total: calendar.totalContributions,
    periodLabel: 'in the last year',
    months,
    weekdays: ['Mon', 'Wed', 'Fri'],
    weeks
  }
}, {
  maxAge: 60 * 30,
  staleMaxAge: 60 * 60
})
