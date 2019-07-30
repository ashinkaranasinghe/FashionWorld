import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import News from "./tabone";
import Favourite from "./tabTwo";
import { whileStatement } from "@babel/types";
class NewsScreen extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="News" tabStyle={{ backgroundColor: "#F1948A" }}>
            <News />
          </Tab>
          <Tab heading="Favourite">
            <Favourite />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default NewsScreen;
