import { useSpring, animated } from "@react-spring/web";

type BarItemProps = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export const BarItem = (props: BarItemProps) => {
  const { height, width, x, y } = props;

  const springProps = useSpring({
    to: {
      y,
      height,
    },
  });

  return (
    <animated.rect
      // @ts-expect-error
      x={x}
      y={springProps.y}
      width={width}
      height={springProps.height}
      stroke="#009EE0"
      fill="#009EE0"
      fillOpacity={1}
      opacity={1}
      strokeWidth={1}
      rx={1}
    />
  );
};
