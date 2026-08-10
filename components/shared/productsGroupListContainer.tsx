import { CategoryWithProducts } from "@/services/categories";
import { ProductsGroupList } from ".";

interface Props {
  categories: CategoryWithProducts[];
}

export function ProductsGroupListContainer({ categories }: Props) {
  if (!categories.length) {
    return <p className="text-gray-400">Категории не найдены</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      {categories.map((category) => (
        <ProductsGroupList
          key={category.id}
          title={category.name}
          categoryId={category.id}
          items={category.products ?? []}
        />
      ))}
    </div>
  );
}