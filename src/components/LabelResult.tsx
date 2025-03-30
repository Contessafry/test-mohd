"use client";
import useProductStore from "@/hooks/useProductsStore";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const LabelResult = ({ className }: Props) => {
  const { orderedFilteredProductsByBrand } = useProductStore();

  const labels = {
    items: orderedFilteredProductsByBrand.reduce((acc, [_, products]) => (products.length === 1 ? acc + 1 : acc), 0),
    sections: orderedFilteredProductsByBrand.reduce((acc, [_, products]) => (products.length > 1 ? acc + 1 : acc), 0),
  };

  return (
    <span className={cn("whitespace-nowrap text-center", className)}>
      {labels.items} items and {labels.sections} section
    </span>
  );
};
