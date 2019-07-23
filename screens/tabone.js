import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Container,
  Spinner,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
class tabone extends Component {
  state = {
    news: []
  };
  async componentDidMount() {
    let newsFromAPI = await this.getNews();

    this.setState({ news: newsFromAPI });
  }

  //me function eken penwa neda return wenne news tibba array eka ow
  getNews() {
    return fetch(
      "https://newsapi.org/v2/everything?q=fashions&from=2019-0-.05&sortBy=publishedAt&apiKey=44ab47db8d854d81a43fbbebee19d016&pageSize=20"
    )
      .then(response => response.json())
      .then(responseinjson => {
        return responseinjson.articles;
      })
      .catch(error => {
        alert(error);
      });
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("favirote_key");
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  storeData = async () => {
    try {
      await AsyncStorage.setItem("favirote_key", "stored value");
    } catch (e) {
      // saving error
    }
  };
  onFaviroteclick() {
    alert("Clicked");
  }

  static navigationOptions = {
    title: "News",
    headerStyle: {
      backgroundColor: "#CC0000"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    //aniwaren jsx ekk return krnn oni
    let newslist = this.state.news.map(newsitem => {
      return (
        <Card style={{ flex: 0, marginLeft: 12, marginRight: 12 }}>
          <CardItem>
            <Left>
              <Body>
                <Text style={styles.title}>{newsitem.title}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: newsitem.urlToImage }}
                style={{ height: 200, width: 300 }}
              />
              <Text style={{ paddingTop: 5 }}>{newsitem.description}</Text>

              <Text note>{newsitem.author}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button
                onPress={this.onFaviroteclick}
                transparent
                textStyle={{ color: "#87838B" }}
              >
                <Icon name="heart" style={{ color: "#FFFFFF" }} />
                <Text>1 like</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      );
    });
    return <ScrollView>{newslist}</ScrollView>;
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,

    textAlign: "auto",

    fontWeight: "bold"
  }
});

export default tabone;
