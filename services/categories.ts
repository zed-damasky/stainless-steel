import { Category, Prisma } from "@/lib/generated/prisma/client";
import { axiosInstance } from "./axiosInstance";
import { ApiRoutes } from "./apiRoutes";


export const getAll = async (): Promise<Category[]> => {
  return (await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES)).data;
};
