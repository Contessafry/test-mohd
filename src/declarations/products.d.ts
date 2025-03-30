import products from "@/mock/Products.json";

export type Product = (typeof products)[number];

export interface Category {
  color?: keyof typeof colors;
  name: string;
  count?: number;
}
