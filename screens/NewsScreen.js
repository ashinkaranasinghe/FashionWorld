import React, { Component } from "react";
import { View, Image } from "react-native";
import {
  Container,
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
class NewsScreen extends Component {
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
      "https://newsapi.org/v2/everything?q=fashion&from=2019-07-05&sortBy=publishedAt&apiKey=44ab47db8d854d81a43fbbebee19d016&pageSize=3"
    )
      .then(response => response.json())
      .then(responseinjson => {
        return responseinjson.articles;
      })
      .catch(error => {
        alert(error);
      });
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
        <Card style={{ flex: 0, marginLeft: 10, marginRight: 10 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{newsitem.title}</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: newsitem.urlToImage }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
              <Text>{newsitem.description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      );
    });
    return <View>{newslist}</View>;
  }
}

export default NewsScreen;
