import React, { Component } from "react";
import { View, Text } from "react-native";

class EventScreen extends Component {
  state = {};
  static navigationOptions = {
    title: "Events",
    headerStyle: {
      backgroundColor: "#FF8C00"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Events Screen</Text>
      </View>
    );
  }
}

export default EventScreen;
