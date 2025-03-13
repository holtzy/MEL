import { useMemo } from "react";
import * as d3 from "d3";
import { geologicalMonthsInFrench, getMonthInFrench } from "@/lib/utils";
import { LineItem } from "./LineItem";
import { MeteoObservation } from "@/data/types";
import { CircleItem } from "./CircleItem";

const MARGIN = { top: 70, right: 0, bottom: 0, left: 40 };

type LineChartProps = {
  width: number;
  height: number;
  data: MeteoObservation[];
  min: number;
  max: number;
  title: string;
  unit: string;
};

export const LineChart = ({
  width,
  height,
  data,
  min,
  max,
  title,
  unit,
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

  //
  // Line for the year's value
  //
  const lineBuilder = d3
    .line<MeteoObservation>()
    .x(
      (d) =>
        (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
        xScale.bandwidth() / 2
    )
    .y((d) => yScale(d.MESURE));
  const linePath = lineBuilder(data);

  //
  // Line for the "normal"
  //
  const lineBuilderNormal = d3
    .line<MeteoObservation>()
    .x(
      (d) =>
        (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
        xScale.bandwidth() / 2
    )
    .y((d) => yScale(d.NORMALE));
  const normalValuesPath = lineBuilderNormal(data);
  const normalValuesLine = (
    <path
      // @ts-expect-error
      d={normalValuesPath}
      fill={"none"}
      stroke={"#A1A1A1"}
      strokeWidth={1}
      strokeDasharray="2, 2"
    />
  );

  // Circles
  const allCircles = data.map((d, i) => {
    return (
      <CircleItem
        key={i}
        cx={
          (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
          xScale.bandwidth() / 2
        }
        cy={yScale(d.MESURE)}
      />
    );
  });

  if (!linePath) {
    return null;
  }

  // Create the Y axis
  const ticks = yScale.ticks(3);
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
    <div className="relative">
      <div className="absolute inset-0 translate-y-6">
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
          {normalValuesLine}
          <LineItem path={linePath} color="#B3E2F6" />
          {allCircles}
          {yAxis}
        </g>
      </svg>
    </div>
  );
};
