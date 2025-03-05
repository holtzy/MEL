import { Barplot } from "../..//viz/Barplot";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../..//components/ui/select";
import { Button } from "../..//components/ui/button";
import { dataRecharge } from "../..//data/recharge";

const YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

export const MeteoSection = () => {
  const [year, setYear] = useState(2024);

  const filteredData = dataRecharge.features
    .filter((d) => {
      const date = new Date(d.attributes.DATE_OBSERVATION);
      return date.getFullYear() === year;
    })
    .map((d) => ({ ...d.attributes }));

  const yearType = filteredData[0].TYPE_ANNEE;

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

      <Barplot data={filteredData} width={700} height={400} />
    </>
  );
};
