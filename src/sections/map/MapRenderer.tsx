import { MapObservation } from "@/data/types";
import { Circle } from "./Circle";
import { useRef } from "react";
import { useDimensions } from "@/lib/use-dimensions";
import { scaleOrdinal } from "d3";
import { ALERT_LEVELS, LEVELS } from "./utils";

type MapProps = {
  data: MapObservation[];
};

const levelScale = scaleOrdinal<number, (typeof LEVELS)[number]>()
  .domain([5, 6, 7, 8, 9, 10, 11, 12])
  .range([
    "Très bas",
    "Bas",
    "Modérément bas",
    "Normal",
    "Modérément haut",
    "Haut",
    "Haut",
    "Très haut",
  ]);

const alertScale = scaleOrdinal<number, (typeof ALERT_LEVELS)[number]>()
  .domain([1, 2])
  .range(["Non", "Vigilance"]);

export const MapRenderer = ({ data }: MapProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartSize = useDimensions(chartRef);

  return (
    <div ref={chartRef} className="relative w-full mt-10">
      <img src="map-bg.svg" />
      <svg
        className="absolute inset-0"
        style={{ width: chartSize.width, height: chartSize.height }}
      >
        {data.map((d, i) => {
          return (
            <Circle
              key={i}
              cx={100}
              cy={100}
              r={40}
              level={levelScale(d.CARACT)}
              alert={alertScale(d.SEUIL)}
            />
          );
        })}
      </svg>
    </div>
  );
};
