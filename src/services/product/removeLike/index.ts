import ProductModel from '@models/product'
import ResponseError from '@utils/ResponseError'

const productModel = new ProductModel()

export const removeLike = async (productId: number) => {
  const product = await productModel.getById(productId)

  if (!product) {
    throw new ResponseError(404, 'Product not found!')
  }

  return productModel.removeLike(product.id, product.likes)
}
