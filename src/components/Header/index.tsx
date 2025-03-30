import { ButtonCopy } from "./partials/ButtonCopy";

export const Header = () => {
  return (
    <div className="border-b border-neutral-foreground">
      <div className="flex items-center justify-between px-6 pt-4 pb-4">
        <div className="flex items-center">
          <span className="text-[28px] font-medium text-secondary-t">Projects</span>
          <span className="mx-2 text-[28px] font-bold text-primary">/</span>
          <span className="text-sm text-[28px] font-medium text-primary">New home</span>
        </div>
        <div className="flex items-center gap-4">
          <ButtonCopy />
          <div className="flex relative w-20">
            <div className=" flex items-center justify-center w-[40px] h-[40px] bg-destructive text-white rounded-full">GM</div>
            <div className="absolute left-8 flex items-center justify-center w-10 h-10 bg-[#CCCCC9] text-white rounded-full">RP</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 px-6 min-h-48 ">
        <div className="flex flex-col border-r justify-between border-neutral-foreground pb-6 h-full">
          <div className="flex flex-col">
            <span className="font-medium mb-1">To</span>
            <span>Rino Platania</span>
            <span className="text-sm ">Shipping to Milan, Italy</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Project #0000012452</span>
            <span className="text-secondary-t">Last save 2 minutes ago</span>
          </div>
        </div>

        <div className="flex flex-col border-r  border-neutral-foreground pb-6 h-full">
          <span className=" font-medium mb-1">To be paid</span>
          <span className="text-2xl">0,00 €</span>
          <span className="text-sm text-secondary-t ">VAT 22% included</span>
        </div>

        <div className="flex flex-col border-r  border-neutral-foreground pb-6 h-full">
          <span className=" font-medium  mb-1">Paid</span>
          <span className=" text-2xl">0,00 €</span>
          <span className="text-sm text-secondary-t">VAT 22% included</span>
        </div>

        <div className="flex flex-col pb-6 h-full">
          <span className=" font-medium  mb-1">Total Order</span>
          <span className="text-2xl">0,00 €</span>
          <span className="text-sm text-secondary-t ">VAT 22% included</span>
        </div>
      </div>
    </div>
  );
};
