import { prisma } from "@/prisma/prisma";
import { ProductsGroupList } from "..";

export async function ProductsSection() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          material: true,
          badges: true,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-8">
      {categories.map(
        (category) =>
          category.products.length > 0 && (
            <ProductsGroupList
              title={category.name}
              key={category.id}
              categoryId={category.id}
              items={category.products.map((product) => ({
                ...product,
                price: Number(product.price),
                mass: Number(product.mass),
              }))}
            />
          ),
      )}
    </div>
  );
}
