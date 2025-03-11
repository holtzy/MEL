import { cn } from "@/lib/utils";

export const TocCircle = ({ isSelected = false }: { isSelected?: boolean }) => {
  return (
    <div className="relative">
      <div
        className={cn(
          "w-2 h-2 border border-gray-400 rounded-full",
          isSelected ? "bg-black dark:bg-white" : ""
        )}
      />
    </div>
  );
};
