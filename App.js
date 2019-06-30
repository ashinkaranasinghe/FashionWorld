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

class App extends Component {
  static navigationOptions = {
    title: "Delivery Method ",
    headerTintColor: "white",
    headerRight: (
      <Image
        style={{
          width: 40,
          height: 40,
          marginTop: 2,
          marginRight: 8
        }}
        source={require("./assest/logoocopy.jpg")}
      />
    ),
    headerStyle: {
      backgroundColor: "#ff9800"
    }
  };
  render() {
    return (
      <ImageBackground
        source={require("./assest/img2.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <View style={styles.itemx}>
          <View style={styles.container}>
            <ImageBackground
              style={{
                width: 140,
                height: 140,
                marginTop: 0,
                justifyContent: "center",
                alignItems: "center"
              }}
              source={require("./assest/Rectangle7.png")}
            />
          </View>
          <View style={styles.container}>
            <ImageBackground
              style={{
                width: 140,
                height: 140,
                marginTop: 0,
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}
              source={require("./assest/Rectangle5.png")}
            />
          </View>
        </View>
        <View style={styles.itemy}>
          <View style={styles.container}>
            <ImageBackground
              style={{
                width: 140,
                height: 140,
                marginTop: 0,
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}
              source={require("./assest/Rectangle4.png")}
            />
          </View>
          <View style={styles.container}>
            <ImageBackground
              style={{
                width: 140,
                height: 140,
                marginTop: 0,
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}
              source={require("./assest/Rectangle6.png")}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },

  button: {
    marginLeft: 90,
    marginTop: 100,
    alignItems: "center",
    width: 140,
    height: 140
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  itemx: {
    width: "75%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "20%"
  },
  itemy: {
    width: "75%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "45%"
  }
});

export default App;
