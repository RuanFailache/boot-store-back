import * as userServices from "@services/user";
import * as productServices from "@services/product";
import * as userFavoriteProductsServices from "@services/userFavoriteProducts";
import ResponseError from "@utils/ResponseError";

export const unmarkProductAsFavoriteHandler = async (params: {
  productId: number;
  userId: number;
}) => {
  const [user, product] = await Promise.all([
    userServices.getCurrentUser(params.userId),
    productServices.getProductById(params.productId),
  ]);

  if (!user || !product) {
    throw new ResponseError(400, "User and/or Product are invalid!");
  }

  await userFavoriteProductsServices.removeProduct(user.id, product.id);

  return {
    status: 204,
  };
};
