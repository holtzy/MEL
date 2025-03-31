import { geologicalMonthsInFrench, getMonthInFrench } from "@/lib/utils";
import { MonthXAxis } from "@/viz/MonthXAxis";
import { scaleBand, scaleTime, timeMonth, timeYear } from "d3";
import { Play, Square } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const SLIDER_HEIGHT = 8;
const TIME_INTERVAL = 300; // for the play animation
const LEFT_MARGIN = 100;
const RIGHT_MARGIN = 50;

type TimeLegendProps = {
  width: number;
  selectedDate: Date;
  setSelectedDate: (d: Date) => void;
};

export const TimeLegend = ({
  width,
  selectedDate,
  setSelectedDate,
}: TimeLegendProps) => {
  const scale = scaleTime()
    .domain([new Date(1995, 0, 1), new Date(2024, 11, 31)])
    .range([0, width - LEFT_MARGIN - RIGHT_MARGIN]);

  const frenchMonthScale = scaleBand()
    .domain(geologicalMonthsInFrench)
    .range([0, width - LEFT_MARGIN - RIGHT_MARGIN]);

  const monthTicks = scale.ticks(timeMonth);
  const yearTicks = scale.ticks(timeYear);

  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null); // Reference to the slider div

  const startDrag = (e: React.MouseEvent) => {
    setIsDragging(true); // Set dragging state
    e.preventDefault(); // Prevent text selection or default behavior
  };

  const onDrag = (e: MouseEvent) => {
    if (!isDragging) return;
    const rect = sliderRef.current?.getBoundingClientRect();
    if (rect) {
      const clickX = e.clientX - rect.left; // Get the relative position
      const newDate = scale.invert(clickX); // Convert to date
      setSelectedDate(newDate); // Update date
    }
  };

  const stopDrag = () => {
    setIsDragging(false); // Stop dragging
  };

  const startPlaying = () => {
    setIsPlaying(true); // Start animation
  };

  const stopPlaying = () => {
    setIsPlaying(false); // Stop animation
  };

  // Add event listeners for drag events
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", stopDrag);
    } else {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    }

    // Cleanup event listeners when the component is unmounted or dragging stops
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [isDragging]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        const nextDate = new Date(selectedDate);
        nextDate.setMonth(selectedDate.getMonth() + 1);
        if (nextDate > new Date(2024, 11, 31)) {
          clearInterval(interval);
          setIsPlaying(false);
        } else {
          setSelectedDate(nextDate);
        }
      }, TIME_INTERVAL);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, selectedDate]);

  const leftSection = (
    <div style={{ width: LEFT_MARGIN }} className="flex gap-2 items-center">
      <div
        className="h-7 w-7 border rounded-full text-sm flex items-center justify-center cursor-pointer flex-shrink-0"
        style={{ backgroundColor: "#F7F5F0" }}
        onClick={isPlaying ? stopPlaying : startPlaying} // Start the play animation when clicked
      >
        {isPlaying ? <Square size={16} /> : <Play size={16} />}
      </div>
      <span>1990</span>
    </div>
  );

  const sliderBar = (
    <div
      className="relative bg-[#F7F5F0] cursor-pointer"
      style={{
        width: width - LEFT_MARGIN - RIGHT_MARGIN,
        height: SLIDER_HEIGHT,
      }}
      ref={sliderRef}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newDate = scale.invert(clickX);
        setSelectedDate(newDate);
      }}
      onMouseDown={startDrag} // Start drag when mouse down
    >
      <svg
        width={width - RIGHT_MARGIN - LEFT_MARGIN}
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
        {yearTicks
          .filter((t) => t.getFullYear() % 10 === 0)
          .map((t) => {
            return (
              <line
                x1={scale(t)}
                x2={scale(t)}
                y1={0}
                y2={10}
                key={t.toISOString()}
                stroke={"black"}
                opacity={1}
                strokeWidth={1}
              />
            );
          })}
      </svg>
      {/* Slider Pill */}
      <div
        className="absolute top-0 -translate-y-1 -translate-x-1/2 "
        style={{ left: scale(selectedDate) }}
      >
        <div className="w-8 h-4 border border-black/40 rounded-md bg-[#F7F5F0]" />
        <p className="text-sm -translate-y-10">{selectedDate.getFullYear()}</p>
      </div>
    </div>
  );

  const selectedMonth = getMonthInFrench(selectedDate.getTime());
  const selectedMonthX = frenchMonthScale(selectedMonth);

  return (
    <>
      <h3 className="font-semibold bricolageFont">
        Sélectionnez le mois et l’année :
      </h3>

      <div className="flex items-center mt-4">
        {leftSection}
        {sliderBar}
        <div className="pl-8" style={{ width: RIGHT_MARGIN }}>
          <span>2024</span>
        </div>
      </div>

      <div
        style={{
          marginLeft: LEFT_MARGIN,
          width: width - RIGHT_MARGIN - LEFT_MARGIN,
        }}
      >
        <svg width={width - RIGHT_MARGIN - LEFT_MARGIN} height={60}>
          <MonthXAxis xScale={frenchMonthScale} y={50} />
          {selectedMonthX && (
            <line
              x1={selectedMonthX + 5}
              y1={35}
              x2={selectedMonthX + frenchMonthScale.bandwidth() - 5}
              y2={35}
              stroke="black"
            />
          )}
          {selectedMonthX && (
            <path
              d={generateHookPath(
                scale(selectedDate),
                0,
                selectedMonthX + frenchMonthScale.bandwidth() / 2,
                35
              )}
              stroke="black"
              fill="transparent"
            />
          )}
        </svg>
      </div>
    </>
  );
};

function generateHookPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  const isRightToLeft = startX > endX; // Check direction
  const verticalOffset = Math.abs(endY - startY) / 4;
  const horizontalOffset = Math.abs(endX - startX) / 4;

  return `M ${startX} ${startY}
          V ${startY + verticalOffset}
          Q ${startX} ${startY + 2 * verticalOffset}, ${
    isRightToLeft ? startX - horizontalOffset : startX + horizontalOffset
  } ${startY + 2 * verticalOffset}
          H ${isRightToLeft ? endX + horizontalOffset : endX - horizontalOffset}
          Q ${endX} ${startY + 2 * verticalOffset}, ${endX} ${
    startY + 3 * verticalOffset
  }
          Q ${endX} ${endY - verticalOffset}, ${endX} ${endY}
          V ${endY}`;
}
