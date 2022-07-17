import React from "react";
import {
  ActivityScreenContainer,
  UpperBar,
  UpperText,
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
} from "./ActivityScreen.styled";
import lightswitch from "../../../assets/images/lightswitch.jpeg";
import BackArrow from "../../components/BackArrow.component";
import Tasks from "../../components/Tasks/Tasks";

function ActivityScreen({
  // eslint-disable-next-line react/prop-types
  statisticsList = [
    "On average you save 0.48kg of CO2 per hour the lights are off!",
    "On average you save 0.48kg of CO2 per hour the lights are off!",
    "On average you save 0.48kg of CO2 per hour the lights are off!",
  ],
}) {
  return (
    <ActivityScreenContainer>
      <UpperBar>
        <BackArrow />
        <UpperText>Action</UpperText>
      </UpperBar>
      <TextContainer>
        <TitleText>Turn off the lights</TitleText>
        <SubText>At home Activity</SubText>
      </TextContainer>
      <ImageContainer>
        <ActivityImage source={lightswitch} />
      </ImageContainer>
      <StatsContainer>
        <Stat>-20kg</Stat>
        <Stat>+50xp</Stat>
      </StatsContainer>
      <OptionsContainer>
        <Option>
          <AntOptionIcon name="check" />
          <OptionText>Complete!</OptionText>
        </Option>
        <Option>
          <IonOptionIcon name="save" />
          <OptionText>Save</OptionText>
        </Option>
        <Option>
          <EntypoOptionIcon name="share" />
          <OptionText>Share</OptionText>
        </Option>
      </OptionsContainer>
      <InfoContainer>
        <SectionTitle>Description</SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet est quam. Mauris
          molestie eu lectus in efficitur. Vivamus mollis id sapien et efficitur. In hac habitasse
          platea dictumst. Mauris at ipsum pharetra, consequat nibh ut, aliquet leo. Nunc massa
          odio, consequat vitae metus quis, condimentum accumsan magna.
        </SectionText>
        <SecondSectionTitle>Statistics</SecondSectionTitle>
        <ListItemsContainer>
          <ListContainer>
            {statisticsList.map((index) => (
              <ListItem key={index} style={{ flexShrink: 1 }}>
                {index}
              </ListItem>
            ))}
          </ListContainer>
        </ListItemsContainer>
      </InfoContainer>
      <RecommendedTasksContainer>
        <Tasks />
      </RecommendedTasksContainer>
    </ActivityScreenContainer>
  );
}

export default ActivityScreen;
