import { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import Svg from "react-native-svg";
import { useLocation } from "../hooks/useLocation";
import { useMagnetometer } from "../hooks/useMagnetometer";
import { CompassRose } from "../components/CompassRose";
import { CompassNeedle } from "../components/CompassNeedle";
import { CompassGradients } from "../components/CompassGradients";
import { useStyles } from "../hooks/useStyles";
import {
  COMPASS_SIZE,
  CENTER,
  NEEDLE_LENGTH,
  WIND_ROSE_RADIUS,
} from "../constants/compassConstants";
import {
  useFonts,
  MeowScript_400Regular as MeowScript,
} from "@expo-google-fonts/meow-script";

export default function Index() {
  const [lastVibratedCardinal, setLastVibratedCardinal] = useState<
    string | null
  >(null);
  const [fontsLoaded] = useFonts({ MeowScript });
  const styles = useStyles();
  const { magneticDeclination } = useLocation();
  const degree = useMagnetometer(magneticDeclination);

  if (!fontsLoaded) {
    return null;
  }

  const handleCardinalPointChange = (point: string) => {
    if (lastVibratedCardinal !== point) {
      setLastVibratedCardinal(point);
    }
  };

  return (
    <ImageBackground
      source={require("@/src/assets/images/bgImg.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.overlay} />

      <Text style={styles.title}>My Compass</Text>

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
            onCardinalPointChange={handleCardinalPointChange}
          />
        </Svg>
        <CompassNeedle center={CENTER} needleLength={NEEDLE_LENGTH} />
      </View>

      <Text style={styles.degrees}>{Math.round(degree)}°</Text>
    </ImageBackground>
  );
}
