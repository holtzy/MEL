import * as d3 from "d3";
import { geologicalMonthsInFrench, getMonthInFrench } from "@/lib/utils";
import { MeteoObservation } from "@/data/types";
import { RectangleItem } from "./RectangleItem";
import { MonthXAxis } from "../MonthXAxis";

const MARGIN = { top: 70, right: 30, bottom: 40, left: 40 };
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
  const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);

  // X axis
  const xScale = d3
    .scaleBand()
    .domain(geologicalMonthsInFrench)
    .range([0, boundsWidth]);

  // Rectangles
  const allRectangles = data.map((d, i) => {
    return (
      <RectangleItem
        key={i}
        x={xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0}
        y={yScale(d.MESURE) - BAND_HEIGHT / 2}
        width={xScale.bandwidth()}
        height={BAND_HEIGHT}
      />
    );
  });

  // "Normale" values dash lines
  const allNormalValuesLines = data.map((d, i) => {
    return (
      <line
        key={i}
        x1={xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0}
        x2={
          (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
          xScale.bandwidth()
        }
        y1={yScale(d.NORMALE)}
        y2={yScale(d.NORMALE)}
        fill={"none"}
        stroke={"#A1A1A1"}
        strokeWidth={1}
        strokeDasharray="2, 2"
      />
    );
  });

  // Dashed segments
  const allSegments = data.map((d, i) => {
    return (
      <line
        key={i}
        x1={xScale(getMonthInFrench(d.DATE_OBSERVATION))}
        x2={
          xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0 + xScale.bandwidth()
        }
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

  const pattern = (
    <defs>
      <pattern
        id="bgPattern"
        patternUnits="userSpaceOnUse"
        width={xScale.bandwidth()}
        height={boundsHeight}
      >
        <image
          href="gradient.svg"
          x="0"
          y="0"
          width={xScale.bandwidth()}
          height={boundsHeight}
        />
      </pattern>
    </defs>
  );

  const allBackgroundRectangles = data.map((d) => {
    return (
      <>
        {pattern}
        <rect
          x={xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0}
          y={0}
          width={xScale.bandwidth()}
          height={boundsHeight}
          fill="url(#bgPattern)"
        />
      </>
    );
  });

  // Create the Y axis
  const yAxis = (
    <>
      <g>
        <line
          x1={-MARGIN.left}
          x2={0}
          y1={0.5}
          y2={0.5}
          stroke="#212121"
          opacity={0.5}
        />
        <text
          x={-MARGIN.left}
          y={0 + 13}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={15}
          fill="black"
        >
          humide
        </text>
      </g>
      <g>
        <line
          x1={-MARGIN.left}
          x2={0}
          y1={boundsHeight + 0.5}
          y2={boundsHeight + 0.5}
          stroke="#212121"
          opacity={0.5}
        />
        <text
          x={-MARGIN.left}
          y={boundsHeight - 10}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={15}
          fill="black"
        >
          sec
        </text>
      </g>
    </>
  );

  const xGrid = xScale.domain().map((d) => {
    const xPos = xScale(d)! + xScale.bandwidth();
    return (
      <line
        key={d}
        x1={xPos}
        x2={xPos}
        y1={0}
        y2={boundsHeight}
        stroke="lightgray"
        shapeRendering={"crispEdges"}
      />
    );
  });

  return (
    <div className="relative">
      <div className="absolute inset-0 translate-y-6">
        <span
          className="bricolageFont"
          style={{ fontSize: 19, fontWeight: 800 }}
        >
          {title}
        </span>
      </div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allBackgroundRectangles}

          <MonthXAxis xScale={xScale} y={boundsHeight + 20} />
          {xGrid}
          {allRectangles}
          {allSegments}
          {allNormalValuesLines}
          {yAxis}
          <line
            x1={0}
            x2={boundsWidth}
            y1={boundsHeight + 0.5} // +.5 to avoid thick and blurry line, I do not understand why shaperendering="crispEdges" did not make the job.
            y2={boundsHeight + 0.5}
            stroke="#212121"
            strokeWidth={0.5}
          />
        </g>
      </svg>
    </div>
  );
};
