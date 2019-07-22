import React, { Component } from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
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

class PromotionScreen extends Component {
  state = {
    Promotion: []
  };
  async componentDidMount() {
    let newsFromAPI = await this.getNews();

    this.setState({ news: newsFromAPI });
  }
  getNews() {
    "https://newsapi.org/v2/everything?q=fashion&from=2019-07-05&sortBy=publishedAt&apiKey=44ab47db8d854d81a43fbbebee19d016&pageSize=20"
      .then(response => response.json())
      .then(responsejson => {
        return responsejson.articles;
      })
      .catch(error => {
        alert(error);
      });
  }
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
    let promotionitem = this.state.news.map(promotionitem => {
      return (
        <Card style={{ flex: 0, marginLeft: 12, marginRight: 12 }}>
          <CardItem>
            <Left>
              <Body>
                <Text style={styles.title}>{promotionitem.title}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: promotionitem.urlToImage }}
                style={{ height: 200, width: 300 }}
              />
              <Text style={{ paddingTop: 5 }}>{promotionitem.description}</Text>

              <Text note>{promotionitem.author}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon name="heart" style={{ color: "#FFFFFF" }} />
                <Text>1 like</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      );
    });
    return <ScrollView>{promotionitem}</ScrollView>;
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,

    textAlign: "auto",

    fontWeight: "bold"
  }
});

export default PromotionScreen;
