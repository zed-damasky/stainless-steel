import { ProductModal } from "@/components/shared";
import { ProductClient } from "@/components/types";
import { prisma } from "@/prisma/prisma";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      badges: true,
      material: true,
      category: true,
    },
  });

  if (!product) return notFound();

  const clientProduct = {
    ...product,
    price: Number(product.price),
    mass: Number(product.mass),
  } as ProductClient;

  return <ProductModal product={clientProduct} />;
}
