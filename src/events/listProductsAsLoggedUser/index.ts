import { EventResponse } from "..";
import * as productServices from "@services/product";
import * as userServices from "@services/user";
import { formatProductListFromDB } from "@utils/formatProductListFromDB";

export const listProductsAsLoggedUserHandler = async (params: {
  currentPage: number;
  limit?: number;
  userId: number;
}): Promise<EventResponse> => {
  console.log(params);
  const [products, currUser] = await Promise.all([
    productServices.getAllProducts({
      currentPage: params.currentPage,
      limit: params.limit,
    }),
    userServices.getCurrentUser(params.userId),
  ]);

  const data = formatProductListFromDB(products);

  if (currUser) {
    products.forEach((product, index) => {
      if (product.ProductOnCart?.cartId === currUser.cart?.id) {
        data[index].isAtCart = true;
      }
      if (product.UserFavoriteProducts?.userId === currUser.id) {
        data[index].isFavorite = true;
      }
    });
  }

  return {
    status: 200,
    data,
  };
};
