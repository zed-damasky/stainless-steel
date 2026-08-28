import { create } from "zustand";
import { ProductClient } from "@/components/types";

export interface CartItem extends ProductClient {
  cartId: string;
}

interface CartState {
  items: CartItem[];
  isLoading: boolean;

  fetchCart: () => Promise<void>;
  addItem: (product: ProductClient) => Promise<void>;
  removeItem: (cartId: string) => Promise<void>;
  removeItemByProductId: (productId: string) => Promise<void>;
  clearCart: () => void;

  totalAmount: () => number;
  totalItems: () => number;
  hasItem: (productId: string) => boolean;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isLoading: false,

  fetchCart: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/cart");
      const data = await res.json();
      set({ items: data.items || [], isLoading: false });
    } catch (error) {
      console.error("Failed to fetch cart", error);
      set({ isLoading: false });
    }
  },

  addItem: async (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) return state;

      return {
        items: [...state.items, { ...product, cartId: crypto.randomUUID() }],
      };
    });

    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });
    } catch (error) {
      console.error("Failed to add to cart", error);
    }
  },

  removeItem: async (cartId) => {
    set((state) => ({
      items: state.items.filter((item) => item.cartId !== cartId),
    }));

    try {
      await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId }),
      });
    } catch (error) {
      console.error("Failed to remove from cart", error);
    }
  },

  removeItemByProductId: async (productId) => {
    const itemToRemove = get().items.find((item) => item.id === productId);
    if (itemToRemove) {
      await get().removeItem(itemToRemove.cartId);
    }
  },

  clearCart: () => {
    set({ items: [] });
  },

  totalAmount: () =>
    get().items.reduce((sum, item) => sum + Number(item.price), 0),

  totalItems: () => get().items.length,

  hasItem: (productId) => get().items.some((item) => item.id === productId),
}));
