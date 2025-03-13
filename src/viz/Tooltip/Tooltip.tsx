import { ReactNode } from "react";

// Information needed to build the tooltip
export type InteractionData = {
  xPos: number; // data point coord
  yPos: number; // data point coord
  tooltipYPos: number;
  title: string;
  text: ReactNode;
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
        top: interactionData.tooltipYPos,
        pointerEvents: "none",
      }}
    >
      <span className="text-bold block">{interactionData.title}</span>
      <div className="text-normal block">{interactionData.text}</div>
    </div>
  );
};

export const TooltipConnectionLine = ({ interactionData }: TooltipProps) => {
  if (!interactionData) {
    return null;
  }

  return (
    <>
      <line
        x1={interactionData.xPos}
        x2={interactionData.xPos}
        y1={interactionData.tooltipYPos}
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
