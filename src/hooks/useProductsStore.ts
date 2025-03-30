import { create } from "zustand";
import { Product } from "@/declarations/products";
import products from "@/mock/Products.json";

const statusValues = ["proposed", "approved", "rejected"];
export type Status = (typeof statusValues)[number];

const colors: Record<Status, string> = {
  proposed: "bg-secondary-t",
  rejected: "bg-destructive",
  approved: "bg-mohd-green",
};

type ProductState = {
  products: Array<Product>;
  productsByBrand: Record<string, Array<Product>>;
  brands: string[];
  categories: string[];
  statusSet: {
    color: string;
    name: string;
    count: number;
  }[];
  filters: {
    category: string[];
    brand: string[];
    status: Status[];
  };
  filteredProducts: Product[];
  filteredProductsByBrand: Record<string, Array<Product>>;
  orderedFilteredProductsByBrand: Array<[string, Array<Product>]>;
  getStatusColor: (status: Status) => string;
  setFilters: (filters: { category?: Array<string>; brand?: Array<string>; status?: Array<Status> }) => void;
};

const createProductsByBrand = (products: Array<Product>) => {
  return products.reduce<Record<string, Array<Product>>>((acc, product) => {
    const { brand } = product;
    const brandKey = brand.toLowerCase();
    if (!acc[brandKey]) acc[brandKey] = [];

    acc[brandKey].push(product);
    return acc;
  }, {});
};

const createStatusSet = (products: Array<Product>) => {
  return statusValues.map((status) => {
    return {
      color: colors[status],
      name: status,
      count: products.filter((product) => product.status === status).length,
    };
  });
};

const filterProducts = (products: Array<Product>, filters: ProductState["filters"]) => {
  if (!filters.category.length && !filters.brand.length && !filters.status.length) return products;

  return products.filter((product) => {
    if (filters.category.length > 0 && !filters.category.includes(product.category)) return false;

    if (filters.brand.length > 0 && !filters.brand.includes(product.brand.toLowerCase())) return false;

    if (filters.status.length > 0 && !filters.status.includes(product.status)) return false;

    return true;
  });
};

const useProductStore = create<ProductState>((set) => ({
  products,
  productsByBrand: createProductsByBrand(products),
  brands: Object.keys(createProductsByBrand(products)),
  categories: [...new Set(products.map((product) => product.category))],
  statusSet: createStatusSet(products),
  filters: {
    category: [],
    brand: [],
    status: [],
  },
  filteredProducts: products,
  filteredProductsByBrand: createProductsByBrand(products),
  orderedFilteredProductsByBrand: Object.entries(createProductsByBrand(products)).sort((a, b) => b[1].length - a[1].length),
  getStatusColor: (status: Status) => colors[status],
  setFilters: (newFilters) => {
    set((state) => {
      const updatedFilters = {
        ...state.filters,
        ...newFilters,
      };

      const filteredProducts = filterProducts(state.products, updatedFilters);

      const filteredProductsByBrand = createProductsByBrand(filteredProducts);

      const orderedFilteredProductsByBrand = Object.entries(filteredProductsByBrand).sort((a, b) => b[1].length - a[1].length);

      return {
        filters: updatedFilters,
        filteredProducts,
        filteredProductsByBrand,
        orderedFilteredProductsByBrand,
      };
    });
  },
}));

export default useProductStore;
