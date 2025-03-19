import { ReactNode, useMemo, useState } from "react";
import * as d3 from "d3";

import {
  geologicalMonthsInFrench,
  getMonthAndYearInFrench,
  getMonthInFrench,
} from "@/lib/utils";
import { BarItem } from "./BarItem";
import { MonthXAxis } from "../MonthXAxis";
import { RechargeObservation } from "@/data/types";
import { Pattern } from "@/components/Pattern";
import {
  InteractionData,
  Tooltip,
  TooltipConnectionLine,
} from "../Tooltip/Tooltip";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 40 };
const BAR_PADDING = 0.3;

type BarplotProps = {
  width: number;
  height: number;
  data: RechargeObservation[];
  annotation?: ReactNode | undefined;
};

export const Barplot = ({ width, height, data, annotation }: BarplotProps) => {
  const [interactionData, setInteractionData] =
    useState<InteractionData | null>(null);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // X axis
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(geologicalMonthsInFrench)
      .range([0, boundsWidth])
      .padding(BAR_PADDING);
  }, [data, width]);

  // Y axis.
  const yScale = useMemo(() => {
    const maxValue = Math.max(
      ...data.map((d) => Math.max(d.MESURE || 0, d.NORMALE || 0))
    );
    return d3.scaleLinear().domain([0, maxValue]).range([boundsHeight, 0]);
  }, [data, height]);

  // Create bars
  const allShapes = data.map((d, i) => {
    const x = xScale(getMonthInFrench(d.DATE_OBSERVATION));
    if (!x) {
      return null;
    }
    return (
      <g key={i}>
        <BarItem
          x={x}
          width={xScale.bandwidth()}
          y={yScale(d.MESURE || 0)}
          height={yScale(0) - yScale(d.MESURE || 0)}
        />
        <rect
          x={x}
          width={xScale.bandwidth()}
          y={yScale(d.NORMALE || 0)}
          height={yScale(0) - yScale(d.NORMALE || 0)}
          stroke="black"
          fill="url(#diagonalLines)"
          fillOpacity={1}
          opacity={1}
          strokeWidth={0.5}
          rx={1}
        />
      </g>
    );
  });

  // Create the Y axis
  const ticks = yScale.ticks(5);
  const yAxis = ticks.map((value, i) => {
    const hasUnit = i === ticks.length - 1;
    return (
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
          x={0 - 20}
          y={yScale(value) - 10}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={15}
          fill="black"
        >
          {value + (hasUnit ? " mm" : "")}
        </text>
      </g>
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
        yPos: yScale(MESURE ?? 0), // top of the blue bar
        tooltipYPos: -15,
        title: getMonthAndYearInFrench(DATE_OBSERVATION),
        text: MESURE ? Math.round(MESURE * 100) / 100 + " mm de recharge" : "-",
      });
    }
  };

  return (
    <div className="relative" style={{ width, height }}>
      {annotation && (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center">
          <p className="max-w-72">{annotation}</p>
        </div>
      )}
      <svg width={width} height={height}>
        <Pattern />
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {!annotation && yAxis}
          {allShapes}
          <MonthXAxis xScale={xScale} y={boundsHeight + 20} />
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
          <TooltipConnectionLine interactionData={interactionData} />
        </g>
      </svg>

      <Tooltip interactionData={interactionData} />
    </div>
  );
};
