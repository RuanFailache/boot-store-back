import { FormattedProduct, ProductFilter } from '@interfaces/product'
import * as productServices from '@services/product'
import * as userServices from '@services/user'
import { filterProducts } from '@utils/filterProducts'
import { formatProductListFromDB } from '@utils/formatProductListFromDB'
import ResponseError from '@utils/ResponseError'
import { EventResponse } from '..'

export const listProductsAsLoggedUserHandler = async (params: {
  userId: number
  filters?: ProductFilter[]
  categoryToBeFiltered?: string
}): Promise<EventResponse> => {
  const [products, currUser] = await Promise.all([
    productServices.getAllProducts(),
    userServices.getCurrentUser(params.userId),
  ])

  let data: FormattedProduct[] = formatProductListFromDB(products)

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

  if (params.filters) {
    params.filters.forEach((filter) => {
      data = filterProducts(filter, data, params.categoryToBeFiltered)
    })
  }

  return {
    status: 200,
    data,
  }
}
