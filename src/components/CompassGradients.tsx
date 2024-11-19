import { Defs, RadialGradient, Stop, Circle } from "react-native-svg";
import { COLORS } from "../constants/compassConstants";

interface CompassGradientsProps {
  center: number;
  windRoseRadius: number;
}

export const CompassGradients = ({
  center,
  windRoseRadius,
}: CompassGradientsProps) => {
  return (
    <>
      <Defs>
        <RadialGradient id="compassGradient" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor="#FFF8DC" />
          <Stop offset="80%" stopColor="#FFF8DC" />
          <Stop offset="100%" stopColor="#DEB887" />
        </RadialGradient>
        <RadialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor="#FFE4B5" />
          <Stop offset="100%" stopColor="#DEB887" />
        </RadialGradient>
        <RadialGradient id="innerCenterGradient" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor="#FFF8DC" />
          <Stop offset="100%" stopColor="#DEB887" />
        </RadialGradient>
      </Defs>

      <Circle
        cx={center}
        cy={center}
        r={center - 5}
        stroke={COLORS.PRIMARY_BROWN}
        strokeWidth="3"
        fill="url(#compassGradient)"
      />

      {/* Decorative circles with gradient */}
      <Circle
        cx={center}
        cy={center}
        r={windRoseRadius}
        fill="url(#compassGradient)"
        stroke={COLORS.PRIMARY_BROWN}
        strokeWidth="2"
      />
      <Circle
        cx={center}
        cy={center}
        r={windRoseRadius * 0.8}
        stroke={COLORS.PRIMARY_BROWN}
        strokeWidth="0.5"
        fill="none"
      />
      <Circle
        cx={center}
        cy={center}
        r={windRoseRadius * 0.6}
        stroke={COLORS.PRIMARY_BROWN}
        strokeWidth="0.5"
        fill="none"
      />
      <Circle
        cx={center}
        cy={center}
        r={windRoseRadius * 0.4}
        stroke={COLORS.PRIMARY_BROWN}
        strokeWidth="0.5"
        fill="none"
      />
    </>
  );
};
