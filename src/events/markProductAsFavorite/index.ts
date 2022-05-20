import * as productServices from '@services/product'
import * as userServices from '@services/user'
import * as userFavoriteProductsServices from '@services/userFavoriteProducts'
import ResponseError from '@utils/ResponseError'

export const markProductAsFavoriteHandler = async (params: {
  productId: number
  userId: number
}) => {
  const [user, product] = await Promise.all([
    userServices.getCurrentUser(params.userId),
    productServices.getProductById(params.productId),
  ])

  if (!user || !product) {
    throw new ResponseError(400, 'User and/or Product are invalid!')
  }

  await Promise.all([
    userFavoriteProductsServices.addProduct(user.id, product.id),
    productServices.addLike(product.id),
  ])

  return {
    status: 201,
  }
}
