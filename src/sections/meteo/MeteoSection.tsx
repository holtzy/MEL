import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../..//components/ui/select";
import { MeteoObservation } from "@/data/types";
import { LineChart } from "@/viz/LineChart/LineChart";
import { BandChart } from "@/viz/BandChart/BandChart";

const YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

const TEMPERATURE_URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/4/query?where=INDICATEUR%3D%27Température%27&outFields=*&returnGeometry=false&f=json";
const PRECIPITATION_URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/M%C3%A9t%C3%A9o_des_nappes/FeatureServer/4/query?where=INDICATEUR%3D%27Précipitations%27&outFields=*&returnGeometry=false&f=json";
const HUMIDITE_URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/M%C3%A9t%C3%A9o_des_nappes/FeatureServer/4/query?where=INDICATEUR%3D%27Humidit%C3%A9%20sol%27&outFields=*&returnGeometry=false&f=json";
const EVAPOTRANSPIRATION_URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/M%C3%A9t%C3%A9o_des_nappes/FeatureServer/4/query?where=INDICATEUR%3D%27%C3%89vapotranspiration%27&outFields=*&returnGeometry=false&f=json";

const filterData = (data: MeteoObservation[], year: number) => {
  return data.filter((d) => {
    const date = new Date(d.DATE_OBSERVATION);
    const isSelectedYear = date.getFullYear() === year && date.getMonth() <= 7;
    const isEndOfPreviousYear =
      date.getFullYear() === year - 1 && date.getMonth() > 7;
    return isSelectedYear || isEndOfPreviousYear;
  });
};

export const MeteoSection = () => {
  const [year, setYear] = useState(2024);

  const [dataTemperature, setDataTemperature] = useState<MeteoObservation[]>(
    []
  );
  const [dataPrecipitation, setDataPrecipitation] = useState<
    MeteoObservation[]
  >([]);
  const [dataHumidite, setDataHumidite] = useState<MeteoObservation[]>([]);
  const [dataEvapotranspiration, setDataEvapotranspiration] = useState<
    MeteoObservation[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch all datasets in parallel
        const responses = await Promise.all([
          fetch(TEMPERATURE_URL),
          fetch(PRECIPITATION_URL),
          fetch(HUMIDITE_URL),
          fetch(EVAPOTRANSPIRATION_URL),
        ]);

        // Check if any request failed
        responses.forEach((response) => {
          if (!response.ok) throw new Error("Failed to fetch data");
        });

        // Convert all responses to JSON
        const jsonData = await Promise.all(responses.map((res) => res.json()));

        // Extract and clean data
        setDataTemperature(
          jsonData[0].features.map(
            (f: { attributes: MeteoObservation }) => f.attributes
          )
        );
        setDataPrecipitation(
          jsonData[1].features.map(
            (f: { attributes: MeteoObservation }) => f.attributes
          )
        );
        setDataHumidite(
          jsonData[2].features.map(
            (f: { attributes: MeteoObservation }) => f.attributes
          )
        );
        setDataEvapotranspiration(
          jsonData[3].features.map(
            (f: { attributes: MeteoObservation }) => f.attributes
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredDataTemperature = filterData(dataTemperature, year);
  const filteredDataHumidity = filterData(dataHumidite, year);
  const filteredDataEvapotranspiration = filterData(
    dataEvapotranspiration,
    year
  );
  const filteredDataPrecipitation = filterData(dataPrecipitation, year);

  const yearType = filteredDataTemperature[0].TYPE_ANNEE;

  return (
    <>
      <h2>Le rôle de la météo</h2>
      <span className="subtitle">
        Valeurs de l'évapotranspiration, température, précipitations et
        l’humidité du sol au cours des 12 derniers mois
      </span>

      <div className="flex items-center gap-2 my-2">
        <span>Selectionnez l'année: </span>
        <Select onValueChange={(v) => setYear(Number(v))} value={String(year)}>
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
        <span className="text-sm text-slate-600">{"Année " + yearType}</span>
      </div>

      <LineChart
        data={filteredDataPrecipitation}
        width={700}
        height={180}
        min={0}
        max={120}
        title={"Précipitations"}
        unit="mm"
      />
      <LineChart
        data={filteredDataTemperature}
        width={700}
        height={180}
        min={0}
        max={38}
        title={"Température"}
        unit="°C"
      />
      <LineChart
        data={filteredDataEvapotranspiration}
        width={700}
        height={180}
        min={0}
        max={160}
        title={"Evapotranspiration"}
        unit="mm"
      />
      <BandChart
        data={filteredDataHumidity}
        width={700}
        height={220} // 40 more than other charts because it has 40 px dedicated to the axis labels
        min={0}
        max={1.4}
        title={"Humidité"}
      />
    </>
  );
};
