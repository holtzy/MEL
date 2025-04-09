import { Equal, Star, Triangle } from "lucide-react";
import { CHANGE_LEVELS, LEVELS, colorScale } from "./utils";
import { scaleOrdinal } from "d3";

type ChangeLevelPillProps = {
  evolutionType: (typeof CHANGE_LEVELS)[number];
  level?: (typeof LEVELS)[number];
};

export const ChangeLevelPill = ({
  evolutionType,
  level,
}: ChangeLevelPillProps) => {
  const fillColor = level ? colorScale(level) : "#F7F5F0";

  const strokeColorScale = scaleOrdinal<string>()
    .domain(LEVELS)
    .range([
      "#FFFFFF",
      "#FFFFFF",
      "#212121",
      "#212121",
      "#212121",
      "#FFFFFF",
      "#FFFFFF",
    ]);

  const strokeColor = level ? strokeColorScale(level) : "#212121";

  return (
    <div
      className="h-6 w-6 border border-black rounded-full text-md flex items-center justify-center"
      style={{ backgroundColor: fillColor }}
    >
      {evolutionType === "mitigés" && <Star size={14} color={strokeColor} />}
      {evolutionType === "baissé" && (
        <Triangle size={14} className="rotate-180" color={strokeColor} />
      )}
      {evolutionType === "monté" && (
        <Triangle size={14} className="" color={strokeColor} />
      )}
      {evolutionType === "stables" && <Equal size={14} color={strokeColor} />}
    </div>
  );
};
