/**
 * @format
 */

import { AppRegistry } from "react-native";
// import App from "./App";
import React from "react";
import Home from "./src/home";
import { name as appName } from "./app.json";

const Root = () => {
  return <Home />;
};

AppRegistry.registerComponent(appName, () => Root);
