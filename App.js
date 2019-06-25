import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

const instructions = "Ashinka shani";

export default class App extends Component {
  onPresentLearnMore = () => {
    alert("Button pressed!");
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }}>
          <Button
            onPress={this.onPresentLearnMore}
            title="Learn More"
            color="#841584"
          />
        </View>
        <View
          style={{
            flex: 2,
            width: 100,
            height: 100,
            backgroundColor: "skyblue"
          }}
        />
        <View
          style={{
            flex: 3,
            width: 150,
            height: 150,
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
    marginTop: 150,
    width: 100,
    Text_color: "#143333"
  }
});
