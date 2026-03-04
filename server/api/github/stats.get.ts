interface GitHubRepo {
    name: string
    description: string | null
    language: string | null
    stargazers_count: number
    forks_count: number
    html_url: string
    fork: boolean
    archived: boolean
}

interface GitHubUser {
    login: string
    name: string | null
    bio: string | null
    avatar_url: string
    html_url: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    company: string | null
    location: string | null
    blog: string | null
    twitter_username: string | null
}

export interface GitHubStats {
    profile: {
        login: string
        name: string
        bio: string
        avatarUrl: string
        profileUrl: string
        publicRepos: number
        publicGists: number
        followers: number
        following: number
        createdAt: string
        company: string
        location: string
        blog: string
        twitterUsername: string
    }
    topRepos: {
        name: string
        description: string
        language: string
        stars: number
        forks: number
        url: string
    }[]
    languageStats: {
        language: string
        count: number
        percentage: number
    }[]
    totalStars: number
}

export default defineCachedEventHandler(async (event): Promise<GitHubStats> => {
    const config = useRuntimeConfig(event)
    const username = config.public.githubUsername as string
    const token = config.githubToken as string

    if (!username) {
        throw createError({ statusCode: 400, statusMessage: 'GitHub username is required' })
    }

    const headers: Record<string, string> = {
        'User-Agent': 'nuxt-portfolio',
        Accept: 'application/vnd.github.v3+json'
    }
    if (token) headers['Authorization'] = `Bearer ${token}`

    // Fetch user profile and all repos in parallel
    const [userRaw, reposRaw] = await Promise.all([
        $fetch<GitHubUser>(`https://api.github.com/users/${username}`, { headers }),
        $fetch<GitHubRepo[]>(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, { headers })
    ])

    // Filter out forks for language stats
    const ownRepos = reposRaw.filter(r => !r.fork)

    // Aggregate language stats
    const langMap = new Map<string, number>()
    for (const repo of ownRepos) {
        if (repo.language) {
            langMap.set(repo.language, (langMap.get(repo.language) ?? 0) + 1)
        }
    }
    const totalLangRepos = Array.from(langMap.values()).reduce((a, b) => a + b, 0)
    const languageStats = Array.from(langMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([language, count]) => ({
            language,
            count,
            percentage: totalLangRepos > 0 ? Math.round((count / totalLangRepos) * 100) : 0
        }))

    // Top repos by stars (non-fork)
    const topRepos = [...ownRepos]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)
        .map(r => ({
            name: r.name,
            description: r.description ?? '',
            language: r.language ?? 'Unknown',
            stars: r.stargazers_count,
            forks: r.forks_count,
            url: r.html_url
        }))

    // Total stars
    const totalStars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0)

    return {
        profile: {
            login: userRaw.login,
            name: userRaw.name ?? userRaw.login,
            bio: userRaw.bio ?? '',
            avatarUrl: userRaw.avatar_url,
            profileUrl: userRaw.html_url,
            publicRepos: userRaw.public_repos,
            publicGists: userRaw.public_gists,
            followers: userRaw.followers,
            following: userRaw.following,
            createdAt: userRaw.created_at,
            company: userRaw.company ?? '',
            location: userRaw.location ?? '',
            blog: userRaw.blog ?? '',
            twitterUsername: userRaw.twitter_username ?? ''
        },
        topRepos,
        languageStats,
        totalStars
    }
}, {
    maxAge: 60 * 30,
    staleMaxAge: 60 * 60
})
