import { useEffect, useState } from "react";
import { Circle } from "./Circle";
import { TimeLegend } from "./TimeLegend";
import { CHANGE_LEVELS, LEVELS, changeScale, colorScale } from "./utils";
import { MapObservation } from "@/data/types";
import { MapRenderer } from "./MapRenderer";

const URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/2/query?where=1%3D1&outFields=*&returnGeometry=false&f=json";

const filterData = (data: MapObservation[], date: Date) => {
  return data.filter((d) => {
    const observationDate = new Date(d.DATE_OBSERVATION);
    return (
      observationDate.getFullYear() === date.getFullYear() &&
      observationDate.getMonth() === date.getMonth()
    );
  });
};

export const MapSection = ({ width }: { width: number }) => {
  const [data, setData] = useState<MapObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(2024, 11, 31)
  );

  const filteredData = filterData(data, selectedDate);
  console.log("filteredData", filteredData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch only the temperature dataset
        const response = await fetch(URL);

        if (!response.ok) throw new Error("Failed to fetch data");

        // Convert response to JSON
        const json = await response.json();

        // Extract and clean data
        setData(
          json.features.map((f: { attributes: MapObservation }) => f.attributes)
        );
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>L'état des lieux</h2>
      <span className="subtitle">
        Niveaux d’eau dans les champs captants de la Craie et du Carbonifère,
        débits sur le cours d’eau de la Lys{" "}
      </span>

      {/* -
-
-
-
-
-
-
-
LEGEND
-
-
-
-
-
-
-
-
- */}
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

      {/* -
      -
      -
      -
      -MAP
      -
      -
      -
      -
      -
      -
       */}
      <div className="w-full">
        <MapRenderer data={filteredData} />
      </div>

      <div className="mt-10">
        <TimeLegend
          width={600}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
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
