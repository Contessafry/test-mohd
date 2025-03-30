import { Button } from "@/components/UI/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/UI/dropdown-menu";
import { IconCopyTo } from "@/components/UI/icons/IconCopyTo";
import { IconDelete } from "@/components/UI/icons/IconDelete";
import { IconMoveTo } from "@/components/UI/icons/IconMoveTo";
import { MoreVertical } from "lucide-react";

export const ActionsPopover = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <MoreVertical className="h-4 w-4 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="font-medium">
          <IconCopyTo /> Copy to...
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium">
          <IconMoveTo /> Move to...
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium">
          <IconDelete />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
