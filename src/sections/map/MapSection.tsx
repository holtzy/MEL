import { useEffect, useState } from "react";
import { MapObservation } from "@/data/types";
import { MapRenderer } from "./MapRenderer";
import { max, min } from "d3";
import { MapLegend } from "./MapLegend";
import { YearSelectButton } from "@/components/YearSelectButton";
import { MonthSelectButton } from "@/components/MonthSelectButton";

const URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/2/query?where=1%3D1&outFields=*&returnGeometry=false&f=json";

const filterData = (
  data: MapObservation[],
  selectedYear: number,
  selectedMonth: number
) => {
  return data.filter((d) => {
    const observationDate = new Date(d.DATE_OBSERVATION);
    return (
      observationDate.getFullYear() === selectedYear &&
      observationDate.getMonth() === selectedMonth
    );
  });
};

export const MapSection = () => {
  const [data, setData] = useState<MapObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);

  const filteredData = filterData(data, selectedYear, selectedMonth);

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

  console.log("data", filteredData);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center">
          <div className="w-full " style={{ maxWidth: 800 }}>
            <h2>L'état des lieux</h2>
            <span className="subtitle">
              Niveaux d’eau dans les champs captants de la Craie et du
              Carbonifère, débits sur le cours d’eau de la Lys{" "}
            </span>

            <MapLegend />

            <div className="mt-12">
              <h3 className="font-semibold mt-12 bricolageFont">La période</h3>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-10">
              <span>Selectionnez l’année et le mois : </span>
              <YearSelectButton
                setYear={setSelectedYear}
                year={selectedYear}
                startYear={1991}
              />
              <MonthSelectButton
                setMonth={setSelectedMonth}
                month={selectedMonth}
              />
            </div>
          </div>
        </div>

        <MapRenderer data={filteredData} />
      </div>
    </>
  );
};
