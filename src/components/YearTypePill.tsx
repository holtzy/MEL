export const YearTypePill = ({ yearType }: { yearType: string }) => {
  return (
    <span className="flex items-center h-7 px-4 py-2 rounded-2xl border border-black text-sm text-nowrap">
      {"Année " + yearType.toLowerCase()}
    </span>
  );
};
