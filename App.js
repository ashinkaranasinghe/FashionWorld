/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

const instructions = "tharindu dilshan";

export default class App extends Component {
  onButtonPress = () => {
    alert("Button pressed!");
  };
  render() {
    return (
      <View>
        <Button
          style={styles.c}
          onPress={this.onButtonPress}
          title="Learn More"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  c: {},

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
    marginLeft: 10,
    marginTop: 10,
    width: 100
  }
});
