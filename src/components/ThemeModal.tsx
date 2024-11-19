import { Modal, Pressable, View, Text } from "react-native";
import { THEME_CONFIG } from "../constants/themeConstants";
import { ThemeKey } from "../types/compass";
import { useStyles } from "../hooks/useStyles";
import OptionButton from "./OptionButton";

interface ThemeModalProps {
  visible: boolean;
  onClose: () => void;
  onThemeSelect: (option: number) => void;
}

export const ThemeModal = ({
  visible,
  onClose,
  onThemeSelect,
}: ThemeModalProps) => {
  const styles = useStyles();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Opções de Tema</Text>
          <View style={styles.optionsContainer}>
            {Object.entries(THEME_CONFIG.themeNames).map(
              ([key, name], index) => (
                <OptionButton
                  key={key}
                  title={name}
                  onPress={() => onThemeSelect(index + 1)}
                  imageSource={THEME_CONFIG.buttonImages[key as ThemeKey]}
                />
              )
            )}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};
