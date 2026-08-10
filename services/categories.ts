import { Category, Prisma } from "@/lib/generated/prisma/client";
import { axiosInstance } from "./axiosInstance";
import { ApiRoutes } from "./apiRoutes";

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
  include: { products: true };
}>;

export const getAll = async (): Promise<Category[]> => {
  return (await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES)).data;
};
