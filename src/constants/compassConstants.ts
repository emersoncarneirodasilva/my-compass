import { Dimensions } from "react-native";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const COMPASS_SIZE = WINDOW_WIDTH * 0.8;
export const CENTER = COMPASS_SIZE / 2;
export const NEEDLE_LENGTH = CENTER - 40;
export const WIND_ROSE_RADIUS = CENTER - 30;

export const COLORS = {
  ACTIVE_BROWN: "#CD853F",
  CENTER_GRAY: "#4A4A4A",
  NORTH_DARK_RED: "#660000",
  NORTH_RED: "#8B0000",
  PRIMARY_BROWN: "#8B4513",
  SOUTH_BLUE: "#00008B",
  SOUTH_DARK_BLUE: "#000066",
};
