import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { niveauxData } from "@/data/niveaux";
import { AreaChart } from "@/viz/AreaChart/AreaChart";

const YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

export const NiveauxSection = () => {
  const [year, setYear] = useState(2024);

  const filteredData = niveauxData.features
    .filter((d) => {
      const date = new Date(d.attributes.DATE_OBSERVATION);
      return date.getFullYear() === year;
    })
    .map((d) => ({ ...d.attributes }));

  const filteredDataPreviousYear = niveauxData.features
    .filter((d) => {
      const date = new Date(d.attributes.DATE_OBSERVATION);
      return date.getFullYear() === year - 1;
    })
    .map((d) => ({ ...d.attributes }));

  const yearType = filteredData[0].TYPE_ANNEE;

  return (
    <>
      <h2>Tendance des niveaux des eaux</h2>
      <span className="subtitle">
        L’évolution des réserves d’eaux sur les 12 derniers mois
      </span>

      <div className="flex items-center gap-2 my-2">
        <span>Selectionnez l'année: </span>
        <Select onValueChange={(v) => setYear(Number(v))} value={String(year)}>
          <SelectTrigger>
            <SelectValue>{year}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {YEARS.map((year, i) => {
              return (
                <SelectItem key={i} value={String(year)}>
                  {year}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <span className="text-sm text-slate-600">{"Année " + yearType}</span>
      </div>

      <div className="flex items-center gap-2 my-2">
        <span>Clé de lecture</span>
        <p>TODO</p>
      </div>

      <span>Nappe de la Craie</span>
      <AreaChart
        data={filteredData.filter((d) => d.ENDROIT === "Craie")}
        previousYearData={filteredDataPreviousYear.filter(
          (d) => d.ENDROIT === "Craie"
        )}
        width={700}
        height={300}
        min={15}
        max={20}
      />
      <span>Rivière Lys</span>
      <AreaChart
        data={filteredData.filter((d) => d.ENDROIT === "Lys")}
        previousYearData={filteredDataPreviousYear.filter(
          (d) => d.ENDROIT === "Craie"
        )}
        width={700}
        height={300}
        min={0}
        max={40} // TODO
      />
      <span>Nappe du Carbonifère</span>
      <AreaChart
        data={filteredData.filter((d) => d.ENDROIT === "Carbonifère")}
        previousYearData={filteredDataPreviousYear.filter(
          (d) => d.ENDROIT === "Craie"
        )}
        width={700}
        height={300}
        min={-70}
        max={-50}
      />
    </>
  );
};
