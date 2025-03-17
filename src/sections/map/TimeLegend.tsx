export const TimeLegend = () => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="h-7 w-7 border rounded-full text-sm flex items-center justify-center"
        style={{ backgroundColor: "#F7F5F0" }}
      >
        ▶
      </div>
      <span>1990</span>
      <div className="h-2 w-[800px] bg-[#F7F5F0]"></div>
      <span>2024</span>
    </div>
  );
};
