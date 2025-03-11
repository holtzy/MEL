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
  height: number;
  width: number;
};

// Tooltip can be oriented to the top or to the bottom depending on its position
const Y_THRESHOLD_TOOLTIP = 100;
const TOOLTIP_TO_BORDER_PADDING = 100;

export const Tooltip = ({ interactionData, width, height }: TooltipProps) => {
  if (!interactionData) {
    return null;
  }

  const isTopTooltip = interactionData.yPos > Y_THRESHOLD_TOOLTIP;

  return (
    <div
      className="absolute bg-button-background px-4 py-3 rounded-2xl border border-black/60"
      style={{
        left: interactionData.xPos,
        top: isTopTooltip
          ? TOOLTIP_TO_BORDER_PADDING
          : height - TOOLTIP_TO_BORDER_PADDING,
        pointerEvents: "none",
        transform: isTopTooltip ? "translateY(-70%)" : "translateY(0)",
      }}
    >
      <span className="text-bold block">{interactionData.title}</span>
      <span className="text-normal block">{interactionData.text}</span>
    </div>
  );
};

type TooltipConnectionLineProps = {
  interactionData: InteractionData | null;
  height: number;
};

export const TooltipConnectionLine = ({
  interactionData,
  height,
}: TooltipConnectionLineProps) => {
  if (!interactionData) {
    return null;
  }

  const isTopTooltip = interactionData.yPos > Y_THRESHOLD_TOOLTIP;

  return (
    <>
      <line
        x1={interactionData.xPos}
        x2={interactionData.xPos}
        y1={
          isTopTooltip
            ? TOOLTIP_TO_BORDER_PADDING
            : height - TOOLTIP_TO_BORDER_PADDING
        }
        y2={interactionData.yPos}
        stroke="black"
        opacity={1}
        pointerEvents={"none"}
      />
      <circle
        cx={interactionData.xPos}
        cy={interactionData.yPos}
        r={5}
        stroke="black"
        fill="white"
        pointerEvents={"none"}
      />
    </>
  );
};
