import { ScaleBand } from "d3";

type MonthXAxisProps = {
  xScale: ScaleBand<string>;
  y: number;
};

export const MonthXAxis = ({ xScale, y }: MonthXAxisProps) => {
  const xLabels = xScale.domain().map((bandValue, i) => {
    return (
      <g key={i}>
        <text
          x={xScale(bandValue) ?? 0 + xScale.bandwidth() / 2}
          y={y}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={12}
          fill="black"
        >
          {bandValue}
        </text>
        {/* <line
          y1={boundsHeight + 10}
          y2={boundsHeight + 26}
          x1={
            x + xScale.bandwidth() + (xScale.padding() * xScale.bandwidth()) / 2
          }
          x2={
            x + xScale.bandwidth() + (xScale.padding() * xScale.bandwidth()) / 2
          }
          stroke="#212121"
          strokeWidth={0.2}
        /> */}
      </g>
    );
  });

  return <g>{xLabels}</g>;
};
