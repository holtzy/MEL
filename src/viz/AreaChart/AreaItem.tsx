import { useSpring, animated } from "@react-spring/web";

type AreaItemProps = {
  path: string;
  areaColor: string;
  areaOpacity: number;
};

export const AreaItem = (props: AreaItemProps) => {
  const { path, areaColor, areaOpacity } = props;

  const springProps = useSpring({
    to: {
      path,
    },
  });

  return (
    <animated.path
      d={springProps.path}
      opacity={areaOpacity}
      fill={areaColor}
    />
  );
};
