import { useMemo } from "react";
import * as d3 from "d3";
import { NiveauxObservation } from "@/data/niveaux";
import { getMonthInFrench, monthsInFrench } from "@/lib/utils";
import { AreaItem } from "./AreaItem";
import { LineItem } from "./LineItem";

type HalfCircleChartProps = {
  width: number;
  height: number;
  value: number;
  min: number;
  max: number;
  color: string;
};

export const HalfCircleChart = ({
  width,
  height,
  value,
  color,
  min,
  max,
}: HalfCircleChartProps) => {
  const radius = width / 2;

  const arcGenerator = d3
    .arc()
    .innerRadius(0) // Full pie slice (no hole in the middle)
    .outerRadius(radius) // Set the outer radius
    .startAngle(Math.PI) // Start from 0 radians (right side)
    .endAngle(0); // End at π radians (left side)

  const arcPath = arcGenerator(width / 2);

  return (
    <div>
      <svg width={width} height={height}>
        <path d={arcPath} fill="blue" />
      </svg>
    </div>
  );
};
