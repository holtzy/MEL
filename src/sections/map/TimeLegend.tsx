import { scaleTime, timeMonth, timeYear } from "d3";
import { Play, Square } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const SLIDER_HEIGHT = 8;
const TIME_INTERVAL = 100;

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
    .range([0, width]);

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

  // Handle the play button functionality
  // Handle the play button functionality
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        setSelectedDate((prevDate: Date) => {
          const nextDate = prevDate;
          nextDate.setMonth(prevDate.getMonth() + 1); // Increment month
          if (nextDate > new Date(2024, 11, 31)) {
            clearInterval(interval); // Stop the interval when the end is reached
            setIsPlaying(false); // Stop playing
          }
          return nextDate;
        });
      }, TIME_INTERVAL); // 0.5 seconds interval
    } else {
      clearInterval(interval); // Clear the interval when not playing
    }

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [isPlaying]);

  return (
    <div className="flex items-center gap-4">
      <div
        className="h-7 w-7 border rounded-full text-sm flex items-center justify-center cursor-pointer flex-shrink-0"
        style={{ backgroundColor: "#F7F5F0" }}
        onClick={isPlaying ? stopPlaying : startPlaying} // Start the play animation when clicked
      >
        {isPlaying ? <Square size={16} /> : <Play size={16} />}
      </div>
      <span>1990</span>
      <div
        className="relative bg-[#F7F5F0] cursor-pointer"
        style={{ width, height: SLIDER_HEIGHT }}
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
        <div
          className="absolute top-0 -translate-y-1 -translate-x-1/2 "
          style={{ left: scale(selectedDate) }}
        >
          <div className="w-8 h-4 border border-black/40 rounded-md bg-[#F7F5F0]" />
          <p className="text-sm -translate-y-10">
            {selectedDate.getFullYear()}
          </p>
        </div>
      </div>
      <span>2024</span>
    </div>
  );
};
