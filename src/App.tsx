import { MeteoSection } from "./sections/meteo/MeteoSection";
import { NiveauxSection } from "./sections/niveaux/NiveauxSection";
import { PrelevementSection } from "./sections/prelevement/PrelevementSection";
import { RechargeSection } from "./sections/recharge/RechargeSection";

function App() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("section");

  if (name === "recharge") return <RechargeSection />; // http://localhost:5173/MEL/?section=recharge
  if (name === "meteo") return <MeteoSection />;
  if (name === "niveaux") return <NiveauxSection />;
  if (name === "prelevement") return <PrelevementSection />;
}

export default App;
