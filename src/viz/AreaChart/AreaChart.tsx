import { useMemo, useRef } from "react";
import * as d3 from "d3";
import { NiveauxObservation } from "@/data/niveaux";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

type AreaChartProps = {
  width: number;
  height: number;
  data: NiveauxObservation[];
  min: number;
  max: number;
};

export const AreaChart = ({
  width,
  height,
  data,
  min,
  max,
}: AreaChartProps) => {
  console.log("data", data);
  // bounds = area inside the graph axis = calculated by substracting the margins
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const yScale = useMemo(() => {
    return d3.scaleLinear().domain([0, max]).range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const dates = data.map((d) => String(d.DATE_OBSERVATION));
  const xScale = useMemo(() => {
    return d3.scaleBand().domain(dates).range([0, boundsWidth]);
  }, [data, width]);

  // Build the line
  const areaBuilder = d3
    .area<NiveauxObservation>()
    .x((d) => xScale(String(d.DATE_OBSERVATION)))
    .y1((d) => yScale(d.MESURE))
    .y0(yScale(0));
  const areaPath = areaBuilder(data);

  // Build the line
  const lineBuilder = d3
    .line<NiveauxObservation>()
    .x((d) => xScale(String(d.DATE_OBSERVATION)))
    .y((d) => yScale(d.MESURE));
  const linePath = lineBuilder(data);

  if (!linePath || !areaPath) {
    return null;
  }

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <path
            d={areaPath}
            opacity={1}
            stroke="none"
            fill="#009EE0"
            fillOpacity={0.4}
          />
          <path
            d={linePath}
            opacity={1}
            stroke="#009EE0"
            fill="none"
            strokeWidth={2}
          />
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
    </div>
  );
};
