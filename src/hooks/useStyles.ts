import { StyleSheet } from "react-native";
import { COMPASS_SIZE } from "../constants/compassConstants";
import { useTheme } from "../contexts/ThemeContext";

export const useStyles = () => {
  const { currentColors } = useTheme();

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
      marginBottom: 20,
      color: currentColors.PRIMARY_COLOR,
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
      color: currentColors.PRIMARY_COLOR,
    },
    menuButton: {
      position: "absolute",
      top: 40,
      right: 20,
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      elevation: 5,
      zIndex: 1000,
    },
    menuButtonText: {
      fontSize: 24,
      color: "#333",
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      shadowColor: "#000",
      backgroundColor: "#ffffff",
      elevation: 5,
    },
    modalTitle: {
      fontFamily: "MeowScript",
      fontSize: 32,
      marginBottom: 20,
    },
    optionsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 20,
      maxWidth: "80%",
    },
    optionButtonContainer: {
      width: 80,
      height: 80,
      margin: 5,
      borderRadius: 40,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    optionButton: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    optionButtonImage: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    optionButtonOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      justifyContent: "center",
      alignItems: "center",
    },
    optionButtonText: {
      fontSize: 24,
      fontFamily: "MeowScript",
      color: "white",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 3,
    },
  });
};
