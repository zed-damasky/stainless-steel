"use client";

import React from "react";
import { ProductCard, Title } from ".";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  items: any[]; //todo fix any
  className?: string;
  listClassName?: string;
  categoryId: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  categoryId, // todo delete if not use
  items,
  className,
  listClassName,
}) => {
  return (
    <div className={cn("scroll-mt-[16vh]", className)} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5 " />

      <div className={cn("grid grid-cols-3 gap-8", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={Number(product.price)}
            description={product.description}
            badges={product.badges}
          />
        ))}
      </div>
    </div>
  );
};
