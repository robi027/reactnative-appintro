//@flow
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { copilot, CopilotStep, walkthroughable } from "react-native-copilot";
import Button from "../components/Button";
import Tooltip from "../components/Tooltip";
import colors from "../config/colors";
import Spacer from "../components/Spacer";

const CopilotView = walkthroughable(View);
const CopilotTouchableOpacity = walkthroughable(TouchableOpacity);

const listener = (props) => {};
type Props = {
  start: () => void,
};

const HomeScreen = (props: Props) => {
  const firstCarousel = useRef();
  const [state, setState] = useState({ entries: [1, 2, 3], activeSlide: 0 });

  useEffect(() => {
    props.start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Spacer height={12} />
        <Text style={{ fontSize: 20, textAlign: "center" }}>Profile</Text>
        <Spacer height={20} />
        <CopilotStep
          order={1}
          name="first"
          content={
            <View>
              <Text style={{ fontWeight: "bold" }}>Home</Text>
              <View style={{ marginVertical: 4 }} />
              <Text style={{ color: colors.NONACTIVE }}>
                This is home page will be showing at first time after you log in
              </Text>
            </View>
          }
        >
          <CopilotView>
            <View>
              <Button title="Submit" onPress={() => {}} width={"100%"} />
            </View>
          </CopilotView>
        </CopilotStep>

        <Spacer height={20} />
        <View style={{ alignItems: "center" }}>
          <CopilotStep
            order={2}
            name={"second"}
            content={
              <View>
                <Text style={{ fontWeight: "bold" }}>Home</Text>
                <View style={{ marginVertical: 4 }} />
                <Text style={{ color: colors.NONACTIVE }}>
                  This is home page will be showing at first time after you log
                  in
                </Text>
              </View>
            }
          >
            <CopilotView>
              <View style={{ alignItems: "center" }}>
                <Text>Robi Dwi Setiawan</Text>
                <Spacer height={8} />
                <View
                  style={{
                    height: 75,
                    width: 75,
                    backgroundColor: colors.PRIMARY,
                    borderRadius: 75 / 2,
                  }}
                />
              </View>
            </CopilotView>
          </CopilotStep>
        </View>

        <View style={{ position: "absolute", right: 20, bottom: 20 }}>
          <CopilotStep
            order={3}
            name="third"
            content={
              <View>
                <Text style={{ fontWeight: "bold" }}>Floating Button</Text>
                <View style={{ marginVertical: 4 }} />
                <Text style={{ color: colors.NONACTIVE }}>
                  This is floating button will be showing at first time after
                  you log in
                </Text>
              </View>
            }
          >
            <CopilotTouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 75,
                    width: 75,
                    borderRadius: 75 / 2,
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

export default (copilot({
  tooltipComponent: (props) => <Tooltip {...props} total={3} />,
  stepNumberComponent: (props) => <View />,
  androidStatusBarVisible: true,
})(HomeScreen): React.Node);
