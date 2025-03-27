import { Grid, Grid2X2, LayoutGridIcon } from "lucide-react";
import { Category, PopoverFilter } from "./partials/PopoverCategory";
import { IconGrid } from "@/components/UI/icons/IconGrid";
import { IconStack } from "@/components/UI/icons/IconStack";
import { SwitchView } from "./partials/SwitchView";

const brands = ["Cassina", "B&B Italia", "Poltrona Frau", "Minotti", "Molteni&C", "Flexform", "Flos", "Vitra"];
const categories = ["Chaises Longues", "Armchairs", "Table Lamps", "Suspension Lamps", "Led Lamps", "Tables", "Doors"];
const status: Array<Category> = [
  {
    color: "gray",
    name: "Proposed",
    count: 32,
  },
  {
    color: "green",
    name: "Approved",
    count: 0,
  },
  {
    color: "red",
    name: "Rejected",
    count: 12,
  },
];

export const FilterRow = () => {
  return (
    <div className="flex justify-between  w-full items-center  px-6 py-4 border-b border-[#e0e0dd]">
      <span className=" whitespace-nowrap text-center"> 13 items and 2 section</span>
      <div className="flex gap-3 items-center">
        <SwitchView />
        <div className="flex gap-3 justify-end w-full">
          <PopoverFilter buttonProps={{ value: "Category" }} items={categories.map((name) => ({ name }))} />
          <PopoverFilter buttonProps={{ value: "Brand", variant: "secondary" }} items={brands.map((name) => ({ name }))} />
          <PopoverFilter buttonProps={{ value: "Configuration", variant: "secondary" }} items={brands.map((name) => ({ name }))} />
          <PopoverFilter buttonProps={{ value: "Status" }} items={status} />
        </div>
      </div>
    </div>
  );
};
