import React, { useContext } from "react";
import axios from "axios";
import {
  ActivityScreenContainer,
  UpperBar,
  TitleText,
  TextContainer,
  SubText,
  ActivityImage,
  ImageContainer,
  StatsContainer,
  Stat,
  OptionsContainer,
  Option,
  OptionText,
  AntOptionIcon,
  IonOptionIcon,
  EntypoOptionIcon,
  InfoContainer,
  SectionTitle,
  SectionText,
  ListContainer,
  ListItem,
  SecondSectionTitle,
  ListItemsContainer,
  RecommendedTasksContainer,
  OptionIconContainer,
} from "./ActivityScreen.styled";
import BackArrow from "../../components/BackArrow.component";
import Tasks from "../../components/Tasks/Tasks";
import { AuthenticationContext } from "../../infrastructure/Authentication/AuthenticationContext";

function ActivityScreen({ navigation, route }) {
  const { item, imageURL } = route.params;
  const { user } = useContext(AuthenticationContext);
  const completeTask = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/user/completeTask/${user}/${item.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const saveTask = async () => {
    try {
      const res = await axios.patch(`http://localhost:5000/user/saveTask/${user}/${item.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ActivityScreenContainer>
      <UpperBar>
        <BackArrow navigation={navigation} />
      </UpperBar>
      <TextContainer>
        <TitleText>{item.title}</TitleText>
        <SubText>{item.type}</SubText>
      </TextContainer>
      <ImageContainer>
        <ActivityImage source={{ uri: imageURL || null }} />
      </ImageContainer>
      <StatsContainer>
        <Stat>+50xp</Stat>
        <Stat>-{item.wasteRemoved}kg</Stat>
        <Stat>-{item.waterSaved}L</Stat>
      </StatsContainer>
      <OptionsContainer>
        <Option onPress={completeTask}>
          <OptionIconContainer>
            <AntOptionIcon name="check" />
          </OptionIconContainer>
          <OptionText>Complete!</OptionText>
        </Option>
        <Option onPress={saveTask}>
          <OptionIconContainer>
            <IonOptionIcon name="save" />
          </OptionIconContainer>
          <OptionText>Save</OptionText>
        </Option>
        <Option>
          <OptionIconContainer>
            <EntypoOptionIcon name="share" />
          </OptionIconContainer>

          <OptionText>Share</OptionText>
        </Option>
      </OptionsContainer>
      <InfoContainer>
        <SectionTitle>Description</SectionTitle>
        <SectionText>{item.description}</SectionText>
        <SecondSectionTitle>Statistics</SecondSectionTitle>
        <ListItemsContainer>
          <ListContainer>
            {item?.statistics?.map((index) => (
              <ListItem key={index} style={{ flexShrink: 1 }}>
                {index}
              </ListItem>
            ))}
          </ListContainer>
        </ListItemsContainer>
      </InfoContainer>
      <RecommendedTasksContainer>
        <Tasks navigation={navigation} />
      </RecommendedTasksContainer>
    </ActivityScreenContainer>
  );
}

export default ActivityScreen;
