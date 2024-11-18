import { useState, useEffect } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import MagVar from "magvar";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  magneticDeclination: number;
}

export const useLocation = (): LocationState => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [magneticDeclination, setMagneticDeclination] = useState<number>(0);

  useEffect(() => {
    const fetchLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permissão Negada",
          "Ative a permissão de localização nas configurações."
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      try {
        const declination = MagVar.get(latitude, longitude);
        setMagneticDeclination(declination);
      } catch (error) {
        console.error("Erro ao calcular declinação magnética:", error);
        setMagneticDeclination(0);
      }
    }
  }, [latitude, longitude]);

  return { latitude, longitude, magneticDeclination };
};
