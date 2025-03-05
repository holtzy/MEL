import { MeteoSection } from "./sections/meteo/MeteoSection";
import { NiveauxSection } from "./sections/niveaux/NiveauxSection";
import { PrelevementSection } from "./sections/prelevement/PrelevementSection";
import { RechargeSection } from "./sections/recharge/RechargeSection";

function App() {
  return (
    <div className="pl-6">
      <RechargeSection />

      <div className="my-40" />

      <MeteoSection />

      <div className="my-40" />

      <NiveauxSection />

      <div className="my-40" />

      <PrelevementSection />
    </div>
  );
}

export default App;
