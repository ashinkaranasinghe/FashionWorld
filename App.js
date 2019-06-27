import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  ScrollView,
  ImageBackground
} from "react-native";

export default class App extends Component {
  /* state = {
    posts: []
  };
 */
  onPresentLearnMore = () => {
    alert("Button pressed!");
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }

  render() {
    /*let postsList = this.state.posts.map(p => {
       return (
        <View style={{ paddingTop: 10 }}>
          <Text>{p.title}</Text>
          <Text>{p.body}</Text>
        </View>
      );
    });
 */
    /*  return (
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        {postsList}
      </ScrollView>
    ); */
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={"/react-native/assest.img1.jpg"}
          style={{ width: "100%", height: "100%" }}
        >
          <Text>Inside</Text>
          <View style={{ flex: 1, backgroundColor: "powderblue" }} />
          <View style={{ flex: 2, backgroundColor: "skyblue" }} />
          <View style={{ flex: 3, backgroundColor: "steelblue" }} />
        </ImageBackground>
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
