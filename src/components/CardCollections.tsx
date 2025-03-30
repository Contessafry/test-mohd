import { Product } from "@/declarations/products";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ActionsPopover } from "./CardProduct/partials/ActionsPopover";
import { Button } from "./UI/button";
import { IconPlus } from "./UI/icons/IconPlus";

interface Props {
  products: Array<Product>;
  brand: Product["brand"];
}

export const CardCollections = ({ products, brand }: Props) => {
  const mosaicImage = products.slice(0, 4).map((product) => `/images/${product.image}`);
  const getRounds = (i: number) => {
    switch (i) {
      case 0:
        return "rounded-tl-2xl";
      case 1:
        return "rounded-tr-2xl";
      case 2:
        return "rounded-bl-2xl";
      case 3:
        return "rounded-br-2xl";
      default:
    }
  };
  return (
    <div className="w-full max-w-[400px] overflow-hidden">
      <div className="relative">
        <div className="absolute top-3 left-3 z-10">
          <Checkbox name={brand} className=" border-primary border bg-white" />
        </div>
        <div className="absolute top-3 right-3 z-10">
          <ActionsPopover />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 rounded-3xl relative group">
          {mosaicImage.map((image, i) => (
            <div className="aspect-square  flex items-center justify-center overflow-hidden">
              <img src={`${image}`} alt={image} className={`object-cover ${getRounds(i)} h-full w-full`} />
            </div>
          ))}
          <Button className="absolute w-fit h-fit bottom-0 left-0 z-10 !p-4 rounded-[20px] hidden group-hover:block">
            <IconPlus />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-col items-center">
          <span className="text-primary t font-medium text-2xl">{brand}</span>
          <span className=" mt-1 text-secondary-t">{products.length} items</span>
        </div>
      </div>
    </div>
  );
};
