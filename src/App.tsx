import { MapSection } from "./sections/map/Map";
import { MeteoSection } from "./sections/meteo/MeteoSection";
import { NiveauxSection } from "./sections/niveaux/NiveauxSection";
import { PrelevementSection } from "./sections/prelevement/PrelevementSection";
import { QuizzSection } from "./sections/quizz/page";
import { RechargeSection } from "./sections/recharge/RechargeSection";

function App() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("section");

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
      </>
    );
  }

  if (name === "recharge") return <RechargeSection />; // http://localhost:5173/MEL/?section=recharge
  if (name === "meteo") return <MeteoSection />;
  if (name === "niveaux") return <NiveauxSection />;
  if (name === "prelevement") return <PrelevementSection />;
  if (name === "quizz") return <QuizzSection />;
  if (name === "map") return <MapSection />;
}

export default App;
