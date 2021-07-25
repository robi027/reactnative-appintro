import * as React from "react";
import { View } from "react-native";

type Props = {
  height?: number,
  width?: number,
};

const Spacer = ({ height = 0, width = 0 }: Props): React.Node => {
  return <View style={{ width: width, height: height }} />;
};

export default Spacer;
