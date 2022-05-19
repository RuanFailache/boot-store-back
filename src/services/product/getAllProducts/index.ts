import { GetAllProductsInput } from "@interfaces/product";
import ProductModel from "@models/product";

const productModel = new ProductModel();

export const getAllProducts = async ({
  currentPage,
  limit,
}: GetAllProductsInput) => {
  return productModel.getAll(currentPage, limit);
};
