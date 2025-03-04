import viteLogo from "/vite.svg";
import "./App.css";
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

function App() {
  const [year, setYear] = useState(2024);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h2>Quel cumul de recharge ?</h2>
      <p>L'évolution des recharges sur les 12 derniers mois</p>

      <div className="flex">
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
      <Barplot data={data} width={700} height={400} />
    </>
  );
}

export default App;
