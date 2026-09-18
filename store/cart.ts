import { create } from "zustand";
import { CartItem, ProductClient } from "@/components/types";
import toast from "react-hot-toast";

interface CartState {
  items: CartItem[];
  isLoading: boolean;

  fetchCart: () => Promise<void>;
  addItem: (product: ProductClient) => Promise<void>;
  removeItem: (cartItemId: string) => Promise<void>;
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
      toast.error("Ошибка при загрузке корзины")
      console.error("Failed to fetch cart", error);
      set({ isLoading: false });
    }
  },

  addItem: async (product) => {
    const tempId = crypto.randomUUID();

    set((state) => {
      const existingItem = state.items.find(
        (item) => item.productId === product.id,
      );
      if (existingItem) return state;

      return {
        items: [
          ...state.items,
          { ...product, id: tempId, productId: product.id, cartId: "temp" },
        ],
      };
    });

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });
      const data = await res.json();

      if (data.item) {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === tempId ? data.item : item,
          ),
        }));
        toast.success("Продукт добавлен в корзину")
      }
      
    } catch (error) {
      toast.error("Ошибка при добавлении продукта в корзину")
      console.error("Failed to add to cart", error);

      set((state) => ({
        items: state.items.filter((item) => item.id !== tempId),
      }));
    }
  },

  removeItem: async (cartItemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== cartItemId),
    }));

    try {
      await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItemId }),
      });
       toast.success("Продукт удалён из корзины")
    } catch (error) {
      toast.error("Ошибка при удалении продукта из корзины")
      console.error("Failed to remove from cart", error);
    }
  },

  removeItemByProductId: async (productId) => {
    const itemToRemove = get().items.find(
      (item) => item.productId === productId,
    );
    if (itemToRemove) {
      await get().removeItem(itemToRemove.id);
    }
  },

  clearCart: () => {
    set({ items: [] });
  },

  totalAmount: () =>
    get().items.reduce((sum, item) => sum + Number(item.price), 0),

  totalItems: () => get().items.length,

  hasItem: (productId) =>
    get().items.some((item) => item.productId === productId),
}));
