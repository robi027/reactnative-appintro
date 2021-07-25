//@flow
import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";
type Props = {
  onPress?: () => void,
  title: string,
  color?: string,
  fontWeight?: "normal" | "bold",
  padding?: number,
  width?: number | "100%",
};

const Button = ({
  onPress,
  color = colors.PRIMARY,
  fontWeight = "normal",
  padding = 4,
  title = "",
  width,
}: Props): React.Node => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: width }}>
      <Text
        style={{
          color: color,
          fontWeight: fontWeight,
          padding: padding,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
