"use client";

import React from "react";
import { Button } from "../ui";
import { Plus, Trash2 } from "lucide-react";
import { ProductClient } from "../types";
import { useCartStore } from "@/store/cart";

interface Props {
  product: ProductClient;
  className?: string;
  preventedClick?: boolean;
}

export const AddToCartButton: React.FC<Props> = ({
  className,
  product,
  preventedClick,
}) => {
  const addItem = useCartStore((s) => s.addItem);
  const hasItem = useCartStore((s) => s.hasItem(product.id));
  const removeItemByProductId = useCartStore((s) => s.removeItemByProductId);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (preventedClick) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (hasItem) {
      removeItemByProductId(product.id);
    } else {
      addItem(product);
    }
  };

  if (hasItem) {
    return (
      <Button
        variant={"destructive"}
        className={className}
        onClick={handleClick}
      >
        <Trash2 size={20} />
        Удалить из корзины
      </Button>
    );
  }

  return (
    <Button variant={"secondary"} className={className} onClick={handleClick}>
      <Plus size={20} />В корзину
    </Button>
  );
};
