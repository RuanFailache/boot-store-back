import { EventResponse } from "..";
import * as productServices from "@services/product";
import { formatProductListFromDB } from "@utils/formatProductListFromDB";

export const listProductsHandler = async (): Promise<EventResponse> => {
  const products = await productServices.getAllProducts();
  return {
    status: 200,
    data: formatProductListFromDB(products),
  };
};
