export type ProductFilter = 'category' | 'isAtCart' | 'isFavorite'

export type FormattedProduct = {
  id: number
  name: string
  price: number
  category: string
  banner: string
  images: string[]
  likes: number
  isAtCart: boolean
  isFavorite: boolean
}
