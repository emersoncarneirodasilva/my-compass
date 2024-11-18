import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { COLORS } from "../constants/compassConstants";

interface CompassNeedleProps {
  center: number;
  needleLength: number;
}

export const CompassNeedle: React.FC<CompassNeedleProps> = ({
  center,
  needleLength,
}) => {
  const baseWidth = 16;
  const tipWidth = 1;
  const midPoint = needleLength * 0.3;

  return (
    <Svg
      width={center * 2}
      height={center * 2}
      style={{ position: "absolute", zIndex: 1 }}
    >
      {/* North (Red) Needle */}
      <Path
        d={`
          M ${center - baseWidth / 2} ${center}
          L ${center - baseWidth / 3} ${center - midPoint}
          Q ${center - tipWidth} ${center - needleLength * 0.7}
            ${center} ${center - needleLength}
          Q ${center + tipWidth} ${center - needleLength * 0.7}
            ${center + baseWidth / 3} ${center - midPoint}
          L ${center + baseWidth / 2} ${center}
          Z
        `}
        fill={COLORS.NORTH_RED}
        stroke={COLORS.NORTH_DARK_RED}
        strokeWidth="1"
      />

      {/* South (Blue) Needle */}
      <Path
        d={`
          M ${center - baseWidth / 2} ${center}
          L ${center - baseWidth / 3} ${center + midPoint}
          Q ${center - tipWidth} ${center + needleLength * 0.7}
            ${center} ${center + needleLength}
          Q ${center + tipWidth} ${center + needleLength * 0.7}
            ${center + baseWidth / 3} ${center + midPoint}
          L ${center + baseWidth / 2} ${center}
          Z
        `}
        fill={COLORS.SOUTH_BLUE}
        stroke={COLORS.SOUTH_DARK_BLUE}
        strokeWidth="1"
      />

      {/* Decorative Center */}
      <Circle
        cx={center}
        cy={center}
        r={12}
        fill="url(#centerGradient)"
        stroke={COLORS.PRIMARY_BROWN}
        strokeWidth="1"
      />
      <Circle
        cx={center}
        cy={center}
        r={8}
        fill="url(#innerCenterGradient)"
        stroke={COLORS.PRIMARY_BROWN}
        strokeWidth="0.5"
      />
      <Circle cx={center} cy={center} r={3} fill={COLORS.CENTER_GRAY} />
    </Svg>
  );
};
