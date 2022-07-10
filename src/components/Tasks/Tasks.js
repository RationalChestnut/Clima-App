import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styled from "styled-components/native";

import TaskCard from "./TaskCard";

const TitleRowContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const BrowseAllButton = styled(TouchableOpacity)`
  margin-left: ${(props) => props.theme.sizes.md}px;
`;

const BrowseAllButtonText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.muteGreen};
`;

const TaskListContainer = styled(View)`
  flex-direction: row;
`;

const TasksList = styled(FlatList)`
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

const CardSeparator = styled(View)`
  margin-left: ${(props) => props.theme.sizes.sm}px;
  margin-right: ${(props) => props.theme.sizes.sm}px;
`;

function Tasks({ category = {} }) {
  const {
    name = "Recommended",
    tasks = [
      {
        id: 1,
        title: "Turn off the lights",
        exp: 50,
        image:
          "https://yourteenmag.com/wp-content/uploads/2018/07/Depositphotos_9053892_l-2015.jpg",
      },
      {
        id: 2,
        title: "Walk for a day",
        exp: 150,
        image: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/walking.jpg",
      },
      {
        id: 3,
        title: "Turn off the lights",
        exp: 50,
        image:
          "https://yourteenmag.com/wp-content/uploads/2018/07/Depositphotos_9053892_l-2015.jpg",
      },
      {
        id: 4,
        title: "Walk for a day",
        exp: 150,
        image: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/walking.jpg",
      },
    ],
  } = category;

  const renderItem = ({ item }) => <TaskCard task={{ ...item }} />;

  return (
    <>
      <TitleRowContainer>
        <Title>{name} Tasks</Title>
        <BrowseAllButton onPress={() => {}}>
          <BrowseAllButtonText onPress={() => {}}>Browse all {"->"}</BrowseAllButtonText>
        </BrowseAllButton>
      </TitleRowContainer>
      <TaskListContainer>
        <TasksList
          data={tasks}
          horizontal
          renderItem={renderItem}
          ItemSeparatorComponent={CardSeparator}
          keyExtractor={(item) => item.id}
        />
      </TaskListContainer>
    </>
  );
}

export default Tasks;
