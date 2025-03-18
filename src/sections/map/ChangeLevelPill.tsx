import { changeScale } from "./utils";

export const ChangeLevelPill = ({ levelName }: { levelName: string }) => {
  return (
    <div
      className="h-6 w-6 border rounded-full text-md flex items-center justify-center"
      style={{ backgroundColor: "#F7F5F0" }}
    >
      {changeScale(levelName)}
    </div>
  );
};
