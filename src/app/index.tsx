import { useState } from "react";
import { ImageBackground, TouchableOpacity, View, Text } from "react-native";
import {
  useFonts,
  MeowScript_400Regular as MeowScript,
} from "@expo-google-fonts/meow-script";
import { useLocation } from "../hooks/useLocation";
import { useMagnetometer } from "../hooks/useMagnetometer";
import { useStyles } from "../hooks/useStyles";
import { THEME_CONFIG } from "../constants/themeConstants";
import { CompassDisplay } from "../components/CompassDisplay";
import { ThemeModal } from "../components/ThemeModal";
import { useTheme } from "../contexts/ThemeContext";

export default function Index() {
  const [lastVibratedCardinal, setLastVibratedCardinal] = useState<
    string | null
  >(null);
  const [fontsLoaded] = useFonts({ MeowScript });
  const { magneticDeclination } = useLocation();
  const degree = useMagnetometer(magneticDeclination);
  const styles = useStyles();
  const { modalVisible, selectedTheme, setModalVisible, handleThemeSelect } =
    useTheme();

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
      source={THEME_CONFIG.backgroundImages[selectedTheme]}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.overlay} />

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>

      <ThemeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onThemeSelect={handleThemeSelect}
      />

      <Text style={styles.title}>My Compass</Text>

      <CompassDisplay
        degree={degree}
        onCardinalPointChange={handleCardinalPointChange}
      />

      <Text style={styles.degrees}>{Math.round(degree)}°</Text>
    </ImageBackground>
  );
}
