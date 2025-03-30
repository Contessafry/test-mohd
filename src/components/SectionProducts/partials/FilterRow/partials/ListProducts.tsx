"use client";
import { CardCollections } from "@/components/CardCollections";
import { CardProduct } from "@/components/CardProduct";
import useProductStore from "@/hooks/useProductsStore";

export const ListProducts = () => {
  const { orderedFilteredProductsByBrand } = useProductStore();

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 place-items-center items-start  gap-4 w-full">
        {orderedFilteredProductsByBrand.map(([brand, products]) =>
          products.length === 1 ? <CardProduct key={products[0].name} product={products[0]} /> : <CardCollections key={brand} brand={brand} products={products} />
        )}
      </div>
    </div>
  );
};
