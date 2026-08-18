"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  className?: string;
  imageUrls?: string[];
  alt?: string;
}

export const ProductImage: React.FC<Props> = ({
  className,
  imageUrls,
  alt = "Изображение товара",
}) => {
  const images = imageUrls ?? [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevImages, setPrevImages] = useState(images);

  if (images !== prevImages) {
    setPrevImages(images);
    setActiveIndex(0);
  }

  if (images.length === 0) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl bg-secondary text-sm text-muted-foreground ${
          className ?? ""
        }`}
      >
        Нет изображения
      </div>
    );
  }

  const safeActiveIndex = activeIndex >= images.length ? 0 : activeIndex;
  const activeImage = images[safeActiveIndex];

  return (
    <div className={className}>
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-secondary">
        <Image
          key={activeImage}
          src={activeImage}
          alt={alt}
          fill
          priority={safeActiveIndex === 0}
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image, index) => {
            const isActive = index === safeActiveIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Показать изображение ${index + 1}`}
                className={`relative aspect-square w-full overflow-hidden rounded-lg border-2 transition-colors ${
                  isActive
                    ? "border-primary"
                    : "border-transparent hover:border-primary/40"
                }`}
              >
                <Image
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
