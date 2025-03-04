import { Barplot } from "./viz/Barplot";
import { data } from "./data/data";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Button } from "./components/ui/button";

const YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

function App() {
  const [year, setYear] = useState(2024);
  const [zone, setZone] = useState("Craie");

  return (
    <>
      <h2>Quel cumul de recharge ?</h2>
      <span className="subtitle">
        L'évolution des recharges sur les 12 derniers mois
      </span>

      <div className="flex items-center gap-2 my-2">
        <span>Selectionnez l'année: </span>
        <Select onValueChange={(v) => setYear(Number(v))}>
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
        <span className="text-sm text-slate-600">Année humide</span>
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

      <Barplot data={data} width={700} height={400} />
    </>
  );
}

export default App;
