import { prisma } from "@/prisma/prisma";

export interface FilterProductsParams {
  categories?: string[];
  materials?: string[];
  badges?: string[];
  priceFrom?: number;
  priceTo?: number;
  quantityFrom?: number;
  quantityTo?: number;
}

export async function filterProducts(params: FilterProductsParams) {
  const where: any = {};

  if (params.categories && params.categories.length > 0) {
    where.categoryId = { in: params.categories };
  }
  if (params.materials && params.materials.length > 0) {
    where.materialId = { in: params.materials };
  }
  if (params.badges && params.badges.length > 0) {
    where.AND = params.badges.map((badgeId) => ({
      badges: { some: { id: badgeId } },
    }));
  }

  if (Number.isFinite(params.priceFrom) || Number.isFinite(params.priceTo)) {
    where.price = {
      ...(Number.isFinite(params.priceFrom) ? { gte: params.priceFrom } : {}),
      ...(Number.isFinite(params.priceTo) ? { lte: params.priceTo } : {}),
    };
  }

  if (
    Number.isFinite(params.quantityFrom) ||
    Number.isFinite(params.quantityTo)
  ) {
    where.quantity = {
      ...(Number.isFinite(params.quantityFrom)
        ? { gte: params.quantityFrom }
        : {}),
      ...(Number.isFinite(params.quantityTo) ? { lte: params.quantityTo } : {}),
    };
  }

  return await prisma.product.findMany({
    where,
    include: {
      category: true,
      material: true,
      badges: true,
    },
    orderBy: { createdAt: "asc" },
  });
}
