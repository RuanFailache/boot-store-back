import { EventResponse } from "..";
import * as productServices from "@services/product";
import { formatProductListFromDB } from "@utils/formatProductListFromDB";

export const listProductsHandler = async (params: {
  currentPage: number;
  limit?: number;
}): Promise<EventResponse> => {
  const products = await productServices.getAllProducts({
    currentPage: params.currentPage,
    limit: params.limit,
  });

  return {
    status: 200,
    data: formatProductListFromDB(products),
  };
};
