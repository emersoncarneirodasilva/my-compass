import { StyleSheet } from "react-native";
import { COLORS, COMPASS_SIZE } from "../constants/compassConstants";

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    title: {
      textAlign: "center",
      fontSize: 56,
      fontFamily: "MeowScript",
      marginBottom: 50,
      color: COLORS.PRIMARY_BROWN,
    },
    compassContainer: {
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      width: COMPASS_SIZE,
      height: COMPASS_SIZE,
    },
    compass: {
      position: "absolute",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
    },
    degrees: {
      fontFamily: "serif",
      fontWeight: "bold",
      fontSize: 32,
      marginTop: 20,
      color: COLORS.PRIMARY_BROWN,
    },
  });
};
