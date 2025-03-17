import { scaleTime, timeMonth, timeYear } from "d3";
import { useState } from "react";

const SLIDER_HEIGHT = 8;
type TimeLegendProps = {
  width: number;
};

export const TimeLegend = ({ width }: TimeLegendProps) => {
  const scale = scaleTime()
    .domain([new Date(1995, 0, 1), new Date(2024, 11, 31)])
    .range([0, width]);

  const monthTicks = scale.ticks(timeMonth);
  const yearTicks = scale.ticks(timeYear);

  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(2024, 11, 31)
  );

  return (
    <div className="flex items-center gap-4">
      <div
        className="h-7 w-7 border rounded-full text-sm flex items-center justify-center"
        style={{ backgroundColor: "#F7F5F0" }}
      >
        ▶
      </div>
      <span>1990</span>
      <div
        className="relative bg-[#F7F5F0] cursor-pointer"
        style={{ width, height: SLIDER_HEIGHT }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect(); // Get div position
          const clickX = e.clientX - rect.left; // Get click position relative to div
          const newDate = scale.invert(clickX); // Convert X position to date
          setSelectedDate(newDate); // Update state
        }}
      >
        <svg
          width={width}
          height={SLIDER_HEIGHT}
          className="pointer-events-none"
        >
          {monthTicks.map((t, i) => {
            return (
              <line
                x1={scale(t)}
                x2={scale(t)}
                y1={0}
                y2={10}
                key={i}
                stroke={"black"}
                opacity={0.2}
                strokeWidth={0.5}
              />
            );
          })}
          {yearTicks.map((t, i) => {
            return (
              <line
                x1={scale(t)}
                x2={scale(t)}
                y1={0}
                y2={10}
                key={i}
                stroke={"black"}
                opacity={0.4}
                strokeWidth={0.5}
              />
            );
          })}
          {yearTicks.map((t, i) => {
            if (t.getFullYear() % 10 !== 0) {
              return null;
            }
            return (
              <line
                x1={scale(t)}
                x2={scale(t)}
                y1={0}
                y2={10}
                key={i}
                stroke={"black"}
                opacity={1}
                strokeWidth={1}
              />
            );
          })}
        </svg>
        <div
          className="absolute top-0 -translate-y-1 -translate-x-1/2 w-8 h-4  border border-black/40 rounded-md bg-[#F7F5F0]"
          style={{ left: scale(selectedDate) }}
        />
      </div>
      <span>2024</span>
    </div>
  );
};
