import React, { Component } from "react";
import { View, Text } from "react-native";

class ShoppingScreen extends Component {
  state = {};
  static navigationOptions = {
    title: "Shopping center",
    headerStyle: {
      backgroundColor: "#4AD9DE"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Shopping Screen</Text>
      </View>
    );
  }
}

export default ShoppingScreen;
