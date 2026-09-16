import { filterProducts } from "@/lib/filterProducts";
import { ProductsGroupList } from "..";

interface Props {
  searchParams: Record<string, string | string[] | undefined>;
}

export async function ProductsSection({ searchParams }: Props) {
  const toArray = (value: string | string[] | undefined): string[] => {
    if (!value) return [];
    if (Array.isArray(value)) return value.map(String);
    return value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };

  const toNumber = (
    value: string | string[] | undefined,
  ): number | undefined => {
    if (!value || Array.isArray(value)) return undefined;
    const num = Number(value);
    return Number.isFinite(num) ? num : undefined;
  };

  const products = await filterProducts({
    categories: toArray(searchParams.categories),
    materials: toArray(searchParams.materials),
    badges: toArray(searchParams.badges),
    priceFrom: toNumber(searchParams.priceFrom),
    priceTo: toNumber(searchParams.priceTo),
    quantityFrom: toNumber(searchParams.quantityFrom),
    quantityTo: toNumber(searchParams.quantityTo),
  });

  const categoriesMap = new Map<
    string,
    { id: string; name: string; products: any[] }
  >();

  for (const product of products) {
    const categoryId = product.categoryId;
    if (!categoriesMap.has(categoryId)) {
      categoriesMap.set(categoryId, {
        id: product.category.id,
        name: product.category.name,
        products: [],
      });
    }
    categoriesMap.get(categoryId)!.products.push({
      ...product,
      price: Number(product.price),
      mass: Number(product.mass),
    });
  }

  const categories = Array.from(categoriesMap.values());

  return (
    <div className="flex flex-col gap-8">
      {categories.map((category) => (
        <ProductsGroupList
          title={category.name}
          key={category.id}
          categoryId={category.id}
          items={category.products}
        />
      ))}
    </div>
  );
}
