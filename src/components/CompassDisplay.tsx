import { View } from "react-native";
import Svg from "react-native-svg";
import { useStyles } from "../hooks/useStyles";
import {
  CENTER,
  COMPASS_SIZE,
  NEEDLE_LENGTH,
  WIND_ROSE_RADIUS,
} from "../constants/compassConstants";
import { CompassGradients } from "./CompassGradients";
import { CompassRose } from "./CompassRose";
import { CompassNeedle } from "./CompassNeedle";

interface CompassDisplayProps {
  degree: number;
  onCardinalPointChange: (point: string) => void;
}

export const CompassDisplay = ({
  degree,
  onCardinalPointChange,
}: CompassDisplayProps) => {
  const styles = useStyles();

  return (
    <View style={styles.compassContainer}>
      <Svg
        width={COMPASS_SIZE}
        height={COMPASS_SIZE}
        style={[styles.compass, { transform: [{ rotate: `${-degree}deg` }] }]}
      >
        <CompassGradients center={CENTER} windRoseRadius={WIND_ROSE_RADIUS} />
        <CompassRose
          center={CENTER}
          windRoseRadius={WIND_ROSE_RADIUS}
          degree={degree}
          onCardinalPointChange={onCardinalPointChange}
        />
      </Svg>
      <CompassNeedle center={CENTER} needleLength={NEEDLE_LENGTH} />
    </View>
  );
};
