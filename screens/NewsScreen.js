import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import News from "./tabone";
import Favirote from "./tabTwo";
import { whileStatement } from "@babel/types";
class NewsScreen extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="News">
            <News />
          </Tab>
          <Tab heading="Favirote">
            <Favirote />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default NewsScreen;
