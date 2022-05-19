import connectDatabase from "../connectDatabase";

export default class ProductModel {
  private productDb;

  constructor() {
    this.productDb = connectDatabase.product;
  }

  getAll(currentPage: number, limit?: number) {
    const auxLimit = limit ?? 20;
    const offset = currentPage * auxLimit;
    return this.productDb.findMany({
      skip: offset,
      take: auxLimit,
      include: {
        ProductOnCart: true,
        UserFavoriteProducts: true,
      },
    });
  }

  getByCategory(category: string, currentPage: number, limit?: number) {
    const auxLimit = limit ?? 20;
    const offset = currentPage * auxLimit;
    return this.productDb.findMany({
      skip: offset,
      take: auxLimit,
      include: {
        ProductOnCart: true,
        UserFavoriteProducts: true,
      },
      where: {
        category,
      },
    });
  }
}
