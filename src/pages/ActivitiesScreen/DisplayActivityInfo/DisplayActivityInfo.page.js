import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import {
  DisplayActivityInfoPageContainer,
  ActivityPageBackground,
  ActivityTitle,
  Spacer,
  Description,
} from "./DisplayActivityInfo.styles";
import BackArrow from "../../../components/BackArrow.component";
import Activities from "./Activities/Activities.screen";
import Learn from "../../Learn/Learn.page";
import CustomTabBar from "./TabBar/TabBar.component";

function DisplayActivityInfo({ route }) {
  const { pathItem, navigation } = route.params;
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "activities", title: "Activities" },
    { key: "learn_more", title: "Learn More" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      activeColor="black"
      inactiveColor="black"
      style={{ backgroundColor: "white" }}
      indicatorStyle={{ backgroundColor: "#0FA958", height: 4 }}
    />
  );
  return (
    <DisplayActivityInfoPageContainer>
      <ActivityPageBackground source={pathItem.icon}>
        <Spacer>
          <BackArrow color="black" navigation={navigation} />
          <ActivityTitle>{pathItem.name}</ActivityTitle>
          <Description>Help save the environment in the comfort of your home!</Description>
        </Spacer>
      </ActivityPageBackground>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({ activities: Activities, learn_more: Learn })}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </DisplayActivityInfoPageContainer>
  );
}

export default DisplayActivityInfo;
