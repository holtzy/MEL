import * as d3 from "d3";
import { NiveauxObservation } from "@/data/niveaux";
import { getMonthInFrench, monthsInFrench } from "@/lib/utils";
import { AreaItem } from "./AreaItem";
import { LineItem } from "./LineItem";
import { MonthXAxis } from "../MonthXAxis";

const MARGIN = { top: 0, right: 0, bottom: 50, left: 50 };

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
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);

  // X axis
  const xScale = d3.scaleBand().domain(monthsInFrench).range([0, boundsWidth]);

  // Builders
  const areaBuilder = d3
    .area<NiveauxObservation>()
    .x(
      (d) =>
        xScale(getMonthInFrench(d.DATE_OBSERVATION)) ??
        0 + xScale.bandwidth() / 2
    )
    .y1((d) => yScale(d.MESURE))
    .y0(yScale(min));
  const lineBuilder = d3
    .line<NiveauxObservation>()
    .x(
      (d) =>
        xScale(getMonthInFrench(d.DATE_OBSERVATION)) ??
        0 + xScale.bandwidth() / 2
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
  const yAxis = yScale
    .ticks(5)
    .slice(1)
    .map((value, i) => (
      <g key={i}>
        <line
          x1={-20}
          x2={0}
          y1={yScale(value)}
          y2={yScale(value)}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={-10}
          y={yScale(value) - 10}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={15}
          fill="black"
        >
          {value}
        </text>
      </g>
    ));

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

          <MonthXAxis xScale={xScale} y={boundsHeight + 20} />

          {yAxis}
        </g>
      </svg>
    </div>
  );
};
