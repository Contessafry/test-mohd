"use client";
import { Button } from "@/components/UI/button";
import { Checkbox } from "@/components/UI/checkbox";

import { Label } from "@/components/UI/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/UI/popover";

import { ChevronDown } from "lucide-react";
import { ComponentProps, useState } from "react";

export interface Category {
  color?: keyof typeof colors;
  name: string;
  count?: number;
}

interface Props {
  items: Array<Category>;
  buttonProps?: ComponentProps<typeof Button>;
}
const colors = {
  gray: "bg-secondary-t",
  red: "bg-destructive",
  green: "bg-[#40A06A]",
};

export const PopoverFilter = ({ items, buttonProps }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<Array<Category["name"]>>([]);
  const { value, ...rest } = buttonProps || {};

  const toggleCategory = (name: Category["name"]) => {
    setSelectedCategories((prev) => (prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]));
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button {...rest}>
          <span>{value}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 pt-3 px-2" align="end">
        <div className="max-h-80 overflow-y-auto pr-2">
          {items.map(({ name, color, count }) => (
            <div key={name} className="flex items-center space-x-2 hover:bg-secondary rounded-md p-2 cursor-pointer" onClick={() => toggleCategory(name)}>
              <Checkbox id={`category-${name}`} className="cursor-pointer" checked={selectedCategories.includes(name)} onCheckedChange={() => toggleCategory(name)} />
              <Label htmlFor={`category-${name}`} className="text-primary w-full font-normal justify-between text-sm whitespace-nowrap cursor-pointer">
                <div className="flex items-center gap-1">
                  {color && <span className={`w-2 h-2 inline-block ml-1.5 rounded-full ${colors[color]}`} />}
                  {name}
                </div>
                {count && <span className=" text-sm text-secondary-t px-2 pt-[3px] pb-[5px] bg-secondary rounded-lg">{count}</span>}
              </Label>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <Button variant="transparent" className="underline text-primary font-normal hover:font-semibold pb-0" onClick={() => setSelectedCategories([])}>
            Clear filters
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
