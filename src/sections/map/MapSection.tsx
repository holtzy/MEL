import { useEffect, useState } from "react";
import { MapObservation } from "@/data/types";
import { MapRenderer } from "./MapRenderer";
import { max, min } from "d3";

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

export const MapSection = () => {
  const [data, setData] = useState<MapObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(2024, 11, 31)
  );

  const filteredData = filterData(data, selectedDate);

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

  const startDate = min(data.map((d) => d.DATE_OBSERVATION));
  const endDate = max(data.map((d) => d.DATE_OBSERVATION));

  return (
    <>
      <div className="w-full">
        <MapRenderer data={filteredData} />
      </div>
    </>
  );
};
