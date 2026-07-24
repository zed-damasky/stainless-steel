"use client";

import React from "react";
import { ProductCard, Title } from ".";
import { cn } from "@/lib/utils";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

const tempDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at vero dolore hic optio esse repellendus enim quos. Eius doloribus saepe voluptate delectus quas fugiat repellat natus quod dolorum dicta.";

export const ProductsGroupList: React.FC<Props> = ({
  title,
  categoryId,
  items,
  className,
  listClassName,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = React.useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-12.5", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            //price={product.items[0].price}
            price={product.price}
            description={tempDescription}
            tags={product.tags}
          />
        ))}
      </div>
    </div>
  );
};
