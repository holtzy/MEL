import { useMemo } from "react";
import * as d3 from "d3";
import { NiveauxObservation } from "@/data/niveaux";
import { getMonthInFrench, monthsInFrench } from "@/lib/utils";
import { AreaItem } from "./AreaItem";
import { LineItem } from "./LineItem";

const MARGIN = { top: 0, right: 30, bottom: 50, left: 50 };

type AreaChartProps = {
  width: number;
  height: number;
  data: NiveauxObservation[];
  previousYearData: NiveauxObservation[];
  min: number;
  max: number;
};

export const AreaChart = ({
  width,
  height,
  data,
  previousYearData,
  min,
  max,
}: AreaChartProps) => {
  console.log("previousYearData", previousYearData);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    return d3.scaleBand().domain(monthsInFrench).range([0, boundsWidth]);
  }, [data, width]);

  // Builders
  const areaBuilder = d3
    .area<NiveauxObservation>()
    .x((d) => xScale(getMonthInFrench(d.DATE_OBSERVATION)))
    .y1((d) => yScale(d.MESURE))
    .y0(yScale(min));
  const lineBuilder = d3
    .line<NiveauxObservation>()
    .x((d) => xScale(getMonthInFrench(d.DATE_OBSERVATION)))
    .y((d) => yScale(d.MESURE));

  // Current year
  const currentYearAreaPath = areaBuilder(data);

  // Previous Year
  const previousYearAreaPath = areaBuilder(previousYearData);
  const previousYearLinePath = lineBuilder(previousYearData);

  if (!currentYearAreaPath || !previousYearAreaPath || !previousYearLinePath) {
    return null;
  }

  // Create X axis labels
  const xLabels = data.map((d, i) => {
    const x = xScale(getMonthInFrench(d.DATE_OBSERVATION));

    if (!x) {
      return null;
    }

    return (
      <g key={i}>
        <text
          x={x + xScale.bandwidth() / 2}
          y={boundsHeight + 18}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={12}
        >
          {getMonthInFrench(d.DATE_OBSERVATION)}
        </text>
        <line
          y1={boundsHeight + 10}
          y2={boundsHeight + 26}
          x1={
            x + xScale.bandwidth() + (xScale.padding() * xScale.bandwidth()) / 2
          }
          x2={
            x + xScale.bandwidth() + (xScale.padding() * xScale.bandwidth()) / 2
          }
          stroke="#212121"
          strokeWidth={0.2}
        />
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {/* Bottom = current year */}
          <AreaItem
            path={currentYearAreaPath}
            areaOpacity={1}
            areaColor="#009EE0"
          />

          {/* Then previous year on top */}
          <AreaItem
            path={previousYearAreaPath}
            areaOpacity={0.18}
            areaColor="#B3E2F6"
          />
          <LineItem path={previousYearLinePath} color="#B3E2F6" />

          {xLabels}
        </g>
      </svg>
    </div>
  );
};
