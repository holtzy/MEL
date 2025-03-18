import { ChangeLevelPill } from "../map/ChangeLevelPill";
import { Circle } from "../map/Circle";
import { CHANGE_LEVELS, LEVELS, changeScale, colorScale } from "../map/utils";

export const MapLegend = () => {
  return (
    <>
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
            <ChangeLevelPill levelName={levelName} />
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
