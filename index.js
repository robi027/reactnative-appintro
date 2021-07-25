/**
 * @format
 */

import { AppRegistry } from "react-native";
// import App from "./App";
import React from "react";
import HomeScreen from "./src/screen/HomeScreen";
import { name as appName } from "./app.json";

const Root = () => {
  return <HomeScreen />;
};

AppRegistry.registerComponent(appName, () => Root);
