export const Pattern = () => {
  return (
    <defs>
      <pattern
        id="diagonalLines"
        patternUnits="userSpaceOnUse"
        width="10"
        height="10"
        patternTransform="rotate(25)"
      >
        <line
          x1="0"
          y1="6"
          x2="0"
          y2="10"
          stroke="black"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity={0.7}
        />
        <line
          x1="4"
          y1="0"
          x2="10"
          y2="0"
          stroke="black"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity={0.7}
        />
      </pattern>
    </defs>
  );
};
