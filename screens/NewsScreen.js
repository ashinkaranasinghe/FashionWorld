import React, { Component } from "react";
import { View, Text } from "react-native";

class NewsScreen extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>News Screen</Text>
      </View>
    );
  }
}

export default NewsScreen;
