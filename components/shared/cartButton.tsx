"use client";

import React from "react";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartView } from "./cartView";
import { useCartStore } from "@/store/cart";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const totalItems = useCartStore((s) => s.totalItems());
  const totalAmount = useCartStore((s) => s.totalAmount());

  return (
    <CartView>
      <Button className={cn("group relative", className)}>
        <div className="relative flex items-center">
          <div className="flex items-center gap-1 transition-opacity duration-300 group-hover:opacity-0">
            <ShoppingCart size={16} strokeWidth={2} />
            <b className="tabular-nums min-w-8 text-center">
              {totalItems.toLocaleString("ru-RU")}
            </b>
          </div>
          <ArrowRight
            size={20}
            className="absolute left-1/2 top-1/2 -translate-y-1/2 transition-all duration-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:-translate-x-1/2"
          />
        </div>
        <span className="h-full w-px bg-white/30 mx-3" />
        <div className="min-w-12 text-center">
          <b className="tabular-nums">
            {totalAmount.toLocaleString("ru-RU")} ₽
          </b>
        </div>
      </Button>
    </CartView>
  );
};
