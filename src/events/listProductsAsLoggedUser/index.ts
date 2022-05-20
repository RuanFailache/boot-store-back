import * as productServices from '@services/product'
import * as userServices from '@services/user'
import { formatProductListFromDB } from '@utils/formatProductListFromDB'
import ResponseError from '@utils/ResponseError'
import { EventResponse } from '..'

export const listProductsAsLoggedUserHandler = async (params: {
  userId: number
  filters?: ('category' | 'isAtCart' | 'isFavorite')[]
}): Promise<EventResponse> => {
  const [products, currUser] = await Promise.all([
    productServices.getAllProducts(),
    userServices.getCurrentUser(params.userId),
  ])

  const data = formatProductListFromDB(products)

  if (!currUser) {
    throw new ResponseError(401, 'User must be logged!')
  }

  products.forEach((product, index) => {
    if (product.ProductOnCart.find((p) => p.userId === currUser.id)) {
      data[index].isAtCart = true
    }
    if (product.UserFavoriteProducts.find((p) => p.userId === currUser.id)) {
      data[index].isFavorite = true
    }
  })

  return {
    status: 200,
    data,
  }
}
