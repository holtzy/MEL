import { InformationPopover } from "@/components/InformationPopover";
import { hexToRgba } from "@/lib/utils";
import * as d3 from "d3";

type HalfCircleChartProps = {
  width: number;
  height: number;
  value: number;
  previousYearValue?: number;
  min: number;
  max: number;
  style: Object;
  date: number;
};

export const HalfCircleChart = ({
  width,
  height,
  max,
  value,
  previousYearValue,
  date,
  style,
}: HalfCircleChartProps) => {
  const scaleArea = d3
    .scaleSqrt()
    .domain([0, max]) // Input values
    .range([0, height]); // corresponding radius

  const arcGenerator = d3
    .arc()
    .innerRadius(0) // Full pie slice (no hole in the middle)
    .outerRadius(scaleArea(value)) // Set the outer radius
    .startAngle(-Math.PI / 2) // Start from 0 radians (right side)
    .endAngle(Math.PI / 2); // End at π radians (left side)

  const arcGeneratorPreviousYear = d3
    .arc()
    .innerRadius(0)
    .outerRadius(scaleArea(previousYearValue || 0))
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  // @ts-expect-error
  const arcPath = arcGenerator(width / 2);
  // @ts-expect-error
  const arcPathPreviousYear = arcGeneratorPreviousYear(width / 2);

  const dateInDateFormat = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    month: "short",
    year: "numeric",
  }).format(dateInDateFormat);

  const formattedValue = Math.round(value)
    .toLocaleString("en-US")
    .replace(/,/g, " ");

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="font-bold text-md">{formattedDate}</span>
      <div className="flex items-center gap-1">
        <span className="">{formattedValue + " m3/j"} </span>
        <InformationPopover
          content={
            <p>{`L’équivalent de ${Math.round(
              value / 2500
            )} piscines Olympiques.`}</p>
          }
        />
      </div>
      <svg width={width} height={height}>
        <path
          d={arcPath}
          transform={`translate(${width / 2},${height})`}
          style={style}
        />
        {previousYearValue && (
          <path
            d={arcPathPreviousYear}
            transform={`translate(${width / 2},${height})`}
            style={{ fill: hexToRgba("#B3E2F6", 0.18), stroke: "#B3E2F6" }}
          />
        )}
      </svg>
    </div>
  );
};
