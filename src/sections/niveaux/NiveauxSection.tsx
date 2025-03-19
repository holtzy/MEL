import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { AreaChart } from "@/viz/AreaChart/AreaChart";
import { NiveauxObservation } from "@/data/types";
import { Pattern } from "@/components/Pattern";
import { InformationPopover } from "@/components/InformationPopover";
import { YearTypePill } from "@/components/YearTypePill";

const YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

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
          <span>Selectionnez l'année: </span>
          <Select
            onValueChange={(v) => setYear(Number(v))}
            value={String(year)}
          >
            <SelectTrigger>
              <SelectValue>{year - 1 + " - " + year}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((year, i) => {
                return (
                  <SelectItem key={i} value={String(year)}>
                    {year - 1 + " - " + year}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <YearTypePill yearType={yearType} />
        </div>

        <div className="flex items-center gap-2 my-2">
          <span>Clé de lecture</span>
          <div className="w-8 h-6 bg-[#009EE0]" />
          <span>Année sélectionnée</span>
          <div
            className="w-8 h-6  border border-[#B3E2F6]"
            style={{ backgroundColor: "rgba(179, 226, 246, 0.18)" }}
          />
          <span>Année précédente</span>
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
          <span>Normale</span> <InformationPopover content={<p>TODO</p>} />
        </div>
      </div>

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
        unit="m3/s"
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
      />
    </>
  );
};
