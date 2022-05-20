import { FormattedProduct, ProductFilter } from '@interfaces/product'

export const filterProducts = (
  filterType: ProductFilter,
  formattedProducts: FormattedProduct[],
  categoryToBeFiltered?: string,
) => {
  switch (filterType) {
    case 'category':
      return formattedProducts.filter(
        (p) => p.category === categoryToBeFiltered,
      )

    case 'isAtCart':
      return formattedProducts.filter((p) => p.isAtCart)

    case 'isFavorite':
      return formattedProducts.filter((p) => p.isFavorite)

    default:
      return formattedProducts
  }
}
