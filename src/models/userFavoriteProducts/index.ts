import connectDatabase from '../connectDatabase'

export default class UserFavoriteProductsModel {
  private userFavoriteProductsDb

  constructor() {
    this.userFavoriteProductsDb = connectDatabase.userFavoriteProducts
  }

  findProductInFavorites(userId: number, productId: number) {
    return this.userFavoriteProductsDb.findFirst({
      where: {
        productId,
        userId,
      },
    })
  }

  addToFavorites(userId: number, productId: number) {
    return this.userFavoriteProductsDb.create({
      data: {
        productId,
        userId,
      },
    })
  }

  removeFromFavorites(favoriteId: number) {
    return this.userFavoriteProductsDb.delete({
      where: {
        id: favoriteId,
      },
    })
  }
}
