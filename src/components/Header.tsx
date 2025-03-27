import { Button } from "./UI/button";

interface ProjectHeaderProps {
  projectId?: string;
  lastEdit?: string;
  customerName?: string;
  shippingLocation?: string;
  toBePaid?: string;
  totalOrder?: string;
}

export const Header = ({
  projectId = "#000000D432",
  lastEdit = "5 minutes ago",
  customerName = "Rico Ritratto",
  shippingLocation = "Milan, Italy",
  toBePaid = "0,00 €",
  totalOrder = "0,00 €",
}: ProjectHeaderProps) => {
  return (
    <div className="border-b border-[#e0e0dd]">
      {/* Breadcrumb and Share button */}
      <div className="flex items-center justify-between px-6 pt-4 pb-4">
        <div className="flex items-center">
          <span className="text-[28px] text-secondary-t">Projects</span>
          <span className="mx-2 text-[28px] font-bold text-primary">/</span>
          <span className="text-sm text-[28px] text-primary">New home</span>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-[#323232] hover:bg-[#1c1c1c] text-white rounded-md text-sm px-4">Share with client</Button>
          <div className="flex relative w-20">
            <div className=" flex items-center justify-center w-[40px] h-[40px] bg-destructive text-white rounded-full">GM</div>
            <div className="absolute left-8 flex items-center justify-center w-10 h-10 bg-[#CCCCC9] text-white rounded-full">RP</div>
          </div>
        </div>
      </div>

      {/* Order Information */}
      <div className="grid grid-cols-3 gap-6 px-6 pb-6">
        {/* To section */}
        <div className="flex flex-col">
          <span className="text-sm text-[#6a6a69] mb-1">To</span>
          <span className="font-medium">{customerName}</span>
          <span className="text-sm text-[#6a6a69]">Shipping to {shippingLocation}</span>
        </div>

        {/* To be paid section */}
        <div className="flex flex-col">
          <span className="text-sm text-[#6a6a69] mb-1">To be paid</span>
          <div className="flex items-baseline">
            <span className="font-medium">{toBePaid}</span>
            <span className="text-xs text-[#6a6a69] ml-1">VAT 22% included</span>
          </div>
        </div>

        {/* Total Order section */}
        <div className="flex flex-col">
          <span className="text-sm text-[#6a6a69] mb-1">Total Order</span>
          <div className="flex items-baseline">
            <span className="font-medium">{totalOrder}</span>
            <span className="text-xs text-[#6a6a69] ml-1">VAT 22% included</span>
          </div>
        </div>
      </div>

      {/* Project ID and Last Edit */}
      <div className="px-6 pb-4 text-sm text-[#6a6a69]">
        <div>Project {projectId}</div>
        <div>Last edit {lastEdit}</div>
      </div>
    </div>
  );
};
