import { EventResponse } from "..";
import * as productServices from "@services/product";
import * as userServices from "@services/user";

export const listProductsHandler = async (params: {
  currentPage: number;
  limit?: number;
  userId: number;
}): Promise<EventResponse> => {
  const [products, currUser] = await Promise.all([
    productServices.getAllProducts({
      currentPage: params.currentPage,
      limit: params.limit,
    }),
    userServices.getCurrentUser(params.userId),
  ]);

  const data = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      banner: product.banner,
      images: product.images,
      likes: product.likes,
      isAtCart: false,
      isFavorite: false,
    };
  });

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
