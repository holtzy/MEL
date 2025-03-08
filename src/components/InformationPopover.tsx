import { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Info } from "lucide-react";

type InformationPopoverProps = {
  content: ReactNode;
};
export const InformationPopover = ({ content }: InformationPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Info size={14} color="grey" className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
};
