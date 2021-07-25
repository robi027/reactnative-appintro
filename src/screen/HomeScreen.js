//@flow
import React, { Component, useEffect } from "react";
import {
  Button,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { copilot, CopilotStep, walkthroughable } from "react-native-copilot";
import Tooltip from "../components/Tooltip";
const CopilotView = walkthroughable(View);
const CopilotTouchableOpacity = walkthroughable(TouchableOpacity);
const HomeScreen = (props) => {
  useEffect(() => {
    props.start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <CopilotStep
          order={1}
          name="hello"
          content={
            <View>
              <Text>Robi</Text>
            </View>
          }
        >
          <CopilotView>
            <View>
              <Button title="Submit" onPress={() => {}} />
            </View>
          </CopilotView>
        </CopilotStep>

        <View style={{ position: "absolute", right: 20, bottom: 20 }}>
          <CopilotStep
            order={2}
            name="hello 2"
            content={
              <View>
                <Text>Robi 2</Text>
              </View>
            }
          >
            <CopilotTouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>Robi</Text>
                </View>
              </TouchableOpacity>
            </CopilotTouchableOpacity>
          </CopilotStep>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default copilot({
  tooltipComponent: Tooltip,
  stepNumberComponent: (props) => <View />,
  androidStatusBarVisible: true,
})(HomeScreen);
