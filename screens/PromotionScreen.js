import React, { Component } from "react";
import { View, Text } from "react-native";

class PromotionScreen extends Component {
  state = {};
  static navigationOptions = {
    title: "Promotion",
    headerStyle: {
      backgroundColor: "#008080"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Promotion Screen</Text>
      </View>
    );
  }
}

export default PromotionScreen;
