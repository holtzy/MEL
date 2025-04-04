import { Equal, Star, Triangle } from "lucide-react";

export const ChangeLevelPill = ({ levelName }: { levelName: string }) => {
  return (
    <div
      className="h-6 w-6 border border-black rounded-full text-md flex items-center justify-center"
      style={{ backgroundColor: "#F7F5F0" }}
    >
      {levelName === "mitigés" && <Star size={14} />}
      {levelName === "baissé" && <Triangle size={14} className="rotate-180" />}
      {levelName === "monté" && <Triangle size={14} className="" />}
      {levelName === "stables" && <Equal size={14} />}
    </div>
  );
};
