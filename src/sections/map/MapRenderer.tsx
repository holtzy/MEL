import { MapObservation } from "@/data/types";
import { Circle } from "./Circle";
import { useRef } from "react";
import { useDimensions } from "@/lib/use-dimensions";
import { scaleOrdinal } from "d3";
import { alertScale, levelScale } from "./utils";
// import { ChangeLevelPill } from "./ChangeLevelPill";

type MapProps = {
  data: MapObservation[];
};

// We are using iframes
// So we need to deal with a FIXED HEIGHT for the map, whatever the screen size.
// Se we decided to use 3 different map SVGs, and will use fixed dimensions for them.
const HEIGHT = 700;
const BREAK_POINTS_XL = 1300;
const BREAK_POINTS_LG = 800;
const BREAK_POINTS_SMALL = 500;

const SM_MAP_ASPECT_RATIO = 498.28 / 1080;
const MD_MAP_ASPECT_RATIO = 754.37 / 1080;
const LG_MAP_ASPECT_RATIO = 1274 / 1080;
const XL_MAP_ASPECT_RATIO = 1920 / 1080;

const MAP_WIDTH_SM = SM_MAP_ASPECT_RATIO * HEIGHT;
const MAP_WIDTH_MD = MD_MAP_ASPECT_RATIO * HEIGHT;
const MAP_WIDTH_LG = LG_MAP_ASPECT_RATIO * HEIGHT;
const MAP_WIDTH_XL = XL_MAP_ASPECT_RATIO * HEIGHT;

// Bubble positions are slightly different for each map background
const LOCATIONS = [
  "Carbonifère",
  "Autres craie",
  "Emmerin",
  "Ansereuilles",
  "Lys",
];
const POSITIONS_X = {
  sm: [298, 282, 246, 218, 29],
  md: [453, 427, 371, 330, 34],
  lg: [539, 523, 457, 408, 64],
  xl: [776, 765, 700, 649, 284],
};
const POSITIONS_Y = {
  sm: [344, 416, 366, 416, 377],
  md: [340, 447, 379, 446, 392],
  lg: [354, 474, 409, 483, 414],
  xl: [356, 480, 418, 477, 429],
};

//
// Position of the little pills on top of each label
//
// const xScaleEvolution = scaleOrdinal<string, number>()
//   .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
//   .range([0.715, 0.675, 0.453, 0.514, 0.155]);

// const yScaleEvolution = scaleOrdinal<string, number>()
//   .domain(["Carbonifère", "Autres craie", "Emmerin", "Ansereuilles", "Lys"])
//   .range([0.461, 0.735, 0.46, 0.753, 0.564]);

//
// Component
//
export const MapRenderer = ({ data }: MapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useDimensions(containerRef); // Used to know what map to display

  const screenSize =
    containerSize.width > BREAK_POINTS_XL
      ? "xl"
      : containerSize.width > BREAK_POINTS_LG
      ? "lg"
      : containerSize.width < BREAK_POINTS_SMALL
      ? "sm"
      : "md";

  const mapWidth =
    containerSize.width > BREAK_POINTS_XL
      ? MAP_WIDTH_XL
      : containerSize.width > BREAK_POINTS_LG
      ? MAP_WIDTH_LG
      : containerSize.width < BREAK_POINTS_SMALL
      ? MAP_WIDTH_SM
      : MAP_WIDTH_MD;

  const circleRadius =
    containerSize.width > BREAK_POINTS_LG
      ? 30
      : containerSize.width < BREAK_POINTS_SMALL
      ? 10
      : 20;

  const xScale = scaleOrdinal<string, number>()
    .domain(LOCATIONS)
    .range(POSITIONS_X[screenSize]);

  const yScale = scaleOrdinal<string, number>()
    .domain(LOCATIONS)
    .range(POSITIONS_Y[screenSize]);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex justify-center"
      style={{ height: HEIGHT }}
    >
      <div className="relative">
        <picture className="h-full">
          <source srcSet="map-bg-xl.svg" media="(min-width: 1300px)" />
          <source srcSet="map-bg-lg.svg" media="(min-width: 800px)" />
          <source srcSet="map-bg-md.svg" media="(min-width: 500px)" />
          <img src="map-bg-sm.svg" className="h-full" alt="Map background" />
        </picture>

        <svg
          className="absolute inset-0"
          style={{ width: mapWidth, height: HEIGHT }}
          // onClick={(e) => {
          //   const svg = e.currentTarget;
          //   const point = svg.createSVGPoint();
          //   point.x = e.clientX;
          //   point.y = e.clientY;
          //   const svgPoint = point.matrixTransform(
          //     svg.getScreenCTM().inverse()
          //   );
          //   console.log(`Clicked at: x=${svgPoint.x}, y=${svgPoint.y}`);
          // }}
        >
          {data.map((d, i) => (
            <Circle
              key={i}
              cx={xScale(d.CHAMP_CAPTANT)}
              cy={yScale(d.CHAMP_CAPTANT)}
              r={circleRadius}
              level={levelScale(d.CARACT)}
              alert={alertScale(d.SEUIL)}
            />
          ))}
        </svg>
      </div>

      {/* {data.map((d, i) => {
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              left: xScaleEvolution(d.CHAMP_CAPTANT) * containerSize.width,
              top: yScaleEvolution(d.CHAMP_CAPTANT) * HEIGHT,
            }}
          >
            <ChangeLevelPill levelName={evolutionScale(d.EVOLUTION)} />
          </div>
        );
      })} */}
    </div>
  );
};
