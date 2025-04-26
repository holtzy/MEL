export const CrossesPattern = () => {
  return (
    <svg>
      <defs>
        <pattern
          id="crosses"
          patternUnits="userSpaceOnUse"
          width="10"
          height="10"
          // patternTransform="rotate(25)"
        >
          <line
            x1="0"
            y1="0"
            x2="10"
            y2="10"
            stroke="black"
            strokeWidth=".5"
            strokeDasharray="4 8"
            opacity={0.7}
          />
          <line
            x1="0"
            y1="10"
            x2="10"
            y2="0"
            stroke="black"
            strokeWidth=".5"
            strokeDasharray="4 8"
            opacity={0.7}
          />
        </pattern>
      </defs>
    </svg>
  );
};
