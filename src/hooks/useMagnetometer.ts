import { useState, useEffect } from "react";
import { Magnetometer } from "expo-sensors";
import { calculateAngle } from "../utils/compassUtils";
import { useLocation } from "./useLocation";

export const useMagnetometer = (magneticDeclination: number) => {
  const [degree, setDegree] = useState(0);
  const { latitude } = useLocation();

  useEffect(() => {
    let subscription: { remove: () => void };

    const subscribe = () => {
      subscription = Magnetometer.addListener(
        ({ x, y }: { x: number; y: number }) => {
          if (magneticDeclination !== null) {
            const correctedAngle = calculateAngle(
              x,
              y,
              magneticDeclination,
              latitude
            );
            setDegree(correctedAngle);
          }
        }
      );

      Magnetometer.setUpdateInterval(100);
    };

    subscribe();

    return () => {
      subscription?.remove();
    };
  }, [magneticDeclination]);

  return degree;
};
