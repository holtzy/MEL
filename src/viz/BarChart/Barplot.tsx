import { ReactNode, useMemo, useState } from "react";
import * as d3 from "d3";
import { InteractionData, Tooltip } from "./Tooltip";
import {
  getMonthAndYearInFrench,
  getMonthInFrench,
  monthsInFrench,
} from "@/lib/utils";
import { BarItem } from "./BarItem";
import { MonthXAxis } from "../MonthXAxis";
import { RechargeObservation } from "@/data/types";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
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
  // X axis
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(monthsInFrench)
      .range([0, boundsWidth])
      .padding(BAR_PADDING);
  }, [data, width]);

  // Y axis
  const yScale = useMemo(() => {
    const max = d3.max(data.map((d) => d.MESURE ?? 0));

    let validMax = max;
    if (!validMax) {
      validMax = 5;
    }
    if (validMax < 5) {
      validMax = 5;
    }

    return d3.scaleLinear().domain([0, validMax]).range([boundsHeight, 0]);
  }, [data, height]);

  // Create bars
  const allShapes = data.map((d, i) => {
    const x = xScale(getMonthInFrench(d.DATE_OBSERVATION));
    if (!x) {
      return null;
    }
    return (
      <BarItem
        x={x}
        width={xScale.bandwidth()}
        y={yScale(d.MESURE || 0)}
        height={yScale(0) - yScale(d.MESURE || 0)}
        key={i}
      />
    );
  });

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
    const mouseX = e.clientX - rect.left - MARGIN.left;

    const closestDataItem = getClosestDataItem(mouseX);

    if (closestDataItem) {
      const { MESURE, DATE_OBSERVATION } = closestDataItem;

      setInteractionData({
        xPos: xScale(getMonthInFrench(DATE_OBSERVATION)) ?? 0,
        yPos: yScale(MESURE ?? 0),
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
          {/* Hover effect */}
          {interactionData && (
            <>
              <line
                x1={interactionData.xPos + xScale.bandwidth() / 2}
                x2={interactionData.xPos + xScale.bandwidth() / 2}
                y1={boundsHeight / 2}
                y2={interactionData.yPos}
                stroke="black"
                opacity={1}
                pointerEvents={"none"}
              />
              <circle
                cx={interactionData.xPos + xScale.bandwidth() / 2}
                cy={interactionData.yPos}
                r={5}
                stroke="black"
                fill="white"
                pointerEvents={"none"}
              />
            </>
          )}
          // Add annotation here
        </g>
      </svg>

      <Tooltip interactionData={interactionData} />
    </div>
  );
};
