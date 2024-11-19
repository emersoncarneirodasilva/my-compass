import {
  TouchableOpacity,
  Text,
  ImageBackground,
  ImageSourcePropType,
  View,
} from "react-native";
import { useStyles } from "../hooks/useStyles";

interface OptionButtonProps {
  title: string;
  imageSource: ImageSourcePropType | undefined;
  onPress: () => void;
}

export default function OptionButton({
  title,
  imageSource,
  onPress,
}: OptionButtonProps) {
  const styles = useStyles();

  return (
    <TouchableOpacity onPress={onPress} style={styles.optionButtonContainer}>
      <ImageBackground
        source={imageSource}
        style={styles.optionButton}
        imageStyle={styles.optionButtonImage}
      >
        <View style={styles.optionButtonOverlay}>
          <Text style={styles.optionButtonText}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
