"use client";
import { buttonVariants } from "@/components/UI/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/UI/select";
import useProductStore, { Status } from "@/hooks/useProductsStore";

interface Props {
  status: Status;
}

export const SelectStatus = ({ status }: Props) => {
  const { getStatusColor, statusSet } = useProductStore();

  return (
    <Select>
      <SelectTrigger className={buttonVariants({ variant: "secondary", size: "lg", className: "border-0" })}>
        <SelectValue
          placeholder={
            <div>
              <span className={`w-2 h-2 inline-block ml-1.5 rounded-full ${getStatusColor(status)}`} /> {status}
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          {statusSet.map((status) => (
            <SelectItem key={status.name} value={status.name}>
              <span className={`w-2 h-2 inline-block ml-1.5 rounded-full ${status.color}`} /> {status.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
