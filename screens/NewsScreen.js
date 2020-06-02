import React, { Component, StyleSheet } from "react";
import { Container, Header, Content, Tab, Tabs, tabStyle } from "native-base";
import News from "./tabone";
import Favourite from "./tabTwo";
import { whileStatement } from "@babel/types";
import { create } from "istanbul-reports";
class NewsScreen extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="News" tabStyle={{ backgroundColor: "# 08080" }}>
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
