import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

type MonthSelectButtonProps = {
  setMonth: (m: number) => void;
  month: number; // Expected to be 1-12
};

export const MonthSelectButton = ({
  setMonth,
  month,
}: MonthSelectButtonProps) => {
  return (
    <Select onValueChange={(v) => setMonth(Number(v))} value={String(month)}>
      <SelectTrigger style={{ color: "#212121" }}>
        <SelectValue>{MONTHS[month - 1]}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {MONTHS.map((name, index) => (
          <SelectItem key={index} value={String(index + 1)}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
