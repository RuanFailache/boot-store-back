import { EventResponse } from "..";
import * as productServices from "@services/product";
import * as userServices from "@services/user";
import { formatProductListFromDB } from "@utils/formatProductListFromDB";

export const listProductsAsLoggedUserHandler = async (params: {
  userId: number;
}): Promise<EventResponse> => {
  const [products, currUser] = await Promise.all([
    productServices.getAllProducts(),
    userServices.getCurrentUser(params.userId),
  ]);

  const data = formatProductListFromDB(products);

  products.forEach((product, index) => {
    if (product.ProductOnCart?.userId === currUser?.id) {
      data[index].isAtCart = true;
    }
    if (product.UserFavoriteProducts?.userId === currUser?.id) {
      data[index].isFavorite = true;
    }
  });

  return {
    status: 200,
    data,
  };
};
