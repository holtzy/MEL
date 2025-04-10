import * as d3 from "d3";
import {
  geologicalMonthsInFrench,
  getMonthAndYearInFrench,
  getMonthInFrench,
} from "@/lib/utils";
import { AreaItem } from "./AreaItem";
import { LineItem } from "./LineItem";
import { MonthXAxis } from "../MonthXAxis";
import { NiveauxObservation } from "@/data/types";
import { Pattern } from "@/components/Pattern";
import { ReactNode, useState } from "react";
import {
  InteractionData,
  Tooltip,
  TooltipConnectionLine,
} from "../Tooltip/Tooltip";
import { InformationPopover } from "@/components/InformationPopover";

const MARGIN = { top: 30, right: 30, bottom: 26, left: 40 };

type AreaChartProps = {
  width: number;
  height: number;
  data: NiveauxObservation[];
  previousYearData: NiveauxObservation[];
  min: number;
  max: number;
  unit: string;
  infoText: ReactNode;
};

export const AreaChart = ({
  width,
  height,
  data,
  previousYearData,
  min,
  max,
  unit,
  infoText,
}: AreaChartProps) => {
  const [interactionData, setInteractionData] =
    useState<InteractionData | null>(null);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const yScale = d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]);

  // X axis
  const xScale = d3
    .scaleBand()
    .domain(geologicalMonthsInFrench)
    .range([0, boundsWidth]);

  // Builders
  const areaBuilder = d3
    .area<NiveauxObservation>()
    .x(
      (d) =>
        (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
        xScale.bandwidth() / 2
    )
    .y1((d) => yScale(d.MESURE))
    .y0(yScale(min));

  const lineBuilder = d3
    .line<NiveauxObservation>()
    .x(
      (d) =>
        (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
        xScale.bandwidth() / 2
    )
    .y((d) => yScale(d.MESURE));

  // Current year
  const currentYearAreaPath = areaBuilder(data);

  // Previous Year
  const previousYearAreaPath = areaBuilder(previousYearData);
  const previousYearLinePath = lineBuilder(previousYearData);

  // Normal
  const areaBuilderNormal = d3
    .area<NiveauxObservation>()
    .x(
      (d) =>
        (xScale(getMonthInFrench(d.DATE_OBSERVATION)) ?? 0) +
        xScale.bandwidth() / 2
    )
    .y1((d) => yScale(d.NORMALE))
    .y0(yScale(min));
  const normalAreaPath = areaBuilderNormal(previousYearData);

  if (
    !currentYearAreaPath ||
    !previousYearAreaPath ||
    !previousYearLinePath ||
    !normalAreaPath
  ) {
    return null;
  }

  // Create the Y axis horizontal lines
  const ticks = yScale.ticks(4);
  const yAxis = ticks.map((value, i) => {
    const hasUnit = i === ticks.length - 1;
    return (
      <g key={i}>
        <line
          x1={-MARGIN.left}
          x2={hasUnit ? 10 : -MARGIN.left / 2}
          y1={Math.floor(yScale(value)) + 0.5}
          y2={Math.floor(yScale(value)) + 0.5}
          stroke="#212121"
          opacity={0.5}
        />
      </g>
    );
  });

  // Create the Y axis Labels, needs to be in HTML, not SVG, because of the information popover
  const yAxisLabels = ticks.map((value, i) => {
    const hasUnit = i === ticks.length - 1;
    return (
      <div
        key={i}
        className="absolute flex items-center gap-1"
        style={{
          left: 0 - MARGIN.left,
          top: yScale(value) - 24,
          fontSize: 15,
          color: "black",
        }}
      >
        <span>{value + " " + (hasUnit ? unit : "")}</span>
        {hasUnit && unit !== "m3/s" && (
          <InformationPopover content={infoText} />
        )}
      </div>
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
          y2={boundsHeight}
          stroke="lightgray"
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
      const { MESURE, DATE_OBSERVATION, NORMALE } = closestDataItem;

      // Find info about previous year
      const selectedDate = new Date(DATE_OBSERVATION);
      const previousYearDataItem = previousYearData.find((d) => {
        const iterationDate = new Date(d.DATE_OBSERVATION);
        return (
          iterationDate.getFullYear() === selectedDate.getFullYear() - 1 &&
          iterationDate.getMonth() === selectedDate.getMonth()
        );
      });

      const targetXPos =
        (xScale(getMonthInFrench(DATE_OBSERVATION)) ?? 0) +
        xScale.bandwidth() / 2;

      setInteractionData({
        xPos: targetXPos,
        yPos: yScale(MESURE ?? 0),
        title: getMonthAndYearInFrench(DATE_OBSERVATION),
        text: (
          <div className="text-sm">
            <div>
              {"Niveau actuel: " +
                (MESURE ? Math.round(MESURE * 100) / 100 + unit : "-")}
            </div>
            <div>
              {"Année passée: " +
                (previousYearDataItem
                  ? Math.round(previousYearDataItem.MESURE * 100) / 100 + unit
                  : "-")}
            </div>
            <div>
              {"Moyenne: " +
                (NORMALE ? Math.round(NORMALE * 100) / 100 + unit : "-")}
            </div>
          </div>
        ),
        tooltipYPos: -15,
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          width: boundsWidth,
          height: boundsHeight,
          transform: `translate(${MARGIN.left}px, ${MARGIN.top}px)`,
        }}
      >
        {yAxisLabels}
      </div>

      <svg width={width} height={height}>
        <Pattern />
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {xGrid}
          {/* Bottom = current year */}
          <AreaItem
            path={currentYearAreaPath}
            areaOpacity={1}
            areaColor="#009EE0"
          />

          {/* Then previous year on top */}
          <AreaItem
            path={previousYearAreaPath}
            areaOpacity={0.18}
            areaColor="#B3E2F6"
          />
          <LineItem path={previousYearLinePath} color="#B3E2F6" />

          {/* Then the normal year */}
          <path
            d={normalAreaPath}
            fill="url(#diagonalLines)"
            stroke="black"
            fillOpacity={0.8}
            strokeOpacity={0.4}
          />

          <MonthXAxis xScale={xScale} y={boundsHeight + 20} />

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
        </g>
      </svg>

      <Tooltip interactionData={interactionData} />
    </div>
  );
};
