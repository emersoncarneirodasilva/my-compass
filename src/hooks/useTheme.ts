import { useState } from "react";
import { ThemeKey } from "../types/compass";

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>("option1");
  const [modalVisible, setModalVisible] = useState(false);

  const handleThemeSelect = (option: number) => {
    const newTheme = `option${option}` as ThemeKey;
    setSelectedTheme(newTheme);
    setModalVisible(false);
  };

  return {
    selectedTheme,
    modalVisible,
    setModalVisible,
    handleThemeSelect,
  };
};
