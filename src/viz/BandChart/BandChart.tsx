import { useMemo } from "react";
import * as d3 from "d3";
import { getMonthInFrench, monthsInFrench } from "@/lib/utils";
import { MeteoObservation } from "@/data/types";
import { RectangleItem } from "./RectangleItem";

const MARGIN = { top: 80, right: 0, bottom: 0, left: 50 };
const BAND_HEIGHT = 10;

type BandChartProps = {
  width: number;
  height: number;
  data: MeteoObservation[];
  min: number;
  max: number;
  title: string;
};

export const BandChart = ({
  width,
  height,
  data,
  min,
  max,
  title,
}: BandChartProps) => {
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

  // Rectangles
  const allRectangles = data.map((d, i) => {
    return (
      <RectangleItem
        key={i}
        x={xScale(getMonthInFrench(d.DATE_OBSERVATION))}
        y={yScale(d.MESURE) - BAND_HEIGHT / 2}
        width={xScale.bandwidth()}
        height={BAND_HEIGHT}
      />
    );
  });

  // Dashed segments
  const allSegments = data.map((d, i) => {
    return (
      <line
        key={i}
        x1={xScale(getMonthInFrench(d.DATE_OBSERVATION))}
        x2={xScale(getMonthInFrench(d.DATE_OBSERVATION)) + xScale.bandwidth()}
        y1={yScale(d.NORMALE)}
        y2={yScale(d.NORMALE)}
        width={xScale.bandwidth()}
        stroke="black"
      />
    );
  });

  if (!allRectangles) {
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
          {allRectangles}
          {allSegments}
          {yAxis}
        </g>
      </svg>
    </div>
  );
};
