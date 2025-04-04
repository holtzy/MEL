import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type YearSelectButtonProps = {
  setYear: (y: number) => void;
  year: number;
  startYear?: number;
};

export const YearSelectButton = ({
  setYear,
  year,
  startYear = 1990,
}: YearSelectButtonProps) => {
  const currentYear = new Date().getFullYear();
  const allYears = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  );

  return (
    <Select onValueChange={(v) => setYear(Number(v))} value={String(year)}>
      <SelectTrigger style={{ color: "#212121" }}>
        <SelectValue>{year - 1 + " - " + year}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {allYears.map((year, i) => {
          return (
            <SelectItem key={i} value={String(year)}>
              {year - 1 + " - " + year}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
