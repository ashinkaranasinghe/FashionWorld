import React, { Component } from "react";
import { View, Text } from "react-native";

class NewsScreen extends Component {
  state = {};
  static navigationOptions = {
    title: "News",
    headerStyle: {
      backgroundColor: "#CC0000"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>News Screen</Text>
      </View>
    );
  }
}

export default NewsScreen;
