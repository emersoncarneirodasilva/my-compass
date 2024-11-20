import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import { ThemeKey } from "../types/compass";

interface ThemeContextData {
  selectedTheme: ThemeKey;
  modalVisible: boolean;
  currentColors: Record<string, string>;
  setSelectedTheme: (theme: ThemeKey) => void;
  setModalVisible: (visible: boolean) => void;
  handleThemeSelect: (option: number) => void;
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

const THEMES = {
  option1: {
    PRIMARY_COLOR: "#8B4513",
    ACTIVE_COLOR: "#CD853F",
    GRADIENT_START: "#FFF8DC",
    GRADIENT_MID: "#FFF8DC",
    GRADIENT_END: "#DEB887",
    CENTER_START: "#FFE4B5",
    CENTER_END: "#DEB887",
    INNER_CENTER_START: "#FFF8DC",
    INNER_CENTER_END: "#DEB887",
    CENTER_GRAY: "#4A4A4A",
    NORTH_DARK_RED: "#660000",
    NORTH_RED: "#8B0000",
    SOUTH_BLUE: "#00008B",
    SOUTH_DARK_BLUE: "#000066",
  },
  option2: {
    PRIMARY_COLOR: "#114F8D",
    ACTIVE_COLOR: "#4682B4",
    GRADIENT_START: "#B0E0E6",
    GRADIENT_MID: "#ADD8E6",
    GRADIENT_END: "#4682B4",
    CENTER_START: "#AFEEEE",
    CENTER_END: "#4682B4",
    INNER_CENTER_START: "#B0E0E6",
    INNER_CENTER_END: "#4682B4",
    CENTER_GRAY: "#708090",
    NORTH_DARK_RED: "#5F2120",
    NORTH_RED: "#8A3324",
    SOUTH_BLUE: "#4682B4",
    SOUTH_DARK_BLUE: "#1C4F63",
  },
  option3: {
    PRIMARY_COLOR: "#233D2B",
    ACTIVE_COLOR: "#225c32",
    GRADIENT_START: "#95AA8E",
    GRADIENT_MID: "#E8D6C0",
    GRADIENT_END: "#344B3B",
    CENTER_START: "#DFC8A9",
    CENTER_END: "#233D2B",
    INNER_CENTER_START: "#B5C1A8",
    INNER_CENTER_END: "#2F4737",
    CENTER_GRAY: "#3B4B40",
    NORTH_DARK_RED: "#582A24",
    NORTH_RED: "#7D3B2E",
    SOUTH_BLUE: "#3D7699",
    SOUTH_DARK_BLUE: "#1A4758",
  },
  option4: {
    PRIMARY_COLOR: "#6A7D85",
    ACTIVE_COLOR: "#4F636C",
    GRADIENT_START: "#1A252F",
    GRADIENT_MID: "#2A3C47",
    GRADIENT_END: "#3A4B56",
    CENTER_START: "#2A353E",
    CENTER_END: "#1F2B32",
    INNER_CENTER_START: "#1A2126",
    INNER_CENTER_END: "#141C21",
    CENTER_GRAY: "#4C5B64",
    NORTH_DARK_RED: "#4C2F30",
    NORTH_RED: "#5C3E40",
    SOUTH_BLUE: "#2C4D61",
    SOUTH_DARK_BLUE: "#1A3542",
  },
};

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>("option1");
  const [modalVisible, setModalVisible] = useState(false);

  const handleThemeSelect = (option: number) => {
    const newTheme = `option${option}` as ThemeKey;
    setSelectedTheme(newTheme);
    setModalVisible(false);
  };

  const currentColors = THEMES[selectedTheme];

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        modalVisible,
        setModalVisible,
        currentColors,
        handleThemeSelect,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
