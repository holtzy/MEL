import { HalfCircleChart } from "@/viz/HalfCircle/HalfCircleChart";

export const PrelevementSection = () => {
  // const filteredData = niveauxData.features
  //   .filter((d) => {
  //     const date = new Date(d.attributes.DATE_OBSERVATION);
  //     return date.getFullYear() === year;
  //   })
  //   .map((d) => ({ ...d.attributes }));

  return (
    <>
      <h2>Et les prélèvements dans tout ça ?</h2>
      <span className="subtitle">
        Quantité d’eau prelevée, toutes sources confondues
      </span>

      <div className="my-8">
        <div className="flex items-center gap-2 my-2">
          <span>Clé de lecture</span>
          <div className="w-8 h-6 bg-[#009EE0]" />
          <span>Année sélectionnée</span>
          <div
            className="w-8 h-6  border border-[#B3E2F6]"
            style={{ backgroundColor: "rgba(179, 226, 246, 0.18)" }}
          />
          <span>Année précédente</span>
        </div>
      </div>

      <HalfCircleChart
        width={400}
        height={200}
        value={40}
        min={0}
        max={500}
        color="blue"
      />
    </>
  );
};
