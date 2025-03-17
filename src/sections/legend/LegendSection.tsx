import { MapLegend } from "./MapLegend";

export const LegendSection = () => {
  return (
    <>
      <h2>L'état des lieux</h2>
      <span className="subtitle">
        Niveaux d’eau dans les champs captants de la Craie et du Carbonifère,
        débits sur le cours d’eau de la Lys{" "}
      </span>

      <div className="w-full">
        <MapLegend />
      </div>
    </>
  );
};
