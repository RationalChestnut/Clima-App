import React, { useState } from "react";
import { TabView, TabBar } from "react-native-tab-view";
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

function DisplayActivityInfo({ route }) {
  const { pathItem, navigation, pathNumber, sectionNumber } = route.params;
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "activities", title: "Activities" },
    { key: "learn_more", title: "Learn More" },
  ]);
  const renderScene = ({ route, jumpTo }) => {
    // eslint-disable-next-line default-case
    switch (route.key) {
      case "activities":
        return (
          <Activities
            tasksList={pathItem.tasks}
            navigation={navigation}
            jumpTo={jumpTo}
            pathNumber={pathNumber}
            sectionNumber={sectionNumber}
            pathItem={pathItem}
          />
        );
      default:
        return <Learn articlesList={pathItem.articles} navigation={navigation} jumpTo={jumpTo} />;
    }
  };

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
      <ActivityPageBackground source={pathItem.image}>
        <Spacer>
          <BackArrow color="white" navigation={navigation} />
          <ActivityTitle>{pathItem.title}</ActivityTitle>
          <Description>{pathItem.description}</Description>
        </Spacer>
      </ActivityPageBackground>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </DisplayActivityInfoPageContainer>
  );
}

export default DisplayActivityInfo;
