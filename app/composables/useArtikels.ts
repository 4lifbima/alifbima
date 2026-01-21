import { artikels, type Artikel } from '~/data/Artikel'

export const useArtikels = () => {
  return artikels
}

export const useArtikel = (slug: string) => {
  return artikels.find(a => a.slug === slug)
}

