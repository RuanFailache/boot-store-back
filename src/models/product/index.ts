import connectDatabase from "../connectDatabase";

export default class ProductModel {
  private productDb;

  constructor() {
    this.productDb = connectDatabase.product;
  }

  getAll() {
    return this.productDb.findMany({
      include: {
        ProductOnCart: true,
        UserFavoriteProducts: true,
      },
    });
  }

  getById(id: number) {
    return this.productDb.findUnique({
      where: {
        id,
      },
    });
  }

  async addLike(productId: number, numberOfLikes: number) {
    return this.productDb.update({
      where: {
        id: productId,
      },
      data: {
        likes: numberOfLikes + 1,
      },
    });
  }

  async removeLike(productId: number, numberOfLikes: number) {
    return this.productDb.update({
      where: {
        id: productId,
      },
      data: {
        likes: numberOfLikes > 0 ? numberOfLikes - 1 : numberOfLikes,
      },
    });
  }
}
