"use client";

import React from "react";
import { ProductCard, Title } from ".";
import { cn } from "@/lib/utils";
import { ProductClient } from "@/components/types";

interface Props {
  title: string;
  items: ProductClient[];
  className?: string;
  listClassName?: string;
  categoryId: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  listClassName,
}) => {
  return (
    <div className={cn("scroll-mt-[16vh]", className)} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5 " />

      <div className={cn("grid grid-cols-3 gap-8", listClassName)}>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
