import React, { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";
import {
  DisplayActivityInfoPageContainer,
  ActivityPageBackground,
  ActivityTitle,
  Spacer,
} from "./DisplayActivityInfo.styles";
import BackArrow from "../../../components/BackArrow.component";
import Activities from "./Activities/Activities.screen";
import Impact from "./Impact/Impact.screen";
import MoreInfo from "./MoreInfo/MoreInfo.screen";

function DisplayActivityInfo({ route }) {
  const { pathItem, navigation } = route.params;
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "activities", title: "Activities" },
    { key: "impact", title: "Impact" },
    { key: "learn_more", title: "Learn More" },
  ]);
  return (
    <DisplayActivityInfoPageContainer>
      <ActivityPageBackground source={pathItem.icon}>
        <Spacer>
          <BackArrow color="black" navigation={navigation} />
        </Spacer>
        <ActivityTitle>{pathItem.name}</ActivityTitle>
      </ActivityPageBackground>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({ activities: Activities, impact: Impact, learn_more: MoreInfo })}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </DisplayActivityInfoPageContainer>
  );
}

export default DisplayActivityInfo;
