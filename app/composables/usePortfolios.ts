import { portfolios, type Portfolio } from '~/data/Portofolio'

export const usePortfolios = () => {
  return portfolios
}

export const usePortfolio = (slug: string) => {
  return portfolios.find(p => p.slug === slug)
}

