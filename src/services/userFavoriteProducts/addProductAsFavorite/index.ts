import UserFavoriteProductsModel from "@models/userFavoriteProducts";
import ResponseError from "@utils/ResponseError";

const userFavoriteProductsModel = new UserFavoriteProductsModel();

export const addProduct = async (userId: number, productId: number) => {
  const productOnCart = await userFavoriteProductsModel.findProductInFavorites(
    userId,
    productId
  );

  console.log(Boolean(productOnCart));

  if (productOnCart) {
    throw new ResponseError(400, "Product already is marked as favorite!");
  }
  console.log("here");

  return userFavoriteProductsModel.addToFavorites(userId, productId);
};
