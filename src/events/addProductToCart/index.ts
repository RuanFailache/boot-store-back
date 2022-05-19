import * as userServices from "@services/user";
import * as productServices from "@services/product";
import * as productsOnCartServices from "@services/productsOnCart";
import ResponseError from "@utils/ResponseError";

export const addProductToCartHandler = async (params: {
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

  await productsOnCartServices.addProduct(user.id, product.id);

  return {
    status: 201,
  };
};
