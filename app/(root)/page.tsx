import { Suspense } from "react";
import {
  Container,
  FilterSide,
  FiltersSkeleton,
  ProductsSectionSkeleton,
  TopBar,
} from "@/components/shared";
import { ProductsSection } from "@/components/shared/server-components";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <TopBar />
      </Container>

      <Container className="mt-10 pb-14px">
        <div className="flex gap-15">
          <div className="w-62.5">
            <Suspense fallback={<FiltersSkeleton />}>
              <FilterSide />
            </Suspense>
          </div>

          <div className="flex-1">
            <Suspense fallback={<ProductsSectionSkeleton />}>
              <ProductsSection />
            </Suspense>
          </div>
        </div>
      </Container>
    </>
  );
}
