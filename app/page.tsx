import {
  Container,
  FilterSide,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma";

export default async function Home() {
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
    <>
      <Container className="mt-5">
        {/*todo not use anymore, maybe delete
        <Title
          text="Все предложения"
          size="lg"
          className="font-extrabold mx-4"
        />*/}
      </Container>
      <TopBar />

      <Container className=" mt-10 pb-14px">
        <div className="flex gap-15">
          {/* filter side */}
          <div className="w-62.5">
            <FilterSide />
          </div>
          {/* product side */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      title={category.name}
                      key={category.id}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
      {/*<div style={{ height: "3000px" }}></div>*/}
    </>
  );
}
