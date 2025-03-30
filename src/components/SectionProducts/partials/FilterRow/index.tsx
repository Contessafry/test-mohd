"use client";
import useProductStore from "@/hooks/useProductsStore";
import { PopoverFilter } from "./partials/PopoverFilter";
import { SwitchView } from "./partials/SwitchView";
import { LabelResult } from "@/components/LabelResult";

export const FilterRow = () => {
  const { categories, brands, statusSet, filters, setFilters } = useProductStore();

  const handleCategoryFilter = (selectedCategories: Array<string>) => setFilters({ category: selectedCategories });

  const handleBrandFilter = (selectedBrands: Array<string>) => setFilters({ brand: selectedBrands });

  const handleStatusFilter = (selectedStatuses: Array<string>) => setFilters({ status: selectedStatuses });

  return (
    <div className="flex justify-between w-full items-center px-6 py-4">
      <LabelResult />
      <div className="flex gap-3 items-center">
        <SwitchView />
        <div className="flex gap-3 justify-end w-full">
          <PopoverFilter buttonProps={{ value: "Category" }} items={categories.map((name) => ({ name }))} selectedItems={filters.category} onApply={handleCategoryFilter} />
          <PopoverFilter buttonProps={{ value: "Brand", variant: "secondary" }} items={brands.map((name) => ({ name }))} selectedItems={filters.brand} onApply={handleBrandFilter} />
          <PopoverFilter buttonProps={{ value: "Configuration", variant: "secondary" }} items={brands.map((name) => ({ name }))} selectedItems={[]} />
          <PopoverFilter buttonProps={{ value: "Status" }} items={statusSet} selectedItems={filters.status} onApply={handleStatusFilter} />
        </div>
      </div>
    </div>
  );
};
