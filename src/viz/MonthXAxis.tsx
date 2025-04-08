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
          x={(xScale(bandValue) ?? 0) + xScale.bandwidth() / 2}
          y={y}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={12}
          fill="black"
        >
          {bandValue}
        </text>
      </g>
    );
  });

  const xLabelsSmallScreen = xScale.domain().map((bandValue, i) => {
    if (i % 2 !== 0) return null;
    return (
      <g key={i}>
        <text
          x={(xScale(bandValue) ?? 0) + xScale.bandwidth() / 2}
          y={y}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={12}
          fill="black"
        >
          {bandValue}
        </text>
      </g>
    );
  });

  return (
    <>
      <g className="hidden sm:block">{xLabels}</g>
      <g className="block sm:hidden">{xLabelsSmallScreen}</g>
    </>
  );
};
