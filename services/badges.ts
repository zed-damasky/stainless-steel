import { Badge } from "@/lib/generated/prisma/client";
import { axiosInstance } from "./axiosInstance";
import { ApiRoutes } from "./apiRoutes";

export const getAll = async (): Promise<Badge[]> => {
  return (await axiosInstance.get<Badge[]>(ApiRoutes.BADGES)).data;
};
