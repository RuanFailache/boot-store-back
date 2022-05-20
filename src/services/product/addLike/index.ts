import ProductModel from '@models/product'
import ResponseError from '@utils/ResponseError'

const productModel = new ProductModel()

export const addLike = async (productId: number) => {
  const product = await productModel.getById(productId)

  if (!product) {
    throw new ResponseError(404, 'Product not found!')
  }

  return productModel.addLike(product.id, product.likes)
}
