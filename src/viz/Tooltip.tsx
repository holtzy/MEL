import "./tooltip.css";

// Information needed to build the tooltip
export type InteractionData = {
  xPos: number;
  yPos: number;
  title: string;
  text: string;
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
      className={styles.tooltip}
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos,
      }}
    >
      {interactionData.title}
      {interactionData.text}
    </div>
  );
};
