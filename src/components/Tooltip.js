// @flow
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import Button from "./Button";

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: () => void,
  handlePrev: () => void,
  handleStop: () => void,
  labels: Object,
  currentStep: any,
  total: number,
};

type ItemIndicatorProps = {
  index: number,
  active: number,
};

const ItemIndicator = (props: ItemIndicatorProps) => {
  return (
    <View
      key={props.index}
      style={{
        height: 6,
        width: 6,
        borderRadius: 6 / 2,
        backgroundColor:
          props.active >= props.index + 1 ? colors.PRIMARY : colors.NONACTIVE,
        marginHorizontal: 4,
      }}
    />
  );
};

const Tooltip = (props: Props): React.Node => {
  return (
    <View style={{ paddingBottom: 8 }}>
      <View style={{ flex: 1 }}>{props.currentStep.target.props.content}</View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {Array(props.total)
            .fill(props.total)
            .map((item, index) => (
              <ItemIndicator
                key={index}
                index={index}
                active={props.currentStep.order}
              />
            ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 150,
            justifyContent: "flex-end",
          }}
        >
          {!props.isLastStep ? (
            <Button
              onPress={props.handleStop}
              title={props.labels.skip || "Skip"}
              color={colors.NONACTIVE}
            />
          ) : null}
          {!props.isFirstStep ? (
            <Button
              onPress={props.handlePrev}
              title={props.labels.previous || "Previous"}
              color={colors.NONACTIVE}
            />
          ) : null}
          {!props.isLastStep ? (
            <Button
              onPress={props.handleNext}
              title={props.labels.next || "Next"}
              color={colors.PRIMARY}
              fontWeight={"bold"}
            />
          ) : (
            <Button
              onPress={props.handleStop}
              title={props.labels.finish || "Finish"}
              color={colors.PRIMARY}
              fontWeight={"bold"}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Tooltip;
