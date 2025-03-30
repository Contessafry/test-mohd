import { Product } from "@/declarations/products";

import { ChevronDown, AlertCircleIcon } from "lucide-react";
import { Button } from "../UI/button";
import { ActionsPopover } from "./partials/ActionsPopover";
import { Checkbox } from "../UI/checkbox";
import { IconComment } from "../UI/icons/IconComment";
import { SelectStatus } from "./partials/SelectStatus";
import { IconComments } from "../UI/icons/IconComments";

interface Props {
  product: Product;
}

export const CardProduct = ({ product }: Props) => {
  const { brand, name, price, currency, stock_status, image, configurations, status } = product;

  const formattedPrice = price.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const hasConfigurations = typeof configurations === "number" && configurations > 0;
  const addConfiguration = configurations === "Add configuration";
  const isInStock = stock_status === "In Stock";

  return (
    <div className="w-full max-w-[400px] overflow-hidden">
      <div className="relative">
        <div className="absolute top-3 left-3 z-10">
          <Checkbox name={name} className=" border-primary border bg-white" />
        </div>
        <div className="absolute top-3 right-3 z-10">
          <ActionsPopover />
        </div>
        <div className="h-[300px] flex items-center justify-center relative group">
          <img src={`/images/${image}`} alt={name} className="object-cover    h-full w-full" />
          <Button className="absolute w-fit h-fit bottom-0 right-0 z-10 !p-4 rounded-[20px] hidden group-hover:block">
            <IconComments />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-primary t font-medium">{brand}</span>
            <span className=" mt-1">{name}</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 mt-[-4px]">
            <IconComment />
          </Button>
        </div>

        {hasConfigurations && (
          <div className="flex items-center gap-2 mt-2.5 mb-2">
            <span className="underline text-sm">{configurations} configuration proposed</span>
            <Button variant="secondary" className=" h-6 py-1 pl-2 pr-1.5  text-xs  bg-secondary">
              Add new
            </Button>
          </div>
        )}
        {addConfiguration && (
          <div className="flex items-center gap-2 mt-2.5 mb-2">
            <AlertCircleIcon className="text-[#E59C57] w-3.5 h-3.5" />
            <Button variant="secondary" className=" h-6 py-1 pl-2 pr-1.5  text-xs  bg-secondary">
              Add Configuration
            </Button>
          </div>
        )}

        <div className=" flex items-center">
          <span>
            {formattedPrice} {currency === "EUR" ? "€" : currency}
          </span>

          <div className="ml-3 flex items-center">
            <div className={`h-2 w-2 rounded-full ${isInStock ? "bg-mohd-green" : "bg-mohd-alert"} mr-1.5`} />
            <span className="text-xs">In Stock</span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Button variant="secondary">
            <span>01</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>

          <SelectStatus status={status} />
        </div>
      </div>
    </div>
  );
};
