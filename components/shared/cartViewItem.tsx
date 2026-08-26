import React from "react";
import { ProductClient } from "../types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Trash2 } from "lucide-react";

interface Props {
  product: ProductClient;
  onRemove?: () => void;
  className?: string;
}

export const CartViewItem: React.FC<Props> = ({
  product,
  onRemove,
  className,
}) => {
  const { id, name, price, quantity, material, category, imageUrl } = product;

  return (
    <div className={cn("flex gap-4 border-b border-gray-200 py-4", className)}>
      <Link href={`/product/${id}`} className="shrink-0">
        <div className="relative h-24 w-24 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
          <img
            src={imageUrl[0]}
            alt={name}
            className="h-full w-full object-contain p-2"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <Link href={`/product/${id}`} className="hover:underline">
          <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
            {name}
          </h3>
        </Link>

        <div className="text-xs text-muted-foreground space-y-0.5 mt-1">
          <p>
            Количество:{" "}
            <span className="font-medium text-foreground">{quantity} шт.</span>
          </p>
          {material?.name && <p>Материал: {material.name}</p>}
          {category?.name && <p>Категория: {category.name}</p>}
        </div>

        <div className="flex items-center justify-between mt-auto pt-1">
          <p className="font-extrabold text-lg">
            {Number(price).toLocaleString("ru-RU")} ₽
          </p>

          {onRemove && (
            <button
              onClick={() => onRemove()}
              className="flex h-10 w-10 items-center justify-center rounded-md text-red-500 hover:bg-red-50 transition-colors"
              title="Удалить из корзины"
            >
              <Trash2 size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
