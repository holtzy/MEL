import { scaleOrdinal } from "d3";

const LEVELS = [
  "Très bas",
  "Bas",
  "Modérément bas",
  "Normal",
  "Modérément haut",
  "Haut",
  "Très haut",
] as const;

const colorScale = scaleOrdinal<string>()
  .domain(LEVELS)
  .range([
    "#AB0107",
    "#E30614",
    "#FACED1",
    "#84D0F0",
    "#009EE0",
    "#005EA8",
    "#324886",
  ]);

const CHANGE_LEVELS = ["stables", "baissé", "monté", "mixtes"] as const;
const changeScale = scaleOrdinal<string>()
  .domain(CHANGE_LEVELS)
  .range(["=", "▽", "△", "★"]);

const ALERT_LEVELS = ["Non", "Vigilance", "Alerte"] as const;

export const MapSection = () => {
  return (
    <>
      <h2>L'état des lieux</h2>
      <span className="subtitle">
        Niveaux d’eau dans les champs captants de la Craie et du Carbonifère,
        débits sur le cours d’eau de la Lys{" "}
      </span>

      <div className="mt-4 inline-block">
        <h3 className="font-semibold">Niveaux d'eau :</h3>
        <p className="mt-2">Ce mois-ci :</p>
        <div className="flex gap-4 mt-4 text-sm">
          <NiveauLegend isSmall={true} label={"niveaux alarmants"} />
          <NiveauLegend isSmall={false} label={"niveaux confortables"} />
        </div>
      </div>

      <p className="mt-10">
        Depuis le mois précédent, les niveaux d’eau ont/sont :
      </p>
      <div className="flex gap-4 mt-4 text-sm">
        {CHANGE_LEVELS.map((levelName, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-6 w-6 border rounded-full text-md flex items-center justify-center"
              style={{ backgroundColor: "#F7F5F0" }}
            >
              {changeScale(levelName)}
            </div>
            {levelName}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-semibold mt-12">États d'alerte :</h3>
      </div>

      <div className="inline-block">
        <div className="flex gap-12 mt-4 text-sm">
          {/* LEFT = sécheresse */}
          <div>
            <div className="block border-b mb-4 ">
              <p className="text-center">sécheresse</p>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center justify-center">
                <svg width={60} height={60} className="overflow-visible">
                  <Circle alert="Non" cx={30} cy={30} r={30} />
                </svg>
                <span>Non</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <svg width={60} height={60} className="overflow-visible">
                  <Circle alert="Vigilance" cx={30} cy={30} r={30} />
                </svg>
                <span>Vigilance</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <svg width={60} height={60} className="overflow-visible">
                  <Circle alert="Alerte" cx={30} cy={30} r={30} />
                </svg>
                <span>Alerte</span>
              </div>
            </div>
          </div>

          {/* RIGHT = ARRETE PREFECTORALE */}
          <div>
            <div className="block border-b mb-4 ">
              <p className="text-center">arrêté préfectoral</p>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center justify-center">
                <svg width={60} height={60} className="overflow-visible">
                  <Circle alert="Non" cx={30} cy={30} r={30} />
                </svg>
                <span>Non</span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <svg width={60} height={60} className="overflow-visible">
                  <Circle
                    alert="Non"
                    cx={30}
                    cy={30}
                    r={30}
                    isPrefectoral={true}
                  />
                </svg>
                <span>Oui</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NiveauLegend = ({
  isSmall,
  label,
}: {
  isSmall: boolean;
  label: string;
}) => {
  return (
    <div>
      <div className="block border-b mb-4 ">
        <p className="text-center">{label}</p>
      </div>
      <div className="flex gap-6">
        {LEVELS.map((level, i) => {
          if (isSmall && i > 2) {
            return null;
          }
          if (!isSmall && i <= 2) {
            return null;
          }

          return (
            <div key={i} className="flex items-center">
              <span
                className="inline-block w-5 h-5 rounded-full "
                style={{ backgroundColor: colorScale(level) }}
              />
              <span className="ml-2">{level}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

type CircleProps = {
  level?: (typeof LEVELS)[number];
  alert: (typeof ALERT_LEVELS)[number];
  isPrefectoral?: boolean;
  cx: number;
  cy: number;
  r: number;
};

const Circle = ({
  level,
  alert,
  isPrefectoral = false,
  cx,
  cy,
  r,
}: CircleProps) => {
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
