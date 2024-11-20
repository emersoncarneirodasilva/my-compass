import { Defs, RadialGradient, Stop, Circle } from "react-native-svg";
import { useTheme } from "../contexts/ThemeContext";

interface CompassGradientsProps {
  center: number;
  windRoseRadius: number;
}

export const CompassGradients = ({
  center,
  windRoseRadius,
}: CompassGradientsProps) => {
  const { currentColors } = useTheme();

  return (
    <>
      <Defs>
        <RadialGradient id="compassGradient" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={currentColors.GRADIENT_START} />
          <Stop offset="80%" stopColor={currentColors.GRADIENT_MID} />
          <Stop offset="100%" stopColor={currentColors.GRADIENT_END} />
        </RadialGradient>
        <RadialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={currentColors.CENTER_START} />
          <Stop offset="100%" stopColor={currentColors.CENTER_END} />
        </RadialGradient>
        <RadialGradient id="innerCenterGradient" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={currentColors.INNER_CENTER_START} />
          <Stop offset="100%" stopColor={currentColors.INNER_CENTER_END} />
        </RadialGradient>
      </Defs>

      <Circle
        cx={center}
        cy={center}
        r={center - 5}
        stroke={currentColors.PRIMARY_BROWN}
        strokeWidth="3"
        fill="url(#compassGradient)"
      />

      <Circle
        cx={center}
        cy={center}
        r={windRoseRadius}
        fill="url(#compassGradient)"
        stroke={currentColors.PRIMARY_BROWN}
        strokeWidth="2"
      />
      <Circle
        cx={center}
        cy={center}
        r={windRoseRadius * 0.8}
        stroke={currentColors.PRIMARY_BROWN}
        strokeWidth="0.5"
        fill="none"
      />
      <Circle
        cx={center}
        cy={center}
        r={windRoseRadius * 0.6}
        stroke={currentColors.PRIMARY_BROWN}
        strokeWidth="0.5"
        fill="none"
      />
      <Circle
        cx={center}
        cy={center}
        r={windRoseRadius * 0.4}
        stroke={currentColors.PRIMARY_BROWN}
        strokeWidth="0.5"
        fill="none"
      />
    </>
  );
};
