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

const xScale = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.61, 0.62, 0.57, 0.51, 0.25]);

const yScale = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.52, 0.68, 0.61, 0.65, 0.6]);

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
              r={20}
              level={levelScale(d.CARACT)}
              alert={alertScale(d.SEUIL)}
            />
          );
        })}
      </svg>
    </div>
  );
};
