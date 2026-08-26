"use client";

import React, { useState } from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CartViewItem } from "./cartViewItem";
import { useCartStore } from "@/store/cart";

interface Props {
  className?: string;
}

export const CartView: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const [open, setOpen] = useState(false);

  const items = useCartStore((s) => s.items);
  const totalAmount = useCartStore((s) => s.totalAmount());
  const totalItems = useCartStore((s) => s.totalItems());
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={children as React.ReactElement} />
      <SheetContent className="flex flex-col justify-between pb-0 bg-gray-100 w-[50vw] sm:min-w-[50vw] max-w-[50vw]">
        <SheetHeader className="bg-white px-6 py-4 border-b">
          <SheetTitle>Корзина</SheetTitle>
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground mt-1">пуста</p>
          ) : (
            <p className="text-sm text-muted-foreground mt-1">
              <span className="font-bold text-foreground">
                {totalItems.toLocaleString("ru-RU")}
              </span>{" "}
              ед. товара
            </p>
          )}
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center text-neutral-500">
              <p>Корзина пуста</p>
            </div>
          ) : (
            <div className="space-y-0">
              {items.map((item) => (
                <CartViewItem
                  key={item.cartId}
                  product={item}
                  onRemove={() => removeItem(item.cartId)}
                />
              ))}
            </div>
          )}
        </div>

        <SheetFooter className="bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4 items-center">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">
                {totalAmount.toLocaleString("ru-RU")} ₽
              </span>
            </div>
            {items.length === 0 ? (
              <Button
                type="submit"
                className="w-full h-12 text-base"
                onClick={() => setOpen(false)}
              >
                Вернуться к покупкам
              </Button>
            ) : (
              <Link href="/">
                <Button
                  type="submit"
                  className="w-full h-12 text-base"
                  onClick={() => {
                    alert(
                      "Приложение в разработке, оформление заказа пока невозможно :(",
                    );
                  }}
                >
                  Оформить заказ
                  <ArrowRight className="w-5 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
