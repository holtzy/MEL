import { useEffect, useRef, useState } from "react";
import { Button } from "../..//components/ui/button";
import { Barplot } from "@/viz/BarChart/Barplot";
import { RechargeObservation } from "@/data/types";
import { Pattern } from "@/components/Pattern";
import { InformationPopover } from "@/components/InformationPopover";
import { YearTypePill } from "@/components/YearTypePill";
import { YearSelectButton } from "@/components/YearSelectButton";
import { DownloadButton } from "@/components/DownloadButton";

const URL =
  "https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/Météo_des_nappes/FeatureServer/7/query?where=1%3D1&outFields=*&returnGeometry=false&f=json";

export const RechargeSection = ({ width }: { width: number }) => {
  const contentRef = useRef(null);

  const [year, setYear] = useState(2024);
  const [zone, setZone] = useState("Craie");

  const [data, setData] = useState<RechargeObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch only the temperature dataset
        const response = await fetch(URL);

        if (!response.ok) throw new Error("Failed to fetch data");

        // Convert response to JSON
        const json = await response.json();

        // Extract and clean data
        setData(
          json.features.map(
            (f: { attributes: RechargeObservation }) => f.attributes
          )
        );
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // We need to use "geological years" here: from sept to August
  const filteredData = data.filter((d) => {
    const date = new Date(d.DATE_OBSERVATION);
    const isCurrentYear = date.getFullYear() === year && date.getMonth() <= 7;
    const isEndOfPreviousYear =
      date.getFullYear() === year - 1 && date.getMonth() > 7;
    return (isCurrentYear || isEndOfPreviousYear) && d.ENDROIT === zone;
  });

  const yearType = filteredData[0]?.TYPE_ANNEE;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Quel cumul de recharge ?</h2>
      <span className="subtitle">
        L'évolution des recharges sur les 12 derniers mois
      </span>

      <div className="flex items-center gap-2 mt-6">
        <span>Selectionnez l'année: </span>
        <YearSelectButton setYear={setYear} year={year} />
        <YearTypePill yearType={yearType} />
      </div>

      <div className="flex items-center gap-2 mt-4">
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

      <div className="flex items-center gap-2 mt-6">
        <span>Clé de lecture:</span>
        <div className="w-8 h-6 bg-[#009EE0]" />
        <span className="mr-4">Année sélectionnée</span>
        <div className="w-8 h-6 border border-black">
          <svg>
            <Pattern />
            <rect
              x={0}
              width={31}
              y={0}
              height={23}
              fill="url(#diagonalLines)"
            />
          </svg>
        </div>
        <span>Normale</span> <InformationPopover content={<p>TODO</p>} />
      </div>

      <div ref={contentRef}>
        <Barplot
          data={filteredData}
          width={width}
          height={400}
          annotation={
            zone === "Carbonifère" ? (
              <p>
                Pour la nappe du Carbonifère, la recharge via les pluies est
                nulle sur le territoire français.
              </p>
            ) : undefined
          }
        />
      </div>

      <div
        className="flex justify-between items-center text-sm mt-8"
        style={{ fontSize: 11, color: "#212121" }}
      >
        <p>Source et notes: insérer des choses ici.</p>
        <DownloadButton contentRef={contentRef} />
      </div>
    </>
  );
};
