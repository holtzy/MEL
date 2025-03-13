import * as d3 from "d3";
import { geologicalMonthsInFrench, getMonthInFrench } from "@/lib/utils";
import { AreaItem } from "./AreaItem";
import { LineItem } from "./LineItem";
import { MonthXAxis } from "../MonthXAxis";
import { NiveauxObservation } from "@/data/types";

const MARGIN = { top: 30, right: 0, bottom: 26, left: 40 };

type AreaChartProps = {
  width: number;
  height: number;
  data: NiveauxObservation[];
  previousYearData: NiveauxObservation[];
  min: number;
  max: number;
  unit: string;
};

export const AreaChart = ({
  width,
  height,
  data,
  previousYearData,
  min,
  max,
  unit,
}: AreaChartProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);

  // X axis
  const xScale = d3
    .scaleBand()
    .domain(geologicalMonthsInFrench)
    .range([0, boundsWidth]);

  // Builders
  const areaBuilder = d3
    .area<NiveauxObservation>()
    .x(
      (d) =>
        (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
        xScale.bandwidth() / 2
    )
    .y1((d) => yScale(d.MESURE))
    .y0(yScale(min));

  const lineBuilder = d3
    .line<NiveauxObservation>()
    .x(
      (d) =>
        (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
        xScale.bandwidth() / 2
    )
    .y((d) => yScale(d.MESURE));

  // Current year
  const currentYearAreaPath = areaBuilder(data);

  // Previous Year
  const previousYearAreaPath = areaBuilder(previousYearData);
  const previousYearLinePath = lineBuilder(previousYearData);

  if (!currentYearAreaPath || !previousYearAreaPath || !previousYearLinePath) {
    return null;
  }

  // Create the Y axis
  const ticks = yScale.ticks(4);
  const yAxis = ticks.map((value, i) => {
    const hasUnit = i === ticks.length - 1;
    return (
      <g key={i}>
        <line
          x1={-MARGIN.left}
          x2={0}
          y1={yScale(value)}
          y2={yScale(value)}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={-MARGIN.left}
          y={yScale(value) - 10}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={15}
          fill="black"
        >
          {value + (hasUnit ? unit : "")}
        </text>
      </g>
    );
  });

  const xGrid = xScale.domain().map((d) => {
    const xPos = xScale(d)! + xScale.bandwidth();
    return (
      <line
        key={d}
        x1={xPos}
        x2={xPos}
        y1={0}
        y2={height}
        stroke="lightgray"
        strokeDasharray="4 4"
      />
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
          {xGrid}
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

          <MonthXAxis xScale={xScale} y={boundsHeight + 20} />

          {yAxis}
        </g>
      </svg>
    </div>
  );
};
