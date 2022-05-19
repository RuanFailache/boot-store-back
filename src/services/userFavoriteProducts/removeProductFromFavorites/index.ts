import UserFavoriteProductsModel from "@models/userFavoriteProducts";
import ResponseError from "@utils/ResponseError";

const userFavoriteProductsModel = new UserFavoriteProductsModel();

export const removeProduct = async (userId: number, productId: number) => {
  const productOnCart = await userFavoriteProductsModel.findProductInFavorites(
    userId,
    productId
  );

  if (!productOnCart) {
    throw new ResponseError(400, "Product isn't marked as favorite!");
  }

  return userFavoriteProductsModel.removeFromFavorites(productOnCart.id);
};
