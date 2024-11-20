import { useEffect, useState } from "react";
import { Vibration } from "react-native";
import { Circle, Line, Text as SvgText, G, Path } from "react-native-svg";
import { getCompassPoints, isCardinalPointActive } from "../utils/compassUtils";
import { useTheme } from "../contexts/ThemeContext";

interface CompassRoseProps {
  center: number;
  windRoseRadius: number;
  degree: number;
  onCardinalPointChange?: (point: string) => void;
}

export const CompassRose = ({
  center,
  windRoseRadius,
  degree,
  onCardinalPointChange,
}: CompassRoseProps) => {
  const [lastActivePoint, setLastActivePoint] = useState<string | null>(null);
  const { currentColors } = useTheme();

  useEffect(() => {
    const points = getCompassPoints();
    const tolerance = 5;

    const activePoint = points.find((point) =>
      isCardinalPointActive(degree, point.angle, tolerance)
    );

    if (activePoint && activePoint.label !== lastActivePoint) {
      if (onCardinalPointChange) {
        Vibration.vibrate(100);
        onCardinalPointChange(activePoint.label);
      }
      setLastActivePoint(activePoint.label);
    }
  }, [degree, onCardinalPointChange, lastActivePoint]);

  const renderWindRose = () => {
    const rays = [];

    // Decorative circles
    rays.push(
      ...[0.8, 0.6, 0.4].map((ratio) => (
        <Circle
          key={`inner-circle-${ratio}`}
          cx={center}
          cy={center}
          r={windRoseRadius * ratio}
          stroke={currentColors.PRIMARY_COLOR}
          strokeWidth="0.5"
          fill="none"
        />
      ))
    );

    // Main rays (N, S, E, W)
    for (let i = 0; i < 4; i++) {
      const angle = i * 90;
      rays.push(
        <Path
          key={`main-ray-${i}`}
          d={`
            M ${center} ${center}
            L ${center + windRoseRadius * Math.sin((angle * Math.PI) / 180)} 
              ${center - windRoseRadius * Math.cos((angle * Math.PI) / 180)}
          `}
          stroke={currentColors.PRIMARY_COLOR}
          strokeWidth="2"
        />
      );
    }

    // Secondary rays (NE, SE, SW, NW)
    for (let i = 0; i < 4; i++) {
      const angle = 45 + i * 90;
      const midPoint = windRoseRadius * 0.7;

      rays.push(
        <Path
          key={`secondary-ray-${i}`}
          d={`
            M ${center} ${center}
            L ${center + midPoint * Math.sin((angle * Math.PI) / 180)} 
              ${center - midPoint * Math.cos((angle * Math.PI) / 180)}
          `}
          stroke={currentColors.PRIMARY_COLOR}
          strokeWidth="1.5"
        />
      );
    }

    // Decorative small rays
    for (let i = 0; i < 32; i++) {
      const angle = i * 11.25;
      const innerRadius = windRoseRadius * 0.4;
      const outerRadius = windRoseRadius * 0.5;

      rays.push(
        <Path
          key={`decorative-ray-${i}`}
          d={`
            M ${center + innerRadius * Math.sin((angle * Math.PI) / 180)} 
              ${center - innerRadius * Math.cos((angle * Math.PI) / 180)}
            L ${center + outerRadius * Math.sin((angle * Math.PI) / 180)}
              ${center - outerRadius * Math.cos((angle * Math.PI) / 180)}
          `}
          stroke={currentColors.PRIMARY_COLOR}
          strokeWidth="0.5"
          opacity="0.6"
        />
      );
    }

    return rays;
  };

  const renderCompassPoints = () => {
    const points = getCompassPoints();
    const tolerance = 5;

    return points.map((point) => {
      const isActive = isCardinalPointActive(degree, point.angle, tolerance);
      const fontSize = point.label.length === 1 ? 20 : 14;
      const distance = point.label.length === 1 ? 30 : 32;

      return (
        <G
          key={point.angle}
          rotation={point.angle}
          origin={`${center}, ${center}`}
        >
          <Line
            x1={center}
            y1={40}
            x2={center}
            y2={60}
            stroke={
              isActive
                ? currentColors.ACTIVE_COLOR
                : currentColors.PRIMARY_COLOR
            }
            strokeWidth={point.label.length === 1 ? "2.5" : "1.5"}
          />
          <SvgText
            x={center}
            y={distance}
            textAnchor="middle"
            fill={
              isActive
                ? currentColors.ACTIVE_COLOR
                : currentColors.PRIMARY_COLOR
            }
            fontSize={fontSize}
            fontWeight={point.label.length === 1 ? "bold" : "normal"}
            fontFamily="serif"
          >
            {point.label}
          </SvgText>
        </G>
      );
    });
  };

  return (
    <>
      {renderWindRose()}
      {renderCompassPoints()}
    </>
  );
};
