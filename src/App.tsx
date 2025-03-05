import { MeteoSection } from "./sections/meteo/MeteoSection";
import { NiveauxSection } from "./sections/niveaux/NiveauxSection";
import { RechargeSection } from "./sections/recharge/RechargeSection";

function App() {
  return (
    <>
      <RechargeSection />

      <div className="my-40" />

      <MeteoSection />

      <div className="my-40" />

      <NiveauxSection />
    </>
  );
}

export default App;
