import { useMemo } from "react";
import * as d3 from "d3";
import { NiveauxObservation } from "@/data/niveaux";
import { getMonthInFrench, monthsInFrench } from "@/lib/utils";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

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
    .y0(yScale(0));
  const lineBuilder = d3
    .line<NiveauxObservation>()
    .x((d) => xScale(getMonthInFrench(d.DATE_OBSERVATION)))
    .y((d) => yScale(d.MESURE));

  // Current year
  const currentYearAreaPath = areaBuilder(data);

  // Previous Year
  const previousYearAreaPath = areaBuilder(previousYearData);
  const previousYearLinePath = lineBuilder(previousYearData);

  console.log("previousYearLinePath", previousYearLinePath);
  if (!currentYearAreaPath || !previousYearAreaPath || !previousYearLinePath) {
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
          {/* Bottom = current year */}
          <path
            d={currentYearAreaPath}
            opacity={1}
            stroke="none"
            fill="#009EE0"
          />

          {/* Then previous year on top */}
          <path
            d={previousYearAreaPath}
            opacity={1}
            stroke="none"
            fill="#B3E2F6"
            fillOpacity={0.18}
          />
          <path
            d={previousYearLinePath}
            stroke="#B3E2F6"
            fill="none"
            strokeWidth={2}
          />
        </g>
      </svg>
    </div>
  );
};
