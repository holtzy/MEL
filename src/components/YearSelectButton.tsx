import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

type YearSelectButtonProps = {
  setYear: (y: number) => void;
  year: number;
};

export const YearSelectButton = ({ setYear, year }: YearSelectButtonProps) => {
  return (
    <Select onValueChange={(v) => setYear(Number(v))} value={String(year)}>
      <SelectTrigger style={{ color: "#212121" }}>
        <SelectValue>{year - 1 + " - " + year}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {YEARS.map((year, i) => {
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
