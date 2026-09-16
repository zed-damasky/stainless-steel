import { Product } from "@/lib/generated/prisma/client";
import { axiosInstance } from "./axiosInstance";
import { ApiRoutes } from "./apiRoutes";

export interface ProductStats {
  price: { min: number; max: number };
  quantity: { min: number; max: number };
}

export interface FilterParams {
  materials?: string[];
  badges?: string[];
  categories?: string[];
  price?: { priceFrom: number; priceTo: number };
  quantity?: { quantityFrom: number; quantityTo: number };
}

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};

export const getFiltered = async (params: FilterParams): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params,
      paramsSerializer: (p) =>
        require("qs").stringify(p, { arrayFormat: "comma", skipNulls: true }),
    })
  ).data;
};

export const getStats = async (): Promise<ProductStats> => {
  return (await axiosInstance.get<ProductStats>(ApiRoutes.PRODUCTS_STATS)).data;
};
