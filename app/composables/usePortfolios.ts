import { portfolios, type Portfolio } from '~/data/Portofolio'

export const usePortfolios = () => {
  return [...portfolios].sort((a, b) => parseInt(b.id) - parseInt(a.id))
}

export const usePortfolio = (slug: string) => {
  return portfolios.find(p => p.slug === slug)
}

