import ProductsOnCartModel from "@models/productsOnCart";
import ResponseError from "@utils/ResponseError";

const productsOnCartModel = new ProductsOnCartModel();

export const removeProduct = async (userId: number, productId: number) => {
  const productOnCart = await productsOnCartModel.findProductInCart(
    userId,
    productId
  );

  if (!productOnCart) {
    throw new ResponseError(400, "Product isn't at cart!");
  }

  return productsOnCartModel.removeFromCart(productOnCart.id);
};
