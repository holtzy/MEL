import { useSpring, animated } from "@react-spring/web";

type LineItemProps = {
  path: string;
  color: string;
};

export const LineItem = (props: LineItemProps) => {
  const { path, color } = props;

  const springProps = useSpring({
    to: {
      path,
    },
  });

  return (
    <animated.path
      // @ts-expect-error
      d={springProps.path}
      fill={"none"}
      stroke={color}
      strokeWidth={2}
    />
  );
};
