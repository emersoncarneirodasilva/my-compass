import { Dimensions } from "react-native";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const COMPASS_SIZE = WINDOW_WIDTH * 0.8;
export const CENTER = COMPASS_SIZE / 2;
export const NEEDLE_LENGTH = CENTER - 40;
export const WIND_ROSE_RADIUS = CENTER - 30;
