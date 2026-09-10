"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui";
import { Plus, Trash2 } from "lucide-react";
import { CartItem } from "../types";
import { useCartStore } from "@/store/cart";

interface Props {
  product: CartItem;
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

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  return (
    <Button
      variant={isMounted && hasItem ? "destructive" : "secondary"}
      className={className}
      onClick={handleClick}
    >
      {isMounted && hasItem ? <Trash2 size={20} /> : <Plus size={20} />}
      {isMounted && hasItem ? "Удалить из корзины" : "В корзину"}
    </Button>
  );
};
