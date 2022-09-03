import React, { useEffect, useState } from "react";
import axios from "axios";
import aBetterFutureImage from "../../../../assets/images/a_better_future.jpg";

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
  Slider,
  Touchable,
} from "./ExploreTasks.styles";

import SliderComponent from "./CategorySlider/SliderComponent.component";

function ExploreTasks({ navigation }) {
  const [data, setData] = useState([]);

  const getAllCategories = async () => {
    try {
      const collectionResponse = await axios.get("http://localhost:5000/tasks/getCollectionInfo");
      const arrayVersion = Object.entries(collectionResponse.data);
      const dataToSet = [];
      for (let i = 0; i < arrayVersion.length; i += 1) {
        dataToSet.push(arrayVersion[i][1]);
      }
      setData(dataToSet);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

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
        <Touchable onPress={() => navigation.navigate("DisplayListOfActivities")}>
          <LargeBannerImage source={aBetterFutureImage}>
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
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <SliderComponent image={item.image} title={item.title} navigation={navigation} />
          )}
        />
      </ExploreTasksPageContainer>
    </ExploreTasksPage>
  );
}

export default ExploreTasks;
