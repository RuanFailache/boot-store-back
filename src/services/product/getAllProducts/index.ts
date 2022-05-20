import ProductModel from '@models/product'

const productModel = new ProductModel()

export const getAllProducts = async () => {
  return productModel.getAll()
}
