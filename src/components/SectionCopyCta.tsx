import { ButtonCopy } from "./Header/partials/ButtonCopy";
import { LabelResult } from "./LabelResult";

export const SectionCopyCta = () => {
  return (
    <div className="w-fullx  flex px-10 pt-10 pb-32">
      <div className="bg-secondary rounded-2xl w-full flex items-center justify-between px-10 py-6 ">
        <div className="flex flex-col gap-2">
          <span className="font-medium">Featured products</span>
          <LabelResult />
        </div>
        <ButtonCopy className="px-6 py-4 h-fit" />
      </div>
    </div>
  );
};
