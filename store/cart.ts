import { create } from "zustand";
import { ProductClient } from "@/components/types";

//todo use prisma type
interface CartItem extends ProductClient {
  cartId: string;
}

interface CartState {
  items: CartItem[];
  addItem: (product: ProductClient) => void;
  removeItem: (cartId: string) => void;
  removeItemByProductId: (productId: string) => void;
  clearCart: () => void;
  totalAmount: () => number;
  totalItems: () => number;
  hasItem: (productId: string) => boolean;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return state;
      }

      return {
        items: [...state.items, { ...product, cartId: crypto.randomUUID() }],
      };
    }),

  removeItem: (cartId) =>
    set((state) => ({
      items: state.items.filter((item) => item.cartId !== cartId),
    })),

  removeItemByProductId: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ items: [] }),

  totalAmount: () =>
    get().items.reduce((sum, item) => sum + Number(item.price), 0),

  totalItems: () => get().items.length,

  hasItem: (productId) => get().items.some((item) => item.id === productId),
}));
