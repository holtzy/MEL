import { cn } from "@/lib/utils";
import { ChangeLevelPill } from "../map/ChangeLevelPill";
import { Circle } from "../map/Circle";
import { CHANGE_LEVELS, LEVELS, colorScale } from "../map/utils";
import { CrossesPattern } from "./CrossesPattern";

export const MapLegend = () => {
  return (
    <>
      <div className="mt-4 inline-block">
        <h3 className="font-semibold bricolageFont">Niveaux d'eau :</h3>
        <p className="mt-2">Ce mois-ci :</p>
        <div className="block sm:hidden">
          <NiveauLegendSmallScreen />
        </div>
        <div className="hidden sm:flex gap-4 mt-4 text-sm">
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
            <ChangeLevelPill evolutionType={levelName} size="big" />
            {levelName}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-semibold mt-12 bricolageFont">États d'alerte :</h3>
      </div>
      <div className="block sm:hidden">
        <NiveauAlerteRow isSmallScreen />
      </div>
      <div className="hidden sm:flex gap-4 mt-4 text-sm">
        <NiveauAlerteRow isSmallScreen={false} />
      </div>
      <CrossesPattern />
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
          return <NiveauPill key={i} level={level} />;
        })}
      </div>
    </div>
  );
};

const NiveauLegendSmallScreen = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {LEVELS.map((level, i) => {
        return <NiveauPill key={i} level={level} />;
      })}
    </div>
  );
};

const NiveauPill = ({ level }: { level: string }) => {
  return (
    <div className="flex items-center">
      <span
        className="inline-block w-5 h-5 rounded-full "
        style={{ backgroundColor: colorScale(level) }}
      />
      <span className="ml-2 text-sm tracking-tight leading-tight">{level}</span>
    </div>
  );
};

const NiveauAlerteRow = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  const r = isSmallScreen ? 22 : 30;
  return (
    <div className="inline-block">
      <div className="flex gap-12 mt-4 text-sm">
        {/* LEFT = sécheresse */}
        <div>
          <div className="block border-b mb-4 ">
            <p className="text-center">sécheresse</p>
          </div>
          <div className={cn("flex", isSmallScreen ? "gap-0" : "gap-6")}>
            <div className="flex flex-col items-center justify-center">
              <svg width={60} height={60} className="overflow-visible">
                <Circle alert="Non" cx={30} cy={30} r={r} />
              </svg>
              <span>Non</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg width={60} height={60} className="overflow-visible">
                <Circle alert="Vigilance" cx={30} cy={30} r={r} />
              </svg>
              <span>Vigilance</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg width={60} height={60} className="overflow-visible">
                <Circle alert="Alerte" cx={30} cy={30} r={r} />
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
          <div className={cn("flex", isSmallScreen ? "gap-2" : "gap-6")}>
            <div className="flex flex-col items-center justify-center">
              <svg width={60} height={60} className="overflow-visible">
                <Circle alert="Non" cx={30} cy={30} r={r} />
              </svg>
              <span>Non</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg width={60} height={60} className="overflow-visible">
                <Circle
                  alert="Non"
                  cx={30}
                  cy={30}
                  r={r}
                  isPrefectoral={true}
                />
              </svg>
              <span>Oui</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
