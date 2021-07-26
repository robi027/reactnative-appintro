# Jenius Handholding

## About The Component
Handholding is an app tour component to give hightlight in the component and explain the feature.
## Usage
Make sure dependencies has imported. 
```import lib
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";
import Tooltip from "../components/Tooltip";
```
Declare what component would you be highlight such as View, TouchableOpacity, etc
```hoc
const CopilotView = walkthroughable(View);
```
Then wrap the component with CopilotStep
```code
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
        <Button title="Submit" onPress={() => {}} width={"100%"} />
    </CopilotView>   
</CopilotStep>
```
Use copilot() as High Order Component for the screen
```language
const HomeScreen = (props: Props) => {
    /* ... */
}

export default (copilot({
  tooltipComponent: (props) => <Tooltip {...props} total={1} />,
  stepNumberComponent: (props) => <View />,
  androidStatusBarVisible: true,
})(HomeScreen): React.Node);
```
Listener to listen stop state
```listen stop
this.props.copilotEvents.on("stop", () => {
    // Copilot tutorial finished!
});
```
Don't forget to disable event handlers the screen in unmount cycle
```
this.props.copilotEvents.off("stop");
```

## Props
| Prop    |   Type    | Required | Default |                                                   Description |
| :------ | :-------: | :------: | :-----: | ------------------------------------------------------------: |
| name    |  string   |    v     |    -    |                                               *must be unique |
| order   |  number   |    v     |    -    | *A positive number must be unique and increment from previous |
| content | ReactNode |    v     |    -    |                 what would be showing in popup as description |
| total   |  number   |    v     |    -    |                                             total of the step |
| start() |   void    |    -     |    -    |                     the props function for start the tutorial |
| stop()  |   void    |    -     |    -    |                     the props function the tutorial has ended |