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
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme">{year}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
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
