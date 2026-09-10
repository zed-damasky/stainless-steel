import {
  Product,
  Badge,
  Material,
  Category,
} from "@/lib/generated/prisma/client";

export type ProductClient = Omit<Product, "price" | "mass"| "quantity"> & {
  quantity: number;
  price: number;
  mass: number;
  badges: Badge[];
  material: Material | null;
  category?: Category | null;
};

export interface CartItem extends ProductClient {
  id: string;
  cartId: string;
  productId: string;
}
