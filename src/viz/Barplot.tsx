import { useMemo, useState } from "react";
import * as d3 from "d3";
import { InteractionData, Tooltip } from "./Tooltip";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {
  const [interactionData, setInteractionData] =
    useState<InteractionData | null>(null);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const groups = data.map((d) => d.name);
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, boundsWidth])
      .padding(BAR_PADDING);
  }, [data, width]);

  // Y axis
  const yScale = useMemo(() => {
    const max = d3.max(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([boundsHeight, 0]);
  }, [data, height]);

  const allShapes = data.map((d, i) => {
    const x = xScale(d.name);

    if (!x) {
      return null;
    }

    return (
      <g key={i}>
        <rect
          x={x}
          width={xScale.bandwidth()}
          y={yScale(d.value)}
          height={yScale(0) - yScale(d.value)}
          stroke="#009EE0"
          fill="#009EE0"
          fillOpacity={1}
          strokeWidth={0}
          rx={0}
        />
        <text
          x={x + xScale.bandwidth() / 2}
          y={yScale(0) + 18}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={12}
        >
          {d.name}
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

  const grid = yScale
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

  const getClosestCategory = (cursorPixelPosition: number) => {
    const index = Math.floor(cursorPixelPosition / xScale.step());
    if (index >= 0 && index < data.length) {
      return data[index].name;
    }
    return null;
  };

  const onMouseMove = (e: React.MouseEvent<SVGRectElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - MARGIN.left;

    const closestCategory = getClosestCategory(mouseX);

    const yValue = data.find((d) => d.name === closestCategory)?.value;

    if (closestCategory) {
      setInteractionData({
        category: closestCategory,
        xPos: xScale(closestCategory) || 4,
        yPos: yScale(yValue || 0),
        title: closestCategory + " " + "2024",
        text: yValue + " mm de recharge",
      });
    }
  };

  console.log("interactionData", interactionData);
  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {grid}
          {allShapes}
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
                cy={boundsHeight / 2}
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
