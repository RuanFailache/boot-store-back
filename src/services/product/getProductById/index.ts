import ProductModel from "@models/product";
import ResponseError from "@utils/ResponseError";

const productModel = new ProductModel();

export const getProductById = async (productId: number) => {
  return productModel.getById(productId);
};
