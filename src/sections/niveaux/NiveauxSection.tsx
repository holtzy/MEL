import { useEffect, useRef, useState } from "react";

import { AreaChart } from "@/viz/AreaChart/AreaChart";
import { NiveauxObservation } from "@/data/types";
import { Pattern } from "@/components/Pattern";
import { InformationPopover } from "@/components/InformationPopover";
import { YearTypePill } from "@/components/YearTypePill";
import { YearSelectButton } from "@/components/YearSelectButton";

const URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/5/query?where=1%3D1&outFields=*&returnGeometry=false&f=json";

const filterData = (data: NiveauxObservation[], year: number) => {
  return data.filter((d) => {
    const date = new Date(d.DATE_OBSERVATION);
    const isSelectedYear = date.getFullYear() === year && date.getMonth() <= 7;
    const isEndOfPreviousYear =
      date.getFullYear() === year - 1 && date.getMonth() > 7;
    return isSelectedYear || isEndOfPreviousYear;
  });
};

export const NiveauxSection = ({ width }: { width: number }) => {
  const contentRef = useRef(null);

  const [year, setYear] = useState(2024);

  const [data, setData] = useState<NiveauxObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          json.features.map(
            (f: { attributes: NiveauxObservation }) => f.attributes
          )
        );
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = filterData(data, year);

  const filteredDataPreviousYear = filterData(data, year - 1);

  const yearType = filteredData[0]?.TYPE_ANNEE;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Tendance des niveaux des eaux</h2>
      <span className="subtitle">
        L’évolution des réserves d’eaux sur les 12 derniers mois
      </span>

      <div className="my-8">
        <div className="flex items-center gap-2 ">
          <div className="block sm:hidden">
            <span>Année : </span>
          </div>
          <div className="hidden sm:block">
            <span>Selectionnez l’année: </span>
          </div>
          <YearSelectButton setYear={setYear} year={year} />
          <YearTypePill yearType={yearType} />
        </div>

        <div className="flex items-center gap-2 my-2">
          <div className="hidden sm:block">
            <span>Clé de lecture</span>
          </div>
          <div className="w-8 h-6 bg-[#009EE0]" />
          <span className="text-xs sm:text-sm">Année sélectionnée</span>
          <div
            className="w-8 h-6  border border-[#B3E2F6]"
            style={{ backgroundColor: "rgba(179, 226, 246, 0.18)" }}
          />
          <span className="text-xs sm:text-sm">Année précédente</span>
          <div className="w-8 h-6 border border-black">
            <svg>
              <Pattern />
              <rect
                x={0}
                width={31}
                y={0}
                height={23}
                fill="url(#diagonalLines)"
              />
            </svg>
          </div>
          <span className="text-xs sm:text-sm">Normale</span>{" "}
          <InformationPopover
            content={
              <p>
                Pour la Lys, les moyennes mensuelles de 1954 à 2024 constituent
                les normales. Pour la nappe de la Craie, les normales sont
                définies sur la période 1991-2020.
              </p>
            }
          />
        </div>
      </div>

      <div ref={contentRef}>
        <p
          className="font-bold bricolageFont"
          style={{ fontSize: 19, marginTop: 30 }}
        >
          Nappe de la Craie
        </p>
        <AreaChart
          data={filteredData.filter((d) => d.ENDROIT === "Craie")}
          previousYearData={filteredDataPreviousYear.filter(
            (d) => d.ENDROIT === "Craie"
          )}
          width={width}
          height={300}
          min={15}
          max={18}
          unit={"mNGF"}
          infoText={
            <p>
              mNGF = Nivellement Général de la France correspondant à l’altitude
              par rapport au niveau de la mer
            </p>
          }
        />

        <p
          className="font-bold bricolageFont"
          style={{ fontSize: 19, marginTop: 30 }}
        >
          Rivière Lys
        </p>
        <AreaChart
          data={filteredData.filter((d) => d.ENDROIT === "Lys")}
          previousYearData={filteredDataPreviousYear.filter(
            (d) => d.ENDROIT === "Lys"
          )}
          width={width}
          height={300}
          min={0}
          max={10}
          unit="mm"
          infoText={""}
        />
        <p
          className="font-bold bricolageFont"
          style={{ fontSize: 19, marginTop: 30 }}
        >
          Nappe du Carbonifère
        </p>
        <AreaChart
          data={filteredData.filter((d) => d.ENDROIT === "Carbonifère")}
          previousYearData={filteredDataPreviousYear.filter(
            (d) => d.ENDROIT === "Carbonifère"
          )}
          width={width}
          height={300}
          min={-70}
          max={-50}
          unit={"mNGF"}
          infoText={
            <p>
              mNGF = Nivellement Général de la France correspondant à l’altitude
              par rapport au niveau de la mer
            </p>
          }
        />
      </div>

      <div className="text-sm mt-8" style={{ fontSize: 11, color: "#212121" }}>
        <p>
          Sources et notes : MEL (nappes), HydroPortail - Ministère de
          l’écologie (cours d’eau). L’indication du type d’année (humide, sèche
          etc.) est définie statistiquement par le cumul de recharge pour
          l’année hydrologique considérée.
        </p>
      </div>
    </>
  );
};
