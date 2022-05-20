import { FormattedProduct, ProductFilter } from '@interfaces/product'
import * as productServices from '@services/product'
import { filterProducts } from '@utils/filterProducts'
import { formatProductListFromDB } from '@utils/formatProductListFromDB'
import { EventResponse } from '..'

export const listProductsHandler = async (params: {
  filters?: ProductFilter[]
  categoryToBeFiltered?: string
}): Promise<EventResponse> => {
  const products = await productServices.getAllProducts()

  let data: FormattedProduct[] = formatProductListFromDB(products)

  if (params.filters) {
    params.filters.forEach((filter) => {
      data = filterProducts(filter, data, params.categoryToBeFiltered)
    })
  }
  return {
    status: 200,
    data,
  }
}
