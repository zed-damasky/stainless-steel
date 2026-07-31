import { Product } from "@/lib/generated/prisma/client";
import { axiosInstance } from "./axiosInstance";
import { ApiRoutes } from "./apiRoutes";

export interface ProductStats {
  price: { min: number; max: number };
  quantity: { min: number; max: number };
}

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};

export const getStats = async (): Promise<ProductStats> => {
  return (await axiosInstance.get<ProductStats>(ApiRoutes.PRODUCTS_STATS)).data;
};
