import { portfolios } from '~/data/Portofolio'
import { artikels } from '~/data/Artikel'
import { defineSitemapEventHandler, asSitemapUrl } from '#imports'

export default defineSitemapEventHandler(() => {
    const urls = [
        // Static pages
        asSitemapUrl({
            loc: '/',
            changefreq: 'weekly',
            priority: 1.0
        }),
        asSitemapUrl({
            loc: '/portfolio',
            changefreq: 'weekly',
            priority: 0.9
        }),
        asSitemapUrl({
            loc: '/artikel',
            changefreq: 'weekly',
            priority: 0.9
        }),

        // Dynamic portfolio pages
        ...portfolios.map(portfolio => asSitemapUrl({
            loc: `/portfolio/${portfolio.slug}`,
            lastmod: new Date(portfolio.date),
            changefreq: 'monthly',
            priority: 0.8
        })),

        // Dynamic artikel pages
        ...artikels.map(artikel => asSitemapUrl({
            loc: `/artikel/${artikel.slug}`,
            lastmod: new Date(artikel.date),
            changefreq: 'monthly',
            priority: 0.8
        }))
    ]

    return urls
})
