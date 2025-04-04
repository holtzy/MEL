import { MapObservation } from "@/data/types";
import { Circle } from "./Circle";
import { useRef } from "react";
import { useDimensions } from "@/lib/use-dimensions";
import { scaleOrdinal } from "d3";
import { alertScale, evolutionScale, levelScale } from "./utils";
import { ChangeLevelPill } from "./ChangeLevelPill";

type MapProps = {
  data: MapObservation[];
};

//
// Position of the bubbles
//
const xScale = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.61, 0.598, 0.553, 0.519, 0.273]);

const yScale = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.51, 0.69, 0.59, 0.68, 0.62]);

//
// Position of the little pills on top of each label
//
const xScaleEvolution = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.715, 0.675, 0.453, 0.514, 0.155]);

const yScaleEvolution = scaleOrdinal<string, number>()
  .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
  .range([0.461, 0.735, 0.46, 0.753, 0.564]);

//
// Component
//
export const MapRenderer = ({ data }: MapProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartSize = useDimensions(chartRef);

  // IMPORTANT
  // We're working with iframes. So we have to provide a fixed height that must be
  // respected for all screen sizes. It's a struggle to work with.
  const height = 700;

  return (
    <div ref={chartRef} className="relative w-full" style={{ height }}>
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet="map-bg-lg.svg" media="(min-width: 1300px)" />
        <source srcSet="map-bg-md.svg" media="(min-width: 500px)" />
        <img
          src="map-bg-sm.svg"
          className="block w-full h-full object-contain"
          alt="Map background"
        />
      </picture>

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
              r={35}
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
