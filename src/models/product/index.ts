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
}
