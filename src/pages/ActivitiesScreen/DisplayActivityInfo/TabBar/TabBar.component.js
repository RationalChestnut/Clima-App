import React from "react";
import { TabBar, Tab, TabTitle } from "./TabBar.styles";

function CustomTabBar({ index, setIndex }) {
  return (
    <TabBar>
      <Tab onPress={() => setIndex(0)}>
        <TabTitle>Actions</TabTitle>
      </Tab>
      <Tab onPress={() => setIndex(1)}>
        <TabTitle>Resources</TabTitle>
      </Tab>
    </TabBar>
  );
}

export default CustomTabBar;
