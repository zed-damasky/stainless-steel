import {
  Product,
  Badge,
  Material,
  Category,
} from "@/lib/generated/prisma/client";

export type ProductClient = Omit<Product, "price" | "mass"> & {
  price: number;
  mass: number;
  badges: Badge[];
  material: Material | null;
  category?: Category | null;
};
