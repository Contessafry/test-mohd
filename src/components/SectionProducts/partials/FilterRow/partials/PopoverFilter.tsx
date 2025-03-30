"use client";
import { Button } from "@/components/UI/button";
import { Checkbox } from "@/components/UI/checkbox";

import { Label } from "@/components/UI/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/UI/popover";

import { ChevronDown } from "lucide-react";
import { ComponentProps, useState } from "react";

type PopoverFilterProps = {
  buttonProps: ComponentProps<typeof Button>;
  items: Array<{ name: string; color?: string; count?: number }>;
  selectedItems?: string[];
  onApply?: (selectedItems: Array<string>) => void;
};

export const PopoverFilter = ({ buttonProps, items, selectedItems = [], onApply }: PopoverFilterProps) => {
  const { value, ...rest } = buttonProps || {};
  const [selected, setSelected] = useState<string[]>(selectedItems);

  const handleItemSelect = (itemName: string) => {
    const newSelected = selected.includes(itemName) ? selected.filter((name) => name !== itemName) : [...selected, itemName];

    setSelected(newSelected);

    onApply && onApply(newSelected);
  };

  const handleClear = () => {
    setSelected([]);
    onApply && onApply([]);
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
            <div
              key={name}
              className="flex items-center space-x-2 hover:bg-secondary rounded-md p-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleItemSelect(name);
              }}
            >
              <Checkbox id={name} className="cursor-pointer" checked={selected.includes(name)} />
              <Label htmlFor={name} className="text-primary w-full font-normal justify-between text-sm whitespace-nowrap cursor-pointer">
                <div className="flex items-center gap-1">
                  {color && <span className={`w-2 h-2 inline-block ml-1.5 rounded-full ${color}`} />}
                  {name}
                </div>
                {count !== undefined && <span className=" text-sm w-[30px] text-center text-secondary-t px-2 pt-[3px] pb-[5px] bg-secondary rounded-lg">{count}</span>}
              </Label>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <Button variant="transparent" className="underline text-primary font-normal hover:font-semibold pb-0" onClick={handleClear}>
            Clear filters
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
