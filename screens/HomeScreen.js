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

class HomeScreen extends Component {
  state = {};
  static navigationOptions = {
    title: "Fashion World",
    headerStyle: {
      backgroundColor: "#FFFFF"
    },
    headerTintColor: "#00000",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  navigateToNews = () => {
    this.props.navigation.navigate("News");
  };
  navigateToShopping = () => {
    this.props.navigation.navigate("Shopping");
  };
  navigateToEvent = () => {
    this.props.navigation.navigate("Events");
  };
  navigateToPromotion = () => {
    this.props.navigation.navigate("Promotion");
  };

  render() {
    return (
      <ImageBackground
        source={require("../assest/img2.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <View style={styles.itemx}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.navigateToNews}>
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
                source={require("../assest/Rectangle7.png")}
              >
                <Text style={styles.sw}>News</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.navigateToShopping}
          >
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
                source={require("../assest/Rectangle5.png")}
              >
                <Text style={styles.sw}>Shopping</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.itemy}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.navigateToEvent}>
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
                source={require("../assest/Rectangle4.png")}
              >
                <Text style={styles.sw}>Events</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.navigateToPromotion}
          >
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
                source={require("../assest/Rectangle6.png")}
              >
                <Text style={styles.sw}>Promotion</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
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
  },
  sw: {
    color: "white",
    position: "absolute",
    fontWeight: "bold",
    bottom: 19,
    fontSize: 18
  }
});

export default HomeScreen;
