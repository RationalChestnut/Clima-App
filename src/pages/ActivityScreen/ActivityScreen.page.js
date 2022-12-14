import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";
import Toast from "react-native-toast-message";
import { Share } from "react-native";
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
  ValueSlider,
  SliderDescription,
  SliderDescriptionLeft,
  SliderDescriptionRight,
  SliderValue,
  UnsaveIcon,
} from "./ActivityScreen.styled";
import BackArrow from "../../components/BackArrow.component";
import { AuthenticationContext } from "../../infrastructure/Authentication/AuthenticationContext";
import { tasks } from "../../data/tasks.data";

function ActivityScreen({ navigation, route, isIntroScreen = false }) {
  const { item, destination, pathNumber, sectionNumber, pathItem } = !isIntroScreen
    ? route.params
    : {
        item: tasks[0],
        destination: "",
        pathNumber: 0,
        sectionNumber: 0,
        pathItem: 0,
      };
  const { user } = useContext(AuthenticationContext);
  const [sliderValue, setSliderValue] = useState(0);
  const [isTaskSaved, setIsTaskSaved] = useState(false);
  const completeTask = async () => {
    try {
      const res = await axios.post(
        `https://clima-backend.herokuapp.com/user/completeTask/${user}`,
        {
          task: item,
          sliderValue: sliderValue === 0 ? item.minValue : sliderValue,
          day: new Date().getDate(),
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear(),
        }
      );
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
      await axios.patch(`https://clima-backend.herokuapp.com/user/saveTask/${user}/${item.id}`);
      Toast.show({
        type: "success",
        text1: "Howdy👋 Eco-Activist",
        text2: "Your task saved sucessfully!",
        position: "top",
        onPress: () => Toast.hide(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getIsTaskSaved = async () => {
    try {
      const res = await axios.get(`https://clima-backend.herokuapp.com/user/getUser/${user}`);
      const { savedTasks } = res.data;
      setIsTaskSaved(savedTasks.includes(item.id));
    } catch (err) {
      console.log(err);
    }
  };

  const unsaveTask = async () => {
    try {
      const res = await axios.patch(
        `https://clima-backend.herokuapp.com/user/unsaveTask/${user}/${item.id}`
      );
      Toast.show({
        type: "success",
        text1: "Howdy👋 Eco-Activist",
        text2: "We unsaved your task!",
        position: "top",
        onPress: () => Toast.hide(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const shareTask = async () => {
    try {
      const result = await Share.share({
        message:
          "I found a cool new app called Clima! It helps you save the environment. Download here: https://clima2022.netlify.app/",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getIsTaskSaved();
  }, []);
  return (
    <ActivityScreenContainer>
      <UpperBar>
        {!isIntroScreen && (
          <BackArrow
            navigation={navigation}
            destination={destination}
            pathNumber={pathNumber}
            sectionNumber={sectionNumber}
            pathItem={pathItem}
          />
        )}
      </UpperBar>
      <TextContainer>
        <TitleText>{item.title}</TitleText>
        <SubText>{item.type}</SubText>
      </TextContainer>
      <ImageContainer
        onPress={() =>
          !isIntroScreen && item.linkToPurchase !== ""
            ? WebBrowser.openBrowserAsync(item.linkToPurchase)
            : null
        }
      >
        <ActivityImage source={item.image} />
      </ImageContainer>
      <StatsContainer>
        <Stat>
          +{(item.exp * (sliderValue !== 0 ? sliderValue : sliderValue + 1)).toFixed(1)}exp
        </Stat>
        <Stat>
          -{(item.carbonRemoved * (sliderValue !== 0 ? sliderValue : sliderValue + 1)).toFixed(1)}kg
          CO2
        </Stat>
        <Stat>
          -{(item.wasteRemoved * (sliderValue !== 0 ? sliderValue : sliderValue + 1)).toFixed(1)}kg
        </Stat>
        <Stat>
          -{(item.waterSaved * (sliderValue !== 0 ? sliderValue : sliderValue + 1)).toFixed(1)}L
        </Stat>
      </StatsContainer>
      <SliderValue>
        {sliderValue === 0 ? sliderValue + item.minValue : sliderValue} {item.valueMessage}
      </SliderValue>
      <ValueSlider
        onValueChange={setSliderValue}
        minimumValue={item.minValue || 0}
        maximumValue={item.maxValue}
        step={item.isWhole ? 1 : 0.5}
        value={item.minValue}
      />
      <SliderDescription>
        <SliderDescriptionLeft>{item.minValue}</SliderDescriptionLeft>
        <SliderDescriptionRight>{item.maxValue}</SliderDescriptionRight>
      </SliderDescription>
      <OptionsContainer>
        <Option onPress={!isIntroScreen ? completeTask : null}>
          <OptionIconContainer>
            <AntOptionIcon name="check" />
          </OptionIconContainer>
          <OptionText>Complete!</OptionText>
        </Option>
        {!isTaskSaved ? (
          <Option onPress={!isIntroScreen ? saveTask : null}>
            <OptionIconContainer>
              <IonOptionIcon name="save" />
            </OptionIconContainer>
            <OptionText>Save</OptionText>
          </Option>
        ) : (
          <Option onPress={!isIntroScreen ? unsaveTask : null}>
            <OptionIconContainer>
              <UnsaveIcon name="content-save-off-outline" />
            </OptionIconContainer>
            <OptionText>Unsave</OptionText>
          </Option>
        )}

        <Option onPress={!isIntroScreen ? shareTask : null}>
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
    </ActivityScreenContainer>
  );
}

export default ActivityScreen;
