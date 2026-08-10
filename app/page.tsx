import {
  Container,
  FilterSide,
  ProductsGroupList,
  ProductsGroupListContainer,
  Title,
  TopBar,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma";
import { Api } from "@/services/apiClient";
import { CategoryWithProducts } from "@/services/categories";

export default async function Home() {
  const categories = (await prisma.category.findMany({
    orderBy: { name: "asc" },
    include: { products: true },
  })) as CategoryWithProducts[];

  return (
    <>
      <Container className="mt-5">
        <Title
          text="Все предложения"
          size="lg"
          className="font-extrabold mx-4"
        />
      </Container>
      {/*
      todo fix:
        Only plain objects can be passed to Client Components from Server Components. Decimal objects are not supported.
  {id: ..., name: ..., imageUrl: ..., price: ..., quantity: ..., mass: Decimal, description: ..., categoryId: ..., materialId: ..., ordersCount: ..., createdAt: ..., updatedAt: ...}
      
      */}
      <TopBar categories={categories} />
      <Container className=" mt-10 pb-14px">
        <div className="flex gap-15">
          {/* filter side */}
          <div className="w-62.5">
            <FilterSide />
          </div>
          {/* product side */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <ProductsGroupListContainer categories={categories} />
            </div>
          </div>
        </div>
      </Container>
      {/*<div style={{ height: "3000px" }}></div>*/}
    </>
  );
}
