import { useSpring, animated } from "@react-spring/web";

type BarItemProps = {
  height: number;
  width: number;
  x: number;
  y: number;
};

type AnimatedProps = {
  y: number;
  height: number;
};

export const BarItem = (props: BarItemProps) => {
  const { height, width, x, y } = props;

  const springProps = useSpring<AnimatedProps>({
    to: {
      y,
      height,
    },
  });

  return (
    <g>
      <animated.rect
        x={x}
        y={springProps.y}
        width={width}
        height={springProps.height}
        opacity={1}
        stroke="#009EE0"
        fill="#009EE0"
        fillOpacity={1}
        strokeWidth={1}
        rx={1}
      />
    </g>
  );
};
