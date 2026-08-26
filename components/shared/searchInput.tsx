"use client";

import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui";
import { cn } from "@/lib/utils";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import { Api } from "@/services/apiClient";
import { Product } from "@/lib/generated/prisma/client";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);

  const resultsQuantity = 15;

  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        setProducts(await Api.products.search(searchQuery));
      } catch (e) {
        console.log(e);
      }
    },
    250,
    [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/60 z-30" />
      )}

      <div
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-31",
          className,
        )}
        ref={ref}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <Input
          className="h-11 pl-11"
          placeholder="Найти..."
          type="text"
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-md py-1 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && products.length > 0 && "visible opacity-100 top-12",
          )}
        >
          {products.slice(0, resultsQuantity).map((product) => (
            <Link
              onClick={onClickItem}
              key={product.id}
              href={`/product/${product.id}`}
            >
              <div className="px-3 py-2 hover:bg-primary/20 cursor-pointer">
                {product.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
