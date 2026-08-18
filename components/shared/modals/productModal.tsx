"use client";

import { Dialog, DialogContent } from "@/components/ui";
import { ProductClient } from "@/components/types";
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ProductView } from "..";

interface Props {
  product: ProductClient | null;
  className?: string;
}

export const ProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  if (!product) return null;

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "w-full max-w-[90vw] max-h-[95vh] overflow-y-auto bg-white",
          className,
        )}
      >
        <div className="p-6">
          <ProductView product={product} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
