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
  console.log(cx, cy, r);

  return (
    <g>
      <defs>
        <pattern
          id="crosses"
          patternUnits="userSpaceOnUse"
          width="10"
          height="10"
          // patternTransform="rotate(25)"
        >
          <line
            x1="0"
            y1="0"
            x2="10"
            y2="10"
            stroke="black"
            strokeWidth=".5"
            strokeDasharray="4 8"
            opacity={0.7}
          />
          <line
            x1="0"
            y1="10"
            x2="10"
            y2="0"
            stroke="black"
            strokeWidth=".5"
            strokeDasharray="4 8"
            opacity={0.7}
          />
        </pattern>
      </defs>
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

      {isPrefectoral && (
        <circle cx={cx} cy={cy} r={r} stroke="black" fill="url(#crosses)" />
      )}
    </g>
  );
};
