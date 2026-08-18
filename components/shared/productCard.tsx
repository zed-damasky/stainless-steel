"use client";

import Link from "next/link";
import React from "react";
import { Title } from ".";
import { Badge, Button } from "../ui";
import { Plus } from "lucide-react";
import { getBadgeVariant } from "@/lib/badgeVariant";
import { ProductClient } from "@/components/types";

interface Props {
  product: ProductClient;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ product, className }) => {
  const { id, name, price, imageUrl, description, badges } = product;

  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-65 items-center">
          <img
            className="h-auto w-auto max-h-53.75 max-w-53.75 object-contain"
            src={imageUrl[0]}
            alt={name}
          />
        </div>

        <Title
          text={name}
          size="sm"
          className="mb-1 mt-3 font-bold line-clamp-2"
        />

        {badges.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge.id} variant={getBadgeVariant(badge.name)}>
                {badge.name}
              </Badge>
            ))}
          </div>
        )}

        <p className="text-sm text-gray-400 line-clamp-3">{description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl">
            <b>{Number(price).toLocaleString("ru-RU")} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />В корзину
          </Button>
        </div>
      </Link>
    </div>
  );
};
