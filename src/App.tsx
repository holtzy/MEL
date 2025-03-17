import { useRef } from "react";
import { MapSection } from "./sections/map/MapSection";
import { MeteoSection } from "./sections/meteo/MeteoSection";
import { NiveauxSection } from "./sections/niveaux/NiveauxSection";
import { PrelevementSection } from "./sections/prelevement/PrelevementSection";
import { QuizzSection } from "./sections/quizz/page";
import { RechargeSection } from "./sections/recharge/RechargeSection";
import { useDimensions } from "./lib/use-dimensions";
import { LegendSection } from "./sections/legend/LegendSection";

function App() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const params = new URLSearchParams(window.location.search);
  const name = params.get("section");

  const sectionSize = useDimensions(sectionRef);

  if (!name) {
    return (
      <>
        <a href="http://localhost:5173/MEL/?section=recharge">recharge</a>
        <br />
        <a href="http://localhost:5173/MEL/?section=meteo">meteo</a>
        <br />
        <a href="http://localhost:5173/MEL/?section=niveaux">niveaux</a>
        <br />
        <a href="http://localhost:5173/MEL/?section=prelevement">prelevement</a>
        <br />
        <a href="http://localhost:5173/MEL/?section=quizz">quizz</a>
        <br />
        <a href="http://localhost:5173/MEL/?section=map">map</a>
        <br />
        <a href="http://localhost:5173/MEL/?section=legend">legend</a>
      </>
    );
  }

  return (
    <div className="w-full" ref={sectionRef}>
      {name === "recharge" && <RechargeSection width={sectionSize.width} />}
      {name === "meteo" && <MeteoSection width={sectionSize.width} />}
      {name === "niveaux" && <NiveauxSection width={sectionSize.width} />}
      {name === "prelevement" && (
        <PrelevementSection width={sectionSize.width} />
      )}
      {name === "quizz" && <QuizzSection width={sectionSize.width} />}
      {name === "map" && <MapSection />}
      {name === "legend" && <LegendSection />}
    </div>
  );
}

export default App;
