import ProductModel from '@models/product'

const productModel = new ProductModel()

export const getProductById = async (productId: number) => {
  return productModel.getById(productId)
}
