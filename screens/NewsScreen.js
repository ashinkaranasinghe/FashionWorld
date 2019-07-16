import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import News from "./tabone";
import Favirote from "./tabTwo";
class NewsScreen extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default NewsScreen;
