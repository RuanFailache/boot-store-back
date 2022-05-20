import ProductsOnCartModel from '@models/productsOnCart'
import ResponseError from '@utils/ResponseError'

const productsOnCartModel = new ProductsOnCartModel()

export const addProduct = async (userId: number, productId: number) => {
  const hasProductOnCart = await productsOnCartModel.findProductInCart(
    userId,
    productId,
  )

  if (hasProductOnCart) {
    throw new ResponseError(400, 'Product already is at cart!')
  }

  return productsOnCartModel.addToCart(userId, productId)
}
