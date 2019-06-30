import React, { Component } from "react";

import { Button } from "galio-framework";

import {
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  StatusBar
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import EventScreen from "./screens/EventScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import NewsScreen from "./screens/NewsScreen";
import PromotionScreen from "./screens/PromotionScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Events: EventScreen,
    Shopping: ShoppingScreen,
    News: NewsScreen,
    Promotion: PromotionScreen
  },
  {
    initialRouteName: "Home"
  }
);

const Container = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <Container />;
  }
}

export default App;
