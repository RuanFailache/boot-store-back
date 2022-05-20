import { Product } from '@prisma/client'

export const formatProductListFromDB = (dataFromDatabase: Product[]) => {
  return dataFromDatabase.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      banner: product.banner,
      images: product.images,
      likes: product.likes,
      isAtCart: false,
      isFavorite: false,
    }
  })
}
