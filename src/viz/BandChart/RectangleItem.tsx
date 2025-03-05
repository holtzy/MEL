import { useSpring, animated } from "@react-spring/web";

type CircleItemProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const RectangleItem = (props: CircleItemProps) => {
  const { x, y, width, height } = props;

  const springProps = useSpring({
    to: {
      x,
      y,
    },
  });

  return (
    <animated.rect
      x={springProps.x}
      y={springProps.y}
      width={width}
      height={height}
      fill={"#009EE0"}
    />
  );
};
