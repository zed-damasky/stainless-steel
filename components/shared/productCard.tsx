"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AddToCartButton, Title } from ".";
import { Badge } from "../ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getBadgeVariant } from "@/lib/badgeVariant";
import { ProductClient } from "@/components/types";

interface Props {
  product: ProductClient;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ product, className }) => {
  const { id, name, price, imageUrl, description, badges } = product;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!imageUrl || imageUrl.length <= 1) return;

    setCurrentImageIndex(
      (prev) => (prev - 1 + imageUrl.length) % imageUrl.length,
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!imageUrl || imageUrl.length <= 1) return;

    setCurrentImageIndex((prev) => (prev + 1) % imageUrl.length);
  };

  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="relative flex justify-center p-6 bg-secondary rounded-lg h-65 items-center group">
          <img
            className="h-auto w-auto max-h-53.75 max-w-53.75 object-contain"
            src={imageUrl[currentImageIndex]}
            alt={name}
          />

          {imageUrl.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:scale-110 transform z-10"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:scale-110 transform z-10"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
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

          <AddToCartButton
            productId={id}
            product={product} 
            className="text-base font-bold"
            preventedClick
          />
        </div>
      </Link>
    </div>
  );
};
