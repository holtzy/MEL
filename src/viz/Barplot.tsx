import { useMemo, useState } from "react";
import * as d3 from "d3";
import { InteractionData, Tooltip } from "./Tooltip";
import { RechargeObservation } from "@/data/recharge";
import { getMonthAndYearInFrench, getMonthInFrench } from "@/lib/utils";
import { BarItem } from "./BarItem";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

type BarplotProps = {
  width: number;
  height: number;
  data: RechargeObservation[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {
  const [interactionData, setInteractionData] =
    useState<InteractionData | null>(null);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // X axis
  const dates = data.map((d) => String(d.DATE_OBSERVATION));
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(dates)
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
    const x = xScale(String(d.DATE_OBSERVATION));
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

  // Create X axis labels
  const xLabels = data.map((d, i) => {
    const x = xScale(String(d.DATE_OBSERVATION));

    if (!x) {
      return null;
    }

    return (
      <g key={i}>
        <text
          x={x + xScale.bandwidth() / 2}
          y={yScale(0) + 18}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={12}
        >
          {getMonthInFrench(d.DATE_OBSERVATION)}
        </text>
        <line
          y1={yScale(0) + 10}
          y2={yScale(0) + 26}
          x1={
            x + xScale.bandwidth() + (xScale.padding() * xScale.bandwidth()) / 2
          }
          x2={
            x + xScale.bandwidth() + (xScale.padding() * xScale.bandwidth()) / 2
          }
          stroke="#212121"
          strokeWidth={0.2}
        />
      </g>
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
        xPos: xScale(String(DATE_OBSERVATION)) ?? 0,
        yPos: yScale(MESURE ?? 0),
        title: getMonthAndYearInFrench(DATE_OBSERVATION),
        text: MESURE ? Math.round(MESURE * 100) / 100 + " mm de recharge" : "-",
      });
    }
  };

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {yAxis}
          {allShapes}
          {xLabels}
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
        </g>
      </svg>

      <Tooltip interactionData={interactionData} />
    </div>
  );
};
