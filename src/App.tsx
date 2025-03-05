import { MeteoSection } from "./sections/meteo/MeteoSection";
import { NiveauxSection } from "./sections/niveaux/NiveauxSection";
import { RechargeSection } from "./sections/recharge/RechargeSection";

function App() {
  return (
    <div className="pl-6">
      <RechargeSection />

      <div className="my-40" />

      <MeteoSection />

      <div className="my-40" />

      <NiveauxSection />
    </div>
  );
}

export default App;
