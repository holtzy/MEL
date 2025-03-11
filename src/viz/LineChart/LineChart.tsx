import { useMemo } from "react";
import * as d3 from "d3";
import { geologicalMonthsInFrench, getMonthInFrench } from "@/lib/utils";
import { LineItem } from "./LineItem";
import { MeteoObservation } from "@/data/types";
import { CircleItem } from "./CircleItem";

const MARGIN = { top: 80, right: 0, bottom: 0, left: 50 };

type LineChartProps = {
  width: number;
  height: number;
  data: MeteoObservation[];
  min: number;
  max: number;
  title: string;
};

export const LineChart = ({
  width,
  height,
  data,
  min,
  max,
  title,
}: LineChartProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(geologicalMonthsInFrench)
      .range([0, boundsWidth]);
  }, [data, width]);

  // Line
  const lineBuilder = d3
    .line<MeteoObservation>()
    .x(
      (d) =>
        xScale(getMonthInFrench(d.DATE_OBSERVATION)) ??
        0 + xScale.bandwidth() / 2
    )
    .y((d) => yScale(d.MESURE));
  const linePath = lineBuilder(data);

  // Circles
  const allCircles = data.map((d, i) => {
    return (
      <CircleItem
        key={i}
        cx={
          xScale(getMonthInFrench(d.DATE_OBSERVATION)) ??
          0 + xScale.bandwidth() / 2
        }
        cy={yScale(d.MESURE)}
      />
    );
  });

  if (!linePath) {
    return null;
  }

  // Create the Y axis
  const yAxis = yScale
    .ticks(3)
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
    <div className="relative">
      <div className="absolute left-0 top-10">
        <span className="font-bold bricolageFont text-xl">{title}</span>
      </div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <line
            x1={0}
            x2={boundsWidth}
            y1={boundsHeight}
            y2={boundsHeight}
            stroke="black"
          />
          {xGrid}
          <LineItem path={linePath} color="#B3E2F6" />
          {allCircles}
          {yAxis}
        </g>
      </svg>
    </div>
  );
};
