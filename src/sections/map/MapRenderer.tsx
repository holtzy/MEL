import { MapObservation } from "@/data/types";
import { Circle } from "./Circle";
import { useRef } from "react";
import { useDimensions } from "@/lib/use-dimensions";
import { scaleOrdinal } from "d3";
import { ALERT_LEVELS, LEVELS } from "./utils";

type MapProps = {
  data: MapObservation[];
};

const ASPECT_RATIO = 1920 / 1080;

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

const xScale = scaleOrdinal()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.3, 0.8, 0.4, 0.6, 0.9]);

const yScale = scaleOrdinal()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.3, 0.8, 0.4, 0.6, 0.9]);

export const MapRenderer = ({ data }: MapProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartSize = useDimensions(chartRef);

  const height = chartSize.width / ASPECT_RATIO;

  return (
    <div ref={chartRef} className="relative w-full">
      <img src="map-bg.svg" className="block w-full" />
      <svg
        className="absolute inset-0"
        style={{ width: chartSize.width, height }}
      >
        {data.map((d, i) => {
          return (
            <Circle
              key={i}
              cx={xScale(d.CHAMP_CAPTANT) * chartSize.width}
              cy={yScale(d.CHAMP_CAPTANT) * height}
              r={30}
              level={levelScale(d.CARACT)}
              alert={alertScale(d.SEUIL)}
            />
          );
        })}
      </svg>
    </div>
  );
};
