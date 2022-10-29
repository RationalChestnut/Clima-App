import React, { useState, useContext, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { HomePageContainer, PaddingAdder } from "./Home.styled";
import Habit from "./HabitComponent/Habit.component";
import SavedTasksPage from "./SavedTasksComponent/SavedTasks.page";
import { AuthenticationContext } from "../../infrastructure/Authentication/AuthenticationContext";
import Loading from "../../components/Loading/Loading";

function Home({ navigation }) {
  const [userData, setUserData] = useState(null);
  const theme = useContext(ThemeContext);
  const { user } = useContext(AuthenticationContext);
  const [loading, setLoading] = useState(true);
  const getUserData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://clima-backend.herokuapp.com/user/getUser/${user}`);
      setUserData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getUserData();
    }, [])
  );

  return (
    <HomePageContainer>
      {!loading ? (
        <PaddingAdder>
          <Habit navigation={navigation} userData={userData} />
          <SavedTasksPage navigation={navigation} userData={userData} />
        </PaddingAdder>
      ) : (
        <Loading color={theme.colors.lightGreen} />
      )}
    </HomePageContainer>
  );
}

export default Home;
