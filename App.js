import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { SSL_OP_NO_TLSv1_2 } from "constants";

const instructions = "Ashinka shani";

export default class App extends Component {
  onPresentLearnMore = () => {
    alert("Button pressed!");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Button
          onPress={this.onPresentLearnMore}
          title="Learn More"
          color="#841584"
        />
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "stretch",
            width: 50,
            height: 50,
            backgroundColor: "powderblue"
          }}
        />
        <View
          style={{ flex: 1, width: 50, height: 50, backgroundColor: "skyblue" }}
        />
        <View
          style={{
            flex: 2,
            width: 50,
            height: 50,
            backgroundColor: "steelblue"
          }}
        />
      </View>
    );
  }
}

const a = "rhshd";

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  button: {
    marginLeft: 150,
    marginTop: 150
  }
});
