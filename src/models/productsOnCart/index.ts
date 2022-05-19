import connectDatabase from "../connectDatabase";

export default class ProductsOnCartModel {
  private productsOnCartDb;

  constructor() {
    this.productsOnCartDb = connectDatabase.productsOnCart;
  }

  findProductInCart(userId: number, productId: number) {
    return this.productsOnCartDb.findFirst({
      where: {
        productId,
        userId,
      },
    });
  }

  addToCart(userId: number, productId: number) {
    return this.productsOnCartDb.create({
      data: {
        productId,
        userId,
      },
    });
  }

  removeFromCart(cartId: number) {
    return this.productsOnCartDb.delete({
      where: {
        id: cartId,
      },
    });
  }
}
