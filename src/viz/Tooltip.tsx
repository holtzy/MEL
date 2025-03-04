import "./tooltip.css";

// Information needed to build the tooltip
export type InteractionData = {
  xPos: number;
  yPos: number;
  title: string;
  text: string;
  category: string;
};

type TooltipProps = {
  interactionData: InteractionData | null;
};

export const Tooltip = ({ interactionData }: TooltipProps) => {
  if (!interactionData) {
    return null;
  }

  return (
    <div
      className="absolute bg-button-background px-4 py-3 rounded-2xl border border-black/60"
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos,
      }}
    >
      <span className="text-bold block">{interactionData.title}</span>
      <span className="text-normal block">{interactionData.text}</span>
    </div>
  );
};
