import { MapObservation } from "@/data/types";
import { Circle } from "./Circle";
import { useRef } from "react";
import { useDimensions } from "@/lib/use-dimensions";
import { scaleOrdinal } from "d3";
import { ALERT_LEVELS, CHANGE_LEVELS, LEVELS } from "./utils";
import { ChangeLevelPill } from "./ChangeLevelPill";

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

const evolutionScale = scaleOrdinal<number, (typeof CHANGE_LEVELS)[number]>()
  .domain([1, 2, 3, 4]) // 0 is "no data"
  .range(["baissé", "stables", "monté", "mixtes"]);

// Position of the bubbles
const xScale = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.625, 0.618, 0.562, 0.522, 0.23]);

const yScale = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.51, 0.69, 0.601, 0.68, 0.62]);

// Position of the little pills on top of each label
const xScaleEvolution = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.715, 0.675, 0.453, 0.514, 0.155]);

const yScaleEvolution = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.458, 0.73, 0.458, 0.75, 0.56]);

export const MapRenderer = ({ data }: MapProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartSize = useDimensions(chartRef);

  const height = chartSize.width / ASPECT_RATIO;

  console.log("data", data);

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

      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              left: xScaleEvolution(d.CHAMP_CAPTANT) * chartSize.width,
              top: yScaleEvolution(d.CHAMP_CAPTANT) * height,
            }}
          >
            <ChangeLevelPill levelName={evolutionScale(d.EVOLUTION)} />
          </div>
        );
      })}
    </div>
  );
};
