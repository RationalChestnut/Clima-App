import React from "react";
import {
  ExploreTasksPage,
  ExploreTasksPageContainer,
  ActionsSearchBar,
  Title,
  Description,
  TextContainer,
  ActionTitle,
  LargeBannerImage,
  Gradient,
  MainCardTextContainer,
  MainCardTitle,
  MainCardTitleDescription,
  Banner,
  BannerText,
  Slider,
  BannerContainer,
} from "./ExploreTasks.styles";

import SliderComponent from "./CategorySlider/SliderComponent.component";
import background from "../../../../assets/images/background.jpeg";

function ExploreTasks() {
  const data = [
    {
      id: 1,
      image: background,
      title: "Save the whales",
    },
    {
      id: 2,
      image: background,
      title: "Save the whales",
    },
  ];

  return (
    <ExploreTasksPage>
      <ExploreTasksPageContainer>
        <ActionsSearchBar />
        <TextContainer>
          <Title>Actions</Title>
          <Description>
            Complete actions to help the environment while earning XP for your pet!
          </Description>
        </TextContainer>
        <ActionTitle>Browse all actions</ActionTitle>
        <LargeBannerImage source={background}>
          <Gradient>
            <MainCardTextContainer>
              <MainCardTitle>All Actions</MainCardTitle>
              <MainCardTitleDescription>Start small to make a big impact!</MainCardTitleDescription>
            </MainCardTextContainer>
            <BannerContainer>
              <Banner>
                <BannerText>165 actions</BannerText>
              </Banner>
              <Banner>
                <BannerText>+200XP</BannerText>
              </Banner>
            </BannerContainer>
          </Gradient>
        </LargeBannerImage>
        <ActionTitle>Browse by category (9)</ActionTitle>
        <Slider
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SliderComponent image={item.image} title={item.title} />}
        />
      </ExploreTasksPageContainer>
    </ExploreTasksPage>
  );
}

export default ExploreTasks;
