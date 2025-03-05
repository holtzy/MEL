import { useSpring, animated } from "@react-spring/web";

type CircleItemProps = {
  cx: number;
  cy: number;
};

export const CircleItem = (props: CircleItemProps) => {
  const { cx, cy } = props;

  const springProps = useSpring({
    to: {
      cx,
      cy,
    },
  });

  return (
    <animated.circle
      cx={springProps.cx}
      cy={springProps.cy}
      r={6}
      fill={"#009EE0"}
    />
  );
};
