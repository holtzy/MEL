import { useMemo, useState } from "react";
import * as d3 from "d3";
import {
  geologicalMonthsInFrench,
  getMonthAndYearInFrench,
  getMonthInFrench,
} from "@/lib/utils";
import { LineItem } from "./LineItem";
import { MeteoObservation } from "@/data/types";
import { CircleItem } from "./CircleItem";
import {
  InteractionData,
  Tooltip,
  TooltipConnectionLine,
} from "../Tooltip/Tooltip";

const MARGIN = { top: 70, right: 30, bottom: 0, left: 40 };

type LineChartProps = {
  width: number;
  height: number;
  data: MeteoObservation[];
  min: number;
  max: number;
  title: string;
  unit: string;
  isNormalLabelEnabled?: boolean;
};

export const LineChart = ({
  width,
  height,
  data,
  min,
  max,
  title,
  unit,
  isNormalLabelEnabled = false,
}: LineChartProps) => {
  const [interactionData, setInteractionData] =
    useState<InteractionData | null>(null);

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

  const lastDataPoint = data[data.length - 1];
  const xLabel = xScale(getMonthInFrench(lastDataPoint.DATE_OBSERVATION)) || 0;
  const yLabel = yScale(lastDataPoint.NORMALE);
  const normalValuesLabel = (
    <>
      <text
        x={xLabel + xScale.bandwidth() / 2 + 9}
        y={yLabel - 7}
        fill={"#A1A1A1"}
        fontSize={12}
        alignmentBaseline="middle"
        textAnchor="left"
      >
        Valeur
      </text>
      <text
        x={xLabel + xScale.bandwidth() / 2 + 9}
        y={yLabel + 7}
        fill={"#A1A1A1"}
        fontSize={12}
        alignmentBaseline="middle"
        textAnchor="left"
      >
        Normale
      </text>
    </>
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
          x2={hasUnit || value === 0 ? 0 : -MARGIN.left / 2}
          y1={Math.floor(yScale(value)) + 0.5}
          y2={Math.floor(yScale(value)) + 0.5}
          stroke="#212121"
          opacity={0.5}
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

  const xGrid = xScale
    .domain()
    .slice(0, -1)
    .map((d) => {
      const xPos = xScale(d)! + xScale.bandwidth();
      return (
        <line
          key={d}
          x1={xPos}
          x2={xPos}
          y1={0}
          y2={height}
          stroke="#212121"
          strokeOpacity={0.25}
          strokeWidth={0.5}
          shapeRendering={"crispEdges"}
        />
      );
    });

  // From the mouse position, find which item of the dataset should be highlighted
  const getClosestDataItem = (cursorPixelPosition: number) => {
    const index = Math.floor(cursorPixelPosition / xScale.step());
    if (index >= 0 && index < data.length) {
      return data[index];
    }
    return null;
  };

  const onMouseMove = (e: React.MouseEvent<SVGRectElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    const closestDataItem = getClosestDataItem(mouseX);

    if (closestDataItem) {
      const { MESURE, DATE_OBSERVATION } = closestDataItem;

      setInteractionData({
        xPos:
          (xScale(getMonthInFrench(DATE_OBSERVATION)) ?? 0) +
          xScale.bandwidth() / 2,
        yPos: yScale(MESURE ?? 0),
        title: getMonthAndYearInFrench(DATE_OBSERVATION),
        text: MESURE ? Math.round(MESURE * 100) / 100 + unit : "-",
        tooltipYPos: -15,
      });
    }
  };

  return (
    <div className="relative overflow-visible">
      <div className="absolute inset-0 translate-y-6  pointer-events-none">
        <span
          className="bricolageFont"
          style={{ fontSize: 19, fontWeight: 800 }}
        >
          {title}
        </span>
      </div>
      <svg width={width} height={height} className="overflow-visible">
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {xGrid}
          {normalValuesLine}
          {isNormalLabelEnabled && normalValuesLabel}
          <LineItem path={linePath} color="#B3E2F6" />
          {allCircles}
          {yAxis}
          <TooltipConnectionLine interactionData={interactionData} />
          <rect
            x={0}
            y={0}
            width={boundsWidth}
            height={boundsHeight}
            onMouseMove={onMouseMove}
            onMouseLeave={() => setInteractionData(null)}
            visibility={"hidden"}
            pointerEvents={"all"}
            cursor={"pointer"}
          />

          <line
            x1={0}
            x2={boundsWidth}
            y1={boundsHeight + 0.5}
            y2={boundsHeight + 0.5}
            stroke="#212121"
            strokeWidth={0.5}
          />
        </g>
      </svg>

      <Tooltip interactionData={interactionData} />
    </div>
  );
};
