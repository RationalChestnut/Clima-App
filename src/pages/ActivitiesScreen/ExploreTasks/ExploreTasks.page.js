import React from "react";
import solarPanels from "../../../../assets/images/solarPanels.jpeg";

import {
  ExploreTasksPage,
  ExploreTasksPageContainer,
  Title,
  Description,
  TextContainer,
  ActionTitle,
  LargeBannerImage,
  Gradient,
  MainCardTextContainer,
  MainCardTitle,
  MainCardTitleDescription,
  Slider,
  Touchable,
} from "./ExploreTasks.styles";

import SliderComponent from "./CategorySlider/SliderComponent.component";
import { categories } from "../../../data/categories.data";

function ExploreTasks({ navigation }) {
  return (
    <ExploreTasksPage>
      <ExploreTasksPageContainer>
        <TextContainer>
          <Title>Actions</Title>
          <Description>
            Complete actions to help the environment while earning XP for your pet!
          </Description>
        </TextContainer>
        <ActionTitle>Browse all actions</ActionTitle>
        <Touchable
          onPress={() => navigation.navigate("DisplayListOfActivities", { type: "All Actions" })}
        >
          <LargeBannerImage source={solarPanels}>
            <Gradient>
              <MainCardTextContainer>
                <MainCardTitle>All Actions</MainCardTitle>
                <MainCardTitleDescription>
                  Start small to make a big impact!
                </MainCardTitleDescription>
              </MainCardTextContainer>
            </Gradient>
          </LargeBannerImage>
        </Touchable>
        <ActionTitle>Browse by category</ActionTitle>
        <Slider
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SliderComponent image={item.image} title={item.title} navigation={navigation} />
          )}
        />
      </ExploreTasksPageContainer>
    </ExploreTasksPage>
  );
}

export default ExploreTasks;
