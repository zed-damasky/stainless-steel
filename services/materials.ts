import { Material } from "@/lib/generated/prisma/client";
import { axiosInstance } from "./axiosInstance";
import { ApiRoutes } from "./apiRoutes";

export const getAll = async (): Promise<Material[]> => {
  return (await axiosInstance.get<Material[]>(ApiRoutes.MATERIAL)).data;
};
