import { PrelevementObservation } from "@/data/types";
import { HalfCircleChart } from "@/viz/HalfCircle/HalfCircleChart";
import { useEffect, useState } from "react";

const URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/6/query?where=1%3D1&outFields=*&returnGeometry=false&f=json";

export const PrelevementSection = () => {
  const [data, setData] = useState<PrelevementObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log("data", data);
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
            (f: { attributes: PrelevementObservation }) => f.attributes
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

  const currentDataPoint = data.filter((d) => {
    const date = new Date(d.DATE_OBSERVATION);
    const now = new Date();
    return (
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth()
    );
  });

  const lastYearDataPoint = data.filter((d) => {
    const date = new Date(d.DATE_OBSERVATION);
    const now = new Date();
    return (
      date.getFullYear() === now.getFullYear() - 1 &&
      date.getMonth() === now.getMonth()
    );
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("lastYearDataPoint", lastYearDataPoint);

  return (
    <>
      <h2>Et les prélèvements dans tout ça ?</h2>
      <span className="subtitle">
        Quantité d’eau prelevée, toutes sources confondues
      </span>

      <div className="my-8">
        <div className="flex items-center gap-2 my-2">
          <span>Clé de lecture</span>
          <div className="w-8 h-6 bg-[#009EE0]" />
          <span>Année sélectionnée</span>
          <div
            className="w-8 h-6  border border-[#B3E2F6]"
            style={{ backgroundColor: "rgba(179, 226, 246, 0.18)" }}
          />
          <span>Année précédente</span>
        </div>
      </div>

      <div className="flex gap-8">
        <HalfCircleChart
          width={400}
          height={200}
          value={currentDataPoint[0].VOLUME_PRELEVE}
          min={0}
          max={200000}
          color="blue"
        />
        <HalfCircleChart
          width={400}
          height={200}
          value={lastYearDataPoint[0].VOLUME_PRELEVE}
          min={0}
          max={200000}
          color="blue"
        />
      </div>
    </>
  );
};
