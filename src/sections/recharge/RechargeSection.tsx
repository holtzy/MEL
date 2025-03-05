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

export const RechargeSection = () => {
  const [year, setYear] = useState(2024);
  const [zone, setZone] = useState("Craie");

  const filteredData = dataRecharge.features
    .filter((d) => {
      const date = new Date(d.attributes.DATE_OBSERVATION);
      return date.getFullYear() === year && d.attributes.ENDROIT === zone;
    })
    .map((d) => ({ ...d.attributes }));

  const yearType = filteredData[0].TYPE_ANNEE;

  return (
    <>
      <h2>Quel cumul de recharge ?</h2>
      <span className="subtitle">
        L'évolution des recharges sur les 12 derniers mois
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
        <span>Selectionnez la source: </span>
        <Button
          onClick={() => {
            setZone("Lys");
          }}
          variant={zone === "Lys" ? "default" : "outline"}
        >
          Lys
        </Button>
        <Button
          onClick={() => {
            setZone("Craie");
          }}
          variant={zone === "Craie" ? "default" : "outline"}
        >
          Craie
        </Button>
        <Button
          onClick={() => {
            setZone("Carbonifère");
          }}
          variant={zone === "Carbonifère" ? "default" : "outline"}
        >
          Carbonifère
        </Button>
      </div>

      <Barplot data={filteredData} width={700} height={400} />
    </>
  );
};
