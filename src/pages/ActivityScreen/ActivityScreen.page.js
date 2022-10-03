import React, { useContext } from "react";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";
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
  OptionIconContainer,
  LinkToPurchaseContainer,
  LinkToPurchase,
  LinkToPurchaseTitle,
} from "./ActivityScreen.styled";
import BackArrow from "../../components/BackArrow.component";
import { AuthenticationContext } from "../../infrastructure/Authentication/AuthenticationContext";

function ActivityScreen({ navigation, route }) {
  const { item, destination } = route.params;
  const { user } = useContext(AuthenticationContext);
  const completeTask = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/user/completeTask/${user}`, {
        task: item,
      });
      const {
        userExp,
        exp,
        carbonRemoved,
        wasteRemoved,
        waterSaved,
        userCarbonReduced,
        userWasteRemoved,
        userWaterSaved,
      } = res.data;
      navigation.navigate("Completion", {
        userExp,
        exp,
        carbonRemoved,
        wasteRemoved,
        waterSaved,
        userCarbonReduced,
        userWasteRemoved,
        userWaterSaved,
      });
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
        <BackArrow navigation={navigation} destination={destination} />
      </UpperBar>
      <TextContainer>
        <TitleText>{item.title}</TitleText>
        <SubText>{item.type}</SubText>
      </TextContainer>
      <ImageContainer onPress={() => WebBrowser.openBrowserAsync(item.linkToPurchase)}>
        <ActivityImage source={item.image} />
      </ImageContainer>
      <StatsContainer>
        <Stat>+{item.exp}exp</Stat>
        <Stat>-{item.carbonRemoved}kg CO2</Stat>
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
        <LinkToPurchaseContainer onPress={() => WebBrowser.openBrowserAsync(item.linkToPurchase)}>
          <LinkToPurchaseTitle>Purchase:</LinkToPurchaseTitle>
          <LinkToPurchase>{item.linkToPurchase}</LinkToPurchase>
        </LinkToPurchaseContainer>
      </InfoContainer>
    </ActivityScreenContainer>
  );
}

export default ActivityScreen;
