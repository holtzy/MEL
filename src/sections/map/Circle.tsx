import { ALERT_LEVELS, LEVELS, colorScale } from "./utils";

type CircleProps = {
  level?: (typeof LEVELS)[number];
  alert: (typeof ALERT_LEVELS)[number];
  isPrefectoral?: boolean;
  cx: number;
  cy: number;
  r: number;
};

export const Circle = ({
  level,
  alert,
  isPrefectoral = false,
  cx,
  cy,
  r,
}: CircleProps) => {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={level ? colorScale(level) : "#F7F5F0"}
        stroke="black"
      />
      {(alert === "Vigilance" || alert === "Alerte") && (
        <circle cx={cx} cy={cy} r={r - 3} stroke="black" fill="transparent" />
      )}
      {alert === "Alerte" && (
        <circle cx={cx} cy={cy} r={r - 6} stroke="black" fill="transparent" />
      )}

      {/* The SVG pattern called "crosses" must be defined only once at the top level! See the CrossesPattern component */}
      {isPrefectoral && (
        <circle cx={cx} cy={cy} r={r} stroke="black" fill="url(#crosses)" />
      )}
    </g>
  );
};
